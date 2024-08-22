"use client"
import { showErrorNotification } from "@/lib/notifications";
import { Container, Group } from '@mantine/core';
import { useState } from "react";

import React,{ FC } from 'react';
import Maps from "@/components/Maps/Maps";
import { Grid } from '@mantine/core';
// import RadarChart from '@/components/RadarChart/RadarChart';
import { Radar, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const points = [
  { lat: 51.505, lng: -0.09, name: 'Marker 1' },
  { lat: 51.515, lng: -0.1, name: 'Marker 2' },
  { lat: 51.525, lng: -0.11, name: 'Marker 3' }
];
const data = [
  { name: 'Atraksi', x: 21 },
  { name: 'Akses', x: 22 },
  { name: 'Fasilitas', x: -32 },
  { name: 'Harga', x: -14 },
];
const Home: FC = () => {

  return (
    <div>
      <h1>Dashboard DTW</h1>
      <Grid>
      <Grid.Col span={4}>
        <Grid> 
          <div style={{ margin:'auto' }}>
          
          <RadarChart data={data} />
          <RadarChart height={300} width={300} 
            outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="x" stroke="green"
                fill="green" fillOpacity={0.5} />
        </RadarChart>
          </div>
          <div style={{ margin:'auto' }}>
          
          <RadarChart data={data} />
          <RadarChart height={300} width={300} 
            outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="x" stroke="green"
                fill="green" fillOpacity={0.5} />
        </RadarChart>
          </div>
        </Grid>
      </Grid.Col>
      <Grid.Col span={8}>
      {/* <Maps points={points} center={focis} /> */}
      </Grid.Col>
     </Grid>
    </div>
  );
};

export default Home;
