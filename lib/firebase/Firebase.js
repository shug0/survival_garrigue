"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _firebaseAdmin = require("firebase-admin");

var _firebaseAdmin2 = _interopRequireDefault(_firebaseAdmin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var serviceAccount = {
    "type": "service_account",
    "project_id": "survival-garrigue",
    "private_key_id": "e4c5ff7b8eb7145d2cba5e9ae5ff35279cdd38d1",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDfchNJ10U8oLRj\naCDLK7/aK3RDygfUyuH0qME04J6kTfhS2DKDqoXA0gCF2Lote4r4Z7yocPMI3qY5\nHZ2pSuO6zNHE/Ogmqehl+Oq2bNcVDEFKPMpQJ+gk2G4nlLFnKCyUKX1RdTxAl3Ip\nywlAUqJYCaHUvwgpNnGl/VZ1OT4kM2ryJjt0ppsd2Kzn/MsCnCUW+Pj7Hcb0PiIG\nt4d510pWJnyYxFusNMaWJZ78JjLX4kJVBgeKeDP61HQAeGrZj4aFHGWg/czgOkoQ\nrdQAUdYK3ih1HgQXvzcjgEz9/Rgs+/Zmk0o6oL+EdNEWR6MDw6r/uv9ptYF97OWQ\nj5eZXR3JAgMBAAECggEAVZ8n5v63iEDofsMS9eegz6AhICzVjWPk69SSnImKINnD\n0zMHQE7ii/2st51R0kXp/b/6me0WJAr1VSOVG58X3qfHph1ndBFdfV3Byv+v91/H\n0QO0Xry8BwpsQ3yF8kqBspCndcRfvzyJQZyMwfooPWYLfjNplClJqVqHe8nglwvp\nXKQZMINjmIBnkvWPrhObU3DNh92oxCC7tFMm2/gtzxroEhqG97/olq+X4Han8Lz0\n0K1SvnmpGfoQf343wbGD2b2S81YY5wmthr8BksznAAo+11Ao48Lug5TpOd5QUi6a\nwkmOovnrkPrVJAuO7yfdeMGfR4SUyyuyBDMsXg8FkQKBgQD8KNEDHvewpeiL/ADQ\nlD6ARnXL8bzJOvmVZm8Isf3ssf9pCDmhppjh7yP+S3pis3As/dweN40pk7v4a54f\npBPqUOhXKpAYfV0oJc0gzep/FHr9JJMo5U2bobhZtjQAz/8NCLcu09wiSn0TydPR\n06T6u00ckCH9FyIn5Q2NsyajLQKBgQDi2U1U6YewRcN1QzuSVZ9J38BCGcTNtmXv\npjeu/yaWRpiAnn3E+kEScpZciwzVrxBMMAHn+viVHXkypgB1EOobVGlswd+O4aEn\n6D4FqFJ27mH1E8bDjEZClINeGDcU7plEPx80R4SZ2m+4f6EEZ7g2e/7QEj7k7imK\n3+xVymj2jQKBgBZesJwsRSEAtu6kPpZCcIEEvzKGkY7wkm+0lKka0UIMUHJK7oHu\nu6Vfh7vpikPzU0JKixqLJxTHLGfPdEmuTq3823/QINRrWrZTFC2S1vjLIlYOxpdc\nMFRcNnSO+3IPAbtwSH/4/5BzN0FoKEh3FC3CLAcaqkk/oiIT6e3mNMlJAoGAG0In\nU7O4FUtcwENy7hORz2uui4LTLjDjsNdVS5bnSRl0i8f/ruKvXQsd3ELtKOQfXjhK\nkliK9EgVXyupVGfS6bPL80Ccn2unVMdIZJ+kQRxF8xAMS0UY0DlOS8k3HTHKgvPe\nyQZq/Z3M3OuhKolYDlv584CtxA6GOWTM3kYzNKUCgYBEFu2eyeEF4wlO4GMUY91K\nKahDmlp7+ZhGsZ210I0Y0HY9bTCVmE+5vHeiSNHDlyJRolEalU0owlT8rifTQmIE\n9e6JqXzrhTLOUat/HTnDq7ng7LUUHKB8NsCC1va7GURQvbzVcZQilNuNfkDY4nG9\nZFr/4SIxTuPoowgqFzcSMQ==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-tm16q@survival-garrigue.iam.gserviceaccount.com",
    "client_id": "108350783349897793122",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tm16q%40survival-garrigue.iam.gserviceaccount.com"
};

var FirebaseLoader = function () {
    function FirebaseLoader() {
        _classCallCheck(this, FirebaseLoader);

        this.firebase = _firebaseAdmin2.default.initializeApp({
            credential: _firebaseAdmin2.default.credential.cert(serviceAccount),
            databaseURL: "https://survival-garrigue.firebaseio.com"
        }).database();
    }

    _createClass(FirebaseLoader, [{
        key: "setForUser",
        value: function setForUser(userID, key, value) {
            return this.firebase.ref("users/" + userID + "/" + key).set(value);
        }
    }, {
        key: "getSnapUser",
        value: function getSnapUser(userID) {
            return this.firebase.ref("users/" + userID).once('value');
        }
    }]);

    return FirebaseLoader;
}();

exports.default = FirebaseLoader;