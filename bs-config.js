module.exports = {
  proxy: "localhost:8000",
  files: ["**/*.css", "**/*.js", "**/*.html"],
  ignore: ["node_modules"],
  reloadDelay: 10,
  ui: false,
  notify: true,
  port: 8000,
};
