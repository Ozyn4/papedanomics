import { IntroArticles } from "@/components/IntroArticles/IntroArticles";
import { IntroRFM } from "@/components/IntroRFM/IntroRFM";
import { IntroHaisstis } from "@/components/IntroHaisstis/IntroHaisstis";
import { IntroUsers } from "@/components/IntroUsers/IntroUsers";
import { IntroMethod } from "@/components/IntroMethod/IntroMethod";

const HomePage = async () => {

  return (
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
 
  )
}

export default HomePage