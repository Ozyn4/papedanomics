'use client'
import { ActionIcon, Container, Grid, GridCol, Group, rem, Text, Title } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconPointFilled } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './Footer.module.css';

const data = [
  {
    title: 'Menu',
    links: [
      { label: 'Tentang', link: '/articles' },
      { label: 'Dashboard', link: '#' },
    ],
  },
  // {
  //   title: 'Linkedin',
  //   links: [
  //     { label: 'Badan Pusat Statistik', link: 'https://www.bps.go.id/id' },
  //     { label: 'Politeknik Statistika STIS', link: 'https://www.stis.ac.id/' },
  //   ],
  // },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        // target='_blank'
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer} id="about">
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Title>Network AI</Title>
          {/* <Text size="xs" c="dimmed" className={classes.description}>
            Himpunan Alumni Mahasiswa AIS - STIS
          </Text> */}
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Grid>
          <GridCol span={3}>
            <Text>Peserta 1</Text>
          </GridCol>
          <GridCol span={3}>
            <Text>Peserta 1</Text>
          </GridCol>
          
          <GridCol span={3}>
            <Text>Peserta 1</Text>
          </GridCol>
          
          <GridCol span={3}>
            <Text>Peserta 1</Text>
          </GridCol>
        </Grid>
        {/* <Text c="dimmed" size="sm">
          +62 812-7640-267 <IconPointFilled size={14}/> haisstis@stis.ac.id
        </Text> */}

        {/* <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap"> */}
          {/* <ActionIcon size="lg" color="gray" variant="subtle" component={Link} href="https://www.facebook.com/groups/91859526265" target="_blank">
            <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle" component={Link} href="https://www.instagram.com/haisstis_official/" target="_blank">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon> */}
        {/* </Group> */}
      </Container>
    </footer>
  );
}