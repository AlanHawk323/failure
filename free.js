console.log("Testing testing");

const names = ["Dr Pepsi", "Mr Soda", "Miss Memento", "Mr Marshmallow", "Miss Zaizen", "Doctor Ryoken",
"Just Alex", "Judai Yuki"];
const occupations = ["Teacher", "Writer", "Programmer", "Baker", "Duellist", "Hacker", "Plumber",
"Graphic Designer"];
const prices =["$10", "$20", "$35", "$15", "$30", "$40", "$12", "$25"]

let ol = document.querySelector("ol");

document.getElementsByClassName("list")

ol.innerHTML = "Dr Pepsi", "Mr Soda", "Miss Memento", "Mr Marshmallow", "Miss Zaizen", "Doctor Ryoken",
"Just Alex", "Judai Yuki"

function render()
    {
        const html = names.map(function(str)
        {return `<li> ${str} </li>`;
    });
    console.log(html.join(""));
    ol.innerHTML = html.join("");
    }
render();

//console.log(names);
// console.log(occupations);

//This is where I give up. I'm too stupid to learn this.