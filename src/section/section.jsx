import { memo, useState } from "react"

function Section() {

    return (<>
        <div className="flex flex-col items-center md:flex-row-reverse md:justify-around md:py-10">
            <img className="maskgroup w-5/6 md:w-2/6 mt-8 md:mr-16" src="./icons/Maskgroup.svg" alt="" />
            <img className="absolute bg-transparent -z-10 w-full md:w-1/3 h-full top-0 md:translate-x-1/2" src="./icons/line1.svg" alt="" />
            <img className="absolute bg-transparent -z-10 w-full md:w-1/3 h-full top-0 md:translate-x-1/2" alt="" src="./icons/line2.svg" />
            <img className="absolute bg-transparent -z-10 w-full md:w-1/2 h-full top-0 md:translate-x-1/2 md:translate-y-2/4" src="./icons/line3.svg" alt="" />
            <div className="flex flex-col items-center md:items-start md:px-20 gap-y-5 md:w-1/2">
                <div><p className="bg-gradient-to-r from-violet-400 to-violet-500 inline text-3xl text md:text-5xl font-bold">Dive</p><p className="text-slate-50 inline text-xl md:text-3xl"> Into The Depths</p></div>
                <div><p className="text-slate-50 inline text-xl md:text-3xl">Of </p><p className="bg-gradient-to-r font-bold to-violet-400 from-violet-500 inline text-3xl md:text-5xl text">Of Virtual Reality</p></div>
                <p className="hidden md:block text-slate-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                <button className="py-2 px-4 rounded-md bg-gradient-to-r from-violet-500 to-violet-400 text-slate-50">BUILD YOUR WORLD</button>
            </div>
        </div>
    </>)
}
export default memo (Section)