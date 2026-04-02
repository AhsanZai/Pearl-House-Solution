"use client";

import { useState } from "react";
import { useLeadForm } from "@/app/src/hooks/leadForm/useLeadForm";
import { leadFormSchema } from "@/app/src/utils/validations/leadSchema";

interface LeadFormProps {
  variant?: "full" | "short";
}

export default function LeadForm({ variant = "full" }: LeadFormProps) {
  const { form, status, handleChange, handleSubmit } = useLeadForm();
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isValid = leadFormSchema.isValidSync(form);

  let errors: Record<string, string> = {};
  if (!isValid) {
    try {
      leadFormSchema.validateSync(form, { abortEarly: false });
    } catch (err: any) {
      if (err.inner) {
        err.inner.forEach((e: any) => {
          if (!errors[e.path]) errors[e.path] = e.message;
        });
      }
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
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
        <input id="form-name" name="name" type="text" value={form.name} onChange={handleChange} className={inputClass} placeholder="Full Name" />
      </div>

      {variant === "full" && (
        <>
          {/* Last Name */}
          <div className="mb-3">
            <label htmlFor="form-lastName" className="block text-[12px] font-semibold text-gray-700 mb-1 tracking-wide">
              Last Name
            </label>
            <input id="form-lastName" name="lastName" type="text" value={form.lastName} onChange={handleChange} className={inputClass} placeholder="Last Name" />
          </div>

          {/* St Address */}
          <div className="mb-3">
            <label htmlFor="form-stAddress" className="block text-[12px] font-semibold text-gray-700 mb-1 tracking-wide">
              St Address
            </label>
            <input id="form-stAddress" name="stAddress" type="text" value={form.stAddress} onChange={handleChange} className={inputClass} placeholder="Street Address" />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="form-email" className="block text-[12px] font-semibold text-gray-700 mb-1 tracking-wide">
              Email
            </label>
            <input id="form-email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="Email Address" />
          </div>
        </>
      )}

      {/* Phone + Zip */}
      <div className="mb-2">
        <div className="grid grid-cols-2 gap-2 mb-1">
          {/* Phone */}
          <div className="relative">
            <input
              id="form-phone"
              name="phone"
              type="tel"
              placeholder="(555) 000-0000"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={14}
              className={`${inputClass} ${
                touched.phone && errors.phone ? "border-red-500 focus:ring-red-500/20" : ""
              }`}
            />
          </div>
          
          {/* Zip */}
          <div className="relative">
            <input
              id="form-zip"
              name="zip"
              type="text"
              placeholder="Zip code"
              value={form.zip}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={5}
              className={`${inputClass} ${
                touched.zip && errors.zip ? "border-red-500 focus:ring-red-500/20" : ""
              }`}
            />
          </div>
        </div>

        {/* Error Messages */}
        <div className="flex justify-between px-1 h-3">
          <span className="text-[10px] text-red-500 font-medium leading-tight">
            {touched.phone && errors.phone ? errors.phone : ""}
          </span>
          <span className="text-[10px] text-red-500 font-medium leading-tight text-right">
            {touched.zip && errors.zip ? errors.zip : ""}
          </span>
        </div>
      </div>

      {/* TCPA Disclaimer */}
      <div className="mb-4 text-[9px] text-gray-500 leading-relaxed font-medium text-justify">
        <strong>Safe Streets USA LLC Express Written Consent Form MARKETING AUTHORIZATION:</strong> I, the undersigned, hereby authorize Safe Streets USA, LLC (&quot;Safe Streets&quot;), directly or through its affiliates and marketing partners, to contact me from time-to-time by telephone, text, email and/or direct mail with information and offers about products and services that might interest me. By clicking contact me below, I hereby authorize the receipt of such solicitations at the telephone number(s), (including cellular numbers), emails addresses) and /or mailing address(es) shown below, even if such telephone number(s), email address(es) or mailing addresses are listed on any &quot;do not call&quot; or other do not solicit registry or list and I agree that any such telephone calls and text messages may be generated using an automated phone dialing system. To discontinue or opt out of text messages reply with STOP I understand I am not required to consent to make a purchase. Message and data rates may apply, Message frequency varies. View our Privacy Policy at{" "}
        <a href="https://www.safestreets.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          https://www.safestreets.com/privacy-policy
        </a>{" "}
        our Terms &amp; Conditions at{" "}
        <a href="https://www.safestreets.com/terms-conditions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          https://www.safestreets.com/terms-conditions
        </a>. 
        Carriers are not liable for delayed or undelivered messages.
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        id="lead-form-submit"
        disabled={status === "loading" || !isValid}
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
        {status === "idle" && "CONTACT ME"}
        {status === "loading" && "SENDING..."}
        {status === "success" && "SUCCESS!"}
        {status === "error" && "TRY AGAIN"}
      </button>
    </form>
  );
}
