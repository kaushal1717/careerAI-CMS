'use strict';

module.exports = {
  upload: async (ctx) => {
    try {
      const { files } = ctx.request;

      if (!files) {
        throw new Error("No files were uploaded");
      }

      const uploadedFiles = await strapi.plugin('upload').service('upload').upload({
        data: ctx.request.body, // additional data if needed
        files,                  // the files to upload
      });

      ctx.body = {
        data: uploadedFiles,
      };
    } catch (err) {
      console.error("Error uploading file:", err);
      ctx.body = { error: err.message };
      ctx.status = 500;
    }
  },
};
