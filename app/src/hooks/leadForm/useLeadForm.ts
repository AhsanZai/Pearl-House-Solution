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

  const formatPhoneNumber = (value: string) => {
    // Strip all non-numeric characters
    const digits = value.replace(/\D/g, "");
    
    // Format: start with "(" as soon as there is input
    if (digits.length === 0) return "";
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      setForm((prev) => ({ ...prev, [name]: formatPhoneNumber(value) }));
    } else if (name === "zip") {
      // Only allow 5 digits for zip
      const digits = value.replace(/\D/g, "").slice(0, 5);
      setForm((prev) => ({ ...prev, [name]: digits }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
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
