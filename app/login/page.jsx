"use client"; 
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Header from "../../components/Header";
import { Gradient } from "../../public/design/Services";
import Tagline from "../../components/Tagline";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn  } from "next-auth/react";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  useEffect(() => {
    console.log("Session Data:", session);
    console.log("Session Status:", status);
    if (status === "authenticated") {
      router.replace("/profile"); // ✅ Redirect if already logged in
    }
  }, [status, router, session]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login Attempt:", form.email, form.password);
    const result = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (result?.error) {
      console.error("Login failed:", result.error);
      alert("Login failed: " + result.error);
    } else {
      console.log("Login Successful:", result);
      router.replace("/profile");
    }
  };
  //   const res = await fetch("/api/auth/auth/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(form),
  //   });

  //   const data = await res.json();
  //   if (res.ok) {
  //     console.log("Login Successful:", data);
  //     router.replace("/profile");  
  //   } else {
  //     alert("Login failed: " + data.error);
  //   }
  // };
  return (
    <Section className="overflow-hidden" id="login">
        <div className="mb-10">
          <Header />
        </div>
      <div className="container md:pb-10">
        <div className="container max-w-lg mx-auto p-8 border border-n-1/10 rounded-3xl bg-n-7">
        <Tagline>
          <Heading title="Welcome Back" text="Log in to access your AI-powered dashboard." />
        </Tagline>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-n-3 mb-2">Email Address</label>
              <input
                type="email"
                name="email" // Add this
                placeholder="Enter your email"
                className="w-full p-3 border border-n-6 rounded-lg bg-n-8 text-white"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-n-3 mb-2">Password</label>
              <input
                type="password"
                name="password" // Add this
                placeholder="Enter your password"
                className="w-full p-3 border border-n-6 rounded-lg bg-n-8 text-white"
                onChange={handleChange}
              />
            </div>

            <div className="w-full py-3 flex justify-center mt-10 md:mt-15 xl:mt-20">
              <button className="w-full py-3 px-6 border border-n-6 rounded-lg  text-white font-semibold hover:bg-purple-600 transition-all">
                Log In
              </button>
            </div>
          </form>

          <p className="text-center text-n-3 mt-4">
            Don't have an account? <a href="/signup" className="text-white hover:underline">Sign Up</a>
          </p>
        </div>
        <Gradient />
    </div>
    </Section>
  );
};

export default Login;
