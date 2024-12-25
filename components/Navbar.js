// Example in your homepage or navigation component

import Link from 'next/link';

export default function Dashboard() {
    return (
      <div className="min-h-screen">
        {/* Navbar */}
        <nav className="bg-card shadow-lg">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">AiStreamX</h1>
            <ul className="flex space-x-6">
              <li><a href="/latest-updates" className="hover:text-primary">Latest Updates</a></li>
              <li><a href="/events" className="hover:text-primary">Events</a></li>
              <li><a href="/ai-startups" className="hover:text-primary">Ai StartUps</a></li>
              <li><a href="/softwares" className="hover:text-primary">Softwares</a></li>
              <li><a href="/ai-models" className="hover:text-primary">Ai Models</a></li>
              <li><a href="/about-us" className="hover:text-primary">About Us</a></li>
            </ul>
          </div>
        </nav>
  
        {/* Dashboard Content */}
        <main className="container mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold mb-6">Welcome to AiStreamX Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Trending News Card */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary">Trending News</h3>
              <p className="mt-2 text-gray-300">
                Stay updated with the latest news in AI Tech World.
              </p>
            </div>
            {/* Upcoming Events Card */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-secondary">Upcoming Events</h3>
              <p className="mt-2 text-gray-300">
                Discover upcoming AI events and conferences.
              </p>
            </div>
            {/* Latest Updates Card */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-accent">Latest Updates</h3>
              <p className="mt-2 text-gray-300">
                Explore the latest updates and advancements in AI.
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
