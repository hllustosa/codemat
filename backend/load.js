const firebase = require("firebase");
// Required for side-effects


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAdk2vTSBlcTqaaIIUeYfI9fk2oehz85DY",
  authDomain: "compemat.firebaseapp.com",
  projectId: "compemat",
});

var db = firebase.firestore();

var exercises = [
  {
    id: "ex_jas4l5of6s553iohi",
    name: "Exercício de Teste",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mi, feugiat sed euismod vel, varius sit amet justo. Duis malesuada mauris non condimentum blandit. In condimentum sit amet enim iaculis rhoncus. Donec volutpat non orci eu varius. Sed condimentum ex eu ipsum tincidunt, porta efficitur dui pulvinar. In metus neque, commodo sed congue in, suscipit ut orci. Nulla facilisi. Curabitur euismod, elit vel tincidunt laoreet, lectus risus blandit mauris, at cursus turpis urna a urna. Suspendisse varius fringilla odio, vitae condimentum lacus consectetur commodo. Nulla facilisi. Aenean nunc arcu, finibus sodales efficitur nec, facilisis in felis. Donec id lectus volutpat, fermentum est vel, commodo lacus. Donec volutpat facilisis elit, sit amet luctus nibh elementum in. Mauris sodales metus id efficitur vestibulum. Suspendisse aliquam erat purus, non viverra nulla convallis nec.
        </p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mi, feugiat sed euismod vel, varius sit amet justo. Duis malesuada mauris non condimentum blandit. In condimentum sit amet enim iaculis rhoncus. Donec volutpat non orci eu varius. Sed condimentum ex eu ipsum tincidunt, porta efficitur dui pulvinar. In metus neque, commodo sed congue in, suscipit ut orci. Nulla facilisi. Curabitur euismod, elit vel tincidunt laoreet, lectus risus blandit mauris, at cursus turpis urna a urna. Suspendisse varius fringilla odio, vitae condimentum lacus consectetur commodo. Nulla facilisi. Aenean nunc arcu, finibus sodales efficitur nec, facilisis in felis. Donec id lectus volutpat, fermentum est vel, commodo lacus. Donec volutpat facilisis elit, sit amet luctus nibh elementum in. Mauris sodales metus id efficitur vestibulum. Suspendisse aliquam erat purus, non viverra nulla convallis nec.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mi, feugiat sed euismod vel, varius sit amet justo. Duis malesuada mauris non condimentum blandit. In condimentum sit amet enim iaculis rhoncus. Donec volutpat non orci eu varius. Sed condimentum ex eu ipsum tincidunt, porta efficitur dui pulvinar. In metus neque, commodo sed congue in, suscipit ut orci. Nulla facilisi. Curabitur euismod, elit vel tincidunt laoreet, lectus risus blandit mauris, at cursus turpis urna a urna. Suspendisse varius fringilla odio, vitae condimentum lacus consectetur commodo. Nulla facilisi. Aenean nunc arcu, finibus sodales efficitur nec, facilisis in felis. Donec id lectus volutpat, fermentum est vel, commodo lacus. Donec volutpat facilisis elit, sit amet luctus nibh elementum in. Mauris sodales metus id efficitur vestibulum. Suspendisse aliquam erat purus, non viverra nulla convallis nec.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mi, feugiat sed euismod vel, varius sit amet justo. Duis malesuada mauris non condimentum blandit. In condimentum sit amet enim iaculis rhoncus. Donec volutpat non orci eu varius. Sed condimentum ex eu ipsum tincidunt, porta efficitur dui pulvinar. In metus neque, commodo sed congue in, suscipit ut orci. Nulla facilisi. Curabitur euismod, elit vel tincidunt laoreet, lectus risus blandit mauris, at cursus turpis urna a urna. Suspendisse varius fringilla odio, vitae condimentum lacus consectetur commodo. Nulla facilisi. Aenean nunc arcu, finibus sodales efficitur nec, facilisis in felis. Donec id lectus volutpat, fermentum est vel, commodo lacus. Donec volutpat facilisis elit, sit amet luctus nibh elementum in. Mauris sodales metus id efficitur vestibulum. Suspendisse aliquam erat purus, non viverra nulla convallis nec.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mi, feugiat sed euismod vel, varius sit amet justo. Duis malesuada mauris non condimentum blandit. In condimentum sit amet enim iaculis rhoncus. Donec volutpat non orci eu varius. Sed condimentum ex eu ipsum tincidunt, porta efficitur dui pulvinar. In metus neque, commodo sed congue in, suscipit ut orci. Nulla facilisi. Curabitur euismod, elit vel tincidunt laoreet, lectus risus blandit mauris, at cursus turpis urna a urna. Suspendisse varius fringilla odio, vitae condimentum lacus consectetur commodo. Nulla facilisi. Aenean nunc arcu, finibus sodales efficitur nec, facilisis in felis. Donec id lectus volutpat, fermentum est vel, commodo lacus. Donec volutpat facilisis elit, sit amet luctus nibh elementum in. Mauris sodales metus id efficitur vestibulum. Suspendisse aliquam erat purus, non viverra nulla convallis nec.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mi, feugiat sed euismod vel, varius sit amet justo. Duis malesuada mauris non condimentum blandit. In condimentum sit amet enim iaculis rhoncus. Donec volutpat non orci eu varius. Sed condimentum ex eu ipsum tincidunt, porta efficitur dui pulvinar. In metus neque, commodo sed congue in, suscipit ut orci. Nulla facilisi. Curabitur euismod, elit vel tincidunt laoreet, lectus risus blandit mauris, at cursus turpis urna a urna. Suspendisse varius fringilla odio, vitae condimentum lacus consectetur commodo. Nulla facilisi. Aenean nunc arcu, finibus sodales efficitur nec, facilisis in felis. Donec id lectus volutpat, fermentum est vel, commodo lacus. Donec volutpat facilisis elit, sit amet luctus nibh elementum in. Mauris sodales metus id efficitur vestibulum. Suspendisse aliquam erat purus, non viverra nulla convallis nec.
          <svg width="96" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
          <g>
          <title>Code</title>
          <text y="35" x="48" fill="#000000" stroke-width="0" id="text" font-size="36" font-family="Monospace" text-anchor="middle" xml:space="preserve" font-weight="normal" font-style="normal" stroke="#000000">&lt;/&gt;</text>
          </g>
          </svg>
          <svg width="96" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
          <g>
          <title>Code</title>
          <text y="35" x="48" fill="#000000" stroke-width="0" id="text" font-size="36" font-family="Monospace" text-anchor="middle" xml:space="preserve" font-weight="normal" font-style="normal" stroke="#000000">&lt;/&gt;</text>
          </g>
          </svg>
          <svg width="96" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
          <g>
          <title>Code</title>
          <text y="35" x="48" fill="#000000" stroke-width="0" id="text" font-size="36" font-family="Monospace" text-anchor="middle" xml:space="preserve" font-weight="normal" font-style="normal" stroke="#000000">&lt;/&gt;</text>
          </g>
          </svg>
          
          </p>
          Mauris molestie efficitur purus sit amet porta. Nam mattis neque mauris, sit amet tempor ante ornare at. Ut volutpat, magna a interdum vehicula, massa diam pharetra mi, semper volutpat ligula libero in mi. Nullam blandit tempor facilisis. Mauris ipsum sapien, fringilla vel justo id, commodo finibus ex. In pharetra mollis ante, sit amet semper arcu tristique sit amet. Proin consequat dui id eros convallis aliquam. Vivamus aliquam elit nec lobortis cursus. Integer mi enim, pulvinar nec est vitae, volutpat malesuada nisi. In sed risus sed augue rhoncus accumsan.`,
    category: "programming",
    labels: ["aritmética", "básico"],
    previous: "ex_G3Fer3rDS432",
    next: "ex_Plo43jjrR3",
    cases: [
      { input: { x: 10, y: 12 }, output: [22] },
      { input: { x: 24, y: 24 }, output: [48] },
      { input: { x: 1000, y: 35 }, output: [1035] },
      { input: { x: 28, y: 28 }, output: [56] },
    ],
  },
];

exercises.forEach(function (obj) {
  db.collection("menu")
    .add(obj)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
