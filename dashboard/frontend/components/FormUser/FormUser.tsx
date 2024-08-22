import { showErrorNotification } from '@/lib/notifications';
import { getCities, getCountries, getMajors, getOfficeCategories, getProvinces, getUniversities } from "@/lib/services/masterService";
import {
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Paper,
  PasswordInput,
  Select,
  Stepper,
  Text,
  Textarea,
  TextInput,
  Title
} from '@mantine/core';
import { DateInput, MonthPickerInput } from '@mantine/dates';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import classes from './FormUser.module.css';

type Props = {
  dataRegistrasi: ClientInputRegistrationData;
  // handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleChange:Function;
  activeStep: number;
  onComplete: (completed: boolean) => void; // Add this prop
}

export function FormUser({ dataRegistrasi, handleChange, activeStep, onComplete}: Props) {
  const router = useRouter();
  const [active, setActive] = useState(activeStep);
  const [countries, setCountries] = useState<any[]>([]);
  const [provinces, setProvinces] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [universities, setUniversities] = useState<any[]>([]);
  const [majors, setMajors] = useState<any[]>([]);
  const [officeCategories, setOfficeCategories] = useState<any[]>([]);
  const birthdateObject = dataRegistrasi.birthdate ? new Date(dataRegistrasi.birthdate) : null;

  const [bpsProvinces, setBPSProvinces] = useState<any[]>([]);
  const [bpsCities, setBPSCities] = useState<any[]>([]);
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const handleDateChange = (date: { toISOString: () => string; }) => {
    // Mengonversi objek Date ke string jika diperlukan
    const dateString = date ? date.toISOString().split('T')[0] : '';
    handleChange({ target: { name: 'birthdate', value: dateString } });
  };
  const handleFetchCountries = async () => {
    try {
      let arrayCountries: any[] = [''];
      const tmp = await getCountries();
      // console.log('dtsets:', dtsets);
      
      // Check if dtsets and dtsets.data are defined and dtsets.data is an array
      tmp.data.map((dt: any) => {
          arrayCountries.push({ ...dt, value:dt.id,label: dt.country_code+'-'+dt.name  });
        });
      setCountries(arrayCountries);
      // console.log(arrayCountries)

    } catch (error) {
      showErrorNotification(
        'error-fetch',
        (error instanceof Response) ? `${error.status} ${error.statusText}` : String(error),
        5000
      );
      console.error(error);
      return null;
    }
  };
  const handleFetchProvinces = async () => {
    try {
      let arrayProvinces: any[] = [''];
      const tmp = await getProvinces();
      // console.log('dtsets:', dtsets);
      
      // Check if dtsets and dtsets.data are defined and dtsets.data is an array
      tmp.data.map((dt: any) => {
        arrayProvinces.push({ ...dt, value: dt.id, label: dt.province_code+'-'+dt.name });
        });
      setProvinces(arrayProvinces);
      // console.log(arrayCountries)

    } catch (error) {
      showErrorNotification(
        'error-fetch',
        (error instanceof Response) ? `${error.status} ${error.statusText}` : String(error),
        5000
      );
      console.error(error);
      return null;
    }
  };
  const handleFetchCities = async () => {
    try {
      let arrayCites: any[] = [''];
      const tmp = await getCities(dataRegistrasi.province_id);
      // console.log('dtsets:', dtsets);
      
      // Check if dtsets and dtsets.data are defined and dtsets.data is an array
      tmp.data.map((dt: any) => {
        arrayCites.push({ ...dt, value: dt.id, label: dt.province_code+''+dt.city_code+'-'+dt.name });
        });
      setCities(arrayCites);
      // console.log(arrayCountries)

    } catch (error) {
      showErrorNotification(
        'error-fetch',
        (error instanceof Response) ? `${error.status} ${error.statusText}` : String(error),
        5000
      );
      console.error(error);
      return null;
    }
  };
  const handleFetchUniversities = async () => {
    try {
      let arrayUniversities: any[] = [''];
      const tmp = await getUniversities();
      
      // Check if dtsets and dtsets.data are defined and dtsets.data is an array
      tmp.data.map((dt: any) => {
        arrayUniversities.push({ ...dt, value:dt.id,label: dt.abbr+'-'+dt.name  });
        });
      setUniversities(arrayUniversities);
      // console.log(arrayCountries)

    } catch (error) {
      showErrorNotification(
        'error-fetch',
        (error instanceof Response) ? `${error.status} ${error.statusText}` : String(error),
        5000
      );
      console.error(error);
      return null;
    }
  };
  const handleFetchMajors = async () => {
    try {
      let arrayMajors: any[] = [''];
      const tmp = await getMajors();
      
      // Check if dtsets and dtsets.data are defined and dtsets.data is an array
      tmp.data.map((dt: any) => {
        arrayMajors.push({ ...dt, value:dt.id,label: dt.name  });
        });
      setMajors(arrayMajors);
      // console.log(arrayCountries)

    } catch (error) {
      showErrorNotification(
        'error-fetch',
        (error instanceof Response) ? `${error.status} ${error.statusText}` : String(error),
        5000
      );
      console.error(error);
      return null;
    }
  };
  const handleFetchOfficeCategories = async () => {
    try {
      let arrayOfficeCategories: any[] = [''];
      const tmp = await getOfficeCategories();
      
      // Check if dtsets and dtsets.data are defined and dtsets.data is an array
      tmp.data.map((dt: any) => {
        arrayOfficeCategories.push({ ...dt, value:dt.id,label: dt.name  });
        });
      setOfficeCategories(arrayOfficeCategories);
      // console.log(arrayOfficeCategories)

    } catch (error) {
      showErrorNotification(
        'error-fetch',
        (error instanceof Response) ? `${error.status} ${error.statusText}` : String(error),
        5000
      );
      console.error(error);
      return null;
    }
  };
  
  const handleFetchBPSProvinces = async () => {
    try {
      let arrayProvinces: any[] = [''];
      const tmp = await getProvinces();
      // console.log('dtsets:', dtsets);
      
      // Check if dtsets and dtsets.data are defined and dtsets.data is an array
      tmp.data.map((dt: any) => {
        arrayProvinces.push({ ...dt, value: dt.id, label: dt.province_code+'-'+dt.name });
        });
      setBPSProvinces(arrayProvinces);
      // console.log(arrayCountries)

    } catch (error) {
      showErrorNotification(
        'error-fetch',
        (error instanceof Response) ? `${error.status} ${error.statusText}` : String(error),
        5000
      );
      console.error(error);
      return null;
    }
  };
  const handleFetchBPSCities = async () => {
    try {
      let arrayCites: any[] = [''];
      const tmp = await getCities(dataRegistrasi.bps_province_code);
      // console.log('dtsets:', dtsets);
      
      // Check if dtsets and dtsets.data are defined and dtsets.data is an array
      tmp.data.map((dt: any) => {
        arrayCites.push({ ...dt, value: dt.id, label: dt.province_code+''+dt.city_code+'-'+dt.name });
        });
      setBPSCities(arrayCites);
      // console.log(arrayCountries)

    } catch (error) {
      showErrorNotification(
        'error-fetch',
        (error instanceof Response) ? `${error.status} ${error.statusText}` : String(error),
        5000
      );
      console.error(error);
      return null;
    }
  };
  useEffect(() => { 
    handleFetchCountries()
    handleFetchProvinces()
    handleFetchCities()
    handleFetchUniversities()
    handleFetchMajors()
    handleFetchOfficeCategories()
    handleFetchBPSProvinces
    handleFetchBPSCities()
   }, []);
  // useEffect(() => { handleFetchProvinces() }, [provinces]);
  // useEffect(() => { handleFetchCities() }, [cities]);
  // useEffect(() => { handleFetchUniversities() }, [universities]);
  // useEffect(() => { handleFetchMajors() }, [majors]);
  
  const selectedOfficeCategory = officeCategories.find(category => category.id === dataRegistrasi.office_category_id)

  useEffect(() => {
    console.log(selectedOfficeCategory)
    if (active === 4) {
      onComplete(true);
    } else {
      onComplete(false);
    }
  }, [active, onComplete]);

  return (  
    <Container size={1200} my={10}>
      <Grid>
        <GridCol span={{ base: 12, md: 12, lg: 12}}>
        <Stepper active={active} onStepClick={setActive}>
          <Stepper.Step label="Data Pribadi" description="">
          <Paper withBorder shadow="md" p={10}>
          <Title className={classes.subTitle} ta="left">
            Data Pribadi
          </Title>
          {/* <Group className={classes.formContainer} justify="space-between" mt="md" grow preventGrowOverflow={false} wrap="nowrap"> */}
          <Grid>
          <GridCol span={{ base: 12, md: 6, lg: 6}}>
            {/* <Box> */}
              <TextInput label="Nama Lengkap" name="fullname" value={dataRegistrasi.fullname} onChange={(e)=>{handleChange('fullname',e.target.value)}} required placeholder='Contoh: Fauzan Faldy Anggita'/>
              <TextInput label="Nama Panggilan" name="nickname" value={dataRegistrasi.nickname} onChange={(e)=>{handleChange('nickname',e.target.value)}}  required placeholder='Contoh: Ojan'/>
              <TextInput label="Email" name="email" value={dataRegistrasi.email} onChange={(e)=>{handleChange('email',e.target.value)}}  required placeholder='Contoh: fauzan@gmail.com'/>
              <PasswordInput label="Buat Password" name="password" value={dataRegistrasi.password} onChange={(e)=>{handleChange('password',e.target.value)}}  required />
              <PasswordInput label="Ulangi Password" name="repeat_password" value={dataRegistrasi.repeat_password} onChange={(e)=>{handleChange('repeat_password',e.target.value)}}  required />
              <Select
                label="Jenis Kelamin"
                value={dataRegistrasi.sex}
                onChange={(value) => {
                  // handleChange({ target: { name: 'sex', value: value || '' } });
                  handleChange('sex',value)
                }}
                placeholder="Pilih Jenis Kelamin"
                data={[{label:'Laki-laki',value:'1'},{label:'Perempuan',value:'2'}]}
                // defaultValue=null
                required
              />
              <TextInput label="No Handphone/Whatsapp" name="phone" type="number" value={dataRegistrasi.phone} onChange={(e)=>{handleChange('phone',e.target.value)}} required placeholder='Contoh: 6281209929222'/>
            {/* </Box> */}
            </GridCol>
            <GridCol span={{ base: 12, md: 6, lg: 6}}>
            {/* <Box> */}
              <TextInput label="Tempat Lahir" name="birthplace" value={dataRegistrasi.birthplace} onChange={(e)=>{handleChange('birthplace',e.target.value)}} placeholder='Contoh: Jakarta'/>
              <DateInput 
                label="Tanggal Lahir" 
                name="birthdate" 
                value={birthdateObject} 
                onChange={(value) => {
                  // handleChange({ target: { name: 'sex', value: value || '' } });
                  handleChange('birthdate',value)
                }} 
                valueFormat="YYYY-MM-DD" 
                placeholder="Pilih Tanggal Lahir" 
              />
              <Select 
                label="Negara Domisili" 
                name="country_id" 
                value={dataRegistrasi.country_id} 
                onChange={(value) => {
                  // handleChange({ target: { name: 'sex', value: value || '' } });
                  handleChange('country_id',value)
                }} 
                placeholder="Pilih Negara Domisili"
                data={countries}
                defaultValue='' 
                required
                />
              <Select 
                label="Provinsi Domisili" 
                name="province_id" 
                value={dataRegistrasi.province_id} 
                onChange={(value) => {
                  // handleChange({ target: { name: 'sex', value: value || '' } });
                  handleChange('province_id',value)
                }} 
                placeholder="Pilih Provinsi Domisili" 
                data={provinces} 
                required 
                defaultValue=''
              />
              <Select 
                label="Kab/Kota Domisili" 
                name="city_id" 
                value={dataRegistrasi.city_id} 
                onChange={(value) => {
                  // handleChange({ target: { name: 'sex', value: value || '' } });
                  handleChange('city_id',value)
                }} 
                placeholder="Pilih Kab/Kota Domisili" 
                data={cities} 
                defaultValue=''
                required 
              />
              <Textarea label="Alamat Domisili" name="address" value={dataRegistrasi.address} onChange={(e)=>{handleChange('address',e.target.value)}} />
              <Select 
                label="Status Pekerjaan" 
                name="status" 
                value={dataRegistrasi.status} 
                onChange={(value) => {
                  // handleChange({ target: { name: 'sex', value: value || '' } });
                  handleChange('status',value)
                }} 
                placeholder="Pilih Status Pekerjaan" 
                data={['','PNS', 'Non-PNS']} 
                defaultValue=''
                required 
              />
            {/* </Box> */}
            </GridCol>
          </Grid>
          {/* </Group> */}
          </Paper>
          </Stepper.Step>
          <Stepper.Step label="Riwayat Perguruan Tinggi" description="">
            <Paper withBorder shadow="md" p={10}>
              <Title className={classes.subTitle} ta="left">
                Riwayat Perguruan Tinggi
              </Title>
              <Grid>
              <GridCol span={{ base: 12, md: 6, lg: 6}}>
              <Select 
                    label="Nama Perguruan Tinggi" 
                    name="university_id" 
                    value={dataRegistrasi.university_id} 
                    onChange={(value) => {
                      // handleChange({ target: { name: 'sex', value: value || '' } });
                      handleChange('university_id',value)
                    }} 
                    placeholder="Pilih Nama Perguruan Tinggi" 
                    data={universities} 
                    required
                    defaultValue='' 
                  />
                  <MonthPickerInput 
                    label="Bulan Lulus" 
                    name="graduation_month_year" 
                    value={dataRegistrasi.graduation_month_year} 
                    onChange={(value) => {
                      // handleChange({ target: { name: 'sex', value: value || '' } });
                      handleChange('graduation_month_year',value)
                    }} 
                    valueFormat="MMM-YYYY" 
                    placeholder="Pilih Bulan Lulus" 
                    required 
                  />
                  </GridCol>
                <GridCol span={{ base: 12, md: 6, lg: 6}}>
                  <TextInput label="Angkatan" name="cohort" value={dataRegistrasi.cohort} onChange={(e)=>{handleChange('cohort',e.target.value)}} type="number" inputMode="numeric"  required placeholder='Masukan 3 digit, Contoh: "051"' />
                  <Select 
                    label="Program Studi" 
                    name="major_id" 
                    value={dataRegistrasi.major_id} 
                    onChange={(value) => {
                      // handleChange({ target: { name: 'sex', value: value || '' } });
                      handleChange('major_id',value)
                    }} 
                    placeholder="Pilih Nama Program Studi" 
                    data={majors} 
                    required
                    defaultValue='' 
                  />
                </GridCol>
                </Grid>
            </Paper>  
          
          </Stepper.Step>
          <Stepper.Step label="Pekerjaan Terakhir" description="">
            <Paper withBorder shadow="md" p={10}>
                <Title className={classes.subTitle} ta="left">
                  Pekerjaan Terakhir
                </Title>
                <Grid>
                  <GridCol span={{ base: 12, md: 6, lg: 6}}>
                    <Select 
                      label="Jenis Kantor" 
                      name="office_category_id" 
                      value={dataRegistrasi.office_category_id} 
                      onChange={(value) => {
                        // handleChange({ target: { name: 'sex', value: value || '' } });
                        handleChange('office_category_id',value)
                      }} 
                      placeholder="Pilih Jenis Kantor" 
                      data={officeCategories}
                      required
                      defaultValue='' 
                    />
                    {/* jika bukan non bps */}
                    {((dataRegistrasi.office_category_id === '8dc8727c-41b5-11ef-b8c8-acde48001122') ||
                    (dataRegistrasi.office_category_id === '8dc87308-41b5-11ef-b8c8-acde48001122') ||
                    (dataRegistrasi.office_category_id === '8dc87326-41b5-11ef-b8c8-acde48001122')  ||
                    (dataRegistrasi.office_category_id === '8dc87344-41b5-11ef-b8c8-acde48001122')  ||
                    (dataRegistrasi.office_category_id === '8dc87358-41b5-11ef-b8c8-acde48001122')) && (
                      <>
                        <TextInput label="NIP" name="nip" value={dataRegistrasi.nip} onChange={(e)=>{handleChange('nip',e.target.value)}} type="number" inputMode="numeric"  required />
                        {((dataRegistrasi.office_category_id === '8dc87344-41b5-11ef-b8c8-acde48001122')||(dataRegistrasi.office_category_id === '8dc87358-41b5-11ef-b8c8-acde48001122')) && (
                          <>
                            <Select 
                              label="BPS Provinsi" 
                              name="bps_province_code" 
                              value={dataRegistrasi.bps_province_code} 
                              onChange={(value) => {
                                // handleChange({ target: { name: 'sex', value: value || '' } });
                                handleChange('bps_province_code',value)
                              }} 
                              placeholder="Pilih BPS Provinsi" 
                              data={provinces}
                              required
                              defaultValue='' 
                            />
                            {(dataRegistrasi.office_category_id === '8dc87358-41b5-11ef-b8c8-acde48001122') && (
                              <>
                            <Select 
                              label="BPS Kab/Kota" 
                              name="bps_city_code" 
                              value={dataRegistrasi.bps_city_code} 
                              onChange={(value) => {
                                // handleChange({ target: { name: 'sex', value: value || '' } });
                                handleChange('bps_city_code',value)
                              }} 
                              placeholder="Pilih BPS Kab/Kota" 
                              data={cities} 
                              defaultValue=''
                              required 
                            />
                            </>
                          )}
                            </>
                        )}
                          </>
                    )}
                    {/* jika non bps */}
                    {(dataRegistrasi.office_category_id === '8dc87376-41b5-11ef-b8c8-acde48001122')&& (
                      <>
                        <TextInput label="Nama Kantor" name="other_office_name" placeholder='Contoh: PT. Telkom Tbk.' value={dataRegistrasi.other_office_name} onChange={(e)=>{handleChange('other_office_name',e.target.value)}} required />
                        <Select 
                              label="Kantor Provinsi" 
                              name="office_province" 
                              value={dataRegistrasi.office_province} 
                              onChange={(value) => {
                                // handleChange({ target: { name: 'sex', value: value || '' } });
                                handleChange('office_province',value)
                              }} 
                              placeholder="Pilih Kantor Provinsi" 
                              data={provinces}
                              required
                              defaultValue='' 
                            />
                      </>
                    )}
                    <TextInput label="Nama Unit Kerja" name="org_unit" placeholder='Contoh: Tim IPDS' value={dataRegistrasi.org_unit} onChange={(e)=>{handleChange('org_unit',e.target.value)}} required />
                        
                    </GridCol>
                  <GridCol span={{ base: 12, md: 6, lg: 6}}>
                    {dataRegistrasi.office_category_id !== '' && (
                      <>
                      <MonthPickerInput 
                      label="Mulai Bekerja" 
                      name="start_working_month_year" 
                      value={dataRegistrasi.start_working_month_year} 
                      onChange={(value) => {
                        // handleChange({ target: { name: 'sex', value: value || '' } });
                        handleChange('start_working_month_year',value)
                      }}
                      valueFormat="MMM-YYYY" 
                      placeholder="Pilih Bulan Mulai Bekerja" 
                      required 
                    />
                    <Select
                      label="Status Pekerjaan Terakhir"
                      value={dataRegistrasi.is_working}
                      onChange={(value) => {
                        // handleChange({ target: { name: 'sex', value: value || '' } });
                        handleChange('is_working',value)
                      }}
                      placeholder="Pilih Status Pekerjaan Terakhir"
                      data={[{label:'Aktif',value:'1'},{label:'Tidak Aktif',value:'2'}]}
                      // defaultValue=null
                      required
                    />
                    {dataRegistrasi.is_working === '2' && (
                      <>
                        <MonthPickerInput 
                        label="Mulai Berhenti Bekerja" 
                        name="stop_working_month_year" 
                        value={dataRegistrasi.stop_working_month_year} 
                        onChange={(value) => {
                          // handleChange({ target: { name: 'sex', value: value || '' } });
                          handleChange('stop_working_month_year',value)
                        }}
                        valueFormat="MMM-YYYY" 
                        placeholder="Pilih Bulan Mulai Berhenti Bekerja" 
                        required 
                        />
            
                      </>
                    )}
                      </>
                    )}
                    </GridCol>
                </Grid>
            </Paper>
          </Stepper.Step>
          <Stepper.Step label="Aktivasi HAISSTIS" description="">
          <Paper withBorder shadow="md" p={10}>
                <Title className={classes.subTitle} ta="left">
                  Aktivasi HAISSTIS
                </Title>
                <Grid>
                  <GridCol span={{ base: 12, md: 6, lg: 6}}>
                  <Select 
                      label="Apakah sudah aktivasi keanggotaan HAISSTIS?"
                      description=''  
                      name="activation" 
                      value={dataRegistrasi.activation} 
                      onChange={(value) => {
                        // handleChange({ target: { name: 'sex', value: value || '' } });
                        handleChange('activation',value)
                      }}
                      placeholder="" 
                      data={['','Sudah', 'Belum']} 
                      required 
                      defaultValue=''
                    />
                  </GridCol>
                  <GridCol span={{ base: 12, md: 6, lg: 6}}>
                  {dataRegistrasi.activation === 'Sudah' && (
                      <>
                        <TextInput 
                          label="ID Alumni"
                          // description='Format: Angkatan.No Urut; Contoh: 051.003' 
                          name="alumni_id" 
                          value={dataRegistrasi.alumni_id}
                          prefix={dataRegistrasi.cohort+'.'} 
                          onChange={(value) => {
                            // handleChange({ target: { name: 'sex', value: value || '' } });
                            handleChange('alumni_id',value)
                          }} 
                          placeholder='Contoh: 051.003' 
                          required 
                        />
                      </>
                    )}
                    {dataRegistrasi.activation === 'Belum' && (
                      <>
                        <Text fz="sm" ta="left">
                          <p>
                          Formulir aktivasi dapat diakses pada link berikut <br /><a href="http://s.id/aktivasi_haisstis">http://s.id/aktivasi_haisstis</a>
                          </p>
                        </Text>
                      </>
                    )}
                  </GridCol>
                </Grid>
              </Paper>
          </Stepper.Step>
          <Stepper.Completed>
            <Paper>Selesai, silahkan klik Submit !</Paper>
          </Stepper.Completed>

        </Stepper>
      </GridCol>
      </Grid>
      <Group justify="center" mt="xl">
        {active > 0 && <Button variant="default" onClick={prevStep}>Kembali</Button>}
        {active < 4 && <Button onClick={nextStep}>Selanjutnya</Button>}
      </Group>
    </Container>
  );
}
