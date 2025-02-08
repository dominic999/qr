window.onload = ()=>{

    let formular = document.getElementById("formular");
    let fisier = document.getElementById("fisier");
    formular.addEventListener("submit", (e) => {
        e.preventDefault();
        let reader = new FileReader();
        reader.readAsArrayBuffer(fisier.files[0]);
        console.log(reader);

    })

   

}