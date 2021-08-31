const { grid } = require("./grid");

function enc(passWord) {
  let encryption = [];
  for (let p of passWord) {
    encryption.push(grid[p].join(""));
  }
  return encryption.join("");
}

module.exports.enc = enc;
