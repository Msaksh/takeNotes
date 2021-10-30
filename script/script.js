showNotes();
let addNotes = document.querySelector('#addNotes');
addNotes.addEventListener('click', function (e) {

    let addText = document.querySelector('#addText');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObject = [];
    }
    else {
        noteObject = JSON.parse(notes);
    }
    noteObject.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(noteObject));
    addText.value = "";
    console.log(noteObject);
    showNotes();
})

function showNotes(){ 
    // let noteObject;
    let notes = localStorage.getItem('notes');
    if(notes == null){
        noteObject = [];
    }
    else{
        noteObject = JSON.parse(notes);
    }
    let html = "";
    noteObject.forEach(function(element, index) {
        html += `<div class="note-card card mx-2 my-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text text-secondary">${element}</p>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
                    </div>
                </div>`
    });
    let noteElement = document.getElementById('notes');
    if(noteObject.length != 0){
        noteElement.innerHTML = html;
    }
    else{
        noteElement.innerHTML = `"please add some notes"`
    }
}


// delete button
function deleteNote(index) {
    console.log("Deleting note", index);

    let notes = localStorage.getItem("notes");
    if(notes == null){
        noteObject = [];
    }
    else{
        noteObject = JSON.parse(notes);
    }
    noteObject.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(noteObject));
    showNotes();
}


// search box function
let searchBox = document.getElementById('searchBox');
searchBox.addEventListener("input", function(e){
    let inputValue = searchBox.value;
    console.log('input value ',inputValue);
    
    let cards = document.getElementsByClassName('note-card');
    Array.from(cards).forEach(function(element){

        let cardText = element.getElementsByTagName("p")[0].innerText;
        console.log(cardText);
        if(cardText.includes(inputValue)) {
            element.style.display = "block";
        }
        else{
            element.style.display = 'none';
        }
    })
})
