// src/app/api/admin/login/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // dummy credentials for testing
  const ADMIN_EMAIL = "admin@example.com";
  const ADMIN_PASSWORD = "Admin@123";

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return NextResponse.json({ ok: true, message: "Login success" });
  } else {
    return NextResponse.json({ ok: false, error: "Invalid credentials" }, { status: 401 });
  }
}
