'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _firebaseAdmin = require('firebase-admin');

var _firebaseAdmin2 = _interopRequireDefault(_firebaseAdmin);

var _serviceAccount = require('./serviceAccount');

var _serviceAccount2 = _interopRequireDefault(_serviceAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FirebaseLoader = function () {
  function FirebaseLoader() {
    _classCallCheck(this, FirebaseLoader);

    this.firebase = _firebaseAdmin2.default.initializeApp({
      credential: _firebaseAdmin2.default.credential.cert(_serviceAccount2.default),
      databaseURL: 'https://survival-garrigue.firebaseio.com'
    }).database();
  }

  // ----------------------------------------------------------//
  //             Map                                           //
  // ----------------------------------------------------------//

  _createClass(FirebaseLoader, [{
    key: 'addToMap',
    value: function addToMap(itemType, itemHash, itemPosition, itemRotation, next) {
      var newMapItem = {
        hash: itemHash,
        position: itemPosition,
        rotation: itemRotation
      };
      var newMapItemKey = this.firebase.ref('map/').child(itemType).push().key;
      this.firebase.ref('map/' + itemType).update(_defineProperty({}, newMapItemKey, newMapItem));

      next(newMapItemKey);
    }
  }, {
    key: 'removeToMap',
    value: function removeToMap(itemType, key) {
      this.firebase.ref('map/').child(itemType).child(key).remove();
    }
  }, {
    key: 'getSnapMap',
    value: function getSnapMap(itemType) {
      return this.firebase.ref('map/' + itemType).once('value');
    }

    // ----------------------------------------------------------//
    //             Users                                         //
    // ----------------------------------------------------------//

  }, {
    key: 'setForUser',
    value: function setForUser(userID, key, value) {
      return this.firebase.ref('users/' + userID + '/' + key).set(value);
    }
  }, {
    key: 'getSnapUser',
    value: function getSnapUser(userID) {
      return this.firebase.ref('users/' + userID).once('value');
    }

    // ----------------------------------------------------------//
    //             Config                                        //
    // ----------------------------------------------------------//

  }, {
    key: 'getSnapConfig',
    value: function getSnapConfig(type) {
      return this.firebase.ref('config/' + type).once('value');
    }
  }, {
    key: 'pushToConfig',
    value: function pushToConfig(type, object, next) {
      var newConfigItemKey = this.firebase.ref('config/').child(type).push().key;
      this.firebase.ref('config/' + type).update(_defineProperty({}, newConfigItemKey, object));

      next(newConfigItemKey);
    }
  }]);

  return FirebaseLoader;
}();

exports.default = FirebaseLoader;