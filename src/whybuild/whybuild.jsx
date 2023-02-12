import { memo } from "react";
import Card from "./card";
import Swapers from "./swaper";
import { Swapers as Swapers1 } from "./swaper-01";


export default memo (function Whybuild() {
    return (
        <div className="md:flex py-10 md:flex-col justify-around md:items-start">
            <div className="flex flex-col items-center gap-y-3 mt-2 md:flex-row justify-around md:items-start ">
                <div className="flex flex-col items-center md:items-start md:w-1/2 md:ml-10">
                    <h1 className="text-slate-100 text-3xl font-mono">WHY BUILD</h1>
                    <p className="text-slate-100 text-lg font-mono relative">
                        WITH HYDRA?
                        <img className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-3/4 translate-x-1/2" src="./icons/fleshr1.svg" alt="" /></p>
                </div>
                <p className="hidden md:block mx-5 text-slate-100 mb-10 md:w-1/2 text-justify">
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Swapers />
            </div>
            <div className="rounded-full ff overflow-hidden mx-auto w-11/12 h-24 relative mt-5 md:mt-16 md:h-48">
                <div className="w-full h-full bg-black opacity-40"></div>
                <div className="absolute flex items-center justify-center flex-col top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full">
                    <p className="text-slate-100 font-semibold font-mono md:text-xl">TECHNOLOGIES & HARDWARE</p>
                    <p className="text-slate-100 font-mono md:text-lg">USED BY HYDRA VR.</p>
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
                <Swapers1 />
            </div>
        </div>
    )
})