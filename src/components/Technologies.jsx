import { FaGithub } from "react-icons/fa"
import { RiJavaFill, RiJavascriptFill, RiReactjsLine, RiWordpressFill } from "react-icons/ri"
import { SiPython, SiSelenium, SiTypescript } from "react-icons/si"

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavaFill className="text-7xl text-orange-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSelenium className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl text-blue-300"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript className="text-7xl text-blue-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl text-black"/>
            </div>
        </div>
    </div>
    
  )
}

export default Technologies