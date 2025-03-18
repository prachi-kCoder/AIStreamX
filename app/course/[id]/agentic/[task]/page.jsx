

// "use client";

// import { useParams } from "next/navigation";
// import { useState } from "react";
// import Image from "next/image";
// import Heading from "../../../../../components/Heading";
// import Section from "../../../../../components/Section";
// import Header from "../../../../../components/Header";

// const taskDetails = {
//   "foundation-of-genai": {
//     title: "Foundation of GenAI",
//     description: "Understanding Generative AI capabilities & real-world applications.",
//     imageUrl: "/courses/agentic/AIEvolution.png",
//     content: [
//       {
//         title: "What is Generative AI?",
//         detail: "Generative AI refers to models that create content such as text, images, and music by learning from vast datasets. These models use complex algorithms to generate new data that resembles existing data, enabling applications like text-to-image synthesis, music composition, and automated content creation.",
//         image: "/courses/agentic/GenAi.png",
//       },
//       {
//         title: "Evolution of AI models",
//         detail: "AI models have evolved significantly from rule-based systems to deep learning, transformers, and large language models like GPT-4. This evolution has enabled AI to perform tasks that were previously unimaginable, such as understanding natural language and generating coherent text.",
//         image: "/courses/agentic/AIEvolution.png",
//       },
//       {
//         title: "Understanding Neural Networks & Transformers",
//         detail: "Neural networks are computational models inspired by the human brain, capable of learning from data and improving over time. Transformers, a type of neural network, have revolutionized natural language processing (NLP) by enabling models to understand context and generate coherent text.",
//         image: "/courses/agentic/NeuralNet.png",
//       },
//       {
//         title: "Use cases in different industries",
//         detail: "Generative AI is transforming various industries such as healthcare, finance, education, and more. It enables automation, creativity, and innovation by generating personalized content, predicting outcomes, and automating repetitive tasks.",
//         image: "/courses/agentic/AiUsage.png",
//       },
//       {
//         title: "Core Components of AI",
//         detail: "The foundation of AI includes data and knowledge representation, algorithms, statistics and mathematics, neuroscience and cognitive science, and philosophy and ethics. These components work together to enable AI systems to learn, reason, and adapt.",
//         image: "/courses/agentic/AiComponents.png",
//       },
//       {
//         title: "Importance of AI",
//         detail: "AI is crucial for enhancing productivity, judgment, and quality of life. It offers solutions that can revolutionize entire sectors by providing insights, automating tasks, and improving decision-making processes.",
//         image: "/courses/agentic/AiImportance.png",
//       },
//     ],
//   },
//   "exp-with-ai": {
//     title: "Experiment with AI Capabilities",
//     detail: "Exploring and experimenting with AI capabilities is essential for understanding its potential and limitations. Here are some ways to experiment with AI applications and APIs.",
//     content: [
//       {
//         title: "Large Language Models (LLMs)",
//         detail: "Experiment with LLMs like GPT-4, Claude, or Llama to generate text, answer questions, and engage in conversations. These models can be accessed through platforms like OpenAI, Anthropic, or Meta.",
//         image: "/courses/agentic/LLMs.png",
//       },
//       {
//         title: "Image Generation",
//         detail: "Use AI tools like DALL-E or Midjourney to generate images from text prompts. These tools can create realistic images, artwork, and even videos.",
//         image: "/courses/agentic/ImageGen.png",
//       },
//       {
//         title: "Music Generation",
//         detail: "Experiment with AI music generators like AIVA, SoundGen, or BandLab to create music tracks. These tools allow you to input parameters like genre, tempo, and mood to generate unique music.",
//         image: "/courses/agentic/MusicGen.png",
//       },
//       {
//         title: "AI APIs and Providers",
//         detail: "Explore AI APIs from providers like OpenAI, Groq, Cohere, and others. These APIs offer access to various AI models and capabilities, allowing you to integrate AI into your projects.",
//         image: "/courses/agentic/AiAPIs.png",
//       },
//       {
//         title: "Project Ideas",
//         detail: "Formulate projects using AI APIs to automate tasks, generate content, or solve problems. For example, you can build a chatbot, create personalized content, or develop predictive models.",
//         image: "/courses/agentic/ProjectIdeas.png",
//       },
//       {
//         title: "Hands-on Learning",
//         detail: "Engage in hands-on learning by experimenting with AI tools and APIs. This practical experience will help you understand AI's capabilities and limitations, preparing you for real-world applications.",
//         image: "/courses/agentic/HandsOn.png",
//       },
//     ],
//   },
// };


// const AgenticTaskPage = () => {
//   const { task } = useParams();
//   const taskInfo = taskDetails[task];
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   if (!taskInfo) {
//     return <div className="text-center text-red-500">Task Not Found</div>;
//   }

//   return (
//     <Section>
//       <Header />
//       <div className="container flex flex-col items-center gap-10">
//         {/* Main Task Image */}
//         <div className="relative max-w-[40rem]">
//           <Image
//             className="rounded-2xl shadow-lg"
//             src={taskInfo.imageUrl}
//             width={500}
//             height={350}
//             alt={taskInfo.title}
//             priority
//           />
//         </div>

//         {/* Task Details */}
//         <div className="w-full max-w-4xl">
//           <Heading tag="Deep Dive into AI" title={taskInfo.title} />
//           <p className="text-gray-400 mb-6 text-center">{taskInfo.description}</p>
          
//           {/* Task Content - Expanding on Hover */}
//           <div className="space-y-6">
//             {taskInfo.content.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-4 bg-n-8 rounded-lg shadow-md cursor-pointer transition-all"
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <p className="text-white font-semibold">{item.title}</p>
//                 {hoveredIndex === index && (
//                   <div className="mt-3 p-4 bg-n-6 rounded-lg shadow-md flex items-center gap-4 transition-all">
//                     <Image src={item.image} width={80} height={80} alt={item.title} className="rounded-lg" />
//                     <p className="text-gray-300 text-sm">{item.detail}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default AgenticTaskPage;
"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Heading from "../../../../../components/Heading";
import Section from "../../../../../components/Section";
import Header from "../../../../../components/Header";
import { taskDetails } from "../../../../../components/constants";

const AgenticTaskPage = () => {
  const { task } = useParams();
  const taskInfo = taskDetails[task];
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!taskInfo) {
    return <div className="text-center text-red-500">Task Not Found</div>;
  }

  return (
    <Section>
      <Header />
      <div className="container flex flex-col items-center gap-10">
        {/* Main Task Image */}
        <div className="relative max-w-[50rem]">
          <Image
            className="rounded-2xl shadow-lg"
            src={taskInfo.imageUrl}
            width={650}
            height={450}
            alt={taskInfo.title}
            priority
          />
        </div>

        {/* Task Details */}
        <div className="w-full max-w-4xl">
          <Heading tag="Deep Dive into AI" title={taskInfo.title} />
          <p className="text-gray-400 mb-6 text-center">{taskInfo.description}</p>
          
          {/* Task Content - Click to Expand */}
          <div className="space-y-6">
            {taskInfo.content.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-n-8 border border-gray-600 rounded-lg shadow-md cursor-pointer transition-all flex items-center gap-4"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <span className="text-white text-xl">{expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
                <div className="flex-1">
                  <p className="text-white font-semibold text-lg">{item.title}</p>
                  {expandedIndex === index && (
                    <div className="mt-3 p-4 bg-n-6 border border-gray-500 rounded-lg shadow-md transition-all flex items-center gap-6">
                      <Image src={item.image} width={300} height={300} alt={item.title} className="rounded-lg" />
                      <div className="flex-1">
                        <p className="text-gray-300 text-sm">{item.detail}</p>
                        <p className="text-gray-400 text-xs mt-2">{item.extendedDetail}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AgenticTaskPage;