"use client";

import Image from "next/image";
import { useState } from "react";

export default function MeetingPage() {
  const [language, setLanguage] = useState("es");
  const [seconds, setSeconds] = useState(10);
  const [connected, setConnected] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const text = {
    es: {
      waiting: "Estamos esperando que HR acepte la llamada",
      time: "Tiempo de espera",
      open: "Abrir Google Meet",
      connected: "Ya estoy conectado con HR",
      unavailable: "HR no está disponible en este momento",
      leave: "Dejá tus datos y HR se comunicará contigo.",
      name: "Nombre completo",
      department: "Departamento",
      email: "Correo electrónico",
      phone: "Número de teléfono",
      message: "Consulta",
      send: "Enviar consulta",
      thanks: "Gracias. HR recibió tu consulta.",
      back: "Volver al inicio",
      meeting: "Reunión con HR en progreso",
      confidential: "Esta conversación es confidencial.",
    },

    en: {
      waiting: "We are waiting for HR to accept the call",
      time: "Waiting time",
      open: "Open Google Meet",
      connected: "I am connected with HR",
      unavailable: "HR is not available at this time",
      leave: "Leave your information and HR will contact you.",
      name: "Full name",
      department: "Department",
      email: "Email address",
      phone: "Phone number",
      message: "Question",
      send: "Send request",
      thanks: "Thank you. HR received your request.",
      back: "Return home",
      meeting: "Meeting with HR in progress",
      confidential: "This conversation is confidential.",
    },
  };

  const t = language === "es" ? text.es : text.en;


  if (!connected && seconds > 0) {
    setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
  }


  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;


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


      <div className="flex flex-col items-center text-center w-full">


        <Image
          src="/recirq-logo.png"
          alt="RecirQ HR Logo"
          width={220}
          height={220}
          className="mb-6"
        />


        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          RecirQ HR
        </h1>



        {!connected && seconds > 0 && (

          <>

            <p className="text-3xl text-gray-700 mb-6">
              {t.waiting}
            </p>


            <div className="bg-gray-100 rounded-3xl px-12 py-8 shadow-lg mb-8">

              <p className="text-gray-500">
                {t.time}
              </p>

              <div className="text-6xl font-bold">
                {minutes}:{remainingSeconds
                .toString()
                .padStart(2,"0")}
              </div>

            </div>


            <a
              href="https://meet.google.com/wsh-kunx-ave"
              target="_blank"
              className="bg-black text-white rounded-2xl p-7 text-2xl font-semibold shadow-lg w-full max-w-xl"
            >
              📹 {t.open}
            </a>


            <button
              onClick={()=>setConnected(true)}
              className="mt-5 bg-gray-100 rounded-2xl p-7 text-2xl font-semibold shadow-lg w-full max-w-xl"
            >
              ✓ {t.connected}
            </button>

          </>
        )}



        {seconds <= 0 && !connected && !submitted && (

          <div className="w-full max-w-xl">

            <h2 className="text-3xl font-bold mb-4">
              {t.unavailable}
            </h2>


            <p className="text-xl text-gray-500 mb-8">
              {t.leave}
            </p>


            <input
              placeholder={t.name}
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full p-5 mb-4 rounded-xl border text-xl"
            />


            <input
              placeholder={t.department}
              value={department}
              onChange={(e)=>setDepartment(e.target.value)}
              className="w-full p-5 mb-4 rounded-xl border text-xl"
            />


            <input
              placeholder={t.email}
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full p-5 mb-4 rounded-xl border text-xl"
            />


            <input
              placeholder={t.phone}
              type="tel"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="w-full p-5 mb-4 rounded-xl border text-xl"
            />


            <textarea
              placeholder={t.message}
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              className="w-full p-5 mb-6 rounded-xl border text-xl h-40"
            />


            <button
              onClick={()=>setSubmitted(true)}
              className="bg-black text-white rounded-2xl p-7 text-2xl font-semibold w-full"
            >
              {t.send}
            </button>

          </div>

        )}



        {submitted && (

          <>

            <h2 className="text-3xl font-bold mb-8">
              {t.thanks}
            </h2>


            <button
              onClick={()=>window.location.href="/"}
              className="bg-black text-white rounded-2xl p-7 text-2xl font-semibold"
            >
              {t.back}
            </button>

          </>

        )}



      </div>


      <footer className="text-gray-500 text-lg">
        RecirQ HR | Confidential Human Resources Support
      </footer>


    </main>
  );
}