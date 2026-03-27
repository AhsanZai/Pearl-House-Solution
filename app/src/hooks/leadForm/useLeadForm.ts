"use client";

import { useState } from "react";

export type FormStatus = "idle" | "loading" | "success" | "error";

export function useLeadForm() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    stAddress: "",
    email: "",
    phone: "",
    zip: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      // Reset form after success
      setForm({
        name: "",
        lastName: "",
        stAddress: "",
        email: "",
        phone: "",
        zip: "",
      });
      
      // Reset status after 5s
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return {
    form,
    status,
    handleChange,
    handleSubmit,
  };
}
