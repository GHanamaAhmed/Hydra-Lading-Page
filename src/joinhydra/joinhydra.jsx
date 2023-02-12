import { memo, useRef } from "react"
import axios from 'axios'
export default memo(function Joinhydra() {

    return (
        <div className="w-full my-5 flex items-center justify-center">
            <div className="md:w-6/12 mx-4 card-join py-8 px-5 grid grid-cols-2 flex-col gap-y-3 gap-x-1 rounded-xl">
                <div className="flex col-span-2 flex-col items-center gap-y-2">
                    <p className="text-slate-100 font-semibold font-mono text-xl md:text-3xl">JOIN HYDRA</p>
                    <img className="w-full md:w-1/2 my-2" src="./icons/Vector17.svg" alt="" />
                    <p className="text-slate-100 font-mono text-md md:text-xl">Let’s Build </p>
                    <p className="text-slate-100 font-mono text-md md:text-xl">Your VR Experience</p>
                </div>
                <input className="bg-transparent col-span-2 md:col-span-1 border-slate-200 border rounded-full border-2 py-2 pl-5 placeholder:font-mono focus:outline-none focus:border-slate-200 text-slate-200" type="text" placeholder="First Name" />
                <input className="bg-transparent col-span-2 md:col-span-1 border-slate-200 border rounded-full border-2 py-2 pl-5 placeholder:font-mono focus:outline-none focus:border-slate-200 text-slate-200" type="text" placeholder="Last Name" />
                <input className="bg-transparent col-span-2 md:col-span-1 border-slate-200 border rounded-full border-2 py-2 pl-5 placeholder:font-mono focus:outline-none focus:border-slate-200 text-slate-200" type="email" placeholder="Email" name="Email" />
                <input className="bg-transparent col-span-2 md:col-span-1 border-slate-200 border rounded-full border-2 py-2 pl-5 placeholder:font-mono focus:outline-none focus:border-slate-200 text-slate-200" type="tel" n placeholder="Phone Number" ame="Tel" />
                <input className="bg-transparent col-span-2 border-slate-200 border rounded-full border-2 py-2 pl-5 placeholder:font-mono focus:outline-none focus:border-slate-200 text-slate-200" type="text" placeholder="Subject" />
                <textarea className="bg-transparent col-span-2 pl-5 border-slate-200 border rounded-lg py-2 border-2 placeholder:font-mono focus:outline-none focus:border-slate-200 text-slate-200" name="Textarea" cols="30" rows="10" placeholder="Tell Us Something..."></textarea>
                <button className="py-2 px-10 mt-4 col-span-2 bg-gradient-to-r from-violet-400 to-violet-600 rounded-full transition font-mono font-medium">SEND TO HYDRA</button>
            </div>
        </div>
    )
})