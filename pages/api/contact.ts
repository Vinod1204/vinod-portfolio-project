import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body as {
    name?: string
    email?: string
    message?: string
  }

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing fields' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact from ${name}`,
      text: message,
    })

    return res.status(200).json({ message: 'Sent' })
  } catch (err) {
    console.error('Mail error', err)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
