interface InputRegistrationData {
  fullname: string
  email: string
  password: string
  nickname: string
  sex: number
  phone: string
  birthplace: string
  birthdate: string
  country_id: string
  province_id: string
  city_id: string
  address: string
  university_id: string
  graduation_month: number
  graduation_year: number
  cohort: number
  major_id: string
  office_category_id: string
  bps_region_id: string
  other_office_name: string
  org_unit: string
  office_province: string
  start_working_month: number
  start_working_year: number
  is_working: number
  stop_working_month: number
  stop_working_year: number
}

interface InputLoginData {
  email: string
  password: string
}