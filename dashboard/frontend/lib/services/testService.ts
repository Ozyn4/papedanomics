import fetchClient from "../fetch-client";

export async function testAPI(method: string, url: string, body: any) {
  const res = await fetchClient({
    method: method,
    url: url,
    body: (body.length == 0) ? undefined : body,
  });
  return res.json()
}