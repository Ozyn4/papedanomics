import fetchClient from "../fetch-client";

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export async function getCountries() {
  const res = await fetchClient({
    method: 'GET',
    url: `${baseUrl}/countries`,
  });
  
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
}

export async function getProvinces() {
  const res = await fetchClient({
    method: 'GET',
    url: `${baseUrl}/provinces`,
  });
  
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
}

export async function getCities(province_id:string) {
  const res = await fetchClient({
    method: 'GET',
    url: `${baseUrl}/cities?province_id=${province_id}`,
  });
  
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
}

export async function getUniversities() {
  const res = await fetchClient({
    method: 'GET',
    url: `${baseUrl}/universities`,
  });
  
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
}

export async function getMajors() {
  const res = await fetchClient({
    method: 'GET',
    url: `${baseUrl}/majors`,
  });
  
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
}

export async function getOfficeCategories() {
  const res = await fetchClient({
    method: 'GET',
    url: `${baseUrl}/office-categories`,
  });
  
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
}