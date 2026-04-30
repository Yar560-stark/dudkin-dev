import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import Pricing from "./components/home/pricing"

const page = () => {
  return (
    <main>
      <HeroSection/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      <FeaturedWork/>
      <Divider/>
      <Pricing/>
      <Divider/>
    </main>
  )
}

export default page
