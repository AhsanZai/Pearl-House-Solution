"use client";

import { useState } from "react";
import { formCopy } from "@/app/src/medguard/constants/copy";
import { medGuardTheme } from "@/app/src/medguard/constants/theme";
import { useMedGuardLeadForm } from "@/app/src/medguard/hooks/useMedGuardLeadForm";

type MedGuardLeadFormProps = {
  className?: string;
  showTitle?: boolean;
};

export default function MedGuardLeadForm({ className = "", showTitle = true }: MedGuardLeadFormProps) {
  const { form, status, isValid, fieldErrors, handleChange, handleSubmit } = useMedGuardLeadForm();
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const inputClass =
    "w-full min-w-0 h-12 min-h-12 sm:h-14 sm:min-h-14 box-border border border-gray-200 rounded-xl px-3.5 text-base text-gray-900 bg-white shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 sm:px-4";

  const labelClass =
    "block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-[0.12em] sm:text-[0.8125rem]";

  return (
    <div
      className={`w-full min-w-0 max-w-full rounded-2xl ${medGuardTheme.sectionBg} border ${medGuardTheme.cardBorder} p-4 shadow-sm sm:p-8 md:p-10 ${className}`}
    >
      <form onSubmit={handleSubmit} className="space-y-5" id="medguard-lead-form" noValidate>
        {showTitle && (
          <h2
            className={`mb-2 text-center text-base font-extrabold uppercase tracking-tight md:text-lg ${medGuardTheme.heading}`}
          >
            {formCopy.title}
          </h2>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
          <div>
            <label htmlFor="mg-firstName" className={labelClass}>
              First name
            </label>
            <input
              id="mg-firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputClass} ${touched.firstName && fieldErrors.firstName ? "border-red-400" : ""}`}
              autoComplete="given-name"
            />
          </div>
          <div>
            <label htmlFor="mg-lastName" className={labelClass}>
              Last name
            </label>
            <input
              id="mg-lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputClass} ${touched.lastName && fieldErrors.lastName ? "border-red-400" : ""}`}
              autoComplete="family-name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="mg-phone" className={labelClass}>
            Phone number
          </label>
          <input
            id="mg-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass} ${touched.phone && fieldErrors.phone ? "border-red-400" : ""}`}
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="mg-email" className={labelClass}>
            Email address
          </label>
          <input
            id="mg-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass} ${touched.email && fieldErrors.email ? "border-red-400" : ""}`}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="mg-stAddress" className={labelClass}>
            Street address
          </label>
          <input
            id="mg-stAddress"
            name="stAddress"
            value={form.stAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass} ${touched.stAddress && fieldErrors.stAddress ? "border-red-400" : ""}`}
            autoComplete="street-address"
          />
        </div>
        <div>
          <label htmlFor="mg-zip" className={labelClass}>
            Zip code
          </label>
          <input
            id="mg-zip"
            name="zip"
            inputMode="numeric"
            value={form.zip}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass} ${touched.zip && fieldErrors.zip ? "border-red-400" : ""}`}
            autoComplete="postal-code"
            maxLength={5}
          />
        </div>

        <p className="mt-1 border-t border-gray-200 pt-4 text-left text-xs leading-relaxed text-gray-500 sm:text-[0.8125rem]">
          {formCopy.legal}
        </p>

        <button
          type="submit"
          disabled={status === "loading" || !isValid}
          className={`w-full min-h-12 min-w-0 touch-manipulation rounded-xl py-3.5 text-base font-bold uppercase tracking-[0.12em] text-white shadow-md transition sm:min-h-14 sm:py-4 sm:tracking-[0.14em] ${medGuardTheme.ctaBg} disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {status === "loading" && "Sending…"}
          {status === "success" && "Sent"}
          {status === "error" && "Try again"}
          {status === "idle" && formCopy.submitLabel}
        </button>
      </form>
    </div>
  );
}
