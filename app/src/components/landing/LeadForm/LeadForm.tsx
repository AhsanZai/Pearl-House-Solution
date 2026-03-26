"use client";

import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    stAddress: "",
    email: "",
    phone: "",
    zip: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

  const inputClass =
    "w-full h-9 border border-gray-300 rounded-md px-3 text-[13px] text-gray-800 bg-white focus:outline-none focus:border-[#2d5fa2] focus:ring-2 focus:ring-[#2d5fa2]/20 transition-all placeholder-gray-400";

  return (
    <form
      onSubmit={handleSubmit}
      id="lead-form"
      className="
        bg-white rounded-2xl shadow-2xl border border-white/60
        p-6
        w-full max-w-[340px] min-w-[280px]
        sm:w-[310px]
      "
    >
      {/* Name */}
      <div className="mb-3">
        <label htmlFor="form-name" className="block text-[12px] font-semibold text-gray-700 mb-1 tracking-wide">
          Name
        </label>
        <input id="form-name" name="name" type="text" value={form.name} onChange={handleChange} className={inputClass} />
      </div>

      {/* Last Name */}
      <div className="mb-3">
        <label htmlFor="form-lastName" className="block text-[12px] font-semibold text-gray-700 mb-1 tracking-wide">
          Last Name
        </label>
        <input id="form-lastName" name="lastName" type="text" value={form.lastName} onChange={handleChange} className={inputClass} />
      </div>

      {/* St Address */}
      <div className="mb-3">
        <label htmlFor="form-stAddress" className="block text-[12px] font-semibold text-gray-700 mb-1 tracking-wide">
          St Address
        </label>
        <input id="form-stAddress" name="stAddress" type="text" value={form.stAddress} onChange={handleChange} className={inputClass} />
      </div>

      {/* Email */}
      <div className="mb-3">
        <label htmlFor="form-email" className="block text-[12px] font-semibold text-gray-700 mb-1 tracking-wide">
          Email
        </label>
        <input id="form-email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
      </div>

      {/* Phone + Zip */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <input
          id="form-phone"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          id="form-zip"
          name="zip"
          type="text"
          placeholder="Zip code"
          value={form.zip}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        id="lead-form-submit"
        disabled={status === "loading"}
        className={`
          w-full h-11 rounded-lg
          transition-all duration-200 cursor-pointer font-bold text-[14px] tracking-widest uppercase
          shadow-lg hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed
          ${status === "idle" ? "bg-[#1e3a5f] hover:bg-[#163050] text-white shadow-[#1e3a5f]/30" : ""}
          ${status === "loading" ? "bg-gray-400 text-white" : ""}
          ${status === "success" ? "bg-green-600 text-white shadow-green-600/30" : ""}
          ${status === "error" ? "bg-red-600 text-white shadow-red-600/30" : ""}
        `}
      >
        {status === "idle" && "SUBMIT"}
        {status === "loading" && "SUBMITTING..."}
        {status === "success" && "SUCCESS!"}
        {status === "error" && "TRY AGAIN"}
      </button>
    </form>
  );
}
