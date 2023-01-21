const p = new Promise((resolve, reject) => {
  let a = 1;

  if (a == 2) {
    resolve("Success");
  } else {
    reject("fail");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});
