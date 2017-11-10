/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event The Cloud Functions event.
 * @param {!Function} The callback function.
 */
const https = require('https');

exports.subscribe = function subscribe(event, callback) {
    // The Cloud Pub/Sub Message object.
    console.log(event.data);
    let reqObject = JSON.parse(event.data);
    console.log(reqObject);

    /*
    https.get('https://api.makusafe.com/v1/incidentLocation', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;f
        });
       
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          console.log(JSON.parse(data).explanation);
        });
       
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    */

    // Don't forget to call the callback.
    callback();
  };