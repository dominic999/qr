window.onload = ()=>{

    // let canvas = document.getElementById("canvas");
    // const ctx = canvas.getContext("2d");
    // ctx.lineWidth = 10;
    // ctx.strokeRect(5,5,70,70);
    // ctx.fillRect(25,25,30,30);
    // ctx.strokeRect(5,135,70,70);
    // ctx.fillRect(30,30,30,30);


    let canvas = document.getElementById("canvas");
    for (let j = 1; j < 22; j++){
        for (let i =1; i < 22; i++){
            let elementNou = document.createElement("div");
            canvas.appendChild(elementNou);
            elementNou.style.width = "10px";
            elementNou.style.height = "10px";
            elementNou.id = (i*j).toString();
            if ((i < 8 || i > 14) && (j == 1 || j == 7)){
                elementNou.style.backgroundColor = "black";
            }else if((i ==1 || i == 7 || i == 15 || i==21) && j <= 7){
                elementNou.style.backgroundColor = "black";
            }
            if ((i < 8 || i > 14) && (j == 1 || j == 7)){
                elementNou.style.backgroundColor = "black";
            }else if((i ==1 || i == 7 || i == 15 || i==21) && j <= 7){
                elementNou.style.backgroundColor = "black";
            }
            if((j == 15 || j ==21) && i <= 7){
                elementNou.style.backgroundColor = "black";
            }
            if ((i == 1 || i == 7) && j >14){
                elementNou.style.backgroundColor = "black"
            }
            //acum trebuie sa fac patratele de dinauntru
            if((j>2 && j< 6) && (i>2 && i<6)){
                elementNou.style.backgroundColor = "black";
            }
            if((j>2 && j<6) && (i<20 && i>16)){
                elementNou.style.backgroundColor = "black";
            }
            if((j<20 && j>16) && (i>2 && i<6)){
                elementNou.style.backgroundColor = "black";
            }
            if(j == 7 && i > 8 && i < 14 && i % 2 == 1){
                elementNou.style.backgroundColor = "black";
            }
            if(i == 7 && j > 8 && j < 14 && j % 2 == 1){
                elementNou.style.backgroundColor = "black";
            }

        }

    }

    let eroare = document.getElementById("error");
    let formular = document.getElementById("formular");
    formular.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log(formular.value);
    })


}