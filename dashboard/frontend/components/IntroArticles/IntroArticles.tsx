'use client'
import { Textarea,Button, Container, Grid, GridCol, Group, Image, Paper, Space, Spoiler, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { useRouter } from 'next/navigation';
import classes from './IntroArticles.module.css';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal'

// Simple modal component
export function IntroArticles() {
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
    <Title className={classes.title}>Analisis Sentimen Berbasis Aspek</Title>
      
    <Container className={classes.wrapperContainer} style={{ backgroundColor:"transparent"}} ml="0" pl={{ base: 0, md: 250 }} pr={{ base: 0, md: 150 }}>
      {/* <Text size="sm" className={classes.description}>
      Analisis sentimen berbasis aspek merupakan proses mengidentifikasi aspek sentimen dalam sebuah teks dengan berfokus pada aspek tertentu. Dalam hal ini aspek yang digunakan adalah atraksi, fasilitas, harga, dan akses.
      </Text> */}
      {/* <Space h="lg"/> */}
      <Stack>
        <Paper bg="transparent">
          <Grid>
            <GridCol span={{ base: 12, sm: 3}}>
              <Image src="attraction.png" height={120} radius={25} />
            </GridCol>
            <GridCol span={{ base: 12, sm: 9}}>
              {/* <Text size="sm" c="dimmed">17 Agustus 2024</Text> */}
              <Text size="lg" fw={700}>Atraksi</Text>
              <Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
                <Text size="sm">
                Atraksi atau daya tarik wisata berkaitan dengan apa yang bisa dilihat (what to see) dan dilakukan (what to do) oleh wisatawan di sebuah destinasi wisata
                </Text>
              </Spoiler>
            </GridCol>
          </Grid>
        </Paper>
        <Paper bg="transparent">
          <Grid>
            <GridCol span={{ base: 12, sm: 3}}>
              <Image src="facilities.png" height={120} radius={25} />
            </GridCol>
            <GridCol span={{ base: 12, sm: 9}}>
              {/* <Text size="sm" c="dimmed">17 Agustus 2024</Text> */}
              <Text size="lg" fw={700}>Fasilitas</Text>
              <Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
                <Text size="sm">
                Fasilitas merupakan segala macam prasarana dan sarana yang diperlukan oleh wisatawan selama berada di daerah tujuan wisata, meliputi kebutuhan akomodasi, penyediaan makanan dan minuman, gedung pertunjukan, tempat hiburan (entertainment), dan tempat perbelanjaan
                </Text>
              </Spoiler>
            </GridCol>
          </Grid>
        </Paper>
        <Paper bg="transparent">
          <Grid>
            <GridCol span={{ base: 12, sm: 3}}>
              <Image src="accessibility.png" height={120} radius={25} />
            </GridCol>
            <GridCol span={{ base: 12, sm: 9}}>
              {/* <Text size="sm" c="dimmed">17 Agustus 2024</Text> */}
              <Text size="lg" fw={700}>Akses</Text>
              <Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
                <Text size="sm">
                Akses merupakan sarana dan infrastruktur yang memberikan kemudahan kepada wisatawan untuk bergerak dari satu daerah ke daerah lain. Faktor-faktor yang penting terkait dengan aspek aksesibilitas wisata meliputi petunjuk arah, bandara, terminal, waktu yang dibutuhkan, biaya perjalanan, dan frekuensi transportasi menuju lokasi wisata
                </Text>
              </Spoiler>
            </GridCol>
          </Grid>
        </Paper>
        
        <Paper bg="transparent">
          <Grid>
            <GridCol span={{ base: 12, sm: 3}}>
              <Image src="price.png" height={120} radius={25} />
            </GridCol>
            <GridCol span={{ base: 12, sm: 9}}>
              {/* <Text size="sm" c="dimmed">17 Agustus 2024</Text> */}
              <Text size="lg" fw={700}>Harga</Text>
              <Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
                <Text size="sm">
                Nilai barang yang ditentukan atau dirupakan dengan uang
                </Text>
              </Spoiler>
            </GridCol>
          </Grid>
        </Paper>
      </Stack>
      
      {/* <Group my="xl" justify='left'>
        <Button variant="transparent" radius="xl" size="md" className={classes.control}
          leftSection={
            <ThemeIcon radius={50} bg="blue">
              <IconArrowRight color="white"/>
            </ThemeIcon>
          }
          onClick={() => router.replace('/courses')}>
          Selengkapnya
        </Button>
      </Group> */}
    </Container>
    <Container style={{ position: 'absolute', top: 250, left: 925 }} visibleFrom='lg'>
      
        <Textarea
        autosize
        minRows={8}
        maxRows={20}
          label="Masukan ulasan"
          placeholder="Masukan ulasan"
          style={{ width: '400px' }}
        />
        <br />
        <Button variant="blue" color="dark" onClick={handleButtonClick}>
          Submit
        </Button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Container>
   </div>

    
  );
}