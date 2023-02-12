import { memo, useCallback, useState } from 'react'
import Nav from './nav'
function Navbar() {
    const [display, setDisplay] = useState("hidden")
    const handle = useCallback(() => {
        setDisplay((display => display == "hidden" ? "" : "hidden"))
    }, [setDisplay])
    return (<>
        <Nav onClick={handle} />
        <div className={`absolute w-full h-full ${display} bg-black bg-opacity-60`}>
            <ul className='w-full text-center'>
                <li className='text-slate-300 py-4'><a href="#">About</a></li>
                <li className='text-slate-300 py-4'><a href="#">Service</a></li>
                <li className='text-slate-300 py-4'><a href="#">Technologi</a></li>
                <li className='text-slate-300 py-4'><a href="#">How to</a></li>
            </ul>
        </div>
    </>
    )
}

export default memo(Navbar)