"use client";

import { motion } from "framer-motion";

export default function HomeEN() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-600"
      >
        Hi — I&apos;m Santiago Carrillo, Salesforce Developer/Administrator & AI Developer
      </motion.h1>

      <p className="mt-4 text-gray-600 max-w-xl">
        Certified Salesforce professional with experience in administration, development,
        and automation using AI (Python). I also lead Salesforce projects with DevOps practices.
      </p>

      <div className="mt-6 flex gap-4">
        <a href="/en/projects" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          View projects
        </a>
        <a href="/en/contact" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50">
          Contact
        </a>
      </div>
    </main>
  );
}