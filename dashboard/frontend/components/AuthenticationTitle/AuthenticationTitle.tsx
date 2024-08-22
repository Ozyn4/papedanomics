'use client'
import {
  Anchor,
  Button,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { FormEventHandler } from 'react';
import classes from './AuthenticationTitle.module.css';

type Props = {
  inputs: InputLoginData;
  handleChange: FormEventHandler;
  handleSubmit: FormEventHandler;
}

export function AuthenticationTitle({inputs, handleChange, handleSubmit}: Props) {
  const router = useRouter();

  return (
    <Container size={420} mt={"120"}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button" onClick={() => router.push("/register")}>
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
        <TextInput
          id="email"
          name="email"
          label="Username"
          placeholder="username"
          required
          value={inputs.email || ""}
          onChange={handleChange}
        />
        <PasswordInput
          id="password"
          name="password"
          label="Password"
          placeholder="password"
          required
          value={inputs.password || ""}
          onChange={handleChange}
        />
        <Group justify="space-between" mt="lg">
          <Anchor component="button" size="sm" onClick={() => router.push("/forgot-password")}>
            Forgot password?
          </Anchor>
        </Group>
        <Group>
          <Button type="submit" fullWidth mt="lg">
            Sign in
          </Button>
        </Group>
        </form>
      </Paper>
    </Container>
  )
}
