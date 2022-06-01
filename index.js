const wait = (ms) => new Promise((r) => setTimeout(r, ms));
/**
 * build up
 * @param {number} limit
 */
module.exports = function awaitif(options = { limit: 10000 }) {
  /**
   * if you want to continue immediately without conditions use this
   */
  this.continue = async function () {
    this.condition = true;
  };
  /**
   * Here you can put the condition
   */
  this.condition = false;
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
      if (this.condition) {
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
