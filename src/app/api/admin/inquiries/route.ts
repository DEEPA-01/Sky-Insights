// // app/api/admin/messages/route.ts

// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

// export async function GET() {
//   try {
//     const messages = await prisma.message.findMany({
//       orderBy: { createdAt: "desc" },
//     });

//     return NextResponse.json({
//       ok: true,
//       messages,
//     });
//   } catch (error) {
//     console.error("Error fetching messages:", error);
//     return NextResponse.json(
//       { ok: false, error: "Server error" },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      ok: true,
      messages,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

