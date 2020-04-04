const f = require("../dist/index");

const ff = f();

ff.getItem()
  .then((d) => {
    console.log(d);
  })
  .catch((e) => {
    console.log(e);
  });
