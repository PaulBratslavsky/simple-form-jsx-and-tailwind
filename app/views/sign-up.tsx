import { Link } from "@remix-run/react";
import FieldInput from "~/components/InputField";

export default function SignUp() {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <form className="bg-white p-8 shadow-sm rounded-md w-96">
        <header className="flex flex-col justify-center items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 mb-6 text-pink-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Create your Account
          </h2>
          <p className="text-md text-gray-700">Let's learn some cool stuff.</p>
        </header>
        <div className="mb-6">
          <FieldInput
            id="username"
            name="username"
            label="Username"
            type="text"
            placeholder="Enter your username"
            error="This username is already taken."
          />

          <FieldInput
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <FieldInput
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="inline-block py-2 px-7 mb-6 w-full text-base text-pink-50 font-medium text-center leading-6 bg-pink-500 hover:bg-pink-600 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 rounded-md shadow-sm"
        >
          Sign Up
        </button>
        <p className="text-center">
          <span className="text-xs font-medium text-gray-800">
            Have an account?
          </span>{" "}
          <Link
            className="inline-block text-xs font-medium text-pink-500 hover:text-pink-600 hover:underline"
            to="/signin"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
