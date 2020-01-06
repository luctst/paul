# Paul

[![Build Status](https://travis-ci.com/luctst/Paul.svg?branch=master)](https://travis-ci.com/luctst/Paul)
[![NPM version](https://img.shields.io/npm/v/@luctst/paul?style=flat-square)](https://img.shields.io/npm/v/@luctst/paul?style=flat-square)
[![Package size](https://img.shields.io/bundlephobia/min/@luctst/paul)](https://img.shields.io/bundlephobia/min/@luctst/paul)
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
Use Paul via a CDN by including this script:

Add this script just before your `</body>` closing tag:
```js
<script crossorigin src="https://unpkg.com/@luctst/paul/umd/paul.client.min.js"></script>
```

You now have access to the `Paul()` function to see how to use it check the api section below.

### Exemple
After adding the script create another `<script>` tag and call the `Paul function`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Your title</title>
</head>
<body>
    <script crossorigin src="https://unpkg.com/@luctst/paul/umd/paul.client.min.js"></script>
    <script>
        Paul();
    </script>
</body>
</html>
```

## API
### Paul([selecteur], [friends])

The `Paul` function create an img with my friend Paul.

* `selecteur` {HTMLElement, optional} - If this argument is specified the `click` event will be attached on this DOM Element.
* `friends` {Array, optional} - If this argument is specified the function will display randomly an img from the `friends` array.

## Contribute
If you'll like to add more images create a PR by adding a new picture in the `static` folder at the root folder.

## Licence
MIT

<p style="font-size:8px;text-align:center;margin-top:50px;">File generated with <a href="https://github.com/luctst/get-good-readme">get-good-readme</a> module.</p>
