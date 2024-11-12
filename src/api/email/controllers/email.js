"use strict";

const fs = require("fs");

module.exports = {
  async sendWithAttachment(ctx) {
    const { emailTo } = ctx.request.body;
    const { files } = ctx.request.files;

    if (!emailTo || !files) {
      return ctx.badRequest("Missing email or attachment");
    }

    try {
      // Read the PDF file
      const pdfFile = fs.createReadStream(files.attachment.path);

      // Send the email with the PDF attachment
      await strapi.plugins["email"].services.email.send({
        to: emailTo,
        from: "your-email@example.com",
        subject: "Your PDF Attachment",
        text: "Please find the attached PDF.",
        attachments: [
          {
            filename: files.attachment.name,
            content: pdfFile,
          },
        ],
      });

      return ctx.send({ message: "Email sent successfully!" });
    } catch (err) {
      strapi.log.error("Error sending email", err);
      return ctx.internalServerError("Failed to send email");
    }
  },
};
