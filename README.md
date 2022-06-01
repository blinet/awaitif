<div align="center">
  <p>
 <a href="https://www.npmjs.com/package/awaitif"><img  src="https://raw.githubusercontent.com/4i8/awaitif/master/logo/awaitif.png" width="400" alt="awaitif" /></a>
  </p>
  <p>
 <a href="https://github.com/arosteam"><img src="https://img.shields.io/static/v1?label=powered%20by&message=Aros&color=000636&style=for-the-badge&logo=Windows%20Terminal&logoColor=fff"/></a>
 <a href="https://www.npmjs.com/package/awaitif"><img src="https://img.shields.io/npm/v/awaitif.svg?style=for-the-badge" alt="NPM version" /></a>
 <a href="https://www.npmjs.com/package/awaitif"><img src="https://img.shields.io/npm/dt/awaitif.svg?maxAge=3600&style=for-the-badge" alt="NPM downloads" /></a>
  </p>
</div>

## About

It's a package that makes await more useful and it's much more useful for ordering the conditions which requires time, so in this package you can use the conditions and if the given condition is true it will go to the next lines

- Speed
- Easy to use
- useful

## Installation

```sh-session
npm install awaitif
yarn add awaitif
```

## How to use

```js
const awaitif = require("awaitif");
const awif = new awaitif();
```


> **Options**

```js
 limit: 10000,//limit is the number of times the
 // function will be called

```

> **Method and Properties**

```js
/**
 * if you want to continue immediately without conditions use this
 */
awif.continue();
/**
 * Here you can put the condition
 */
awif.condition = /*condition*/;
/**
* This function puts it at the line that you do not want the compiler to cross before the condition is true
* @param {function} callback
*/
awif.finally();
```
### Example

```js
const awaitif = require("awaitif");
//This function is just an example, no need to use it
function example() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hi");
    }, 5000);
  });
}
//main example
(async () => {
  const awif = new awaitif();
  example().then((res) => {
    awif.condition = res === "Hi";
    //if the condition is true it will move to the next lines
    //Or if you want to continue immediately without conditions use
    //awif.continue();
  });
  await awif.finally(function (err) {
    //If you change the limit to 0,
    //the callback will not work because there is no limit The condition must be true in order to continue

    // if the required limit is exceeded
    // and the condition is false, you'll get this error
    if (err) {
      // If you want to follow the process and continue to the other lines put
      // awif.continue();
      return console.log(err);
    }
  });
  //do something...
  console.log("The condition is true or continue");
})();
```

## Links

- [Twiter](https://twitter.com/onlyarth)
- [Github](https://github.com/4i8)
- [Documentation](#documentation)

## License

- [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
# awaitif
