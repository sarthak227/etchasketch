function createGrid()

{
    let userInput=undefined;
    while(isNaN(userInput)) {
    userInput= prompt("Enter a number")
    }

    for (let i=0;i<userInput;i++)
    {
        let divp = document.createElement("div");
        divp.style.height=(500/userInput) + 'px';
        const parentDiv=document.querySelector(".parent");
        parentDiv.appendChild(divp);

        for(let j = 0; j<userInput;j++)
        {
            let divc=document.createElement("div")
            divc.setAttribute('class','child')
            divp.appendChild(divc);
        }
    }
}

    const btn= document.querySelector("button")
    btn.addEventListener('click',paint)

function paint()
{
    const divs=document.querySelectorAll(".child")
    divs.forEach(div => {div.addEventListener('mouseover',(event) => {event.target.style.backgroundColor='red';});
});
}

createGrid();


