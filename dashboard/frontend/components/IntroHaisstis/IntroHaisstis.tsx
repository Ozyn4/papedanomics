'use client'
import { Container, Image, Text, Title } from '@mantine/core';
import { useRouter } from 'next/navigation';
import classes from './IntroHaisstis.module.css';


export function IntroHaisstis() {
  const router = useRouter();

  return (
    <div className={classes.wrapper} id="home">
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
          Strategi Penguatan Pariwisata Papua Barat Tinjauan Pendekatan Big Data dan Kecerdasan Artifisial
          </Title>
          <br />
          <Text c="dimmed" mt="md">
          Papua Barat dan Papua Barat Daya, yang dikenal dengan kekayaan alam dan budayanya, berpotensi menjadi tujuan wisata unggulan. Namun, kontribusi pariwisata di wilayah ini terhadap perekonomian lokal masih sangat terbatas. 
          Pemanfaatan big data dan kecerdasan artifisial dalam sektor pariwisata dapat dilakukan dengan membangun model analisis sentimen ulasan wisatawan dari Google Maps berbasis AI untuk evaluasi berbagai aspek seperti atraksi, fasilitas, akses, harga. 
          Selain itu, dilakukan analisis Recency, Frequency, dan Monetary untuk evaluasi kematangan DTW di Papua Barat Daya dan Papua Barat .
          </Text>
          
          {/* <Group my="md">
            <Button variant="transparent" radius="xl" size="md" className={classes.control}
              leftSection={
                <ThemeIcon bg='blue' radius={50}>
                  <IconArrowRight color='white' />
                </ThemeIcon>} 
              onClick={() => router.replace('/about')}>
              Selengkapnya
            </Button>
          </Group> */}

          {/* <Grid>
            <GridCol span={{ base: 12, md: 3 }}>
              <Stack gap={0}>
                <Text size="xl" fw={500}>1234</Text>
                <Text size="xs">Peserta terdaftar</Text>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 3 }}>
              <Stack gap={0}>
                <Text size="xl" fw={500}>304</Text>
                <Text size="xs">Kegiatan berlangsung</Text>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 3 }}>
              <Stack gap={0}>
                <Text size="xl" fw={500}>50jt</Text>
                <Text size="xs">Donasi diberikan</Text>
              </Stack>
            </GridCol>
          </Grid> */}
          
        </div>
        <Image src="intro.png" className={classes.image} />
      </div>
    </Container>
    </div>
  );
}