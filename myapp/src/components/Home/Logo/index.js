import { useEffect, useRef } from "react"
import "./index.scss"
import log from "../../../assets/images/log.svg"
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin"
import gsap from 'gsap-trial'


const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef= useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duaration: 1,
            opacity: 1
        })

        .from(solidLogoRef.current, {
            drawSVG: 0,
            duration: 20
        })

        gsap.fromTo(
            outlineLogoRef.current,
            {
                opacity: 0
            }, {
                opacity: 1, 
                delay: 4,
                duration: 4
            }
        )
        
    }, [])
    
    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} src={log} alt="N" className="solid-logo"/>
            <svg
                width="575pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                className="svg-container"
                transform="translate(0 457) scale(.1 .-1)"
                fill="none"
                >
                <path ref={outlineLogoRef} d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32V448c0 13.5-8.4 25.5-21.1 30.1s-26.9 .7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 50.5 8.4 38.5 21.1 33.9z"/>
                </g>
            </svg>
        </div>
    )
}

export default Logo