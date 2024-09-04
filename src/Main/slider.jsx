import React, { useEffect } from 'react'


import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

// slider
import s1 from '../images/slider/1.png'
import s2 from '../images/slider/2.png'
import s3 from '../images/slider/3.png'
import s4 from '../images/slider/4.png'
import s5 from '../images/slider/5.png'
import s6 from '../images/slider/6.png'

// Default theme
import '@splidejs/react-splide/css';


export default function Slider() {
    useEffect(() => {
        let slider = document.querySelector('.splide__track')
        console.log(slider);
    }, [])


    return (
        <div className="wrapper">
            <center>
                <Splide options={{
                    type: 'loop',
                    perPage: 5,
                    focus: 'center',
                    autoplay: 'play',
                    speed: '700',
                    breakpoints: {
                        1200: {
                            perPage: 3,

                        },
                        767: {
                            perPage: 2,

                        },
                        640: {
                            perPage: 1,

                        },
                    },
                }} aria-label="My Favorite Images" hasTrack={false}>
                    <div>
                        <SplideTrack>
                            <SplideSlide>
                                <img data-aos="zoom-in-down" data-aos-duration="800" src={s1} alt="Image 1" style={{ height: '80px' }} />
                            </SplideSlide>
                            <SplideSlide>
                                <img data-aos="zoom-in-down" data-aos-duration="800" src={s2} alt="Image 2" style={{ height: '80px' }} />
                            </SplideSlide>
                            <SplideSlide>
                                <img data-aos="zoom-in-down" data-aos-duration="800" src={s3} alt="Image 3" style={{ height: '80px' }} />
                            </SplideSlide>
                            <SplideSlide>
                                <img data-aos="zoom-in-down" data-aos-duration="800" src={s4} alt="Image 4" style={{ height: '80px' }} />
                            </SplideSlide>
                            <SplideSlide>
                                <img data-aos="zoom-in-down" data-aos-duration="800" src={s5} alt="Image 5" style={{ height: '80px' }} />
                            </SplideSlide>
                            <SplideSlide>
                                <img data-aos="zoom-in-down" data-aos-duration="800" src={s6} alt="Image 6" style={{ height: '80px' }} />
                            </SplideSlide>
                        </SplideTrack>
                    </div>
                </Splide>
            </center>
        </div>
    )
}