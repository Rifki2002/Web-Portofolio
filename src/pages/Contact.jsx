import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg text-gray-600 mb-12">
        Feel free to reach out to me via any of the platforms below 👇
      </p>

      <div className="flex justify-center gap-12 flex-wrap">
        <a
          href="https://github.com/Rifki2002"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-700 hover:text-black transition-transform transform hover:scale-110"
        >
          <FaGithub size={50} />
          <span className="mt-2 text-lg">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-rifki-yohandy-7296b62b4/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={50} />
          <span className="mt-2 text-lg">LinkedIn</span>
        </a>

        <a
          href="mailto:rifkiyohandy2002@email.com"
          className="flex flex-col items-center text-gray-700 hover:text-red-500 transition-transform transform hover:scale-110"
        >
          <MdEmail size={50} />
          <span className="mt-2 text-lg">Email</span>
        </a>

        <a
          href="https://wa.me/625654066694"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-700 hover:text-green-500 transition-transform transform hover:scale-110"
        >
          <FaWhatsapp size={50} />
          <span className="mt-2 text-lg">WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
