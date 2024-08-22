import fetchClient from "../fetch-client";

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`

export async function login(credentials: InputLoginData) {
  const res = await fetchClient({
    method: 'POST',
    url: `${baseUrl}/login`,
    body: JSON.stringify(credentials),
  });
  return res.json()
}

export async function register(InputRegistrationData : InputRegistrationData ) {
  const res = await fetchClient({
    method: 'POST',
    url: `${baseUrl}/register`,
    body: JSON.stringify(InputRegistrationData)
  });
  return res.json()
}
