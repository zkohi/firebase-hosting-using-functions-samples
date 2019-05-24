# firebase-hosting-using-functions-samples

## Setup

```
npm install -g firebase-tools
firebase login
firebase use <projectId>
cd functions/
npm i
npm run build
cd ../
mkdir public
firebase serve
```

Open in Browser: 
 - http://localhost:5000
 - http://localhost:5000/api
 - http://localhost:5000/foo

if you want to deploy.

```
firebase deploy
```

Open in Browser: 
 - `https://<projectId>.firebaseapp.com`
 - `https://<projectId>.firebaseapp.com`/api
 - `https://<projectId>.firebaseapp.com`/foo
 
 ## Docs
 - https://firebase.google.com/docs/hosting/functions
