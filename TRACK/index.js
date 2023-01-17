function login() {
    let user, password;
    
    user = document.getElementById("USUARIO").value;
    password = document.getElementById("CREDENCIALES").value;

    if (user == "LAUNCHX" && password == "LATAM"){

        alert("Iniciaste sesion")
        
        window.location.href = "PAGINA1.html";

    }
    else{
        alert("Datos incorrectos")
    }
}

function Tracksupplier(){
    let Supplier;
    
    Supplier = document.getElementById("Supplier").value;
    

    if (Supplier == "ECOPETROL" ){

        alert("Existing provider");
        
        

    }
    else{
        alert("Provider does not exist");
    }


}

