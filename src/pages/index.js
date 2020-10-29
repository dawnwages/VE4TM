import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';

var settings = {
  images: [
    { url: require('../assets/images/1000x-1.jpg'), position: 'center' },
    { url: require('../assets/images/APRIL_1024x1024.png'), position: 'center' },
    { url: require('../assets/images/blm-protest-1.png'), position: 'center' },
    { url: require('../assets/images/f310276095386d4b6071271a87cab928.jpg'), position: 'center' },
    { url: require('../assets/images/FT-20.06.22_ProtesterDemographics_feature.jpg'), position: 'center' },
    { url: require('../assets/images/JL_6f2c8290-db3d-4710-8e31-41b8f7a4b038_1024x1024.jpg'), position: 'center' },
    { url: require('../assets/images/learning.jpg'), position: 'center' },
    { url: require('../assets/images/march on washinton copy.png'), position: 'center' },
    { url: require('../assets/images/MJ_1024x1024.jpg'), position: 'center' },
    { url: require('../assets/images/original.jpg'), position: 'center' },
    { url: require('../assets/images/Protesting-Sign.jpg'), position: 'center' },
    { url: require('../assets/images/racialdisparitiesteaser.jpg'), position: 'center' },
    { url: require('../assets/images/students-giving-each-other-high-five_53876-69820.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>
    <Header />
    <EmailForm />
    <Footer />
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;
