import { memo } from "react"

export default memo( function Card({ label0, label1, label2 }) {


    return (
        <>
            <div className="rounded-full p-3 flex justify-center flex-col items-center z-10 bg-black bg-opacity-10">
                <div className="rounded-full h-24 w-24 flex justify-center items-center bg-gradient-to-r from-purple-400 to-purple-500">
                    <p className="text-zinc-700 text-5xl font-bold">{label0}</p>
                </div>
            </div>
            <div className="relative">
                <p className="font-semibold text-slate-100 font-mono">{label1}</p>
                <p className="font-semibold text-slate-100 font-mono">{label2}</p>
                <img className="absolute hidden md:block -top-2  left-0 -translate-x-full" src="/icons/arrow-small-right.svg" alt="" height={20} width={40} />
            </div>
        </>
    )

})