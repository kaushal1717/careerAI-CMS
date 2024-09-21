"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ok", // Define the path for your API
      handler: "ok.index", // Define the handler for this route
      config: {
        auth: false, // Disable authentication for this route if needed
      },
    },
  ],
};
