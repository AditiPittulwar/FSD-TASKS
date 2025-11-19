// Select Elements

// 1. getElementById

// Selects an element by its id.

// <p id="demo">Hello</p>

// <script>
// let el = document.getElementById("demo");
// console.log(el.textContent); // Hello
// </script>

// 2. getElementsByClassName

// Selects elements by class name (returns an HTMLCollection → like an array).

// <p class="test">One</p>
// <p class="test">Two</p>

// <script>
// let items = document.getElementsByClassName("test");
// console.log(items[0].textContent); // One
// console.log(items[1].textContent); // Two
// </script>

// 3. getElementsByTagName

// Selects elements by their tag name.

// <p>Paragraph 1</p>
// <p>Paragraph 2</p>

// <script>
// let paras = document.getElementsByTagName("p");
// console.log(paras[0].textContent); // Paragraph 1
// </script>

// 4. querySelector

// Selects the first matching element (CSS selector style).

// <p class="item">First</p>
// <p class="item">Second</p>

// <script>
// let el = document.querySelector(".item"); // first element with class="item"
// console.log(el.textContent); // First
// </script>

// 5. querySelectorAll

// Selects all matching elements (returns NodeList).

// <p class="item">First</p>
// <p class="item">Second</p>

// <script>
// let elements = document.querySelectorAll(".item");
// elements.forEach(el => console.log(el.textContent));
// // First
// // Second
// </script>

//   Summary

// getElementById("id") → single element

// getElementsByClassName("class") → collection

// getElementsByTagName("tag") → collection

// querySelector("cssSelector") → first match

// querySelectorAll("cssSelector") → all matches

// Common Mouse Events in JS

// Event	When it happens
// onclick	When the user clicks on an element
// ondblclick	When the user double-clicks
// onmouseover	When the mouse pointer moves over an element
// onmouseout	When the mouse pointer moves out of an element
// onmousemove	When the mouse pointer is moving inside an element
// onmousedown	When the mouse button is pressed down
// onmouseup	When the mouse button is released
// oncontextmenu	When the right mouse button is clicked (context menu)

//  Example 1: Basic click event
// <button id="btn">Click Me</button>

// <script>
// let btn = document.getElementById("btn");

// btn.addEventListener("click", function() {
//     alert("Button Clicked!");
// });
// </script>

//  Example 2: mouseover and mouseout
// <div id="box" style="width:150px;height:100px;background:lightblue;">
//    Hover over me
// </div>

// <script>
// let box = document.getElementById("box");

// box.addEventListener("mouseover", function() {
//     box.style.background = "orange";
// });

// box.addEventListener("mouseout", function() {
//     box.style.background = "lightblue";
// });
// </script>

//  Example 3: mousemove (tracking mouse position)
// <p id="pos">Move your mouse inside the box</p>
// <div id="track" style="width:200px;height:150px;border:1px solid black;"></div>

// <script>
// let track = document.getElementById("track");
// let pos = document.getElementById("pos");

// track.addEventListener("mousemove", function(e) {
//     pos.textContent = "X: " + e.clientX + ", Y: " + e.clientY;
// });
// </script>

// Common Keyboard Events

// Event	When it happens
// keydown	Fires when a key is pressed down (works for all keys, including special keys like Shift, Esc, arrows, etc.)
// keyup	Fires when a key is released
// keypress	Fires when a key is pressed, but only for printable characters (deprecated, not recommended in modern JS)

//  Example 1: Detect any key press
// <input type="text" id="myInput" placeholder="Type something...">

// <script>
// let input = document.getElementById("myInput");

// input.addEventListener("keydown", function(event) {
//     console.log("Key down:", event.key);
// });

// input.addEventListener("keyup", function(event) {
//     console.log("Key up:", event.key);
// });
// </script>


// 🖥 If you type A, it will log:

// Key down: a
// Key up: a
//  Example 2: Detect shortcuts (like Ctrl + S)
// document.addEventListener("keydown", function(event) {
//     if (event.ctrlKey && event.key === "s") {
//         event.preventDefault(); // stop default "Save Page"
//         alert("Ctrl + S detected!");
//     }
// });

// Example 3: Show live typing
// <input type="text" id="name" placeholder="Type your name">
// <p id="output"></p>

// <script>
// let input = document.getElementById("name");
// let output = document.getElementById("output");

// input.addEventListener("keyup", function(event) {
//     output.textContent = "You typed: " + input.value;
// });
// </script>

//  Summary

// keydown → when key is pressed (use this most often).

// keyup → when key is released.

// keypress → old & limited, avoid in modern code.

// Event object (event.key, event.code, event.ctrlKey, etc.) gives details about the key pressed.


// Common Window Events in JavaScript

// Event	When it fires
// load	When the whole page (HTML, CSS, images, etc.) has finished loading
// DOMContentLoaded	When the HTML document is loaded and parsed (before images/styles are done)
// resize	When the browser window is resized
// scroll	When the page is scrolled
// beforeunload	Right before the user leaves/reloads the page (lets you show a confirmation)
// unload	When the page is being unloaded/closed
// error	When a JavaScript error occurs
// focus	When the window/tab becomes active
// blur	When the window/tab loses focus

//  Example 1: Detect when page is fully loaded
// window.addEventListener("load", function() {
//     console.log("Page fully loaded with images, CSS, etc.");
// });

//  Example 2: Run code when DOM is ready
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("HTML is ready, but images may still be loading.");
// });

//  Example 3: Detect window resize
// window.addEventListener("resize", function() {
//     console.log("Window width:", window.innerWidth);
//     console.log("Window height:", window.innerHeight);
// });

//  Example 4: Detect scroll
// window.addEventListener("scroll", function() {
//     console.log("Scroll position:", window.scrollY);
// });

//  Example 5: Confirm before leaving page
// window.addEventListener("beforeunload", function(event) {
//     event.preventDefault();
//     event.returnValue = ""; // Needed for most browsers
// });

// Common Form Events in JavaScript

// Event	When it happens
// submit	When a form is submitted
// reset	When a form is reset
// focus	When an input field gets focus (clicked or tabbed into)
// blur	When an input field loses focus
// input	When the value of an input changes (fires immediately as user types)
// change	When the value of an input/textarea/select changes and loses focus
// select	When text inside an input/textarea is selected

//  Example 1: Handle Form Submission
// <form id="myForm">
//   <input type="text" name="username" placeholder="Enter username">
//   <button type="submit">Submit</button>
// </form>

// <script>
// let form = document.getElementById("myForm");

// form.addEventListener("submit", function(event) {
//     event.preventDefault(); // prevent actual form submission
//     alert("Form submitted!");
// });
// </script>

//  Example 2: Focus & Blur
// <input type="text" id="name" placeholder="Enter your name">

// <script>
// let nameInput = document.getElementById("name");

// nameInput.addEventListener("focus", function() {
//     nameInput.style.background = "lightyellow";
// });

// nameInput.addEventListener("blur", function() {
//     nameInput.style.background = "";
// });
// </script>

//  Example 3: Input vs Change
// <input type="text" id="email" placeholder="Type your email">

// <script>
// let email = document.getElementById("email");

// email.addEventListener("input", function() {
//     console.log("Typing: " + email.value);
// });

// email.addEventListener("change", function() {
//     console.log("Final value after leaving field: " + email.value);
// });
// </script>

//  Example 4: Select Event
// <textarea id="msg">Hello world</textarea>

// <script>
// let msg = document.getElementById("msg");

// msg.addEventListener("select", function() {
//     alert("You selected some text: " + msg.value.substring(msg.selectionStart, msg.selectionEnd));
// });
// </script>