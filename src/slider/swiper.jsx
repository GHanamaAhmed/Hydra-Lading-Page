
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Slider from './slider';
import { memo, useEffect, useState } from 'react';
export default memo(function Swipers() {
    useEffect(() => {
        window.addEventListener("resize", () => { setWindowWidth(window.innerWidth) })
    }, [])
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    return (
        <div className="bg-gradient-to-r from-violet-900 via-violet-400 md:py-2 to-violet-900 rounded-full my-5 mx-3 md:mx-10">
            <Swiper modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={windowWidth <= 767 ? 1 : 3}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    enabled: true
                }}
            >
                <SwiperSlide className='h-full'>
                    <Slider src={"/icons/Location-Icon.svg"}>
                        <p className="text-xl hidden md:block text-slate-200">
                            Pay Us a Visit
                        </p>
                        <p className="text-sm text-violet-900">
                            Union St, Seattle, WA 98101, United States
                        </p>
                    </Slider>
                </SwiperSlide>
                <SwiperSlide className='h-full'>
                    <Slider src={"/icons/phone-call.svg"}>
                        <p className="text-xl hidden md:block text-slate-200">
                            Give Us a Call
                        </p>
                        <p className="text-sm text-violet-900">
                            (110) 1111-1010
                        </p>
                    </Slider>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider src={"/icons/mail.svg"}>
                        <p className="text-xl hidden md:block text-slate-200">
                            Send Us a Message
                        </p>
                        <p className="text-sm text-violet-900">
                            Contact@HydraVTech.com
                        </p>
                    </Slider>
                </SwiperSlide>
            </Swiper>
        </div>
    )
})