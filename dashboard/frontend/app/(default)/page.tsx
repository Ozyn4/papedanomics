import { Footer } from "@/components/Footer/Footer";
import HomeArticles from "@/components/HomeArticles/HomeArticles";
import HomeCourses from "@/components/HomeCourses/HomeCourses";
import HomeUser from "@/components/HomeUser/HomeUser";
import { IntroArticles } from "@/components/IntroArticles/IntroArticles";
import { IntroRFM } from "@/components/IntroRFM/IntroRFM";
import { IntroCourses } from "@/components/IntroCourses/IntroCourses";
import { IntroHaisstis } from "@/components/IntroHaisstis/IntroHaisstis";
import { IntroUsers } from "@/components/IntroUsers/IntroUsers";
import { getServerAuthSession } from "@/lib/auth";
import { Container, Space } from "@mantine/core";
import { IntroMethod } from "@/components/IntroMethod/IntroMethod";

const HomePage = async () => {
  const authSession = await getServerAuthSession();
  const user = authSession?.user || undefined

  return (
    <>
    {user &&
      <Container mt="md">
        <HomeUser user={user} />
        <Space h="md"/>
        <HomeCourses />
        <Space h="md"/>
        <HomeArticles />
        <Space h="xl"/>
      </Container>
    }
    {!user &&
      <>
        <IntroHaisstis />
        <IntroMethod />
        <IntroArticles />
        <IntroRFM />
        <IntroUsers />
        {/* Chart Anggota */}
        {/* <IntroCourses /> */}
        {/* <Footer /> */}
      </>
    }
    </>
  )
}

export default HomePage