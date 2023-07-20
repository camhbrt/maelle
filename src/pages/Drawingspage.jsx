import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DrawingsGrid from '../components/DrawingsGrid';

const Drawingspage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header page="> Dessins"/>
            <DrawingsGrid/>
            <Footer/>
        </div>
    );
};

export default Drawingspage;