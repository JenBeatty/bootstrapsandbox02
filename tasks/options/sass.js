module.exports = {
  dist: {
    options: {
      // cssmin will minify later if I install it
      style: 'expanded'
    },
    files: {
      'css/bootstrap.css': 'sass/bootstrap.scss'
    }
  }
}