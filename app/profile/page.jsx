"use client";

import React, { useState, useEffect } from "react";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import { Gradient } from "../../public/design/Services";
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

  // useEffect(() => {
  //   console.log("Session Data:", session);
  //   console.log("Session Status:", status);

  //   if (status === "unauthenticated") {
  //     router.replace("/login");
  //   }
  // }, [status, router, session]);
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

  return (
    <div className="overflow-hidden">
      <Header />
      <Section id="profile" className="mt-16 px-8 md:px-16 lg:px-24">
        <div className="container relative mx-auto p-8 border border-gray-700 rounded-3xl bg-gray-900 text-white">
          
          <Tagline>
            <Heading title={`Welcome, ${session?.user?.email || "User"}!`} text="AI is your friend. Let’s work together and boost your efficiency!" />
          </Tagline>
          <h3 className="text-lg font-semibold mt-6">Your Activity History</h3>
        <ul className="mt-4 space-y-3 bg-gray-800 p-4 rounded-lg">
          {activities.length > 0 ? (
            activities.map((activity, index) => (
              <li key={index} className="p-3 border border-gray-600 rounded-lg">
                <strong>{activity.type}:</strong> {JSON.stringify(activity.data)}
                <br />
                <span className="text-gray-400 text-xs">
                  {new Date(activity.timestamp).toLocaleString()}
                </span>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No activity recorded yet.</p>
          )}
        </ul>

          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            
            {/* 🔹 Left Side: Personal Info & AI Leaders */}
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
