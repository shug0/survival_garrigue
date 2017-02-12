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

  addToMap(itemType, itemHash, itemPosition, itemRotation, itemOptions = null, next) {
    let newMapItem = {
      hash: itemHash,
      position: itemPosition,
      rotation: itemRotation,
    };

    if (itemOptions !== null) {
      newMapItem = {
        ...newMapItem,
        options: itemOptions
      }
    }

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

  setForItemToMap(type, key, prop, value) {
    return this.firebase.ref(`map/${type}/${key}/${prop}`).set(value);
  }

  // ----------------------------------------------------------//
  //             Users                                         //
  // ----------------------------------------------------------//

  setForUser(userID, prop, value) {
    return this.firebase.ref(`users/${userID}/${prop}`).set(value);
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
