const wait = (ms) => new Promise((r) => setTimeout(r, ms));
/**
 * build up
 * @param {number} limit
 */
module.exports = function awaitif(options = { limit: 10000 }) {
  /**
   * continue follow the process 
   */
  var _continue = false;
  this.continue = async function () {
    _continue = true;
  };
  /**
   * This function puts it at the line that you do not want the compiler to cross before the condition is true
   * @param {function} callback
   */
  this.finally = async function (callback) {
    var i = 0;
    var stats = true;
    const Interval = setInterval(async () => {
      i++;
      if (i >= options.limit && options.limit) {
        clearInterval(Interval);
        callback(new Error("limit exceeded"));
      }
      if (_continue) {
        clearInterval(Interval);
        stats = false;
        return;
      }
    }, 1);
    while (stats) {
      await wait(1);
    }
  };
};
/**
 * @Copyright 2022 Arth(https://github.com/4i8/)
 */
