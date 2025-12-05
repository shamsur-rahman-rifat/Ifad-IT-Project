import Mailjet from "node-mailjet";

const client = Mailjet.apiConnect(
  process.env.MJ_API_KEY!,
  process.env.MJ_SECRET_KEY!
);

export default {
  async sendEmail(options: {
    to?: string | string[];     
    bcc?: string | string[];   
    subject: string;
    html: string;
    from?: string;
  }) {
    const toRecipients = options.to
      ? (Array.isArray(options.to)
          ? options.to.map((email) => ({ Email: email }))
          : [{ Email: options.to }])
      : [];

    const bccRecipients = options.bcc
      ? (Array.isArray(options.bcc)
          ? options.bcc.map((email) => ({ Email: email }))
          : [{ Email: options.bcc }])
      : [];

    return client.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: options.from ?? process.env.MJ_FROM_EMAIL!,
            Name: "IFAD IT",
          },
          To: toRecipients,   
          Bcc: bccRecipients,
          Subject: options.subject,
          HTMLPart: options.html,
        },
      ],
    });
  },
};
