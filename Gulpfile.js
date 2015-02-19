var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src('png/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.json',
    algorithm: 'binary-tree',
    padding: 2

  }));
  spriteData.pipe(gulp.dest('.'));
});
