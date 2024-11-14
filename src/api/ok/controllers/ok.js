"use strict";

module.exports = {
  async index(ctx) {
    try {
      ctx.send("ok");
    } catch (error) {
      ctx.send("not ok");
    }
  },
};
