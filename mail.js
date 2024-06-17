const firebaseConfig = {
    apiKey: "AIzaSyAMV20VlYQIXNvodmu6-xOX-pCa1MHVTV8",
    authDomain: "testt-fe410.firebaseapp.com",
    databaseURL: "https://testt-fe410-default-rtdb.firebaseio.com",
    projectId: "testt-fe410",
    storageBucket: "testt-fe410.appspot.com",
    messagingSenderId: "551059030152",
    appId: "1:551059030152:web:d917d01c2e909797289f3d"
  };

// initialize firebase 
  firebase.initializeApp(firebaseConfig);

// reference for my database 
var testtDB = firebase.database().ref('testt');

document.getElementById('testt').addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementByVal('name');
    var emailid = getElementByVal('emailid');
    var msgContent = getElementByVal('msgContent');

    saveMessages(name, emailid, msgContent);

document.querySelector(".alert").style.display = "block";

setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

document.getElementById("testt").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = testtDB.push();

    newContactForm.set({
        name : name,
        emailid : emailid,
        msgContent : msgContent,
    });
};


const getElementByVal = (id) => {
    return document.getElementById(id).value;
};

