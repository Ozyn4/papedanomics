'use client'
import { Header } from '@/components/Header/Header';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Template({ children }: { children: React.ReactNode }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();


  return (
    <AppShell
      header={{ height: 60 }}
    >
      <AppShell.Header>
        <Header drawerOpened={mobileOpened} toggleDrawer={toggleMobile} />
      </AppShell.Header>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}