import { memo } from "react";


export default memo(
    function Footer() {
        return (
            <>
                <div className="flex w-full flex-col items-center md:flex-row md:justify-around py-5 relative">
                    <img className="hidden md:block absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 -z-10" src="/icons/Vector19.svg" alt="" />
                    <img className="hidden md:block absolute top-1/2 right-1/2 -translate-y-2/3 translate-x-1/2 -z-10" src="/icons/Vector18.svg" alt="" />
                    <img src="/icons/Frame.svg" height={150} width={150} alt="" />
                    <img className="hidden md:block h-36" src="/icons/Vector22.svg" alt="" />
                    <div className="hidden md:block flex flex-col justify-between">
                        <p className="text-slate-100 font-mono text-md md:text-lg">ABOUT</p>
                        <p className="text-slate-100 font-mono text-md md:text-lg">SERVICES</p>
                        <p className="text-slate-100 font-mono text-md md:text-lg">TECHNOLOGIES</p>
                        <p className="text-slate-100 font-mono text-md md:text-lg">HOW TO</p>
                        <p className="text-slate-100 font-mono text-md md:text-lg">JOIN HYDRA</p>
                    </div>
                    <img className="hidden md:block h-36" src="/icons/Vector22.svg" alt="" />
                    <div className="hidden md:block  flex flex-col justify-between">
                        <p className="text-slate-100 font-mono text-md md:text-lg">F.A.Q</p>
                        <p className="text-slate-100 font-mono text-md md:text-lg">SITEMAP</p>
                        <p className="text-slate-100 font-mono text-md md:text-lg">CONDITIONS</p>
                        <p className="text-slate-100 font-mono text-md md:text-lg">LICENSES</p>
                    </div>
                    <img className="hidden md:block h-36" src="/icons/Vector22.svg" alt="" />
                    <div className="flex flex-col items-center gap-y-6">
                        <p className="text-slate-100 font-mono text-md md:text-xl">SOCIALIZE WITH HYDRA</p>
                        <div className="flex justify-center gap-x-4">
                            <a href=""> <img src="/icons/facebook.svg" alt="" /></a>
                            <a href=""> <img src="/icons/pinterest.svg" alt="" /></a>
                            <a href=""> <img src="/icons/twitter.svg" alt="" /></a>
                            <a href=""> <img src="/icons/linkedin.svg" alt="" /></a>
                            <a href=""> <img src="/icons/instagram.svg" alt="" /> </a>
                            <a href=""> <img src="/icons/youtube.svg" alt="" /></a>
                        </div>
                        <button className="py-2 px-10 mt-4 col-span-2 bg-gradient-to-r from-violet-400 to-violet-600 rounded-full transition font-mono font-medium">BUILD YOUR WORLD</button>
                    </div>
                    <div className="hidden md:block"></div>
                    <div className="hidden md:block"></div>
                </div>
                <div className="flex flex-col items-center gap-y-10 my-3 py-10">
                    <img className="w-full" src="/icons/Vector17.svg" alt="" />
                    <p className="text-slate-100 font-mono text-md md:text-md text-center w-3/6">
                        2023 © HYDRA LANDING PAGE
                        BY ZINE. E. FALOUTI
                        ALL RIGHTS RESERVED
                    </p>
                </div>
            </>
        )
    }
)