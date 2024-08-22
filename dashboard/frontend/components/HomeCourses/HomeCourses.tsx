'use client'
import { Button, Group, Title } from "@mantine/core"
import { IconArrowRight } from "@tabler/icons-react"
import { CardsCarousel } from "../CardsCarousel/CardsCarousel"

const HomeCourses = () => {
  return (
    <>
      <Group justify="space-between" mb="sm">
        <Title order={2} my="lg">Pengembangan Kapasitas Alumni</Title>
        <Button type="button" size="xs" bg="gray" radius={100} rightSection={<IconArrowRight />} onClick={() => alert('Lihat lebih banyak pengembangan kompetensi alumni')}>
          Lihat lebih banyak
        </Button>
      </Group>
      <CardsCarousel />
    </>
  )
}

export default HomeCourses