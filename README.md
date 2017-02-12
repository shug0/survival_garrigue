# Survival Garrigue
A survival JC3MP package mod

## Generate your Firebase Private Key file :
The Mod is powered with the Database service of Google : Firebase.
The free version is okay for a normal jc3mp server.

1. Create a account on [Firebase.google.com](https://firebase.google.com/)
2. Create a new project with your server name.
3. Access to the [Admin SDK settings](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk) and generate a new private Key. ([More Infos if needed](https://firebase.google.com/docs/admin/setup))
4. Grab your key in `/server_src/server_package/firebase/serviceaccounts.js`
5. Ready to next step ! (It's already finished in fact)

## Install & Run :
Download the [server client](https://just-cause.mp/downloads) for Windows or Linux.

Clone `survival_garrigue` in the ROOT directory of your server (with the binary executable).

Execute the commands at the root of your freshly downloaded server :

    cd survival_garrigue
    npm install
    npm run start

The command will install & build the client and copy them to a `packages` folder named **survival_garrigue** in your server packages files.

You can now launch the server and play with your new functionnalities.
