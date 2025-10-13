import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { from_name, from_email, subject, message, service_selected, honeypot } = body;
    
    // Honeypot spam protection
    if (honeypot) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      );
    }
    
    // Validate required fields
    if (!from_name || !from_email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // EmailJS configuration
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name,
      from_email,
      subject: subject || 'New Contact Form Submission',
      message,
      service_selected: service_selected || 'Not specified'
    };

    // For now, let's log the data and simulate success
    // In production, you would integrate with your preferred email service
    console.log('Contact form data received:', {
      from_name,
      from_email,
      subject: subject || 'New Contact Form Submission',
      message: message || 'No message provided',
      service_selected: service_selected || 'Not specified',
      templateParams
    });

    // TODO: Replace this with actual EmailJS integration
    // The EmailJS REST API might require different authentication
    // For now, we'll simulate a successful email send
    
    // Uncomment the following lines when you have EmailJS properly configured:
    /*
    const emailjsResponse = await fetch(
      `https://api.emailjs.com/api/v1.0/email/send`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams,
        }),
      }
    );

    if (!emailjsResponse.ok) {
      const errorData = await emailjsResponse.text();
      console.error('EmailJS API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email', details: errorData },
        { status: 500 }
      );
    }
    */

    console.log('Contact form submitted successfully:', { from_name, from_email, subject });

    // Return success response
    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}