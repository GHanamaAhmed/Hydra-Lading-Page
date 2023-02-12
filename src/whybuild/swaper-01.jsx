import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, A11y } from "swiper"
import Card from "./card";
import "swiper/css";
import { useEffect, useState } from "react";
export function Swapers() {
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [])
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    return (
        <Swiper className="relative w-11/12" modules={[Navigation, A11y]}
            navigation={{
                nextEl: '.next',
                prevEl: '.prev',
                enabled: true,
            }}
            spaceBetween={0}
            slidesPerView={windowWidth <= 767 ? 1 : 4}
        >
            <SwiperSlide className="pt-10" >
                <div className="flex h-full w-full justify-center items-center">
                    <img src="/icons/Hydra-Tech1.png" width={160} height={80} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="pt-10" >
                <div className="flex h-full w-full justify-center items-center">
                    <img src="/icons/Hydra-Tech2.png" width={160} height={80} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="pt-10" >
                <div className="flex w-full h-full justify-center items-center">
                    <img src="/icons/Hydra-Tech3.png" width={160} height={80} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="pt-10" >
                <div className="flex h-full w-full justify-center items-center">
                    <img src="/icons/Hydra-Tech4.png" width={160} height={80} alt="" />
                </div>
            </SwiperSlide>
            <div className="next rounded-full absolute p-1 flex justify-center items-center top-1/2 right-3 z-10 bg-black bg-opacity-20 md:hidden">
                <div className="rounded-full h-8 w-8 flex justify-center items-center bg-gradient-to-r from-purple-400 to-purple-500">
                    <img src="/icons/outline/shape.png" alt="" height={10} width={10} />
                </div>
            </div>
            <div className="prev rounded-full absolute p-1 flex justify-center items-center top-1/2 left-3 z-10 bg-black bg-opacity-20 md:hidden">
                <div className="rounded-full h-8 w-8 flex justify-center items-center bg-gradient-to-r from-purple-400 to-purple-500">
                    <img src="/icons/outline/shape-1.png" alt="" height={10} width={10} />
                </div>
            </div>
        </Swiper>
    )
}