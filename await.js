function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Make a request to" ${location}`);
    if (location == "Google") {
      console.log("Google Say Hi");
    } else {
      console.log("We are only talk to Google");
    }
  });
}
