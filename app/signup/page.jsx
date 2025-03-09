"use client"; 

import Section from "../../components/Section";
import Heading from "../../components/Heading";
import { Gradient } from "../../public/design/Services";
import Tagline from "../../components/Tagline";
import Header from "../../components/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub, FaDiscord, FaFacebook } from "react-icons/fa";

const SignUp = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // ✅ Track loading state
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCredentialsSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

     const res = await fetch("/api/auth/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("Signup Response:", data);

    if (res.ok) {
      console.log("Signup Successful");
      await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      router.replace("/dashboard");
    } else {
      setError(data.error || "Signup failed!");
    }

    setLoading(false);
  };

  return (
    <Section id="signup">
       <div className="mb-10">
          <Header />
        </div>
      <div className="container max-w-lg mx-auto p-8 border border-n-1/10 rounded-3xl bg-n-7">
        <Tagline>
          <Heading title="Join Us Today" text="Create an account to unlock the potential of AI-powered applications." />
        </Tagline>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-6" onSubmit={handleCredentialsSignUp}>
          <div>
            <label className="block text-n-3 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-n-6 rounded-lg bg-n-8 text-white"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-n-3 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-n-6 rounded-lg bg-n-8 text-white"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-n-3 mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="w-full p-3 border border-n-6 rounded-lg bg-n-8 text-white"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-full py-3 flex justify-center mt-10 md:mt-15 xl:mt-20">
            <button 
            type ="submit"
            className="w-full py-3 px-6 border border-n-6 rounded-lg  text-white font-semibold hover:bg-purple-600 transition-all"
            disabled={loading}
            >
             {loading ? "Creating Account..." : "Create New Account"}
            </button>
          </div>
          
        </form>
        <div className="mt-6">
            <p className="text-center text-n-3 mb-4">Or sign up with:</p>
            <div className="flex justify-center space-x-4">
              <button className="p-3 bg-red-500 text-white rounded-full" onClick={() => signIn("google")}>
                <FaGoogle size={20} />
              </button>
              <button className="p-3 bg-black text-white rounded-full" onClick={() => signIn("github")}>
                <FaGithub size={20} />
              </button>
              <button className="p-3 bg-blue-600 text-white rounded-full" onClick={() => signIn("facebook")}>
                <FaFacebook size={20} />
              </button>
              <button className="p-3 bg-indigo-500 text-white rounded-full" onClick={() => signIn("discord")}>
                <FaDiscord size={20} />
              </button>
            </div>
        </div>

        <p className="text-center text-n-3 mt-4">
          Already have an account? <a href="/login" className="text-white hover:underline">Log in</a>
        </p>
      </div>
      <Gradient />
    </Section>
  );
};

export default SignUp;
