'use client'
import { Textarea,Button, Container, Grid, GridCol, Group, Image, Paper, Space, Spoiler, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import classes from './IntroMethod.module.css';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal'

// Simple modal component
export function IntroMethod() {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


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