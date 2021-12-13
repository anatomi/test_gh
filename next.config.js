const basePath = process.env.NODE_ENV === 'production' ? '/test_gh' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};