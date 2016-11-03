const gulp = require('gulp');
// const webpack = require('gulp-webpack');
const qn = require('gulp-qn');
// MD5戳
const rev = require('gulp-rev-qn');
const revCollector = require('gulp-rev-collector');
const runSequence = require('run-sequence');

const qiniu_options = {
  accessKey: 'wcn9gOsIsryAPaMZQDlj5LzWDYXsLyjxf2xFql0_',
  secretKey: '2tR63w-1yQCF9pWA2hgKwXDxshZBPY3Asl164bYb',
  bucket: 'myspace',
  domain: 'http://zhaoandong.com'
};
gulp.task('publish-js', function () {
  return gulp.src(['./dist/*.js'])
    // .pipe(rev())
    .pipe(gulp.dest('./dist'))
    .pipe(qn({
      qiniu: qiniu_options    
    }))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist'));
});
// gulp.task('publish-font-img', function () {
//   return gulp.src(['./build/js/*.svg','./build/js/*.gif','./build/js/*.woff2','./build/js/*.ttf','./build/js/*.eot','./build/js/*.woff'])
//     .pipe(qn({
//       qiniu: qiniu_options,
//       prefix: 'js'
//     }));
// });
gulp.task('publish-css', function () {
  return gulp.src(['./dist/*.css'])
    .pipe(gulp.dest('./dist'))
    .pipe(qn({
      qiniu: qiniu_options    
    }))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist'));
});
// gulp.task('publish-html', function () {
//   return gulp.src(['./build/rev/**/*.json', './build/views/*.html'])
//     .pipe(revCollector({
//       dirReplacements: {
//         '/js/': ''
//       }
//     }))
//     .pipe(gulp.dest('./build/views'));
// });
gulp.task('default',function(callback){
  runSequence(
    ['publish-js','publish-css'],
    callback);
});