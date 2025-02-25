"use server";

import { formSchema } from "@/components/drawer";
import { EmailTemplate } from "@/components/emails/email-template";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function send(values: z.infer<typeof formSchema>) {
  console.log("Running on server");

  const name = values.name;
  const email = values.email;
  const message = values.message || "";

  if (!name || !email) {
    throw new Error("Name and email are required.");
  }

  // Create a transporter object using Microsoft Outlook's SMTP settings (Office 365)
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // Use STARTTLS for security
    auth: {
      user: process.env.OUTLOOK_USER, // Your Outlook email address
      pass: process.env.OUTLOOK_PASS, // Your Outlook password or app-specific password
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  // Setup email data with unicode symbols
  let mailOptions = {
    from: '"Spencesa" <Lario@spencesa.co.za>', // Sender address
    to: "lario@spencesa.co.za", // Recipient address
    cc: "lario@vividgraphics.co.za", // Carbon Copy (if needed)
    replyTo: email, // Reply goes to the sender
    subject: "New message from Lario Spence", // Subject line
    text: `Message from ${name}, Email: ${email}, Message: ${message}`, // Plain text body
    html: `<b>Message from ${name}</b><p>Email: ${email}</p><p>Message: ${message}</p>`, // HTML body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return { success: true, message: "Email sent successfully", info };
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error; // Optionally, rethrow so the caller knows something went wrong
  }
}
