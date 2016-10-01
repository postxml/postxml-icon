# postxml-icon
[![npm version][npm-image]][npm-url]

> PostXML plugin better svg icons usage.

## Installation
`npm i postxml-icon --save-dev`

## Usage
[Postxml]

## Example

### Input
```html
<icon class="icon">name</icon>
```

### Output
```html
<svg class="icon">
	<use xlink:href="#icon--name"></use>
</svg>
```

## Licence
MIT

[PostXML]: https://github.com/postxml/postxml

[npm-url]: https://www.npmjs.org/package/postxml-icon
[npm-image]: http://img.shields.io/npm/v/postxml-icon.svg?style=flat-square
