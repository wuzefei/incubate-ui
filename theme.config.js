module.exports = () => {
  const themePath = require('path').join(__dirname, './src/themes/default.less');
  return require('less-vars-to-js')(require('fs').readFileSync(themePath, 'utf8'));
}
