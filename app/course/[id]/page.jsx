// "use client";

// import { useParams } from "next/navigation";
// import Image from "next/image";
// import Button from "../../../components/Button";
// import Heading from "../../../components/Heading";
// import Section from "../../../components/Section";
// import { roadmap } from "../../../components/constants";
// import Header from "../../../components/Header";

// const courseDetails = {
//   "0": {
//     title: "AI Agent Creation and Customization",
//     roadmap: [
//       "Foundation of GenAI",
//       "Experience with No-Code Agent Building Tools",
//       "Basic (Python + Numpy + ScikitLearn)",
//       "Master Prompt Engineering",
//       "Explore LangChain and RAG (In Depth)",
//       "Learn Agentic Design Patterns and Build Simple Agents",
//       "Build Advanced Agentic Systems",
//       "Practice & Showcase Skills",
//     ],
//     imageUrl: "/assets/roadmap/AgenticAiCourse.png",
//   },
//   "1": {
//     title: "AI-Powered Productivity for Developers",
//     roadmap: ["TBD"], // Add roadmap points
//     imageUrl: "/assets/roadmap/DevBoostCourse.png",
//   },
//   "2": {
//     title: "AI in Digital Marketing and Customer Engagement",
//     roadmap: ["TBD"],
//     imageUrl: "/assets/roadmap/DigitalMarketCourse.png",
//   },
//   "3": {
//     title: "AI for Cybersecurity",
//     roadmap: ["TBD"],
//     imageUrl: "/assets/roadmap/CyberSecurity.png",
//   },
// };

// const CoursePage = () => {
//   const { id } = useParams();
//   const course = courseDetails[id];

//   if (!course) {
//     return <div className="text-center text-red-500">Course Not Found</div>;
//   }

//   return (
//     <Section id="course-page">
//         <Header/>
//       <div className="container flex flex-col lg:flex-row items-center">
//         {/* Left Side - Course Info */}
//         <div className="max-w-[30rem]">
//           <Heading tag="Master AI Skills" title={course.title} />
//           <p className="text-n-4 mb-6">
//             Learn the core concepts and gain hands-on experience in {course.title}.
//           </p>
//           <Button href="#roadmap-section">Explore Roadmap</Button>
//         </div>

//         {/* Right Side - Image */}
//         <div className="relative max-w-[40rem]">
//           <Image
//             className="rounded-xl"
//             src={course.imageUrl}
//             width={500}
//             height={350}
//             alt={course.title}
//             priority
//           />
//         </div>
//       </div>

//       {/* Roadmap Section */}
//       <div id="roadmap-section" className="mt-16">
//         <h2 className="h2 text-center mb-8">Course Roadmap</h2>
//         <div className="max-w-[40rem] mx-auto">
//           <ul className="space-y-6">
//             {course.roadmap.map((step, index) => (
//               <li key={index} className="flex items-center">
//                 <img src="/assets/check.svg" width={24} height={24} alt="check" />
//                 <h6 className="ml-5 body-2">{step}</h6>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default CoursePage;
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Heading from "../../../components/Heading";
import Section from "../../../components/Section";
import Header from "../../../components/Header";
import { courseDetails } from "../../../components/constants";

const CoursePage = () => {
  const { id } = useParams();
  const course = courseDetails[id];
  console.log("id : ",id);
  if (!course) {
    return <div className="text-center text-red-500">Course Not Found</div>;
  }

  return (
    <Section id="course-page">
      <Header />
      <div className="container flex flex-col lg:flex-row items-start gap-10">
        {/* Left Side - Image */}
        <div className="relative max-w-[40rem]">
          <Image
            className="rounded-2xl shadow-lg"
            src={course.imageUrl}
            width={500}
            height={350}
            alt={course.title}
            priority
          />
        </div>

        {/* Right Side - Course Roadmap */}
        <div className="flex-1">
          <Heading tag="Step into the Future" title={course.title} />
          <p className="text-gray-400 mb-6">{course.description}</p>

          {/* Course Roadmap */}
          <div className="mt-12">
            <h2 className="h2 mb-6 text-blue-400">Course Roadmap</h2>
            <div className="space-y-8">
              {course.roadmap.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 p-5 bg-n-8 rounded-xl shadow-md hover:scale-105 transition-transform"
                >
                  <Image src="/assets/check.svg" width={24} height={24} alt="check" />
                  <div>
                    <h4 className="text-lg font-bold">{item.step}</h4>
                    <p className="text-gray-300">{item.description}</p>

                    {/* Navigate to respective Agentic Task */}
                    <div className="mt-3">
                      <Link href={`/course/${id}/agentic/${item.step.toLowerCase().replace(/ /g, "-")}`}>
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform">
                          Start Here
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CoursePage;
