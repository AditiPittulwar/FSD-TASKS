let form = document.getElementById("userForm");
let updateContainer = document.querySelector('#updateContainer')

document.querySelector('#updateClose').addEventListener("click", () => {
    updateContainer.classList.toggle("active")
})
let tableBody = document.querySelector("#userTable tbody");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    
    let row = document.createElement("tr");

    
    row.innerHTML = `<td>${name}</td><td>${email}</td><td>${age}</td>`;

    
    tableBody.appendChild(row);


    form.reset();

});

function deleteEntry(deleteIndex) {
    entries = entries.filter((entry, index) => { return index != deleteIndex })
    displayData()
}

function updateEntry(index) {

    updateContainer.setAttribute('class','active')
    console.log(entries[index])
}

