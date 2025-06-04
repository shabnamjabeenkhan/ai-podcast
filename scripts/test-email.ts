import { sendEmail } from '@/lib/email-service';

async function main() {
    await sendEmail({
        to: 'shabnam.jabeen.1998@gmail.com',
        subject: 'Welcome to Podclip!',
        url: 'https:podclip.tech', // or whatever link you want in the email
      });
  console.log('Email sent!');
}

main();