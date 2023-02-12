import { memo } from "react"


export default memo (function Nav({onClick}) {
    return (
        <>
          <div className='w-full flex justify-between pb-4 mt-10'>
            <div className="ml-4 w-1/3">
                <a href='#'><img className='inline' src="/icons/logo.svg" alt="" width={"50"} height={"50"} /></a>
                <a href='#'><img className='inline ml-2' src="/icons/title.svg" alt="" width={"50"} height={"50"} /></a>
            </div>
            <div className="mr-2 md:hidden" onClick={onClick}>
                <img src="/icons/menu.svg" alt="" width={"40"} height={"40"} />
            </div>
            <div className='hidden justify-around md:flex md:w-full pt-2'>
                <ul className='flex justify-around w-3/6'>
                    <li className='inline-block text-slate-300'><a href="#">About</a></li>
                    <li className='inline-block text-slate-300'><a href="#">Service</a></li>
                    <li className='inline-block text-slate-300'><a href="#">Technologi</a></li>
                    <li className='inline-block text-slate-300'><a href="#">How to</a></li>
                </ul>
                <div className='inline-block'>
                    <a href='#' className='mr-4 bg-transparent text-slate-300 border border-2 rounded-md border-solid border-slate-300 py-2 px-4'>contact us</a>
                    <a href='#' className='bg-transparent text-slate-300 border border-2 rounded-md border-solid border-slate-300 py-2 px-4'>going hydra</a>
                </div>
            </div>
        </div>  
        </>
    )
})