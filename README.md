# express-wetland
A super simple piece of [express](http://expressjs.com/) middleware that patches requests with methods that make working with [wetland](https://wetland.spoonx.org) a breeze.

## Installation

### With npm
`npm i express-wetland --save`

### With yarn
`yarn add express-wetland`

## Usage

```js
const expressWetland = require('express-wetland');
const wetland        = new Wetland(yourConfig);

app.use(expressWetland(wetland));
```

### Methods

#### req.getManager()
Returns an entity manager scope that only applies to the request, and only lives as long as the request.

#### req.getRepository(Entity)
Returns the repository for given `Entity` reference, or Entity's identity string.

#### req.wetland
This is the wetland instance you passed in to the middleware on config.

## License
MIT
