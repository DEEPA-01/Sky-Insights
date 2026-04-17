import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    // 1️⃣ Parse request body
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: "Email and password are required." },
        { status: 400 }
      );
    }

    // 2️⃣ Find the admin in MongoDB
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return NextResponse.json(
        { ok: false, error: "Admin not found." },
        { status: 404 }
      );
    }

    // 3️⃣ Compare password using bcrypt
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return NextResponse.json(
        { ok: false, error: "Invalid credentials." },
        { status: 401 }
      );
    }

    // 4️⃣ Successful login
    return NextResponse.json({
      ok: true,
      message: "Login successful!",
      admin: {
        email: admin.email,
        createdAt: admin.createdAt,
      },
    });
  } catch (err) {
    console.error("Login API error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error, please try again later." },
      { status: 500 }
    );
  }
}
