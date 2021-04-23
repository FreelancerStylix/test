
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['ecExdpFC8Vb4GD9EyAb8Nn'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  