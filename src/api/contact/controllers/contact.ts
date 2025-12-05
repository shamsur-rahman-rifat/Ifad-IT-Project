import mailjetService from "../services/mailjet";

export default {
  async submit(ctx) {
    const { name, email, message } = ctx.request.body;

    if (!email || !message) {
      return ctx.badRequest("Missing required fields.");
    }

    const admins = process.env.ADMIN_EMAILS?.split(",").map((e) => e.trim()) ?? [];

    if (admins.length === 0) {
      console.warn("⚠ No ADMIN_EMAILS configured in .env");
    }

    // send email to admins
    await mailjetService.sendEmail({
      to: "noreply@itracker.com.bd",
      bcc: admins,
      subject: `New contact form submission from ${name}`,
      html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    // send thank you email to the user
    await mailjetService.sendEmail({
      to: email,
      subject: "Thank you for contacting us!",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out! We received your message and will get back to you shortly.</p>
      `,
    });

    return ctx.send({ success: true });
  },
};
