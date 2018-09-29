// GETTING ELEMENTS

// A1: Get a reference to all the paragraph (p) tags in the document.
//     Hint: Look at getElementsByTagName()
var p = document.getElementsByTagName("p");
console.log(p);

// A2: Get a reference to a paragraph tag with a specific id of "second".
//     Hint: Look at getElementById()
var sidebar = document.getElementById("sidebar");

// A3: Get a reference to a all paragraph tags with a class of "first".
//     Hint: Look at getElementsByClassName()
var pFirst = document.getElementsByClassName("first");
console.log(pFirst);

// A4: Get a reference to an element or elements within another element. For example, if you have an unordered list (ul) with several list items (li), how do you select a specific li and display it's contents to the console?
var sidebarNav = sidebar.children[0];

// CHANGING ELEMENTS
// B1: Change text for "Section 1" in nav bar
//  -  TEST B1.01 - grabs li rather than a
// var navSec1 = sidebarNav.children[1];
// navSec1.innerHTML = "test";
//  +  TEST B1.02
// var navSec1 = document.getElementById("navSec1");
// navSec1.innerHTML = "Test";
//  +  TEST B1.03
var navSec1 = sidebarNav.children[1];
var sec1Text = navSec1.children[0];
sec1Text.innerHTML = "THE BEST";

// B2: Change the text of a specific paragraph to a different string of text. Use an Ipsum generator tool to create new placeholder text that you insert using Javascript.
//  +  TEST B2.01
// var changeMe = document.getElementById("change-me");
// changeMe.innerHTML = "xyz";
//  +  TEST B2.02
document.getElementById("change-me").innerHTML = "meditate";

// REMOVING ELEMENTS
// C1: Clear the contents of the paragraph with an id of "empty-me".
//  +  TEST C1.01
document.getElementById("empty-me").innerHTML = null;

// C2: Clear the contents of the set of paragraphs with class "empty-us".
var emptyUs = document.getElementsByClassName("empty-us");
// console.log(emptyUs);
//  -  TEST C2.01
// document.getElementsByClassName("empty-us").innerHTML = "";
//  -  TEST C2.02
// for (var i = 0, i = emptyUs.length; i < emptyUs; i++) {
// 	emptyUs[i].remove();
// }
//  +  TEST C2.03 iterates over HTML collection in reverse (bc HTML coll is live list)
// for (var i = emptyUs.length - 1; i >= 0; --i) {
// 	emptyUs[i].remove();
// }
//  +  TEST C2.04 makes array from HTML coll. and iterates over them (array is static list)
var arrEmptyUs = Array.from(emptyUs);
for (var i = 0; i < arrEmptyUs.length; i++) {
	arrEmptyUs[i].remove();
}

// C3: Remove the div with a specific id of "section3".
document.getElementById("section3").remove();

// ADDING ELEMENTS
// D1: Create a new anchor tag that links to your blog and insert it just after the paragraph tag in the div with an id of "about".
//  +  TEST D1.01
var blogLink = document.createElement("a");
var blogLinkText = document.createTextNode("K Makes");
blogLink.appendChild(blogLinkText);
blogLink.title = "click me!";
blogLink.href = "https://kmakes.com";
document.getElementById("about").appendChild(blogLink);

// D2: Append a new div anywhere in the document and give it an id of your choice. Insert a paragraph with some content into the div using javascript.
//  +  TEST D2.01 insertAdjacentElement() method >> https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
var newDiv = document.createElement("div");
var newDivP = document.createElement("p");
var newDivText = document.createTextNode("Cupcake ipsum dolor sit amet cotton candy candy. Jelly dessert candy canes chocolate cake sugar plum chocolate bar sugar plum. Soufflé icing marshmallow. Cupcake brownie carrot cake dessert bear claw lollipop candy sweet. Marzipan soufflé gingerbread croissant lemon drops topping tootsie roll dragée dessert. Toffee tootsie roll marzipan. Wafer carrot cake ice cream topping jelly-o chocolate bar candy canes.");
var newDivH = document.createElement("h2");
var cupcake = document.createTextNode("Cupcake")
newDiv.id = "cupcake";
newDiv.appendChild(newDivH);
newDiv.appendChild(newDivP);
newDivH.appendChild(cupcake);
newDivP.appendChild(newDivText);
document.getElementById("section1").insertAdjacentElement("afterend", newDiv);

// D3: Add a new list item to the sidebar ul that links to your new div so you can click and scroll to it.
//  +  TEST D3.01
var sidebar = document.getElementById("sidebar");
var sidebarNav = sidebar.children[0];
var sidebarNavSec2 = sidebarNav.children[2];
var newDivNav = document.createElement("li");
var cupcake = document.createTextNode("Cupcake");
var cupcakeLink = document.createElement("a");
newDivNav.appendChild(cupcakeLink);
cupcakeLink.appendChild(cupcake);
cupcakeLink.href = "#cupcake"
sidebarNavSec2.insertAdjacentElement("beforebegin", newDivNav)


// EVENT LISTENERS
// E1: Make an event listener for any h2 element that triggers an alert() when you click it. Set the alert message to "Hey Hey Hey!".
newDivH.addEventListener("click", function (event) {
	alert("Hey hey hey!")
});

// E2: Make an event listener that triggers a change in the text of a specific paragraph with the id "change-me".
var changeP = document.getElementById("change-me");
changeP.addEventListener("mouseover", function (event) {
	event.target.style.color = "red";
	event.target.innerText = "MEDITATE!!!!!";
});


// Section 4: Events

// oncopy
function copy() {
	window.alert("You copied some text. Good job!");
}
document.getElementById("copy_this").oncopy = copy;
 
// onclick
function send_alerts() {
	window.alert("Hi there, and welcome to my page!");
	window.alert("Please sign the guest book before you leave!");
	window.alert("Are these alerts annoying you yet? Ha, Ha!");

}
var button = document.getElementById("get_alerts");
button.onclick = send_alerts;

// ondblclick
function dbl_clk() {
	window.alert("you just double clicked");
}
document.ondblclick = dbl_clk;