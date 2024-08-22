'use client'
import { Header } from '@/components/Header/Header';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useSession } from 'next-auth/react';

export default function Template({ children }: { children: React.ReactNode }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const { data: session, status } = useSession();
  const user = session ? session.user : null;

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
    >
      <AppShell.Header>
        <Header user={user} drawerOpened={mobileOpened} toggleDrawer={toggleMobile} />
      </AppShell.Header>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}