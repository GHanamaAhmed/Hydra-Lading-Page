import { memo } from "react"


export default memo (function Introdaction() {


    return (
        <div className="md:flex py-10 relative overflow-hidden">
            <img className="absolute hidden md:block bg-transparent -z-10 w-full h-full top-1/2 -translate-y-1/2" alt="" src="./icons/Vector7.svg" />
            <img className="absolute hidden md:block bg-transparent -z-10 w-full h-full top-1/2 -translate-y-1/2" src="./icons/Vector8.svg" alt="" />
            
            <div className="flex flex-col items-center md:items-start md:pl-16 md:justify-around gap-y-3 mt-2 md:w-1/2 md:gap-y-20">
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-slate-100 text-3xl">INTRODUCTION</h1>
                    <div className="relative">
                        <p className="text-slate-100 text-xl">TO HYDRA VR</p>
                        <img className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-3/4 translate-x-1/2" src="./icons/fleshr1.svg" alt="" />
                    </div>
                </div>
                <img className="maskgroup w-4/6 md:w-4/6" src="/icons/Maskgroup2.svg" alt="" />
            </div>
            <div className="flex flex-col px-4 md:px-0 items-center md:items-start gap-y-10 mt-2 md:w-1/2">
                <p className="hidden md:block mr-5 text-slate-100 mb-10 text-justify">
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p>
                <div>
                <h1 className="text-slate-100 text-3xl font-bold">ABOUT</h1>
                <p className="text-slate-100 text-xl">HYDRA VR</p>
                </div>
                <p className="mr-5 text-slate-100 text-sm text-justify">Eget mi proin sed libero enim sed faucibus turpis. Nisl
                    rhoncus mattis rhoncus urna neque viverra justo. Vivamus
                    at augue eget arcu dictum. Ultrices gravida dictum fusce
                    ut placerat orci. Aenean et tortor at risus viverra adipisci
                    ng at in. Mattis aliquam faucibus purus in massa. Est
                    placerat in egestas erat imperdiet sed. Consequat sem
                    per viverra nam libero justo laoreet sit amet. Aliquam
                    etiam erat velit scelerisque in dictum non consectetur
                    a. Laoreet sit amet cursus sit amet. Vel eros donec ac
                    odio tempor orci dapibus. Sem nulla pharetra diam sit
                    amet nisl suscipit adipiscing bibendum. Leo a diam
                    sollicitudin tempor.
                </p>
                <button className="text-slate-900 font-semibold focus:bg-current py-3 px-10 mx-5 bg-gradient-to-r from-violet-600 to-violet-500 rounded-3xl">LET’S GET IN TOUCH</button>
            </div>
        </div>
    )
})