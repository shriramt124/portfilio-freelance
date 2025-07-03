import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData: ContactFormData = await request.json();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the form submission (helpful for debugging)
    console.log('Received contact form submission:');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Subject:', formData.subject);
    console.log('Message:', formData.message);
    
    // Create a nodemailer transporter
    // Note: For production, use environment variables for sensitive information
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: Boolean(process.env.EMAIL_SECURE) || false,
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your email or use env variable
        pass: process.env.EMAIL_PASSWORD || 'your-app-password', // Replace with your app password or use env variable
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME || 'Website Contact Form'}" <${process.env.EMAIL_USER || 'your-email@gmail.com'}>`,
      to: process.env.EMAIL_TO || 'your-email@gmail.com', // Replace with your email or use env variable
      replyTo: formData.email,
      subject: `New Contact Form: ${formData.subject}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    })

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}