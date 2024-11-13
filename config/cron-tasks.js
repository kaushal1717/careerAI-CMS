// config/cron-tasks.js
module.exports = {
    // Runs every 12 minutes
    '*/12 * * * *': async ({ strapi }) => {
      console.log('Executing cron job every 12 minutes');
      // Call the index function in your 'ok' controller
      await strapi.controller('api::ok.ok').index({
        send: (msg) => console.log(msg),  // Mock `ctx.send` to log the output
      });
    },
  };
  