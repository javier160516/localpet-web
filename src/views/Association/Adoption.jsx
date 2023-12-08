import React from 'react'
import Header from '../../components/templates/Header';
import Footer from '../../components/templates/Footer';
import Photos from '../../helpers/CarouselAdop';
import Text from '../../helpers/CarouselAdopText';

const Adoption = () => {
    return (
        <div className="bg-[#FAFAFA] w-full">
            <Header />
            <div className='grid grid-flow-col place-content-center gap-20 PhotosPet'>
            <Photos />
                <div className="row-span-2 ..."><Text /></div>
            </div>
            <Footer />
        </div>
    )
}

export default Adoption
