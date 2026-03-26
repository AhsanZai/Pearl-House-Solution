import { NextResponse } from "next/server";

// Use the environment variable for security
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

if (!GOOGLE_SCRIPT_URL) {
  console.warn("GOOGLE_SCRIPT_URL is not defined in .env.local");
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Proxy the request to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets");
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
