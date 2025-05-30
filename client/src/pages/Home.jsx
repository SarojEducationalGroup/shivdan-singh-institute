import React from 'react';
import Layout from '../components/Layout';
import campusImage from '../assets/HERO-IMAGE.jpg';
import Recruiters from './Recruiters';
// import Courses from './Courses';
import Placement from './Placement';
import WhyChooseUs from './WhyChooseUs.jsx';
import Hero from './Hero.jsx';
import VisionAndMission from './VisionAndMission.jsx';
import ChairmanMessage from './ChairmanMessage.jsx';
import AiLearningSection from './AiLearningSection.jsx';

function Home() {
  return (
    <Layout>

      <Hero />
      <AiLearningSection />
      <Recruiters />
      <WhyChooseUs />
      <ChairmanMessage />
      <Placement />
      <VisionAndMission />
      {/* <Courses /> */}
   
    </Layout>
  );
}

export default Home;