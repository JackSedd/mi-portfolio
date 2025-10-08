"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-600"
      >
        ¡Hola! Soy Santiago Carrillo — Salesforce Developer/adminsitrator & AI Developer
      </motion.h1>

      <p className="mt-4 text-gray-600 max-w-xl">
        Especialista certificado en Salesforce con experiencia en automatización con IA en Python
        y gestión de proyectos con DevOps.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Ver proyectos
        </a>
        <a
          href="/contact"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50"
        >
          Contactar
        </a>
      </div>
    </main>
  );
}