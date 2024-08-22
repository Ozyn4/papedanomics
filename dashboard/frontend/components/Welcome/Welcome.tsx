import { Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome({ user } : { user: any }) {
  return (
    <>
      <Title className={classes.title} ta="center" mt={80}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          HAISSTIS
        </Text>
        {user &&
          <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'green' }}>
            , {user.fullname} !
          </Text>
        }
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        HAISSTIS adalah himpunan alumni AIS - STIS
      </Text>
    </>
  );
}
