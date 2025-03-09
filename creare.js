//O sa trec dimensiunea cu rosu
//Am trecut codul tipului de date cu albastru
//!([(4 * V) + 9], 8)
window.onload = ()=>{

    const limitaRand = 9;
    const limitaColoane = "U";
    const dimensiune = 21;

    function setareLungimeTotala(ec){
        switch(ec){
            case "0":
                return 19;
                break;
            case "1":
                return 16;
                break;
            case "2":
                return 13; 
                break;
            case "3":
                return 9;
                break;

        }
    }


    function transformareBinara(numar){
        let numarBinar = Array();
        while (numar > 0) {
            numarBinar.unshift(numar%2);
            numar = Math.floor(numar/2);
        }
        return numarBinar;
    }

    //!Aici fac o functie de verificare pentru a nu intra pe zonele rezervate
    //! 1 este codul pentru depasire rand
    //! 2 este codul pentru depasire coloana
    //! 3 este pentru a nu scriepeste "zebre"
    function delimitare(rand, coloana){
        coloana = coloana.charCodeAt(0);
        let a = "A".charCodeAt(0);
        let z = "A".charCodeAt(0) + 21;
        if(rand > 21){
            return 1
        }

        if (coloana >= (z-9)){
            if(rand < 9){
                return 1;
            }
        }
        else if(coloana > a && coloana < (a+9)){
            if(rand < 10 || rand > 21-10){
                return 1;
            }
        }

        if(coloana < a){
            return 2;
        }

        if (rand == 7 || coloana == a+6){
            return 3;
        }
        
        return 0;
    }


    //!Aici schimb coloanele pe care le folosesc
    function schimbareColoane(coloane){
        let ceva = 3;
        let coloane2 = new Array();
        for (let i = 0; i < coloane.length; i++){
            coloane2[i] = String.fromCharCode(coloane[i].charCodeAt(0)-2);
        }
        return coloane2;
    }

    //! parametrul este un array de valori binare
    function afisareMesaj(mesajCodat){
        let lungime = mesajCodat.length;
        let startRand = 15;
        let coloane = ["U","T"];
        let culori = ["green", "purple"];
        let rand = startRand;
        let coloana = 0;
        if (mesajCodat[0].length != 8){
            coloana = 1;
        }
        let schimbareRand = -1;
        let checker;
        
        for (let i = 0; i < lungime; i++){
            for(let j = 0; j < mesajCodat[i].length; j++){

                checker = delimitare(rand, coloane[coloana%2])
                
                if(checker == 1){
                    schimbareRand *= -1;
                    rand+=schimbareRand;
                    coloane = schimbareColoane(coloane);
                }

                let cel = document.getElementsByClassName(coloane[coloana%2] + " " + rand.toString());
                if(mesajCodat[i][j] == 1){
                    cel[0].style.backgroundColor = culori[i%2];
                }

                if(coloana % 2 == 1){
                    rand+=schimbareRand;
                }
                coloana++;

            }

        }

    }

    //Todo sa schimb culoarea de fundal in negru
    function setareDimensiune(dimensiune){
        let coloane = ["U", "T"];
        let counter = 0;
        let lungime = dimensiune.length;
        rand = 21-2;

        while (counter < dimensiune.length){

            let celula = document.getElementsByClassName(coloane[counter%2] + " " + rand.toString());
            if(counter%2 == 1){
                rand--;
            }
            if(dimensiune[counter] == 1){
                celula[0].style.backgroundColor = "red";
            }else{
                celula[0].style.backgroundColor = "yellow";
            }


            counter++;
        }


    }


    //! Aici adaug bitii necesari de final
    function adaugarePadding(dimenisuneActuala, dimensiuneNecesara){
        let mesaj = [""];
        let counter = 0;
        console.log("actual " + dimenisuneActuala);
        console.log(dimensiuneNecesara);
        while(dimenisuneActuala < dimensiuneNecesara && counter < 4){
            console.log("1");
            mesaj[0] += "0";
            counter++;
            dimenisuneActuala++;
        }
        counter = 0;
        while(dimenisuneActuala % 8 != 0){
            console.log("2");
            mesaj[0] += "0";
            dimenisuneActuala++;
        }
        while(dimenisuneActuala < dimensiuneNecesara){
            console.log("3");
            if(counter % 2 == 0){
                mesaj.push["11101100"];
            }
            else{
                mesaj.push["00010001"];
            }
            dimenisuneActuala+=8;
            counter+=1;
        }
        console.log(mesaj);
        
    }


    //! Functia asta primeste un nr binar si il transorma pe cati biti vreau
    function resize(numar, nrBiti){
        while(numar.length < nrBiti){
            numar.unshift(0);
        }
        return numar;
    }

    //! Aici am creat inceputul qr-ului(adica baza)
    let canvas = document.getElementById("canvas");
    for (let j = 1; j < 22; j++){
        for (let i =1; i < 22; i++){
            let elementNou = document.createElement("div");
            canvas.appendChild(elementNou);
            elementNou.style.width = "20px";
            elementNou.style.height = "20px";
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


    const dark= String.fromCharCode("A".charCodeAt(0) + 8);
    let darkModule = document.getElementsByClassName(dark + " 14");
    darkModule[0].style.backgroundColor = "orange";

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
    let data;
    let lungimeTotala;
    //! Aici setez tipul de date
    type.addEventListener("submit", (e)=>{
        e.preventDefault();
        let date = document.getElementsByName("date");
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
        //Todo sa schimb culoarea de fundal in negru
        while(counter < 4){
            if(cod[counter] == 1){
                let celula = document.getElementsByClassName(rand + " "+ coloana);
                celula[0].style.backgroundColor = "blue";
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
        switch(data){
            case "byte":
                switch(selected){
                    case "0":
                        mesaj.setAttribute("maxlength", "17");
                        lungimeMesaj = 17;
                        break;
                    case "1":
                        mesaj.setAttribute("maxlength", "14");
                        lungimeMesaj = 14;
                        break;
                    case "2":
                        mesaj.setAttribute("maxlength", "11");
                        lungimeMesaj = 11;
                        break;
                    case "3":
                        mesaj.setAttribute("maxlength", "7");
                        lungimeMesaj = 7;
                        break;
                 }
                 break;

            case "alpha":
                switch(selected){
                    case "0":
                        mesaj.setAttribute("maxlength", "25");
                        lungimeMesaj = 25;
                        break;
                    case "1":
                        lungimeMesaj = 20;
                        mesaj.setAttribute("maxlength", "20");
                        break;
                    case "2":
                        lungimeMesaj = 16;
                        mesaj.setAttribute("maxlength", "16");
                        break;
                    case "3":
                        mesaj.setAttribute("maxlength", "10");
                        lungimeMesaj = 10;
                        break;
                 }
                 break;

            case "numeric":
                switch(selected){
                    case "0":
                        mesaj.setAttribute("maxlength", "41");
                        lungimeMesaj = 41;
                        break;
                    case "1":
                        lungimeMesaj = 34;
                        mesaj.setAttribute("maxlength", "34");
                        break;
                    case "2":
                        lungimeMesaj = 27;
                        mesaj.setAttribute("maxlength", "27");
                        break;
                    case "3":
                        mesaj.setAttribute("maxlength", "17");
                        lungimeMesaj = 17;
                        break;
                    
                 }
                 break;
                
            case "kenji":
                switch(selected){
                    case "0":
                        mesaj.setAttribute("maxlength", "10");
                        lungimeMesaj = 10;
                        break;
                    case "1":
                        lungimeMesaj = 8;
                        mesaj.setAttribute("maxlength", "8");
                        break;
                    case "2":
                        lungimeMesaj = 7;
                        mesaj.setAttribute("maxlength", "7");
                        break;
                    case "3":
                        mesaj.setAttribute("maxlength", "4");
                        lungimeMesaj = 4;
                        break;
                    
                 }
                 break;
                
            
        }
        lungimeTotala = setareLungimeTotala(selected) * 8;
    })

    let mes;
    let valoriAlpha = {};
    //! Aici o sa creez un dictionar pentru valoriile alphanumerice
    for (let i = 0; i < 10; i++){
        valoriAlpha[i.toString()] = i;
    }
    for (let i = 0; i < 26; i++){
        valoriAlpha[String.fromCharCode(i + "A".charCodeAt(0))] = i + 10;
    }
    let valoriRandom = [" ", "$", "%", "*", "+", "-", ".", "/", ":"];
    for (let i = 35; i < 44; i++){
        valoriAlpha[valoriRandom[i-35]] = i+1;
    }



    //!Aici voi citi messjaul
    mesaje.addEventListener("submit", (e) => {
        e.preventDefault();
        mes = mesaj.value;
        mes = Array.from(mes.toUpperCase());
        let dimensiuneMesaj = mes.length;
        dimensiuneMesaj = transformareBinara(dimensiuneMesaj);
        let counter = 0;
        let caractereActuale;
        let car;
        let mesajCodat = Array();
        let lungimeMesajFinala = 0;


        //! Aici transform mesjaul in binar
        switch(data){
            case "alpha":
                dimensiuneMesaj = resize(dimensiuneMesaj, 9);
                setareDimensiune(dimensiuneMesaj);
                lungimeMesajFinala = Math.floor(mes.length/2)*11 + mes.length%2*6 + 9 + 4;
                console.log("lungime " + lungimeMesajFinala);
                while (counter < mes.length){
                    if(counter == mes.length-1 && counter % 2 == 0){
                        caractereActuale = transformareBinara(valoriAlpha[mes[counter]]);
                        caractereActuale = resize(caractereActuale, 6)
                        mesajCodat.push(caractereActuale);
                        break;
                    }
                    else if(counter % 2 == 1){
                        car = valoriAlpha[mes[counter]];
                        caractereActuale+=car;
                        caractereActuale = transformareBinara(caractereActuale);
                        caractereActuale = resize(caractereActuale, 11);
                        mesajCodat.push(caractereActuale);
                    }
                    else if(counter % 2 == 0){
                        caractereActuale = valoriAlpha[mes[counter]] * 45;
                    }
                    counter++;
                }

                afisareMesaj(mesajCodat);
                break;

            case "byte":
                dimensiuneMesaj = resize(dimensiuneMesaj, 8);
                lungimeMesajFinala = mes.length*8 + 12;
                setareDimensiune(dimensiuneMesaj);
                while (counter < mes.length){
                    caractereActuale= mes[counter].charCodeAt(0);
                    caractereActuale= transformareBinara(caractereActuale);
                    caractereActuale = resize(caractereActuale, 8);
                    lungimeMesaj+=8;
                    mesajCodat.push(caractereActuale);
                    counter++;
                }
                afisareMesaj(mesajCodat);
                break;
        }

        //! Aici vom face paddingul
        adaugarePadding(lungimeMesajFinala, lungimeTotala);


    })

    //! Aici vom face masca



}