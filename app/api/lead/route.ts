import { NextResponse } from "next/server";

const SCRIPT_URLS: Record<string, string> = {
  safestreet: process.env.GOOGLE_SCRIPT_URL_SAFESTREET || "",
  medguard: process.env.GOOGLE_SCRIPT_URL_MEDGUARD || "",
};

Object.entries(SCRIPT_URLS).forEach(([key, url]) => {
  if (!url) {
    console.warn(`Google Apps Script URL for "${key}" is not set in .env.local`);
  }
});

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const landing: string = data.landing ?? "safestreet";
    const scriptUrl = SCRIPT_URLS[landing] ?? SCRIPT_URLS["safestreet"];

    if (!scriptUrl) {
      return NextResponse.json(
        { result: "error", message: "Google Script URL not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit to Google Sheets (landing: ${landing})`);
    }

    return NextResponse.json({ result: "success" });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { result: "error", message: "Failed to submit lead" },
      { status: 500 }
    );
  }
}
