const p = new Promise((resolve, reject) => {
  let arr = 10;

  if (arr == 10) {
    resolve("Success");
  } else {
    reject("Fail");
  }
});

p.then((message) => {
  console.log("This is in then " + message);
}).catch((message) => {
  console.log("This is in catch " + message);
});
