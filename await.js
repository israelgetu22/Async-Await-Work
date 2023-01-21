function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Make a request to" ${location}`);
    if (location == "Google") {
      resolve("Google Say Hi");
    } else {
      reject("We are only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing Response");
    resolve(`Extra Information + ${response}`);
  });
}

// makeRequest("Google")
//   .then((response) => {
//     return processRequest(response);
//   })
//   .then((processRequest) => {
//     console.log(processRequest);
//   })
//   .catch((err) => console.log(err));

async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response Received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();
