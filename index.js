$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBIXg0Rt2zANGHvtasUZUFmor_liugkLpA",
        authDomain: "rw354-marks.firebaseapp.com",
        databaseURL: "https://rw354-marks.firebaseio.com",
        projectId: "rw354-marks",
        storageBucket: "rw354-marks.appspot.com",
        messagingSenderId: "136308160261"
    };
    firebase.initializeApp(config);
    var ref = firebase.database().ref();

    $("#sub").click(function () {
        var num = $("#num").val();
        console.log(num);
        ref.once('value', function (snap) {
            if (snap.child(num).val()) {
                console.log("Confirmed");
                var mark = snap.child(num).child("mark").val();
                alert("Your mark is " + mark + "/50 ... or " + mark / 50.0 * 100 + "%");
            } else {
                alert("No such student number!");
            }
        });

    });
});
