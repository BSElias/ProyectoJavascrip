//Entrega Numero 1 js

let edad = prompt("Bienvenido, Ingrese su edad por favor:");
if (edad >= 18) {
    alert("Sos mayor de edad podes ingresar a nuestro sitio. ");
}else{
    alert("Sos menor de edad, no podras realizar operaciones en este sitio. ");
}

let nombre = prompt("Ingrese su nombre por favor:").toLowerCase();
let apellido = prompt ("Ingrese su apellido por favor:").toLowerCase();
alert(`Hola ${nombre} ${apellido} , ingresaste correctamente.`);

let opcion = prompt(`
    Ingrese la opcion requerida:
    
    1. Inicio de sesion
    2. Ver productos
    3. Suscribirse
    4. Salir
    Ingresa una opcion numerica o Salir si asi lo deseas.
    
`).toLowerCase();

//Inicio de sesion
while (opcion != "salir") {
    switch (opcion) {
        case "1":
            alert(`Inicie sesion a continuacion:`);
            let entrada = prompt ("Ingrese su usuario por favor: ( Usuario1 )");
            let contraseña = prompt ("Ingrese su contraseña por favor: ( 2222 )");
            while (entrada != "Usuario1" && contraseña != "2222"){
                alert("Su Usuario o contraseña son incorrectos");

                entrada = prompt ("Ingrese su usuario por favor: ( Usuario1 )");
                contraseña = prompt ("Ingrese su contraseña por favor: ( 2222 )");
            }
            alert(`Bienvenido ${entrada}`);
            break;
//Productos
        case "2":
            alert(`Nuestros productos son:`);
            let productos = prompt(`
            Selecione una opcion:
            
            1. Notebooks Gamer
            2. Pc Gamer

            Ingresa una opcion numerica o Salir si asi lo deseas.
            `);
            while(productos != "salir"){
                switch (productos) {
                    case "1":
                        alert(`Stock de ASUS TUF Gamer i7 y Razer Blade Stealth i7`);
                        break;

                    case "2":
                        alert(`Disponemos de pc gamer con procesador AMD o Intel desde 16g a 32gb de ram y video rtx 3060`);
                        break;

                    default:
                        alert("Opcion incorrecta, Intentalo nuevamente");
                        break;

                }
                productos = prompt(`
                Selecione una opcion:

                1. Notebooks Gamer
                2. Pc Gamer

                Ingresa una opcion numerica o Salir si asi lo deseas.
                `);
            }
            break;
//Registro
        case "3":
            alert(`Dejanos tu email para recibir todas nuestras ofertas y novedades.`);
            let email = prompt("Ingrese su email");

            if (email === " ") {
            alert("Campo obligatorio. Por favor, ingrese su email.");
            }else {
                enviarCorreo(email);
            }

            function enviarCorreo (email) {
                alert(`El email ha sido enviado a ${email} con nuestras ofertas y novedades.`);
            }
            alert("Gracias por suscribirte, Que tengas buenos dias!")
            break;
            

        case "4":
            salir=true;
            alert(`Hasta luego, que tengas buen dia!`);
            break;

        default:
            alert("Opcion incorrecta.");
            break;
    }
    opcion = prompt(`
    Ingrese la opcion requerida:

    1. Inicio de sesion
    2. Ver productos
    3. Suscribirse
    4. Salir
    Ingresa una opcion numerica o Salir si asi lo deseas.
    `);
}