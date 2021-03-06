
// 文件
// 引入gulp
var gulp = require('gulp');//类似于<script src="">
var sass = require('gulp-sass');

// 用gulp完成一个任务的代码格式
// gulp.task("命令名",回调函数);在命令行里输入命令名就相当于执行回调函数里的代码

// 如何用gulp完成文件的复制的功能
// 这个功能主要体现在吧开发目录下的文件复制到发布目录下
gulp.task("copy-index",function(){
    //复制文件
    gulp.src('index.html')
    // distk可以写绝对路径的在www下创建项目的名称将绝对路径复制到dest里面
    .pipe(gulp.dest("dist"));
    // 执行npm copy-index命令，因为每次改都要在cmd重新输入此命令，可以用watch

});
    // 把跟目录下的所有的html文件复制到发布目录下
    gulp.task("copy-index",function(){
        //复制项目中所有的html文件
        gulp.src('*.html')
        // distk可以写绝对路径的在www下创建项目的名称将绝对路径复制到dest里面
        .pipe(gulp.dest("dist"));
        // 执行npm copy-index命令，因为每次改都要在cmd重新输入此命令，可以用watch
    
    });
// 复制文件完成

// img
// 把img文件夹下所有的jpg文件复制到发布目录下
gulp.task("copy-img",function(){
    //复制文件，如果你的文件里既有jpg格式又有png格式{jpg,png}
    // gulp.src('img/*.{jpg,png}')
    // 表示复制当前文件下的文件和子文件
    gulp.src('img/**/*')
    // dist可以写绝对路径的在www下创建项目的名称将绝对路径复制到dest里面
    .pipe(gulp.dest("dist\\img"));
    // 执行npm copy-index命令，因为每次改都要在cmd重新输入此命令，可以用watch

});

//过滤文件
// gulp.task("data",function(){
//     gulp.src(["xml/*.xml","json/*.json","!json/test.json"]).pipe(gulp.dest("dist/data"));
// });

// 一次性执行多个任务
gulp.task("bat",["copy-index","copy-img"],function(){

  });

// sass编译
gulp.task("sassfile",function(){
    //当前路径下的文件，经过调用sass函数编译到css下
    gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest("dist\\css"));
});


// 监听
gulp.task("watchall",function(){
    //gulp.watch("index.html",["copy-index"]);
    gulp.watch("*.html",["copy-index"]);
    //在命令行输入gulp watchall
    // gulp.watch("img/*.jpg",["copy-img"]);
    gulp.watch("img/**/*",["copy-img"]);
    //任务的执行必须要有更新
    gulp.watch("sass/*.scss",["sassfile"]);
});

// 1.安装sass插件
// 2.引入gulp-sass插件（该插件完成sass的编译,编译成css）



