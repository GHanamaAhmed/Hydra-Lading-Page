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
        <Swiper className="relative" modules={[Navigation, A11y]}
            navigation={{
                nextEl: '.next',
                prevEl: '.prev',
                enabled: true,
            }}
            spaceBetween={0}
            slidesPerView={windowWidth <= 767?1:4}
        >
            <SwiperSlide >
                <Card url={"/icons/Maskgroup-0.png"} title={"SIMULATION"}>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus
                    libero justo laoreet sit amet vitae.
                </Card>
            </SwiperSlide>
            <SwiperSlide >
                <Card url={"/icons/Maskgroup-1.png"} title={"EDUCATION"}>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus
                    libero justo laoreet sit amet vitae.
                </Card>
            </SwiperSlide>
            <SwiperSlide >
                <Card url={"/icons/Maskgroup-2.png"} title={"SELF-CARE"}>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus
                    libero justo laoreet sit amet vitae.
                </Card>
            </SwiperSlide>
            <SwiperSlide >
                <Card url={"/icons/Maskgroup-3.png"} title={"OUTDOOR"}>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus
                    libero justo laoreet sit amet vitae.
                </Card>
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