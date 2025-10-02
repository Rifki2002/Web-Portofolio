import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-white shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Muhammad Rifki Yohandy<span className="text-purple-600">.</span>
        </h1>
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-purple-600">Home</Link></li>
          <li><Link to="/projects" className="hover:text-purple-600">Projects</Link></li>
          <li><Link to="/about" className="hover:text-purple-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-purple-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
