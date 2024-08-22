"use client"
import { ActionIcon, Group, Text, rem } from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './FooterCentered.module.css';

export function FooterCentered() {
  return (
    <div className={classes.inner}>
      <Group h="100%" gap={5} visibleFrom="sm">
        <Text size="md" fw={700} c={"rgb(7,89,133)"} style={{'fontFamily':'sans-serif'}}>HAISSTIS</Text>
      </Group>

      <Group h="100%" gap={5} visibleFrom="sm">
        <Text size="md" c="dimmed" fw={700} style={{'fontFamily':'sans-serif'}}>
          Copyright © 2024 Network AI
        </Text>
      </Group>

      <Group gap="xs" justify="flex-end" wrap="nowrap">
        {/* <ActionIcon size="lg" variant="default" radius="xl" component={Link} href="https://www.instagram.com/haisstis_official/" target="_blank">
          <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon> */}
      </Group>
    </div>
  );
}
