import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'sahan4648@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            replyTo: email,
            text: `
New message from your portfolio website:

Name: ${name}
Email: ${email}
Message:
${message}
      `,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f4f4f4; padding: 12px; border-radius: 4px;">${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json({ success: true, id: data?.id });
    } catch (error) {
        console.error('Email sending error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
