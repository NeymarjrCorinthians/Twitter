const firebaseConfig = {
    apiKey: "AIzaSyDcMIJLX_reela6JS0Jxn7LjmiTpCZoV2w",
    authDomain: "twitter-ff96d.firebaseapp.com",
    databaseURL: "https://twitter-ff96d-default-rtdb.firebaseio.com",
    projectId: "twitter-ff96d",
    storageBucket: "twitter-ff96d.appspot.com",
    messagingSenderId: "140373197752",
    appId: "1:140373197752:web:2b1a0036872077c7d7c54d",
    measurementId: "G-RFL5KY2B4L"
  };
  firebase.initializeApp(firebaseConfig)
  var Usuario = localStorage.getItem("Nome");
document.getElementById("welcome").innerHTML="BEM-VINDO "+ Usuario + "!"
function AdicionarSala(){ 
var salas = document.getElementById("sala").value;
firebase.database().ref("/").child(salas).update({ proposito : "adicionar sala" });
document.getElementById("sala").innerHTML=""
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("salasDiv").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("salasDiv").innerHTML += row;
});
});

}

getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "SalasTwitter.html";
}















