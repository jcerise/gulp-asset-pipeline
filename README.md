Gulp Asset Pipeline
===================

A very simple asset pipeline for JS/SASS/LESS apps written using Gulp. This tries to mimic
some of the functions of Rails asset pipeline. It comes with tasks to
compile SASS and LESS to CSS, combine and minify JS files, and a static
asset versioning task as well. This is just a quick little experiment to
familiarize myself with Gulp.

## Installation

  git clone git@github.com:jcerise/gulp-asset-pipeline.git
  
  npm install
  
## File structure

Gulp will look in ./scss for .scss files, ./less for .less files, and
./src for .js files

## Usage

  gulp watch

This will set gulp to watching all files for changes, and it will
compile and minify when changes are detected, automatically

  gulp rev

This will add static versions (with hashed files names) of all files to
the ./dist directory

You can also run each compiler task separately

  gulp sass
  gulp less
  gulp scripts

## Release History

* 0.1.0 Initial Release
