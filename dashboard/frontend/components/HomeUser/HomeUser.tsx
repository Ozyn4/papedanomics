'use client'
import avatar from '@/public/favicon.svg';
import { Button, Grid, GridCol, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomeUser({ user } : { user : any }) {
  const router = useRouter();

  return (
    <>
      <Paper shadow="sm">
        <Grid p="sm">
          <GridCol span={{ base: 12 }} mb="lg">
            <Group justify='space-between'>
              <Title order={2}>
                Profil Pengguna
              </Title>
              <Button type="button" size="xs" bg="gray" radius={100} rightSection={<IconEdit />} onClick={() => router.replace('/edit-profil')}>
                Ubah
              </Button>
            </Group>
          </GridCol>
          <GridCol span={{ base: 12, md: 3 }} p="md">
            <NextImage src={avatar} alt={user.fullname || ''} style={{width:"100%", height:"auto"}}/>
          </GridCol>
          <GridCol span={{ base: 12, md: 9 }}>
            <Grid>
              <GridCol span={{ base: 12, md: 6 }} p="sm">
                <Stack gap={0}>
                  <Text fw={700}>Nama Lengkap</Text>
                  <Text>{user.fullname || '-'}</Text>
                </Stack>
                <Stack gap={0}>
                  <Text fw={700}>Nama Panggilan</Text>
                  <Text>{user.nickname || '-'}</Text>
                </Stack>
                <Stack gap={0}>
                  <Text fw={700}>Email</Text>
                  <Text>{user.email || '-'}</Text>
                </Stack>
                <Stack gap={0}>
                  <Text fw={700}>No Whatsapp</Text>
                  <Text>{user.phone || '-'}</Text>
                </Stack>
                <Stack gap={0}>
                  <Text fw={700}>Angkatan</Text>
                  <Text>{user.cohort ? user.university.abbr + ' ' + user.cohort : '-'}</Text>
                </Stack>
              </GridCol>
              <GridCol span={{ base: 12, md: 6 }} p="sm">
                <Stack gap={0}>
                  <Text fw={700}>Riwayat Pekerjaan</Text>
                  <Text>{user.start_working_year + ' - ' + (user.stop_working_year ? user.stop_working_year : '...') + ' : ' + user.office_category_id.abbr}</Text>
                </Stack>
                <Stack gap={0}>
                  <Text fw={700}>Riwayat Pendidikan</Text>
                  <Text>{user.graduation_year + ' : ' + user.major_id.abbr}</Text>
                </Stack>
              </GridCol>
            </Grid>
            
            
          </GridCol>
        </Grid>
      </Paper>
    </>
  )
}