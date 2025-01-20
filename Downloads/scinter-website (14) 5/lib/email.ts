// import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';


// sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function sendWelcomeEmail(to: string, firstName: string) {
      const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
        // port: parseInt(process.env.SMTP_PORT, 10),
        port:465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  const msg = {
    to,
    from: 'support@scinter.org', // Replace this with your verified sender email
    subject: 'Welcome to ScInter – Revolutionizing Scientific Discoveries',
    html: `
      <h1>Hello ${firstName},</h1>
      <p>Thank you for signing up to be a part of ScInter, a platform dedicated to revolutionizing the 
      way science is shared, explored, and developed.</p>
      <p>At ScInter, we connect researchers, academic institutions, industries, and science enthusiasts 
      through a collaborative ecosystem powered by Large Concept Models and Knowledge 
      Graphs. Together, we aim to make scientific innovation more accessible and impactful.</p>
      <h2>What's Next?</h2>
      <ul>
        <li><strong>Stay Informed:</strong> We will keep you updated with the latest developments and 
        milestones as we move forward.</li>
        <li><strong>Early Access Opportunities:</strong> As part of our early community, you will gain 
        exclusive access to the platform and its features before the public launch.</li>
        <li><strong>Engage and Collaborate:</strong> Your insights and feedback will play a vital role in shaping 
        ScInter into a robust and dynamic space for collaboration.</li>
      </ul>
      <p>We invite you to follow us on our social channels for updates, announcements, and 
      opportunities to engage:</p>
      <p>[Insert links to LinkedIn, Twitter, etc.]</p>
      <p>If you have any questions or ideas, please feel free to reach out at support@scinter.org. We're 
      excited to embark on this journey with you and look forward to making a meaningful impact 
      together.</p>
      <p>Thank you for joining us as we redefine the future of science.</p>
      <p>Sincerely,<br>The ScInter Team</p>
      <p><a href="https://www.scinter.org">Visit our website</a></p>
    `,
  };

  try {
    const info = await transporter.sendMail(msg);
    console.log('Email sent:', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

