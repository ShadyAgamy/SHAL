var gulp = require("gulp");
var prefix = require("gulp-autoprefixer");
var autoprefixer = require("autoprefixer");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var imagemin = require("gulp-imagemin");
var sourcemaps = require("gulp-sourcemaps");
var rtlcss = require("gulp-rtlcss");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var postcss = require("gulp-postcss");
const browserify = require("browserify");
const buffer = require("vinyl-buffer");
const source = require("vinyl-source-stream");

//Copy All HTML Files
gulp.task("copyHTML", () => gulp.src("src/*.html").pipe(gulp.dest("build")));

//Optimize Images
gulp.task("imagemin", () =>
	gulp
		.src("src/img/**/*.+(png|jpg|gif|svg|ico)")
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.jpegtran({ progressive: true }),
				imagemin.optipng({ optimizationLevel: 6 }),
				imagemin.svgo({
					plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
				}),
			])
		)
		.pipe(gulp.dest("build/img"))
);

gulp.task("css", () =>
	gulp
		.src("src/sass/main.scss")
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: "compress" }).on("error", sass.logError))
		.pipe(postcss([autoprefixer("last 5 version")]))
		.pipe(gulp.dest("build/css"))
		.pipe(rtlcss()) // Convert to RTL.

		.pipe(rename({ suffix: "-rtl" })) // Append "-rtl" to the filename.

		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest("build/css"))
); // Output RTL stylesheets.);

gulp.task("scripts", () => browserify({
	entries: "src/js/script.js",
	debug: true
})
	.transform("babelify", {
		presets: ["@babel/preset-env"],
		plugins: ["@babel/plugin-transform-runtime"]
	})
	.bundle()
	.pipe(source("script.js"))
	.pipe(buffer())
	.pipe(gulp.dest("build/js")));
// gulp.task("scripts", () => gulp.src("src/js/*.js").pipe(concat("script.js")).pipe(gulp.dest("build/js")));


gulp.task("watch", gulp.series("copyHTML", "css", "imagemin", "scripts", () => {
	gulp.watch(["src/*.html"], gulp.series("copyHTML"));
	gulp.watch(["src/images/**/*.+(png|jpg|gif|svg|ico)"], gulp.series("imagemin"));
	gulp.watch(["src/sass/**/*.scss"], gulp.series("css"));
	gulp.watch(["src/js/*.js"], gulp.series("scripts"));
}));
gulp.task("default", gulp.series("copyHTML", "css", "imagemin", "scripts"));