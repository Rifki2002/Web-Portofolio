import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="min-h-screen px-10 py-25 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-12">About Me</h2>

      <div className="text-center md:text-left mb-12">
        <p className="text-lg text-gray-700 leading-relaxed text-[26px]">
          Hey! I’m <span className="font-semibold">Muhammad Rifki Yohandy</span>, a Web developer based in Balikpapan.  
          I am always a curious person and enjoy building user-friendly websites and applications.  
          My goal is to create digital products that are not only functional but also delightful to use.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-[25px] font-semibold mb-6">Skills & Tools</h3>
        <div className="flex flex-wrap gap-4">
  {["React", "Tailwind CSS", "JavaScript", "Firebase", "Git", "Flutter", "getX"].map((skill) => (
    <span
      key={skill}
      className="px-4 py-2 bg-purple-100 text-purple-600 rounded-[15px] font-medium 
                 transform transition duration-300 hover:scale-110 hover:bg-purple-600 hover:text-white"
    >
      {skill}
    </span>
  ))}
</div>
      </div>
      <div className="mb-12">
        <h3 className="text-[25px] font-semibold mb-6">A Little More About Me</h3>
        <p className="text-[25px] text-gray-700 leading-relaxed">
          When I’m not coding, I love gaming, and watching movies.  
          I also enjoy exploring new tech trends and learning about various programming method.
        </p>
      </div>
      <div className="text-center mt-12">
        <Link
          to="/contact"
          className="px-8 py-4 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
        >      
        Let’s Work Together 🚀
        </Link>
      </div>
    </section>
  );
}
