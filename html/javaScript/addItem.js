// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
//var firebase = require("firebase/app");

// Add the Firebase products that you want to use
//require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCgqsPwW0-k9w_dOkfOSnpASxRu3ldZYlU",
    authDomain: "circa-inv.firebaseapp.com",
    projectId: "circa-inv"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
console.log("database" + db);
function addItem() {
    var form = document.forms["addItemForm"];
    var itemName = form["itemName"].value;
    var quantity = form["quantity"].value;
    var material = form["type-product"].value;
    var description = form["description"].value;

    console.log(material);
    console.log(itemName);
    console.log(quantity);
    console.log(description);
    // Add a new document in collection "itemTable"
    db.collection("itemTable").add({
        itemName: itemName,
        quantity: quantity,
        material: material,
        description: description
    })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
}
