window.onload = ()=>{

    function transformareBinara(numar){
        let numarBinar = Array();
        while (numar > 0) {
            numarBinar.unshift(numar%2);
            numar /= 2;
        }
        return numarBinar;
    }

    //! Aici am creat inceputul qr-ului(adica baza)
    let canvas = document.getElementById("canvas");
    for (let j = 1; j < 22; j++){
        for (let i =1; i < 22; i++){
            let elementNou = document.createElement("div");
            canvas.appendChild(elementNou);
            elementNou.style.width = "10px";
            elementNou.style.height = "10px";
            let coloana = i + "A".charCodeAt(0) - 1;
            coloana = String.fromCharCode(coloana);
            elementNou.classList.add(j.toString());
            elementNou.classList.add(coloana);
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

    //! Aici este error handling-ul
    let eroare = document.getElementById("error");
    let radios = document.getElementsByName("eroare");
    let formular = document.getElementById("formular");
    let selected;
    let mesaje = document.getElementById("mesaje");
    mesaje.style.display = "none";
    let type = document.getElementById("type");
    type.style.display = "none";

    formular.addEventListener("submit", (e)=>{
        e.preventDefault();
        for (let i = 0; i < radios.length; i++){
            if(radios[i].checked){
                selected = radios[i].value;
            }
        }
        if (selected == "0"){
            let unu = document.querySelector(".\\39.B");
            let doi = document.querySelector(".\\32 0.I");
            unu.style.backgroundColor = "black";
            doi.style.backgroundColor = "black";
        }
        if (selected == "2"){
            let unu = document.querySelector(".\\39.B");
            let doi = document.querySelector(".\\32 0.I");
            let trei= document.querySelector(".\\39.A");
            let patru = document.querySelector(".\\32 1.I");
            unu.style.backgroundColor = "black";
            doi.style.backgroundColor = "black";
            trei.style.backgroundColor = "black";
            patru.style.backgroundColor = "black";
        }
        if (selected == "3"){
            let unu = document.querySelector(".\\39.A");
            let doi = document.querySelector(".\\32 1.I");
            unu.style.backgroundColor = "black";
            doi.style.backgroundColor = "black";
        }
        formular.style.display = "none";
        type.style.display = "inline";
    })

    let mesaj = document.getElementById("mesaj");
    //! Aici setez tipul de date
    type.addEventListener("submit", (e)=>{
        e.preventDefault();
        let date = document.getElementsByName("date");
        let data;
        for (let i = 0; i < date.length; i++){
            if(date[i].checked){
                data = date[i].value;
            }
        }
        let rand = 21;
        rand = rand.toString();
        let coloana = String.fromCharCode("A".charCodeAt(0) + 20);
        let cod;
        let counter = 0;
        //alpha
        if(data == 0){
            data = "alpha";
            cod = Array.from("0010");
        }
        //numeric
        else if(data == 1){
            data = "numeric";
            cod = Array.from("0001");
        }
        //byte
        else if(data == 2){
            data = "byte";
            cod = Array.from("0100")
        }
        //kenji
        else if(data == 3){
            data = "kenji";
            cod = Array.from("1000")
        }
        while(counter < 4){
            if(cod[counter] == 1){
                let celula = document.getElementsByClassName(rand + " "+ coloana);
                celula[0].style.backgroundColor = "black";
            }
            if(counter % 2 == 0){
                coloana = coloana.charCodeAt(0) - 1;
                coloana = String.fromCharCode(coloana);
            }else{
                rand = parseInt(rand);
                rand--;
                rand = rand.toString();
                coloana = "U";
            }
            counter++;
        }
        type.style.display = "none";
        mesaje.style.display = "block"
        let lungimeMesaj;
        console.log(data);
        switch(data){
            case "byte":
                switch(selected){
                    case "0":
                        mesaj.setAttribute("maxlength", "17");
                        lungimeMesaj = 17;
                    case "1":
                        mesaj.setAttribute("maxlength", "14");
                        lungimeMesaj = 14;
                    case "2":
                        mesaj.setAttribute("maxlength", "11");
                        lungimeMesaj = 11;
                    case "3":
                        mesaj.setAttribute("maxlength", "7");
                        lungimeMesaj = 7;
                 }

            case "alpha":
                switch(selected){
                    case "0":
                        mesaj.setAttribute("maxlength", "25");
                        lungimeMesaj = 25;
                    case "1":
                        lungimeMesaj = 20;
                        mesaj.setAttribute("maxlength", "20");
                    case "2":
                        lungimeMesaj = 16;
                        mesaj.setAttribute("maxlength", "16");
                    case "3":
                        mesaj.setAttribute("maxlength", "10");
                        lungimeMesaj = 10;
                 }
                
                

    }
    })

    //!Aici voi citi messjaul
    let mes;
    let valoriAlpha = {};
    //! Aici o sa creez un dictionar pentru valoriile alphanumerica
    for (let i = 0; i < 26; i++){
        valoriAlpha[String.fromCharCode(i + "A".charCodeAt(0))] = i + 10;
    }
    let valoriRandom = ["space", "$", "%", "*", "+", "-", ".", "/", ":"];
    for (let i = 35; i < 44; i++){
        valoriAlpha[valoriRandom[i-35]] = i+1;
    }

    mesaje.addEventListener("submit", (e) => {
        e.preventDefault();
        mes = mesaj.value;
        mes = Array.from(mes);
        let counter = 0;
        let caractereActuale;
        switch(data){
            case "alpha":
                while (counter < mes.length){
                    if(counter == mes.length-1 && counter % 2 == 1){
                        mes
                    }
                    counter++;
                }
        }

    })

    //! Aici vom face masca



}