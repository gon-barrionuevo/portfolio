import gonOficina from "../assets/gon-oficina.jpg"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="text-white my-20 text-center text-4xl">About me</h2>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img src={gonOficina} alt="about" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default About