export default function Projects() {
  const projects = [
     {
      title: "Chill Streaming App",
      description: "A Simple Streaming App built with HTML and CSS",
      link: "https://github.com/Rifki2002/Chill-StreamingApp"
    },
    {
      title: "Flutter Final Project",
      description: "A Final Project for my Flutter developer Bootcamp.",
      link: "https://github.com/Rifki2002/finalprojectflutter"
    },
     {
      title: "Moni Clone",
      description: "Cloning a money manager app using Flutter.",
      link: "https://github.com/Rifki2002/moni-Clone"
    },
    {
      title: "React Streaming App",
      description: "Streaming App built with React and TailwindCSS with API integration and State Management.",
      link: "https://github.com/Rifki2002/React-Streaming-App"
    },
    {
      title: "RY Game Store",
      description: "A simple game store built with React.",
      link: "https://github.com/Rifki2002/RYgamestore"
    },
    {
      title: "To Do List",
      description: "A simple todo list app built with HTML, CSS, and JavaScript with local database.",
      link: "https://github.com/Rifki2002/To-Do-List"
    }
  ];
  return (
  <div className="pt-28 px-6 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((p) => (
        <div key={p.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="text-gray-600 mt-2">{p.description}</p>
          <a
            href={p.link}
            className="text-purple-600 hover:underline mt-4 block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  </div>
);

}
