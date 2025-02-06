"use client";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Page: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const route = useRouter();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (user) {
    console.log("");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res?.user) {
        // Check if email is verified
        if (!res.user.emailVerified) {
          await signOut(auth); // Sign out user if not verified
          alert("Please verify your email before logging in.");
          return;
        }

        console.log("Logged in user:", res.user);
        setEmail("");
        setPassword("");
        route.push("/"); // Redirect to homepage
      } else {
        console.error("Invalid credentials.");
      }
    } catch (e) {
      console.error("Login error:", e); // Log any error
    }
  };

  return (
    <div
      className={`min-h-screen bg-gray-900 flex items-center justify-center ${montserrat.className}`}
    >
      <div className="bg-gray-800 text-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-8 text-center">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-600"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-full transition duration-300"
            disabled={loading} // Disable the button while logging in
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        {error && (
          <p className="text-sm text-red-500 mt-4 text-center">
            {error.message || "Invalid email or password"}
          </p>
        )}

        <p className="text-sm text-gray-500 mt-6 text-center">
          Don&apos;t have an account?{" "}
          <a href="../sign-up" className="text-indigo-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
