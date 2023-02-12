import { memo } from "react";
import Card from "./card";
import Swapers from "./swaper";
export default memo (function Howbuild() {
    return (
        <div className="md:flex py-10 md:gap-y-10 gap-y-5 md:flex-col justify-around md:items-start">
            <div className="flex flex-col items-center gap-y-3 mt-2 md:flex-row justify-around md:items-start ">
                <div className="flex flex-col items-center md:items-start md:w-1/2 md:ml-10">
                    <h1 className="text-slate-100 text-3xl font-mono">HOW BUILD</h1>
                    <p className="text-slate-100 text-lg relative font-mono">
                        WITH HYDRA VR?
                        <img className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-3/4 translate-x-1/2" src="./icons/fleshr1.svg" alt="" /></p>
                </div>
                <p className="hidden md:block mx-5 text-slate-100 mb-10 md:w-1/2 text-justify">
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p>
            </div>
            <div className="flex justify-center items-center w-full relative">
                <Swapers />
                <img className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-2/3 hidden md:block" src="./icons/Vector15.svg" alt="" />
            </div>

        </div>
    )
})