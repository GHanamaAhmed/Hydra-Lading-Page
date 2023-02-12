import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, A11y } from "swiper"
import Card from "./card";
import "swiper/css";
import { useEffect, useState } from "react";
export default function Swapers() {
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
            <SwiperSlide >
                <div className="flex justify-center items-center flex-col">
                    <Card label0="01" label1="3D Conception" label2="& Design" />
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="flex justify-center items-center flex-col">
                    <Card label0="02" label1="Interaction" label2="Design" />
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="flex justify-center items-center flex-col">
                    <Card label0="03" label1="VR World" label2="User Testing" />
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="flex justify-center items-center flex-col">
                    <Card label0="04" label1="Hydra VR" label2="Deploy" />
                </div>
            </SwiperSlide>
            <div className="next rounded-full absolute p-1 flex justify-center items-center bottom-0 right-3 z-10 bg-black bg-opacity-20 md:hidden">
                <div className="rounded-full h-8 w-8 flex justify-center items-center bg-gradient-to-r from-purple-400 to-purple-500">
                    <img src="./icons/outline/shape.png" alt="" height={10} width={10} />
                </div>
            </div>
            <div className="prev rounded-full absolute p-1 flex justify-center items-center bottom-0 left-3 z-10 bg-black bg-opacity-20 md:hidden">
                <div className="rounded-full h-8 w-8 flex justify-center items-center bg-gradient-to-r from-purple-400 to-purple-500">
                    <img src="./icons/outline/shape-1.png" alt="" height={10} width={10} />
                </div>
            </div>
        </Swiper>
    )
}