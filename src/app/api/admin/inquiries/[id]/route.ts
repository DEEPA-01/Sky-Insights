// app/api/admin/messages/[id]/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ GET single message
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> } // 👈 Correct type for Next.js 15 App Router
) {
  try {
    const { id } = await context.params; // 👈 Await params since it's a Promise now
    const message = await prisma.message.findUnique({ where: { id } });

    if (!message)
      return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });

    return NextResponse.json({ ok: true, message });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

// ✅ PATCH to update `seen` or other fields
export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    // Type-safe object creation
    const data: Partial<{ seen: boolean }> = {};

    if (typeof body.seen === "boolean") {
      data.seen = body.seen;
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json(
        { ok: false, error: "No valid fields to update" },
        { status: 400 }
      );
    }

    const updated = await prisma.message.update({
      where: { id },
      data,
    });

    return NextResponse.json({ ok: true, message: updated });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

// ✅ DELETE message
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await prisma.message.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Server error or not found" },
      { status: 500 }
    );
  }
}





// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function GET(
//   request: Request,
//   context: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await context.params;

//     const message = await prisma.message.findUnique({
//       where: { id },
//     });

//     if (!message)
//       return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });

//     return NextResponse.json({ ok: true, message });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
//   }
// }

// export async function DELETE(
//   request: Request,
//   context: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await context.params;

//     await prisma.message.delete({
//       where: { id },
//     });

//     return NextResponse.json({ ok: true });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { ok: false, error: "Server error or not found" },
//       { status: 500 }
//     );
//   }
// }
