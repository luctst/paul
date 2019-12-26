# Paul

[![Build Status](https://travis-ci.com/luctst/Paul.svg?branch=master)](https://travis-ci.com/luctst/Paul)
[![NPM version](https://img.shields.io/npm/v/Paul?style=flat-square)](https://img.shields.io/npm/v/Paul?style=flat-square)
[![Package size](https://img.shields.io/bundlephobia/min/Paul)](https://img.shields.io/bundlephobia/min/Paul)
[![Dependencies](https://img.shields.io/david/luctst/Paul.svg?style=popout-square)](https://david-dm.org/luctst/Paul)
[![devDependencies Status](https://david-dm.org/luctst/Paul/dev-status.svg?style=flat-square)](https://david-dm.org/luctst/Paul?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Twitter](https://img.shields.io/twitter/follow/luctstt.svg?label=Follow&style=social)](https://twitter.com/luctstt)

*Meet Paul at each click*

## Motivation
<p style="text-align:center;"><img src="./paul-readme.jpg" style="width:30%;height:auto;object-fit:contain;"/></p>

This is my friend Paul, as you can see Paul is a cute guy he loves beer and he works hard everyday..

So I decided to honor him with this little package each time you'll click on a DOM element my friend Paul will appear randomly on your web page :) Enjoy !!

## Usage

### With Node
For now Paul is not available with Node we're working on this but you can use it with a CDN.

### In browser
Use Paul via a CDN by including those scripts:

First include the css in your head with:
```js
<link rel="stylesheet" src="unpkg.com/Paul/umd/paul.style.css">
```

And add this script just before your `</body>` tag:
```js
<script crossorigin src="unpkg.com/Paul/umd/paul.client.min.js"></script>
```

You now have access to the `Paul()` function to see how to use it check the api section below.

## API
### Paul([selecteur], [friends])

The `Paul` function create an img with my friend Paul.

* `selecteur` {HTMLElement, optional} - If this argument is specified the `click` event will be attached on this DOM Element.
* `friends` {Array, optional} - If this argument is specified the function will display randomly an img from the `friends` array.

## Licence
MIT

<p style="font-size:8px;text-align:center;margin-top:50px;">File generated with <a href="https://github.com/luctst/get-good-readme">get-good-readme</a> module.</p>
