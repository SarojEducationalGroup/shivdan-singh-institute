import React from 'react';
import Layout from '../components/Layout';
import Recruiters from './Recruiters';
import Placement from './Placement';
import WhyChooseUs from './WhyChooseUs.jsx';
import Hero from './Hero.jsx';
import VisionAndMission from './VisionAndMission.jsx';
import ChairmanMessage from './ChairmanMessage.jsx';
import AiLearningSection from './AiLearningSection.jsx';
import  InstagramEmbed  from '../components/InstagramEmbed.jsx';
import AdmissionsOpen from '../components/AdmissionsOpen.jsx';
import Flash from '../components/Flash.jsx';

function Home() {
  return (
    <Layout>

      <Hero />
      <AiLearningSection />
      <Recruiters />
      <AdmissionsOpen />
      <Flash/>
      <WhyChooseUs />
      <ChairmanMessage />
      <Placement />
      <VisionAndMission />
      <InstagramEmbed />
      {/* <Courses /> */}
   
    </Layout>
  );
}

export default Home;