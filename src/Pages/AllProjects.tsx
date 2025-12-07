import { NavbarDemo } from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import TextSummarizer from "../assets/FYPImages/textSummarize.webp"
import MysteryLetter from "../assets/FYPImages/mysteryLetter.jpg"
import Sentiment from "../assets/FYPImages/sentimentAnalysis.png"
import HelmetDetection from "../assets/FYPImages/helmetDetection.jpeg"
import waterSafety from "../assets/FYPImages/waterSafetyPrediction.png"


const projects = [
  {
    title: "Subway Surfer (C++ Game)",
    description:
      "Developed a 2D endless runner game inspired by Subway Surfer using C++ and OOP principles. Features include directional movement, obstacle generation, coin collection, magnet power-up, scoring system, and game-over logic for an immersive gameplay experience.",
    techStack: ["C++", "OOP", "Game Development", "File Handling"],
    image: "",
    github: ""
  },
  {
    title: "Text Summarizer",
    description:
      "A text summarization web application built using the T5 transformer model and deployed with Streamlit. Generates concise, meaningful summaries from long text inputs, demonstrating practical NLP applications and model deployment.",
    techStack: ["Python", "Transformers", "T5 Model", "NLP", "Streamlit"],
    image: TextSummarizer,
    github: ""
  },
  {
    title: "Mystery Letters (Word Guessing Game)",
    description:
      "Developed Mystery-Letters, a logic-driven word-guessing game where players deduce a secret two-letter combination using clues such as ‘Fermi,’ ‘Pico,’ and ‘Bagels.’ Players get 15 attempts, creating a fun mix of reasoning, deduction, and entertainment.",
    techStack: ["Python", "Logic Building", "Game Design"],
    image: MysteryLetter,
    github: ""
  },
  {
    title: "Movie Review Sentiment Analyzer",
    description:
      "Built a Streamlit web app that classifies movie reviews as positive or negative using NLP and deep learning models. Adapted from an open-source project, with enhanced interactivity and real-time prediction interface.",
    techStack: ["Python", "NLP", "Deep Learning", "Streamlit"],
    image: Sentiment,
    github: ""
  },
  {
    title: "Helmet Detection with YOLOv8",
    description:
      "Implemented a custom helmet detection system using YOLOv8 and Roboflow. Used transfer learning, custom dataset preparation, and data augmentation to achieve high detection accuracy on real-world visuals.",
    techStack: ["Python", "YOLOv8", "Roboflow", "Computer Vision", "Deep Learning"],
    image: HelmetDetection,
    github: ""
  },
  {
    title: "Water Safety Prediction Model",
    description:
      "Created a Streamlit-based Water Potability Prediction System using a trained ML classifier. The model evaluates multiple physicochemical properties — pH, hardness, chloramines, organic carbon, turbidity, etc. — to determine if water is safe for drinking.",
    techStack: ["Python", "Machine Learning", "Streamlit", "Data Preprocessing"],
    image: waterSafety,
    github: ""
  }
];


export default function AllProjects() {
  return (
    <div className="min-h-screen bg-[#FFE9D9] text-gray-900">
      <NavbarDemo />

      <section className="px-6 md:px-16 lg:px-24 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#FFB646]">All Projects</h1>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 border border-[#FFB646]"
            >
              <div className="h-40 w-full bg-[#FFB646]/20 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover rounded-xl"
                  />
                ) : (
                  <span>No Image</span>
                )}
              </div>

              <h2 className="text-xl font-semibold mb-2 text-[#FFB646]">{project.title}</h2>

              <p className="text-sm text-gray-700 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#FFB646]/20 text-[#FFB646] px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="inline-block mt-2 text-sm font-semibold text-[#FFB646] hover:text-[#E5942E] transition"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
