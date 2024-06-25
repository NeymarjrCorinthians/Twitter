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
  var Sala = localStorage.getItem("room_name");

  function Enviar() {
    var Mensagem= document.getElementById("Mensagem").value; 
    firebase.database().ref(Sala).push({
      name:Usuario,
      message:Mensagem,
      like:0
    })
    document.getElementById("Mensagem").value=""
  }
 




  function getData() { 
    firebase.database().ref("/"+Sala).on('value', function(snapshot) { document.getElementById("out").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "proposito") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

   row = name_with_tag + message_with_tag +like_button + span_with_tag;       
   document.getElementById("out").innerHTML += row;
//End code
 } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(Sala).child(message_id).update({
like : updated_likes  
});

}

function logout() {
localStorage.removeItem("Usuario");
localStorage.removeItem("Sala");
window.location.replace("index.html");
}


