import { NavbarDemo, HeroSection } from '../components/Navbar'
import ResumeSection from "../components/ResumeSection"
import ProjectSection from '../components/ProjectSection'
import FooterSection from '../components/FooterSection';
import ContactMe from '../components/ContactMe';

const Home = () => {
  return (
       <>
    <div className="relative w-full bg-[#FFE9D9]">
    <NavbarDemo />
    <HeroSection />
    </div>
    <div className='w-full max-w-7xl items-center justify-center mx-auto pt-20'>
    <ResumeSection />
    </div>
    <ProjectSection />
    <ContactMe />
    <FooterSection />
    </>
  )
}

export default Home