"use client";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const route = useRouter();

  const [createUserWithEmailAndPassword, userCredential, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  if (userCredential) {
    route.push("../sign-in");
  }

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("Google Sign In successful:", user);
      route.push("/"); // Redirect to home page after successful login
    } catch (err) {
      console.error("Error with Google Sign In:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      try {
        const userCredentialResult = await createUserWithEmailAndPassword(
          email,
          password
        );
        if (userCredentialResult && userCredentialResult.user) {
          const user = userCredentialResult.user;

          // Update profile with full name
          await updateProfile(user, {
            displayName: fullName,
          });

          // Send email verification
          await sendEmailVerification(user);
          alert("Signup successful! Please check your email for verification.");

          // Sign out the user after successful signup
          auth.signOut();

          route.push("/sign-in"); // Redirect to login page
        }
      } catch (err) {
        console.error("Error creating user:", err);
      }
    }
  };

  return (
    <div
      className={`min-h-screen bg-gray-900 flex items-center justify-center py-20 ${montserrat.className}`}
    >
      <div className="bg-gray-800 text-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-8 text-center">Sign Up</h2>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-full transition duration-300 mb-6"
        >
          Sign Up with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-2 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-600"
            />
          </div>

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
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-full transition duration-300"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {error && (
          <p className="text-sm text-red-500 mt-4 text-center">{error.message}</p>
        )}

        <p className="text-sm text-gray-500 mt-6 text-center">
          Already have an account?{" "}
          <a href="../sign-in" className="text-indigo-400 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
