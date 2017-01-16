import Firebase from 'firebase-admin';
import serviceAccount from './serviceAccount';

class FirebaseLoader {

  constructor() {
    this.firebase = Firebase.initializeApp({
      credential: Firebase.credential.cert(serviceAccount),
      databaseURL: 'https://survival-garrigue.firebaseio.com',
    }).database();
  }

  setForUser(userID, key, value) {
    return this.firebase.ref(`users/${userID}/${key}`).set(value);
  }

  addToMap(itemType, itemHash, itemPosition, itemRotation) {
    const newMapItem = {
      hash: itemHash,
      position: itemPosition,
      rotation: itemRotation,
    };
    const newMapItemKey = this.firebase.ref('map/').child(itemType).push().key;

    return this.firebase.ref(`map/${itemType}`).update({ [newMapItemKey]: newMapItem });
  }

  getSnapMap(itemType) {
    return this.firebase.ref(`map/${itemType}`).once('value');
  }

  getSnapUser(userID) {
    return this.firebase.ref(`users/${userID}`).once('value');
  }

  getSnapUser(userID) {
    return this.firebase.ref(`users/${userID}`).once('value');
  }

}

export default FirebaseLoader;
