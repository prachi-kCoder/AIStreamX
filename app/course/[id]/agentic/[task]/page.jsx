"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Heading from "../../../../../components/Heading";
import Section from "../../../../../components/Section";
import Header from "../../../../../components/Header";

const taskDetails = {
  "foundation-of-genai": {
    title: "Foundation of GenAI",
    description: "Understanding Generative AI capabilities & real-world applications.",
    imageUrl: "/courses/agentic/AIEvolution.png",
    content: [
      "What is Generative AI?",
      "Evolution of AI models",
      "Understanding Neural Networks & Transformers",
      "Use cases in different industries",
    ],
  },
  "experiment-ai-capabilities": {
    title: "Experiment AI Capabilities",
    description: "Generate text, images, and music while understanding LLMs & models like GPT-4.",
    imageUrl: "/courses/agentic/RealApplication.jpg",
    content: [
      "Hands-on: Generating text with AI",
      "Creating AI-generated images",
      "Building AI-generated music",
      "Introduction to LLMs: GPT-4, Claude, Gemini",
    ],
  },
  "advanced-ai-agents": {
    title: "Advanced AI Agents",
    description: "Explore AutoGPT, CrewAI, BABYAGI, and DevinAI in depth.",
    imageUrl: "/assets/roadmap/advancedAgents.png",
    content: [
      "What are AI Agents?",
      "Introduction to AutoGPT",
      "CrewAI: Collaboration of AI agents",
      "BABYAGI & DevinAI: Research & coding AI",
    ],
  },
};

const AgenticTaskPage = () => {
  const { task } = useParams();
  const taskInfo = taskDetails[task];

  if (!taskInfo) {
    return <div className="text-center text-red-500">Task Not Found</div>;
  }

  return (
    <Section>
      <Header />
      <div className="container flex flex-col lg:flex-row items-start gap-10">
        {/* Left Side - Image */}
        <div className="relative max-w-[40rem]">
          <Image
            className="rounded-2xl shadow-lg"
            src={taskInfo.imageUrl}
            width={500}
            height={350}
            alt={taskInfo.title}
            priority
          />
        </div>

        {/* Right Side - Task Details */}
        <div className="flex-1">
          <Heading tag="Deep Dive into AI" title={taskInfo.title} />
          <p className="text-gray-400 mb-6">{taskInfo.description}</p>

          {/* Task Content */}
          <div className="mt-6 space-y-4">
            {taskInfo.content.map((point, index) => (
              <div key={index} className="p-4 bg-n-8 rounded-lg shadow-md hover:scale-105 transition-transform">
                <p className="text-white">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AgenticTaskPage;
