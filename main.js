import Firebase from 'firebase-admin';

const serviceAccount = require("./config/serviceAccountKey.json");

Firebase.initializeApp({
	credential: Firebase.credential.cert(serviceAccount),
	databaseURL: "https://survival-garrigue.firebaseio.com",
});

const database = Firebase.database();

function writeUserData(userId, name, email) {
	database.ref('users/' + userId).set({
		username: name,
		email: email
	});
}

writeUserData(456789, 'thomas', 'thomas@needacoffee.fr');