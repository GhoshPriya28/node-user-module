
require('dotenv').config();
var { FCM_KEY } = process.env;
var FCM = require('fcm-node');

// For single notification 
exports.sentNotificationSingle = function (receiver_id = null, title = null, dataO = null) {
	var serverKey = FCM_KEY; 		//put your server key here
	var fcm = new FCM(serverKey);

	
	var message = { 		// single recipient
		to: send_id.trim(),
		collapse_key: '',

		notification: {
			title: title,
			body: 'Your collection name is: ' + dataO.email
		}
	};

	console.log(message);

	fcm.send(message, function (err, response) {
		console.log(err);
		if (err) {
			console.log("Something has gone wrong!");
		} else {
			console.log("Successfully sent with response: ", response);
		}
	});
}

// For multi device
exports.sentNotificationMultiple = function (receiver_id = null, title = null, data0 = null) {
	var serverKey = FCM_KEY;
	var fcm = new FCM(serverKey);
	var message = {
		registration_ids: [
			], // Multiple tokens in an array
		collapse_key: 'your_collapse_key',

		notification: {
			title: 'Title of your push notification',
			body: 'Body of your push notification'
		},

		data: {  //you can send only notification or only data(or include both)
			my_key: 'my value',
			my_another_key: 'my another value'
		}
	};

	console.log(message);

	fcm.send(message, function (err, response) {
		console.log(err);
		if (err) {
			console.log("Something has gone wrong!");
		} else {
			console.log("Successfully sent with response: ", response);
		}
	});
}
