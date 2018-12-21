// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBczMy1diCGurMlSceaFH2gPVCBeJ5mjdo",
    authDomain: "clothing-app-ec060.firebaseapp.com",
    databaseURL: "https://clothing-app-ec060.firebaseio.com",
    projectId: "clothing-app-ec060",
    storageBucket: "",
    messagingSenderId: "405290178362"
  },
  stripeKey: "pk_test_GJazAeWPcjWaL4f2zGCbNvFk"
};
