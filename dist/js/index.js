var v = firebaseRef = firebase.database().ref("volt");
v.on('value', function(datasnapshot) {
    tampil_volt.innerText = datasnapshot.val();
})
var c = firebaseRef = firebase.database().ref("current");
c.on('value', function(datasnapshot) {
    tampil_current.innerText = datasnapshot.val();
})
var k = firebaseRef = firebase.database().ref("kwh");
k.on('value', function(datasnapshot) {
    tampil_kwh.innerText = datasnapshot.val();
})
var r = firebaseRef = firebase.database().ref("rp");
r.on('value', function(datasnapshot) {
    tampil_rp.innerText = datasnapshot.val();
})
var w = firebaseRef = firebase.database().ref("watt");
w.on('value', function(datasnapshot) {
    tampil_watt.innerText = datasnapshot.val();
})
