//Event Listeners

const searchButton = document.getElementById('search')
const randomButton = document.getElementById('randombutton')

function showResults(e){
    e.preventDefault();
    let submitter = e.submitter
    if (topic != ""){
        fetch(`http://localhost:8080/topics/${topic}`)
        .then(resp => resp.text())
        .then(data => {

        })
    }
}




//for js file
// const searchButton = document.querySelector("#search");
// searchButton.addEventListener("click", () => {
//   fetch(`http://localhost:8080/foods`)
//     .then((res) => res.text())
//     .then(insertResults);
//   window.location.href = "results.html";
// });

// function insertResult(result) {
//   const link = document.createElement("div");
//   const space = document.createElement("p");
//   link.textContent = `${result.name} `;
//   space.textContent = `${result.link}`;
//   document.querySelector("#resultsspace").append(link);
//   document.querySelector("#resultsspace").append(space);
// }

// function insertResults(results) {
//   results.forEach((result) => insertResult(result));
// }


// const randomButton = document.getElementById("randombutton");
// const form = document.querySelector("#form");
