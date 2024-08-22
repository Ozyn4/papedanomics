'use client'
import {
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  List,
  rem, ScrollArea,
  Text,
  ThemeIcon, Tooltip
} from '@mantine/core';
import { IconLogin, IconLogout, IconQuestionMark } from '@tabler/icons-react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import classes from './Header.module.css';

export function Header({ user, drawerOpened, toggleDrawer } : { user: any, drawerOpened: any, toggleDrawer : any }) {
  const router = useRouter();
  user=''
  // const handleLogout = async () => {
  //   await signOut({ callbackUrl: '/' });
  // }

  return (
    <>
      <Group justify="space-between" h="100%" px="lg">
        <Text size="md" fw={700} c={"rgb(7,89,133)"} style={{'fontFamily':'sans-serif'}}>Network AI</Text>
        {/* {user &&
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/courses" className={classes.link}>
              Pengembangan Kompetensi
            </a>
            <a href="/articles" className={classes.link}>
              Artikel
            </a>
            {user?.roles.includes('superadmin', 'reviewer', 'admin') &&
              <a href="/admin" className={classes.link}>
                Admin
              </a>
            }
          </Group>
        } */}
        {!user &&
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#home" className={classes.link}>
              Beranda
            </a>
            <a href="#sentimen" className={classes.link}>
              Analisis Sentimen
            </a>
            <a href="#rfm" className={classes.link}>
              RFM
            </a>
            <a href="#maps" className={classes.link}>
              Peta DTW
            </a>
            <a href="#about" className={classes.link}>
              Tentang Kami
            </a>
          </Group>
        }
        <Group visibleFrom="sm">
        </Group>
        <Burger onClick={toggleDrawer} hiddenFrom="sm" />
      </Group>
    </>
  );
}
