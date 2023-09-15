// const URL = [
//     "https://jsonplaceholder.typicode.com/posts/1/comments",
//     "https://reqres.in/api/users/2"

// ]

// function callApi() {
//     $.ajax({
//             method: "GET",
//             url: URL[1],
//             dataType: "json"
//         })
//         .done(function(data) {
//             console.log(data);
//         })
//         .fail(function() {
//             alert("some thing wrong");
//         });
// }
// callApi()

////////////////// api 2
// $.ajax({
//     url: "https://reqres.in/api/users?page=2",
//     beforeSend: function(xhr) {
//         xhr.overrideMimeType("text/plain; charset = x - user - defined ");
//     }
// }).done(function(data) {
//     if (console && console.log) {
//         console.log("Sample of data:",
//             data.slice(0, 100));
//     }
// });

//Get single users have id = 2
// var url = "https://reqres.in/api/users/2";

// var xhr = new XMLHttpRequest()

// xhr.open('GET', url, true)

// xhr.onload = function() {

//     var users = JSON.parse(xhr.responseText);

//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }

// xhr.send(null);

// ////////////////////// Post a user

// var url = "http://localhost:8080/api/v1/users";

//var url =

// var data = {
//     "name": "morpheus",
//     "job": "leader"
// }

// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();

// xhr.open("POST", "https://reqres.in/api/users", true);

// xhr.setRequestHeader('Content-type',
//     'application/json; charset=utf-8');

// xhr.onload = function() {

//     var users = JSON.parse(xhr.responseText);

//     if (xhr.readyState == 4 && xhr.status == "201") {

//         console.table(users);

//     } else {

//         console.error(users);

//     }
// }
// xhr.send(json);

// ////////////////////// Update a user
var data = {
    "name": "morpheus",
    "job": "zion resident"
}
var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();
xhr.open("PUT", "https://reqres.in/api/users/2", true);
xhr.setRequestHeader('Content-type', 'application/json; charset = utf - 8 ');
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(json);