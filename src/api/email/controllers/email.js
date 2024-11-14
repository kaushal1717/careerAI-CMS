module.exports = {
    async send(ctx) {
      try {
        const { data } = ctx.request.body;
        
        // Extract email data
        const { to, from, subject, html, attachments } = data;
  
        // Validate required fields
        if (!to || !subject) {
          return ctx.badRequest('Required fields missing');
        }
  
        // Send email
        await strapi.plugins['email'].services.email.send({
          to,
          from: from || process.env.SMTP_FROM, // Use provided from or default
          subject,
          html,
          attachments,
        });
  
        // Return success response
        return ctx.send({
          message: 'Email sent successfully'
        });
        
      } catch (err) {
        console.error('Email error:', err);
        return ctx.badRequest('Email sending failed');
      }
    }
  };