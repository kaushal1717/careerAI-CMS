// src/api/upload/routes/upload.js
'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/upload',
      handler: 'upload.upload',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};