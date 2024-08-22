'use client'
import { Container, Grid, GridCol, Title } from '@mantine/core';
import { useRouter } from 'next/navigation';
import classes from './IntroUsers.module.css';
import { useEffect, useState } from 'react';
import { Combobox, Input, InputBase, useCombobox } from '@mantine/core';
import { Radar, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis } from 'recharts';
  import Maps from "@/components/Maps/Maps";





export function IntroUsers() {
  const points = [
    { lat: -0.8707101, lng: 134.1067164, name: 'White sand beach',sentimen : [
      { name: 'Atraksi', x: parseFloat('0.6094') },
      { name: 'Akses', x: parseFloat('0.0447') },
      { name: 'Fasilitas', x: parseFloat('-0,1815') },
      { name: 'Harga', x: parseFloat('-0,0323') },
    ],rfm : [
      { name: 'Recency', x: 16 },
      { name: 'Frequency', x: 19 },
      { name: 'Monetary', x: 19 },
    ]},
    { lat: -0.8723739, lng: 131.2456856, name: 'Pantai Tembok Berlin', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.0046') },
      { name: 'Akses', x: parseFloat('0.2112') },
      { name: 'Fasilitas', x: parseFloat('-0.0892') },
      { name: 'Harga', x: parseFloat('0.0093') },
    ],rfm : [
      { name: 'Recency', x: 19 },
      { name: 'Frequency', x: 18 },
      { name: 'Monetary', x: 18 },
    ]},
    { lat: -0.9479306, lng: 131.3371522, name: 'Tugu Pawibili', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.0546') },
      { name: 'Akses', x: parseFloat('0') },
      { name: 'Fasilitas', x: parseFloat('-0,0109') },
      { name: 'Harga', x: parseFloat('0.0054') },
    ],rfm : [
      { name: 'Recency', x: 11 },
      { name: 'Frequency', x: 17 },
      { name: 'Monetary', x: 17 },
    ]},
    { lat: -0.9655931, lng: 131.3094256, name: 'Water Park Tirta Istianah Indah', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.2923') },
      { name: 'Akses', x: parseFloat('0.0153') },
      { name: 'Fasilitas', x: parseFloat('0.1076') },
      { name: 'Harga', x: parseFloat('-0.0769') },
    ],rfm : [
      { name: 'Recency', x: 11 },
      { name: 'Frequency', x: 16 },
      { name: 'Monetary', x: 16 },
    ]},
    { lat: -0.8832413, lng: 133.8406547, name: 'Taman Manneken', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.4670') },
      { name: 'Akses', x: parseFloat('-0.0456') },
      { name: 'Fasilitas', x: parseFloat('0.0507') },
      { name: 'Harga', x: parseFloat('0.0101') },
    ],rfm : [
      { name: 'Recency', x: 1 },
      { name: 'Frequency', x: 15 },
      { name: 'Monetary', x: 15 },
    ]},
    { lat: -0.9553029, lng: 131.1486422, name: 'Pulau Matan Sorong Papua Barat', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.6284') },
      { name: 'Akses', x: parseFloat('0.0382') },
      { name: 'Fasilitas', x: parseFloat('-0.0874') },
      { name: 'Harga', x: parseFloat('0.0163') },
    ],rfm : [
      { name: 'Recency', x: 1 },
      { name: 'Frequency', x:13 },
      { name: 'Monetary', x: 13 },
    ]},
    { lat: -0.811293, lng: 131.2727069, name: 'Saoka Resort', sentimen : [
      { name: 'Atraksi', x: parseFloat('0,5298') },
      { name: 'Akses', x: parseFloat('0') },
      { name: 'Fasilitas', x: parseFloat('0.1125') },
      { name: 'Harga', x: parseFloat('-0.0264') },
    ],rfm : [
      { name: 'Recency', x: 11 },
      { name: 'Frequency', x: 14 },
      { name: 'Monetary', x: 12 },
    ]},
    { lat: -0.5689417, lng: 130.2710209, name: 'Telaga Bintang - Raja Ampat', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.5628') },
      { name: 'Akses', x: parseFloat('-0.0502') },
      { name: 'Fasilitas', x: parseFloat('-0.0100') },
      { name: 'Harga', x: parseFloat('-0.0050') },
    ],rfm : [
      { name: 'Recency', x: 11 },
      { name: 'Frequency', x: 12 },
      { name: 'Monetary', x: 14 },
    ]},
    { lat: -2.548225, lng: 134.4783821, name: 'Taman Nasional Teluk Cenderawasih', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.4876') },
      { name: 'Akses', x: parseFloat('0.0082') },
      { name: 'Fasilitas', x: parseFloat('0.0082') },
      { name: 'Harga', x: parseFloat('0') },
    ],rfm : [
      { name: 'Recency', x: 1 },
      { name: 'Frequency', x: 11 },
      { name: 'Monetary', x: 10 },
    ]},
    { lat: -0.5903592, lng: 130.6023098, name: 'Sauwandarek Village', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.6861') },
      { name: 'Akses', x: parseFloat('0.0072') },
      { name: 'Fasilitas', x: parseFloat('0') },
      { name: 'Harga', x: parseFloat('0.0145') },
    ],rfm : [
      { name: 'Recency', x: 1 },
      { name: 'Frequency', x: 10 },
      { name: 'Monetary', x: 11 },
    ]},
    { lat: -0.8188385, lng: 131.23944, name: 'Pantai Alinda', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.4144') },
      { name: 'Akses', x: parseFloat('0') },
      { name: 'Fasilitas', x: parseFloat('0.0630') },
      { name: 'Harga', x: parseFloat('0.0090') },
    ],rfm : [
      { name: 'Recency', x: 17 },
      { name: 'Frequency', x: 9 },
      { name: 'Monetary', x: 7 },
    ]},
    { lat: -0.9186169, lng: 131.3355955, name: 'Taman Wisata Alam Sorong', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.4242') },
      { name: 'Akses', x: parseFloat('0.0378') },
      { name: 'Fasilitas', x: parseFloat('-0.0833') },
      { name: 'Harga', x: parseFloat('0') },
    ],rfm : [
      { name: 'Recency', x: 17 },
      { name: 'Frequency', x: 8 },
      { name: 'Monetary', x: 9 },
    ]},
    { lat: -1.660686, lng: 134.080963, name: 'Gunung Botak Manokwari Selatan', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.6643') },
      { name: 'Akses', x: parseFloat('0') },
      { name: 'Fasilitas', x: parseFloat('-0.0489') },
      { name: 'Harga', x: parseFloat('0.0069') },
    ],rfm : [
      { name: 'Recency', x: 11 },
      { name: 'Frequency', x: 7 },
      { name: 'Monetary', x: 8 },
    ]},
    { lat: -0.9130053, lng: 131.3075691, name: 'Taman Wisata Mangrove Klawalu Sorong', sentimen : [
      { name: 'Atraksi', x: parseFloat('0,4065') },
      { name: 'Akses', x: parseFloat('0.0243') },
      { name: 'Fasilitas', x: parseFloat('-0.1300') },
      { name: 'Harga', x: parseFloat('0.0487') },
    ],rfm : [
      { name: 'Recency', x: 1 },
      { name: 'Frequency', x: 6 },
      { name: 'Monetary', x: 4 },
    ]},
    { lat: -0.8631213, lng: 134.1267559, name: 'Pantai Bakaro', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.6461') },
      { name: 'Akses', x: parseFloat('0.0153') },
      { name: 'Fasilitas', x: parseFloat('0.0076') },
      { name: 'Harga', x: parseFloat('0.0230') },
    ],rfm : [
      { name: 'Recency', x: 1 },
      { name: 'Frequency', x: 5 },
      { name: 'Monetary', x: 5 },
    ]},
    { lat: 0.1677125, lng: 130.0405469, name: 'Wayag', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.6769') },
      { name: 'Akses', x: parseFloat('-0.1923') },
      { name: 'Fasilitas', x: parseFloat('0') },
      { name: 'Harga', x: parseFloat('-0.0153') },
    ],rfm : [
      { name: 'Recency', x: 1 },
      { name: 'Frequency', x: 4 },
      { name: 'Monetary', x: 6 },
    ]},
    { lat: -0.4259795, lng: 130.8103396, name: 'Tugu Selamat Datang RAJA AMPAT.', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.3846') },
      { name: 'Akses', x: parseFloat('0') },
      { name: 'Fasilitas', x: parseFloat('-0.0480') },
      { name: 'Harga', x: parseFloat('0') },
    ],rfm : [
      { name: 'Recency', x: 1 },
      { name: 'Frequency', x: 3 },
      { name: 'Monetary', x: 3 },
    ]},
    { lat: -1.4109913, lng: 131.9876939, name: 'Sembra River', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.625') },
      { name: 'Akses', x: parseFloat('-0.025') },
      { name: 'Fasilitas', x: parseFloat('-0.1') },
      { name: 'Harga', x: parseFloat('0.0416') },
    ],rfm : [
      { name: 'Recency', x: 10 },
      { name: 'Frequency', x: 2 },
      { name: 'Monetary', x: 2 },
    ]},
    { lat: -0.8790403, lng: 131.2688395, name: 'Vihara Buddha Jayanti', sentimen : [
      { name: 'Atraksi', x: parseFloat('0.5221') },
      { name: 'Akses', x: parseFloat('-0.0354') },
      { name: 'Fasilitas', x: parseFloat('-0.0265') },
      { name: 'Harga', x: parseFloat('0.0265') },
    ],rfm : [
      { name: 'Recency', x: 1 },
      { name: 'Frequency', x: 1 },
      { name: 'Monetary', x: 1 },
    ]},
  ];
  const [search, setSearch] = useState('');
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch('');
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const [value, setValue] = useState<string |any>('');

  const options = points
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item.name} key={item.name}>
        {item.name}
      </Combobox.Option>
    ));
  // let sentimen = points
  // .filter((item)=>item.name.toLowerCase().includes(value.toLowerCase().trim()))
  // .flatMap((item)=>item.sentimen)

  // let rfm = points
  // .filter((item)=>item.name.toLowerCase().includes(value.toLowerCase().trim()))
  // .flatMap((item)=>item.rfm)
    // State hooks
    // const [value, setValue] = useState('Marker 1'); // Default dropdown value
    const [sentimenData, setSentimenData] = useState<any>([]);
    const [rfmData, setRfmData] = useState<any>([]);
    const [focusPoint, setfocusPoint] = useState<any>([]);
  
  
    // Effect hook to update data when `value` changes
    useEffect(() => {
      const filteredPoints = points.filter(item => item.name.toLowerCase().includes(value.toLowerCase().trim()));
  
      const newSentimenData = filteredPoints.flatMap(item => item.sentimen);
      const newRfmData = filteredPoints.flatMap(item => item.rfm);
      const newFocusPoint = filteredPoints.length > 0 ? {
        lat: filteredPoints[0].lat,
        lng: filteredPoints[0].lng
      } : { lat: 0, lng: 0 };
  
      setSentimenData(newSentimenData);
      setRfmData(newRfmData);
      setfocusPoint([newFocusPoint]);
    }, [value]);
  
    // Event handler for dropdown change
    const handleChange = (event:any) => {
      setValue(event.target.value);
    };
  

  const router = useRouter()
  return (
    <div className={classes.wrapper} id="maps">
    <Container className={classes.wrapperContainer}>
      <Title className={classes.title}>Destinasi Tujuan Wisata</Title>
      {/* <Text size="sm" className={classes.description}>
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ala ala 
      </Text> */}

      <Container size="560" mt="lg">
        <Grid>
          <GridCol >
          <Combobox
            store={combobox}
            withinPortal={false}
            onOptionSubmit={(val) => {
              setValue(val);
              combobox.closeDropdown();
              console.log(value);
              console.log(focusPoint)
            }}
          >
            <Combobox.Target>
              <InputBase
                component="button"
                type="button"
                pointer
                rightSection={<Combobox.Chevron />}
                onClick={() => combobox.toggleDropdown()}
                rightSectionPointerEvents="none"
              >
                {value || <Input.Placeholder>Pick value</Input.Placeholder>}
              </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
              <Combobox.Search
                value={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
                placeholder="Cari DTW"
              />
              <Combobox.Options>
                {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
              </Combobox.Options>
            </Combobox.Dropdown>
          </Combobox>
          </GridCol>
        </Grid>
      </Container>
      
      <Grid>
      <Grid.Col span={4}>
        <Grid> 
        {(value !== '') && (
          <>
          <div style={{ margin:'auto' }}> 
          <RadarChart height={300} width={300}  
            outerRadius="80%" data={sentimenData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="x" stroke="green"
                fill="green" fillOpacity={0.5} />
        </RadarChart>
          </div>
          <div style={{ margin:'auto' }}>
          
          {/* <RadarChart data={data} /> */}
          <RadarChart height={300} width={300} 
            outerRadius="80%" data={rfmData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="x" stroke="green"
                fill="green" fillOpacity={0.5} />
        </RadarChart>
          </div>
          </>
      )} 
        </Grid>
      </Grid.Col>
      <Grid.Col span={8}>
      <Maps points={points} /></Grid.Col>
     </Grid>

    </Container>
    </div>
  );
}