// import type { NextRequest } from 'next/server';

import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const token = req.nextauth.token;
    // const apps = (token) ? token.user.apps : null;

    // if(apps){
      // if(req.nextUrl.pathname.startsWith('/ipas') && (apps.findIndex(app => app.name === "ipas") === -1)){
      //   return NextResponse.redirect(new URL('/not-found', req.url));
      // }
      // if(req.nextUrl.pathname.startsWith('/ids') && (apps.findIndex(app => app.name === "ids") === -1)){
      //   return NextResponse.redirect(new URL('/not-found', req.url));
      // }
      
      // if(req.nextUrl.pathname.startsWith('/login')){
      //   return NextResponse.redirect(new URL('/', req.url));
      // }
    // }
  },
  {
    callbacks: {
      authorized: async ({ token }) => {
        return !!token
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  }
)
export const config = { matcher: ["/ipas/:path*", "/ids/:path*"]}