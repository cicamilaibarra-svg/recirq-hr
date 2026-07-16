"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("es");

  const text = {
    es: {
      welcome: "Bienvenido a",
      question: "¿Cómo podemos ayudarte?",
      talk: "Hablar con HR",
      meeting: "Solicitar una reunión",
      message: "Enviar una consulta",
      info: "Recursos para empleados",
      footer: "RecirQ HR | Atención confidencial y personalizada",
    },
    en: {
      welcome: "Welcome to",
      question: "How can we help you?",
      talk: "Talk to HR",
      meeting: "Request a meeting",
      message: "Send a question",
      info: "Employee resources",
      footer: "RecirQ HR | Confidential and personalized support",
    },
  };

  const t = language === "es" ? text.es : text.en;

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-between p-8">

      <div className="w-full flex justify-end">
        <div className="bg-gray-100 rounded-full p-1">

          <button
            onClick={() => setLanguage("es")}
            className={`px-5 py-2 rounded-full ${
              language === "es"
                ? "bg-black text-white"
                : "text-gray-600"
            }`}
          >
            ES
          </button>

          <button
            onClick={() => setLanguage("en")}
            className={`px-5 py-2 rounded-full ${
              language === "en"
                ? "bg-black text-white"
                : "text-gray-600"
            }`}
          >
            EN
          </button>

        </div>
      </div>


      <div className="flex flex-col items-center text-center">

        <Image
          src="/recirq-logo.png"
          alt="RecirQ HR Logo"
          width={220}
          height={220}
          className="mb-6"
        />


        <p className="text-xl text-gray-500">
          {t.welcome}
        </p>


        <h1 className="text-5xl font-bold text-gray-900 mt-2 mb-6">
          RecirQ HR
        </h1>


        <p className="text-3xl text-gray-700 mb-12">
          {t.question}
        </p>


        <div className="grid gap-6 w-full max-w-xl">


          <a
            href="/meeting"
            className="bg-black text-white rounded-2xl p-7 text-2xl font-semibold shadow-lg hover:scale-105 transition text-center"
          >
            📹 {t.talk}
          </a>


          <button
            className="bg-gray-100 text-gray-900 rounded-2xl p-7 text-2xl font-semibold shadow-lg"
          >
            📅 {t.meeting}
          </button>


          <button
            className="bg-gray-100 text-gray-900 rounded-2xl p-7 text-2xl font-semibold shadow-lg"
          >
            ✉️ {t.message}
          </button>


          <button
            className="bg-gray-100 text-gray-900 rounded-2xl p-7 text-2xl font-semibold shadow-lg"
          >
            📚 {t.info}
          </button>


        </div>

      </div>


      <footer className="text-gray-500 text-lg">
        {t.footer}
      </footer>


    </main>
  );
}