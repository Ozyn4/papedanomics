import { getSession, signOut } from "next-auth/react";

interface fetchClientProps {
  method?: string;
  url: string;
  body?: string;
  token?: string;
  mode? : RequestMode;
}

async function fetchClient({ method = "GET", url, body = "", token, mode = "cors" }: fetchClientProps) {
  try {
    const session = await getSession();
    const accessToken = token || session?.access_token;
    
    const response = await fetch(url.toString(), {
      method: method,
      mode: mode,
      //@ts-ignore
      headers: {
        "X-Authorization": process.env.NEXT_PUBLIC_BACKEND_API_KEY,
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: (accessToken) ? "Bearer " + accessToken : "",
      },
      body: body || undefined,
    });

    if (!response.ok) {
      throw response;
    }

    return response;
  } catch (error) {
    if (error instanceof Response) {
      if (error.status === 401) {
        signOut();
      }

      throw error;
    }

    throw new Error("Failed to fetch data", { cause: error });
  }
}

export default fetchClient;
