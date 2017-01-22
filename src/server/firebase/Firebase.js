import Firebase from 'firebase-admin';
import serviceAccount from './serviceAccount';

class FirebaseLoader {

  constructor() {
    this.firebase = Firebase.initializeApp({
      credential: Firebase.credential.cert(serviceAccount),
      databaseURL: 'https://survival-garrigue.firebaseio.com',
    }).database();
  }

  // ----------------------------------------------------------//
  //             Map                                           //
  // ----------------------------------------------------------//

  addToMap(itemType, itemHash, itemPosition, itemRotation, next) {
    const newMapItem = {
      hash: itemHash,
      position: itemPosition,
      rotation: itemRotation,
    };
    const newMapItemKey = this.firebase.ref('map/').child(itemType).push().key;
    this.firebase.ref(`map/${itemType}`).update({ [newMapItemKey]: newMapItem });

    next(newMapItemKey);
  }

  removeToMap(itemType, key) {
    this.firebase.ref('map/').child(itemType).child(key).remove();
  }

  getSnapMap(itemType) {
    return this.firebase.ref(`map/${itemType}`).once('value');
  }

  // ----------------------------------------------------------//
  //             Users                                         //
  // ----------------------------------------------------------//

  setForUser(userID, key, value) {
    return this.firebase.ref(`users/${userID}/${key}`).set(value);
  }

  getSnapUser(userID) {
    return this.firebase.ref(`users/${userID}`).once('value');
  }

  // ----------------------------------------------------------//
  //             Config                                        //
  // ----------------------------------------------------------//

  getSnapConfig(type) {
    return this.firebase.ref(`config/${type}`).once('value');
  }

  pushToConfig(type, object, next) {
    const newConfigItemKey = this.firebase.ref('config/').child(type).push().key;
    this.firebase.ref(`config/${type}`).update({ [newConfigItemKey]: object });

    next(newConfigItemKey);
  }


}

export default FirebaseLoader;
