import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Partners from '../components/home/Partners';
import CourseGrid from '../components/home/CourseGrid';
import Welcome from "../components/home/Welcome"
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Welcome/>
      <WhyChooseUs/>
      <Partners />
      <CourseGrid />
    </>
  );
}