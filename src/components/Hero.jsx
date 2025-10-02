import nigru from "../assets/nigru.jpg";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-16">
        
        <div className="text-center md:text-left flex-1">
          <p className="text-xl md:text-2xl">
            Hey, I’m <span className="font-semibold">Rifki</span> 👋
          </p>
          
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mt-6">
            <span className="text-purple-600">Web</span> <br /> Developer
          </h1>
          
          <p className="text-gray-600 mt-8 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            I'm a Web developer based in Balikpapan. I’ll help you build beautiful websites your users will love.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <Link
            to="/contact"
            className="px-8 py-4 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition text-lg"
            >
            Get In Touch
            </Link>
           <Link
            to="/projects"
            className="px-8 py-4 rounded-lg border border-gray-400 font-semibold hover:border-purple-600 hover:text-purple-600 transition text-lg"
            >
            Browse Projects
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-8 border-purple-300 overflow-hidden shadow-lg">
           <img src={nigru} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
