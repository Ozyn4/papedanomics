'use client'
import {Container, Image,  Text, Title } from '@mantine/core';
import classes from './IntroMethod.module.css';

// Simple modal component
export function IntroMethod() {



  return (
    <div className={classes.wrapper} style={{ position: 'relative' }} id="sentimen">
    <Title className={classes.title}>Metodologi</Title>
    <Image src="framework.png"  style={{width:750, alignItems:'center', position: 'relative', left:400}}/>
    <Container className={classes.wrapperContainer} style={{ backgroundColor:"transparent"}}>
    <Text c="dimmed" mt="md" style={{alignItems:'center', position: 'relative'}}>
    Penelitian ini bertujuan untuk mengembangan strategi bagi sektor pariwisata di Papua Barat Daya dan Papua Barat dengan memanfaatkan big data dari ulasan pengujung di Google Maps dan analisis sentimen menggunakan Artificial Intelligence (AI). Kinerja destinasi wisata dievaluasi menggunakan analisis RFM. Selain itu, analisis sentimen dilakukan menggunakan deep learning berbasis aspek dan model pretrained dalam bahasa Indonesia dengan arsitektur IndoBERT untuk menilai empat aspek pariwisata meliputi atraksi, fasilitas, akses, dan harga. Hasil analisis ini akan memberikan rekomendasi kebijakan strategis dalam mendukung perumusan langkah strategis dan inovatif dalam mendukung promosi destinasi tujuan wisata serta dengan melakukan pemberdayaan masyarakat adat lokal.
          </Text>
    </Container>
   </div>

    
  );
}