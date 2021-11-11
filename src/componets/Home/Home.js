import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import DownBanner from './DownBanner/DownBanner';
import Footer from './Footer/Footer';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <DownBanner></DownBanner>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;