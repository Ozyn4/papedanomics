import {
  getServerSession,
  type NextAuthOptions,
} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import KeycloakProvider from "next-auth/providers/keycloak";
import { login } from "./services/authService";
import { jwt } from "./utils";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
    error: '/',
  },
  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.NEXTAUTH_JWT_AGE!) || 1209600,
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      // @ts-ignore
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials as InputLoginData;
          const response = await login({email, password})
          console.log(response)
          if(!response){
            throw new Error("An error has occurred during login request");
          }

          const user = response.user;
          user.access_token = response.access_token;
          // user.refreshToken = response.refreshToken;
          return {...user};
        } catch (error) {
          if (error instanceof Response) {
            return null;
          }
          throw new Error("An error has occurred during login request");
        }
      }
    }),
    KeycloakProvider({
      id: 'sso_bps',
      name: 'Single Sign On BPS',
      issuer: 'https://sso.bps.go.id/auth/realms/pegawai-bps',
      clientId: '',
      clientSecret: '',
    }),
  ],
  callbacks: {
    // @ts-ignore
    async jwt({ token, user, account, trigger, session }) { 
      if(account){
        if(account.provider === 'sso_bps'){
          try {
            // const response = await fetchClient({
            //   method: "POST",
            //   url: 
            //     `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/api/v1/auth/login-sso`,
            //   body: JSON.stringify(
            //     {
            //         token: account.access_token,
            //         email: account,
            //     }),
            //   }
            // );
            const decodedAccessToken = jwt.decode(account.access_token);
            // token.id;
            token.fullname = decodedAccessToken.name;
            token.sub = decodedAccessToken.sub;
            token.access_token = account?.access_token || '';
            token.refresh_token = account.refresh_token || '';
            token.role = decodedAccessToken.role
          } catch (e) {
              console.log(e);
          }
        } else if(account.provider == 'credentials'){
          if (user) {
            return { ...token, ...user };
          }
    
          const { exp: accessTokenExpires } = jwt.decode(token.access_token);
    
          if (!accessTokenExpires) {
            return token;
          }
    
          const currentUnixTimestamp = Math.floor(Date.now() / 1000);
          const accessTokenHasExpired = currentUnixTimestamp > accessTokenExpires;
    
          if (accessTokenHasExpired) {
            // return await refreshAccessToken(token);
            return
          }
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token.error) {
        throw new Error("Refresh token has expired");
      }
      // @ts-ignore
      session.user = token
      session.access_token = token.access_token

      return session;
    },
  },
  events: {
    
  }
};

// async function refreshAccessToken(token: JWT) {
//   try {
//     const response = await refreshToken(token.accessToken);

//     const refreshedAccessToken: { access_token: string } = await response.json();
//     const { exp } = jwt.decode(refreshedAccessToken.access_token);

//     return {
//       ...token,
//       accessToken: refreshedAccessToken.access_token,
//       exp,
//     };
//   } catch (error) {
//     return {
//       ...token,
//       error: "RefreshAccessTokenError",
//     };
//   }
// }

export const getServerAuthSession = () => getServerSession(authOptions);