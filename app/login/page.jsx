import Section from "../../components/Section";
import Heading from "../../components/Heading";
import { Gradient } from "../../public/design/Services";
import Button from "../../components/Button";
import Tagline from "../../components/Tagline";

const Login = () => {
  return (
    <Section id="login">
      <div className="container max-w-lg mx-auto p-8 border border-n-1/10 rounded-3xl bg-n-7">
      <Tagline>
        <Heading title="Welcome Back" text="Log in to access your AI-powered dashboard." />
      </Tagline>

        <form className="space-y-6">
          <div>
            <label className="block text-n-3 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-n-6 rounded-lg bg-n-8 text-white"
            />
          </div>

          <div>
            <label className="block text-n-3 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-n-6 rounded-lg bg-n-8 text-white"
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
    </Section>
  );
};

export default Login;
