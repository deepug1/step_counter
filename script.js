// let fullName = "Deepu Gupta"
// let age = "24";
// let isStudent = true;
// document.getElementById("p1").textContent = `your ${fullName} is `;
// document.getElementById("p2").textContent = `your age is ${age}`;
// document.getElementById("p3").textContent = `your are a student ${isStudent}`;

// let student = 30
// student += 2
// student *= 2
// student -= 2
// student /= 2
// student %= 2

// student++;
// student--;

// console.log(student)

// let username;
// username = window.prompt('what your usernamecdsvds')
// console.log(username)

// document.getElementById("submit").onclick = function () {
//     username = document.getElementById("text").value;
//     // console.log(username)
//     document.getElementById("myh1").textContent = `Hello ${username}`
// }
// const PI = 22 / 7;
// let radius;
// let area;

// document.getElementById("submit").onclick = function () {
//     radius = document.getElementById("text").value;
//     radius = Number(radius);
//     area = PI * radius ** 2;
//     document.getElementById("myh3").textContent = area + "cmSquare"
// }
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const mylabel = document.getElementById("mylabel");

let Count = 0;

increase.onclick = function () {
    Count++;
    myCount.textContent = Count;

}

reset.onclick = function () {
    Count = 0;
    myCount.textContent = Count;
}

decrease.onclick = function () {
    Count--;
    myCount.textContent = Count;
}




