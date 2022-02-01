import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { Transporter } from 'nodemailer';

/**
 * Sends an email with 'angler.robotics.no.reply@gmail.com' to 'angler.robotics@gmail.com' containing the details
 * entered into the contact form.
 * If in dev environment, sends an email with the provided DEV_EMAIL to the provided DEV_EMAIL.
 */
export default async function contact(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).end();
  }
  const botEmail =
    process.env.NODE_ENV === 'development' ? process.env.DEV_EMAIL : 'angler.robotics.no.reply@gmail.com';
  try {
    const transporter: Transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: botEmail,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const options = {
      from: `Angler Website Contact ${botEmail}`,
      to: process.env.NODE_ENV === 'development' ? process.env.DEV_EMAIL : 'angler.robotics@gmail.com',
      subject: `Message From ${req.body.name}: ${req.body.subject}`,
      text: `${req.body.message} | Sent from: ${req.body.email}`,
      html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
    };
    await transporter.sendMail(options);
    res.status(200).end();
  } catch (error) {
    res.status(400).end();
  }
}
