import { memo } from "react"

export default memo( function Card({url,title,children}) {


    return (
        <>
            <div className="card flex flex-col items-center py-6 my-2 mx-auto gap-y-3 rounded-3xl w-5/6">
                <div className="rounded-full bg-red-700 py-2 px-2 conainer-imgcard">
                    <img src={url} alt="" height={150} width={150} />
                </div>
                <h1 className="text-slate-100 text-md">{title}</h1>
                <div className="w-4/6 h-0.5 bg-violet-300 backdrop-blur backdrop-blur-lg drop-shadow-sm rounded-full"></div>
                <p className="text-xs text-slate-100 w-3/4 text-left">
                    {children}
                </p>
                <button className="py-2 px-10 mt-4 bg-gradient-to-r from-violet-400 to-violet-600 rounded-full transition hover:from-violet-600 hover:to-violet-400 ease-in-out hover:scale-110 hover:bg-indigo-500 duration-300">TRY IT NOW</button>
            </div>
        </>
    )

})