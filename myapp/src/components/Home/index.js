import "./index.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import AnimatedLetters from "../AnimatedLetters"
import Logo from './Logo'
import Loader from "react-loaders"

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = ['a', 'v','e','e','n']
    const jobArray = ['F','u','l','l','-','s','t','a','c','k',' ','d','e','v','e','l','o','p','e','r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br/> 
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m,</span> 
                    <FontAwesomeIcon icon="fa-solid fa-n" spin style={{color: "#ffd700"}}  className="img"/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                    />
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}
                    />
                </h1>
                <h2>expert in Frontend development and Full-stack development.</h2>
                <Link className="flat-button" to="/contact">CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home