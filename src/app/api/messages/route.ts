import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, page } = await req.json();

    // -------------------------------------------------
    // 🔥 Soft Validation (Flexible)
    // -------------------------------------------------

    if (!name && !email && !message) {
      return NextResponse.json(
        { success: false, error: "Please enter at least one field." },
        { status: 400 }
      );
    }

    // Phone → Optional, but must be 10 digits if provided
    if (phone && !/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { success: false, error: "Phone must be exactly 10 digits." },
        { status: 400 }
      );
    }

    // -------------------------------------------------
    // 💾 SAVE TO DATABASE (Matches Prisma Schema)
    // -------------------------------------------------

    const saved = await prisma.message.create({
      data: {
        name: name || "",
        email: email || "",
        phone: phone || "",
        message: message || "",
        page: page || "",
      },
    });

    // -------------------------------------------------
    // ✉️ SMTP TRANSPORT (GoDaddy)
    // -------------------------------------------------
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const logoURL =
      "https://i.ibb.co/HD5HYP8N/SI-final-logo-removebg-preview.png";

    // -------------------------------------------------
    // 📩 ADMIN EMAIL
    // -------------------------------------------------

    const adminHtml = `
<div style="font-family: Arial; background:#eaf3ff; padding:25px;">
  <div style="max-width:650px; margin:auto; border-radius:12px; overflow:hidden; background:white; box-shadow:0 4px 15px rgba(0,0,0,0.1);">

    <div style="padding:18px; text-align:center; background:#001f3f;">
      <img src="${logoURL}" width="120" style="display:block; margin:auto;" />
      <h2 style="color:white; margin-top:10px;">New CTA Form Submission</h2>
    </div>

    <div style="padding:24px; color:#001f3f;">
      <p><b>Name:</b> ${name || "—"}</p>
      <p><b>Email:</b> ${email || "—"}</p>
      <p><b>Phone:</b> ${phone || "—"}</p>

      <h3 style="margin-top:20px;">Message:</h3>
      <p style="background:#f4f8ff; padding:12px; border-left:4px solid #003366;">
        ${message || "—"}
      </p>

      <h3 style="margin-top:20px;">Page:</h3>
      <p style="background:#f4f8ff; padding:10px; border-radius:6px;">
        ${page || "Unknown"}
      </p>
    </div>

    <div style="padding:12px; background:#001f3f; text-align:center;">
      <p style="color:white; margin:0;">Sky Insights — Data-Driven Digital Agency</p>
    </div>

  </div>
</div>
`;

    await transporter.sendMail({
      from: `"Sky Insights" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Form Submission",
      html: adminHtml,
    });

    // -------------------------------------------------
    // 🤝 AUTO-REPLY EMAIL TO USER (IF EMAIL GIVEN)
    // -------------------------------------------------

    if (email) {
      const userHtml = `
<div style="font-family: Arial; background:#eaf3ff; padding:25px;">
  <div style="max-width:650px; margin:auto; border-radius:12px; overflow:hidden; background:white; box-shadow:0 4px 15px rgba(0,0,0,0.1);">

    <div style="padding:20px; text-align:center; background:#001f3f;">
      <img src="${logoURL}" width="120" style="display:block; margin:auto;" />
      <h2 style="color:white; margin-top:10px;">Thank You for Reaching Out!</h2>
    </div>

    <div style="padding:24px; color:#001f3f;">
      <p>Hi <b>${name || "there"}</b>,</p>
      <p>Thank you for contacting Sky Insights! Our team will reach out soon.</p>

      <p><b>Your Message:</b></p>
      <p style="background:#f4f8ff; padding:12px; border-radius:6px;">
        ${message || "—"}
      </p>

      <div style="text-align:center; margin-top:25px;">
        <a href="https://skyinsights.in"
          style="padding:12px 20px; background:#001f3f; color:white; border-radius:6px; text-decoration:none;">
          Visit Our Website
        </a>
      </div>

      <div style="margin-top:25px; text-align:center;">
        <p>Connect With Us:</p>
        <a href="https://wa.me/918779290627" style="margin:0 8px;">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="26" />
        </a>
        <a href="https://instagram.com/sky_insights_" style="margin:0 8px;">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="26" />
        </a>
        <a href="https://linkedin.com/company/skyinsights" style="margin:0 8px;">
          <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="26" />
        </a>
      </div>
    </div>

    <div style="padding:12px; background:#001f3f; text-align:center;">
      <p style="color:white; margin:0;">Sky Insights — Growing Businesses Smartly</p>
    </div>

  </div>
</div>
`;

      await transporter.sendMail({
        from: `"Sky Insights" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "We Received Your Message – Sky Insights",
        html: userHtml,
      });
    }

    return NextResponse.json({ success: true, data: saved });
  } catch (err) {
    console.error("Error in /api/messages:", err);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}












// app/api/messages/route.ts
// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const { name, email, phone, subject, message, page } = await req.json();

//     // validation
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { success: false, error: "Name, Email & Message are required." },
//         { status: 400 }
//       );
//     }

//     if (phone && !/^\d{10}$/.test(phone)) {
//       return NextResponse.json(
//         { success: false, error: "Phone must be 10 digits." },
//         { status: 400 }
//       );
//     }

//     // Save to DB
//     const saved = await prisma.message.create({
//       data: {
//         name,
//         email,
//         phone: phone || "",
//         subject: subject || "",
//         message,
//         page: page || "",
//       },
//     });

//     // Email setup
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // ADMIN EMAIL
//     await transporter.sendMail({
//       from: `"Sky Insights" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_TO,
//       subject: "New Inquiry from Website",
//       html: `
//         <h2>New Inquiry Received</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone || "-"}</p>
//         <p><b>Subject:</b> ${subject || "-"}</p>
//         <p><b>Message:</b> ${message}</p>
//         <p><b>Page:</b> ${page}</p>
//       `,
//     });

//     // USER EMAIL
//     if (email) {
//       await transporter.sendMail({
//         from: `"Sky Insights" <${process.env.EMAIL_USER}>`,
//         to: email,
//         subject: "We received your message!",
//         html: `
//           <h3>Thank you for contacting Sky Insights!</h3>
//           <p>Dear ${name},</p>
//           <p>Your message has been received. We will get back to you soon.</p>
//         `,
//       });
//     }

//     return NextResponse.json({ success: true, data: saved });

//   } catch (err) {
//     console.error("API ERROR:", err);
//     return NextResponse.json(
//       { success: false, error: "Server error" },
//       { status: 500 }
//     );
//   }
// }
