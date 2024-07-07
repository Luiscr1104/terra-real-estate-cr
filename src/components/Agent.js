"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

import { AnimatedTooltip } from "../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Jose Manuel",
    designation: "Agente de TerraRealEstateCR",
    image: "/agent-icon.png",
  },
];
export default function Agent() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div
        className="fixed bottom-4 right-8 sm:right-20 flex items-center justify-center cursor-pointer z-50"
        onClick={toggleForm}
      >
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>
      {showForm && <ContactForm onClose={toggleForm} />}
    </>
  );
}
