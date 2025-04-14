"use client";
import React, { useState, useEffect } from "react";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import { Gradient } from "../../public/design/Services";
import { getRecommendations } from "../api/recommend/route";
import Tagline from "../../components/Tagline";
import { professionalSuggestions, AiLeads } from "../../components/constants"; 
import Header from "../../components/Header";

import { useSession, signOut } from "next-auth/react"; // ✅ Get user session directly
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [domain, setDomain] = useState("");
  const [hours, setHours] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [tools, setTools] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);// try to used tracking information ! 
  const [selectedTool, setSelectedTool] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [feedback, setFeedback] = useState('');// rather than 
  const [actions, setActions] = useState('');
  const [efficiency, setEfficiency] = useState('');

  const [error, setError] = useState(null);
  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      const userId = encodeURIComponent(session.user.id); // ✅ Prevents URL errors
      console.log("🔍 Fetching activities for user:", userId); // ✅ Debugging

      fetch(`/api/track?userId=${userId}`)
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log("✅ Fetched activities:", data);
          setActivities(data.activities || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("❌ Error fetching activities:", err);
          setError(err.message);
          setLoading(false);
        });
    }
  }, [session, status]);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.replace("/login");
  };

  if (status === "loading") {
    return <p className="text-center text-white">Loading...</p>; // ✅ Show a loader while session is loading
  }
  if (!session) {
    return null;
  }

  const handleDomainChange = (e) => {
    const value = e.target.value;
    setDomain(value);
    const found = professionalSuggestions.find((item) => item.profession === value);
    setSuggestions(found ? found.suggestions : []);
    setTools(found ? found.tools : []);
  };


  const handleGetRecommendations = async () => {
    
    const userData = {
      tool_used: selectedTool || "Unknown Tool",
      category: selectedCategory || "Misc",
      user_feedback: feedback || "No feedback provided",
      time_spent: parseFloat(hours) || 0,
      actions_performed: parseFloat(actions) || 0,
      efficiency_gain: parseFloat(efficiency) || 0
    };
  
    try {
      const result = await getRecommendations(userData);
      setRecommendations(result); // Adjust if you're returning something different
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div className="overflow-hidden">
      <Header />
      <Section id="profile" className="mt-16 px-8 md:px-16 lg:px-24">
        <div className="container relative mx-auto p-8 border border-gray-700 rounded-3xl bg-gray-900 text-white">
          
          <Tagline>
            <Heading title={`Welcome, ${session?.user?.email || "User"}!`} text="AI is your friend. Let’s work together and boost your efficiency!" />
          </Tagline>
          <h3 className="text-lg font-semibold mt-6">Your Activity History</h3>
            <ul className="mt-4 space-y-4 bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700">
                  {activities && activities.length > 0 ? (
                    [...activities]  // Copy array
                      .reverse()      // Get most recent first
                      .slice(0, 4)    // Only last 4
                      .map((activity, index) => {
                        const { type, data, timestamp } = activity;
                        const actionTime = new Date(timestamp).toLocaleString();
                        const url = data?.url || "Unknown URL";
                        const element = data?.element || "Unknown Element";

                        // Custom message for activity type
                        let aiMessage = "AI is observing your activity for personalized suggestions.";
                        if (type === "click") aiMessage = "You interacted with something – we're learning what grabs your attention!";
                        else if (type === "navigation") aiMessage = "You visited a new page – noted for recommendation analysis.";
                        else if (type === "form_submit") aiMessage = "You submitted a form – we'll use this to understand your goals.";
                        
                        return (
                          <li key={index} className="bg-gray-900 p-5 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="text-indigo-300 font-medium text-md">
                                  🧭 Activity Type: <span className="text-white">{type}</span>
                                </p>
                                <p className="text-sm mt-1 text-gray-300">
                                  🔗 URL: <span className="text-white">{url}</span>
                                </p>
                                <p className="text-sm mt-1 text-gray-300">
                                  🎯 Clicked Element: <span className="text-white">{element}</span>
                                </p>
                                <p className="text-sm mt-1 text-gray-400 italic">
                                  ⏱️ Performed on: {actionTime}
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 bg-indigo-950 p-3 rounded-md text-sm text-indigo-200 border border-indigo-500">
                              🤖 <strong>AI Insight:</strong> {aiMessage}
                            </div>
                          </li>
                        );
                      })
                  ) : (
                    <p className="text-gray-400 text-sm">No recent activity found. Start exploring apps to get personalized insights!</p>
                  )}
                </ul>

          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            <div className="lg:w-1/2 bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Personal & Professional Info</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Domain</label>
                  <input
                    type="text"
                    value={domain}
                    onChange={handleDomainChange}
                    placeholder="Enter your profession (e.g., Doctor, Engineer)"
                    className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Daily Upskilling Hours</label>
                  <input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="Enter hours"
                    className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white"
                  />
                </div>
              </form>

              <h3 className="text-lg font-semibold mt-6">AI Market Leaders</h3>
              <ul className="flex flex-wrap gap-4 mt-3">
                {AiLeads.map((app) => (
                  <li key={app.id} className="w-12 h-12 bg-gray-700 flex items-center justify-center rounded-full border border-gray-500">
                    <img src={app.icon} width={24} height={24} alt={app.title} />
                  </li>
                ))}
              </ul>
              <button
                onClick={handleGetRecommendations}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Get AI Career Recommendations
              </button>
                
              {recommendations?.suggested_app && (
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-green-400">
                      Recommended App: {recommendations.suggested_app}
                    </h3>
                    <p>Category: {recommendations.category}</p>
                    <p>Average Rating: {recommendations.average_rating}</p>
                    <p>Efficiency Gain: {recommendations.efficiency_gain}</p>
                    <p className="italic">Why Recommended: {recommendations.why_recommended}</p>
                  </div>
                )}    
            </div>

            {/* 🔹 Right Side: Progress Wheel & AI Tools */}
            <div className="lg:w-1/2 flex flex-col items-center">
              
              <div className="relative w-52 h-52 lg:w-64 lg:h-64">
                <svg className="w-full h-full">
                  <circle cx="50%" cy="50%" r="45%" stroke="gray" strokeWidth="10" fill="none" />
                  <circle cx="50%" cy="50%" r="45%" stroke="purple" strokeWidth="10" strokeDasharray="283" strokeDashoffset={`${283 - (hours / 24) * 283}`} fill="none" />
                </svg>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <p className="text-2xl font-bold">{hours || 0}h</p>
                  <p className="text-sm text-gray-400">Upskilling</p>
                </div>
              </div>

              <div className="w-full mt-6 p-6 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Recommended AI Tools</h3>
                <ul className="space-y-2">
                  {tools.length > 0 ? (
                    tools.map((tool, index) => (
                      <li key={index} className="p-3 border border-gray-600 rounded-lg bg-gray-900 flex justify-between items-center">
                        <span>{tool}</span>
                        <button className="text-xs text-blue-400 hover:underline">Explore</button>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500">Enter a domain to see tools.</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
            <h2 className="text-white text-xl mb-4">Profile Information</h2>
            <p className="text-n-3">Email: {session.user.email}</p>
            {/* Add more profile information here */}
            

          </div>

          <div className="w-full py-3 flex justify-center mt-10 md:mt-15 xl:mt-20">
            <button
              onClick={handleLogout}
              className="w-full py-3 px-6 border border-n-6 rounded-lg text-white font-semibold hover:bg-purple-600 transition-all"
            >
              Log Out
            </button>
          </div>
        {/* </div> */}

        <Gradient />
      </Section>
    </div>
  );
};

export default Profile;
