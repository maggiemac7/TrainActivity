$(document).ready(function() {

const firebaseConfig = {
  apiKey: "AIzaSyDYDiGut7LygvDTKgzg53uJWnry2raIgcc",
  authDomain: "uoft-maggie-test.firebaseapp.com",
  databaseURL: "https://uoft-maggie-test.firebaseio.com",
  projectId: "uoft-maggie-test",
  storageBucket: "uoft-maggie-test.appspot.com",
  messagingSenderId: "543121039632",
  appId: "1:543121039632:web:c36d4c925a3b9196"

};

firebase.initializeApp(firebaseConfig);

var db = firebase.database().ref();

var startTime;
var frequency = 0;
var name;
var destination;


db.on('child_added', function(snapshot){
  console.log(snapshot.val());
  //Build a table row out of the edata and append it into dom

  var trEl = $('<tr>');
  var nameEl = $('<td>').text(snapshot.val().name);
  var destEl = $('<td>').text(snapshot.val().destination);
  var freqEl = $('<td>').text(snapshot.val().frequency);
  var startTimeEl = $('<td>').text(snapshot.val().startTime);
  var minsEl = $('<td>').text('TBD');
  var nextTimeEl = $('<td>').text('TBD');
  trEl.append(nameEl)
      .append(destEl)
      .append(freqEl)
      .append(startTimeEl)
      .append(minsEl)
      .append(nextTimeEl);
  $('.train-body').append(trEl);

  var startMoment = moment(snapshot.val().startTime, 'HH:mm')//snapshot is string of time 13:00
});

$('#submit').on('click', function(){
  event.preventDefault();
  
  db.push({
         startTime: $('#starttime').val(),
         frequency: $('#frequency').val(),
         name: $('#name').val(),
         destination:$('#destination').val()
       });
});

});

