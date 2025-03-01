import Section from "../../components/Section";
import Heading from "../../components/Heading";
import { Gradient } from "../../public/design/Services";
import Tagline from "../../components/Tagline";

const SignUp = () => {
  return (
    <Section id="signup">
      <div className="container max-w-lg mx-auto p-8 border border-n-1/10 rounded-3xl bg-n-7">
        <Tagline>
          <Heading title="Join Us Today" text="Create an account to unlock the potential of AI-powered applications." />
        </Tagline>

        <form className="space-y-6">
          <div>
            <label className="block text-n-3 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-n-6 rounded-lg bg-n-8 text-white"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full p-3 border border-n-6 rounded-lg bg-n-8 text-white"
            />
          </div>

          <div className="w-full py-3 flex justify-center mt-10 md:mt-15 xl:mt-20">
            <button className="w-full py-3 px-6 border border-n-6 rounded-lg  text-white font-semibold hover:bg-purple-600 transition-all">
              Create New Account
            </button>
          </div>
        </form>

        <p className="text-center text-n-3 mt-4">
          Already have an account? <a href="/login" className="text-white hover:underline">Log in</a>
        </p>
      </div>
      <Gradient />
    </Section>
  );
};

export default SignUp;
