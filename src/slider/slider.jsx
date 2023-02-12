import { memo } from "react"


function Slider({ src, children }) {
    return (
        <div className="py-2 px-2 flex justify-center items-center">
            <img src={src} alt="" width={50} height={50} />
            <div>
                {children}
            </div>
        </div>
    )
}
export default memo(Slider)