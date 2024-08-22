const defaultDate = new Date();
const formattedDate = `${defaultDate.getFullYear()}-${String(defaultDate.getMonth() + 1).padStart(2, '0')}`; // Format as YYYY-MM

const defaultDataRegClient: ClientInputRegistrationData = {
  fullname: "",
  email: "",
  password: "",
  repeat_password: "",
  nickname: "",
  sex: "",
  phone: "",
  birthplace: "",
  birthdate: "",
  country_id: "",
  province_id: "",
  city_id: "",
  address: "",
  university_id: "",
  status:"",
  graduation_month_year: defaultDate,
  graduation_month: "",
  graduation_year: "",
  cohort: "",
  major_id: "",

  office_category_id: "",
  nip:"",
  bps_region_id: "",
  bps_city_code: "",
  bps_province_code: "",
  other_office_name: "", 
  office_province: "", 
  org_unit: "", 

  start_working_month_year: defaultDate, // Set default date here
  start_working_month: 0, // Current month (1-based)
  start_working_year: 0, // Current year
  is_working: "",
  stop_working_month_year: defaultDate,
  stop_working_month: "",
  stop_working_year: "",

  activation:"",
  alumni_id:""
};

export default defaultDataRegClient;
