//Entrega Numero 1 js

// //Verificar edad.
// let edad = prompt("Bienvenido, Ingrese su edad por favor:");
// if (edad >= 18) {
//     alert("Sos mayor de edad podes ingresar a nuestro sitio. ");
// }else{
//     alert("Sos menor de edad, no podras realizar operaciones en este sitio. ");
// }
// //Pedimos nombre.
// let nombre = prompt("Ingrese su nombre por favor:").toLowerCase();
// let apellido = prompt ("Ingrese su apellido por favor:").toLowerCase();
// alert(`Hola ${nombre} ${apellido} , ingresaste correctamente.`);

// //Modo oscuro.
// let tipo = prompt ("Ingrese el modo de visualizar la web:(Oscuro o Blanco)");
// if (tipo === "oscuro"){
//     document.body.className = "oscuro";
// }else{
//     document.body.className = "blanco";
// }

// //Opciones.
// let opcion = prompt(`
//     Ingrese la opcion requerida:

//     1. Inicio de sesion
//     2. Ver productos
//     3. Comprar
//     4. Suscribirse
//     5. Salir
//     Ingresa una opcion numerica o Salir si asi lo deseas.

// `).toLowerCase();

// //Inicio de sesion.
// while (opcion != "salir") {
//     switch (opcion) {
//         case "1":
//             alert(`Inicie sesion a continuacion:`);
//             let entrada = prompt ("Ingrese su usuario por favor: ( Usuario1 )");
//             let contraseña = prompt ("Ingrese su contraseña por favor: ( 2222 )");
//             while (entrada != "Usuario1" && contraseña != "2222"){
//                 alert("Su Usuario o contraseña son incorrectos");

//                 entrada = prompt ("Ingrese su usuario por favor: ( Usuario1 )");
//                 contraseña = prompt ("Ingrese su contraseña por favor: ( 2222 )");
//             }
//             alert(`Bienvenido ${entrada}`);
//             break;
// //Productos.
//         case "2":
//             alert(`Nuestros productos son:`);
//             let productos = prompt(`
//             Selecione una opcion:

//             1. Notebooks Gamer
//             2. Pc Gamer
//             3. Realizar compra

//             Ingresa una opcion numerica o "Volver" al menu para comprar.
//             `).toLowerCase();
//             while(productos != "volver"){
//                 switch (productos) {
//                     case "1":
//                         alert(`Stock de ASUS TUF Gamer i7 y Razer Blade Stealth i7`);
//                         break;

//                     case "2":
//                         alert(`Disponemos de pc gamer con procesador AMD o Intel  desde 16g a 32gb de ram y video rtx 3090 o rtx 4090 `);
//                         break;

//                         case"3":
//                         alert(`Volver al menu para realizar compra`);
//                         break;

//                     default:
//                         alert("Opcion incorrecta, Intentalo nuevamente");
//                         break;

//                 }
//                 productos = prompt(`
//                 Selecione una opcion:

//                 1. Notebooks Gamer
//                 2. Pc Gamer
//                 3. Realizar compra

//                 Ingresa una opcion numerica o "Volver" al menu para comprar.
//                 `);
//             }
//             break;

// //Comprar .
//         case "3":
//             alert(`Que producto quiere comprar? `);
//             let productoCompra = prompt(`Disponemos de:
//             1. ASUS TUF Gamer i7 - $2100.
//             2. Razer Blade Stealth i7 - $2200.
//             3. Pc Intel  desde 16g ram y video rtx 3090 - $1500.
//             4. Pc AMD desde 16g de ram y video rtx 3090 - $1600.
//             5. Pc Intel 32gb ram y video rtx 4090 - $2200.
//             6. Pc AMD 32GB ram y video rtx 4090 - $2300.
//             7. Volver al menu.

//             `).toLowerCase();
//             break;
//             while(productoCompra != "Volver al menu" ){


//                 productoCompra = prompt(`Disponemos de:
//                 1. ASUS TUF Gamer i7 - $2100.
//                 2. Razer Blade Stealth i7 - $2200.
//                 3. Pc Intel  desde 16g ram y video rtx 3090 - $1500.
//                 4. Pc AMD desde 16g de ram y video rtx 3090 - $1600.
//                 5. Pc Intel 32gb ram y video rtx 4090 - $2200.
//                 6. Pc AMD 32GB ram y video rtx 4090 - $2300.
//                 7. Volver al menu.

//                 `).toLowerCase();

//             }
//             break;

// //Registro.
//         case "4":
//             alert(`Dejanos tu email para recibir todas nuestras ofertas y novedades.`);
//             let email = prompt("Ingrese su email");

//             if (email === " ") {
//             alert("Campo obligatorio. Por favor, ingrese su email.");
//             }else {
//                 enviarCorreo(email);
//             }

//             function enviarCorreo (email) {
//                 alert(`El email ha sido enviado a ${email} con nuestras ofertas y novedades.`);
//             }
//             alert("Gracias por suscribirte, Que tengas buenos dias!")
//             break;

// //Salir.
//         case "5":
//             salir=true;
//             alert(`Hasta luego, que tengas buen dia!`);
//             break;

//         default:
//             alert("Opcion incorrecta.");
//             break;
//     }
//     opcion = prompt(`
//     Ingrese la opcion requerida:

//     1. Inicio de sesion
//     2. Ver productos
//     3. Comprar
//     4. Suscribirse
//     5. Salir
//     Ingresa una opcion numerica o Salir si asi lo deseas.
//     `);
// }

//producto 2
//productos de tienda
// let productos = [
//     {id: 1,nombre: "ASUS TUF Gamer i7", precio: 1600},
//     {id: 2,nombre: "Razer Blade Stealth i7", precio: 1700},
//     {id: 3,nombre: "pc gamer AMD con 16gb de ram y video rtx 3060", precio: 1000},
//     {id: 4,nombre: "pc gamer Intel con 16gb de ram video rtx 3060", precio: 1100},
// ];
// //funcion para encontrar un producto por su nombre
// const encontrarProducto = (nombre) => {

//     return productos.find(item=> item.nombre === nombre);
// };
// //funcion para mostrar un producto si existe y sino mostras mensaje correspondiente
// const mostrarProducto = (producto) => {
//     if (producto) {
//         alert(`
//         Nombre: ${producto.nombre}
//         Precio: ${producto.precio}
//     `);
//     }else{
//         alert("Producto no encontrado");
//     }
// };
// //pedimos el nombre del producto a buscar
// let nombre2 = prompt ("Ingrese el nombre del producto que quiere comprar");

// //mientras que nombre sea diferente a salir todo se ejecuta normalmente
// while (nombre != "salir"){
//         //buscamos el producto
//     let producto = encontrarProducto(nombre);
//     //mostramos el producto
//     mostrarProducto(producto);

//     //volvemos a pedir el nombre del producto a buscar
//     nombre = prompt("Ingrese el producto a buscar");
// }

// alert("Hasta pronto"); 

//codigo p

//traemos el contenedor donde mostraremos los productos
// let contenedor = document.getElementById("contenedor");
// const productos = [
//   { id: 1, nombre: "camisa", precio: "1000" },
//   { id: 2, nombre: "gorra", precio: "500" },
//   { id: 3, nombre: "pantalon", precio: "750" },
//   { id: 4, nombre: "media", precio: "398" },
//   { id: 5, nombre: "corvata", precio: "128" },
// ];

// productos.forEach((item) => {
//creamos la etiqueta que contendra el contenido del producto
//   let div = document.createElement("div");

//asignamos el contenido a la etiqueta anteriormente creada
//   div.innerHTML = `
//     <h2 class="amarillo">Id: ${item.id}</h2>
//     <p class="azul">Nombre: ${item.nombre}</p>
//     <b class="rojo">$${item.precio}</b>
//   `;
//agregamos la etiqueta alo contenedor de la pagina
//   contenedor.append(div);
// });

//Segunda entrega Carrito

// alert("Bienvenido a Tienda Gamer!! ");
// let usuario = prompt("Ingrese su usuario por favor:").toLowerCase();
// alert(`Hola ${usuario} ,que disfrutes tu visita gamer!`);

// let total = 0;
// let carrito = [];
// //productos
// const productos = [
//     {
//         marca: `ASUS Notebook i7`,
//         modelo: `TUF Gamer i7`,
//         precio: 2100,
//     },
//     {
//         marca: `Razer Notebook i7`,
//         modelo: `Blade Stealth i7`,
//         precio: 2200,
//     },
//     {
//         marca: `Intel 16gb Pc Gamer`,
//         modelo: `Intel 16g ram y video rtx 3090`,
//         precio: 1500,
//     },
//     {
//         marca: `AMD 16gb Pc Gamer`,
//         modelo: `AMD 16g ram y video rtx 3090`,
//         precio: 1600,
//     },
//     {
//         marca: `Intel 32gb Pc Gamer`,
//         modelo: `Intel 32gb ram y video rtx 4090`,
//         precio: 2200,
//     },
//     {
//         marca: `AMD 32gb Pc Gamer`,
//         modelo: `AMD 32gb ram y video rtx 4090`,
//         precio: 2200,
//     },
// ];
// //agregar producto al carrito
// function agregarCarrito(producto) {
//     carrito.push(producto);
//     total += producto.precio;
//     alert(`${producto.marca} - ${producto.modelo} agregado al inventario.`);
// }
// //buscar por marca
// function buscarPorMarca() {
//     const marcas = [...new Set(productos.map(producto => producto.marca))];

//     let marcasDisp = "Marcas disponibles:\n";
//     marcasDisp += marcas.map((marca, index) => `${index + 1}. ${marca}`).join('\n');
//     marcasDisp += '\nElija su nuevo armamento a inspecionar:';

//     const marcaBuscada = Number(prompt(marcasDisp));

//     if (marcaBuscada >= 1 && marcaBuscada <= marcas.length) {
//         const marcaElegida = marcas[marcaBuscada - 1];
//         const productosMarca = productos.filter(producto => producto.marca === marcaElegida);
//         mostrarResultados(productosMarca);
//     } else {
//         alert("Opción incorrecta. Ingrese un número válido.");
//         buscarProductos();
//     }
// }
// //buscar por modelo
// function buscarPorModelo() {
//     const modeloBuscado = prompt("Ingrese el modelo que desea buscar para ver si disponemos de stok : ( ejemplo: AMD 32gb ram y video rtx 4090 , Blade Stealth i7 )");

//     if (modeloBuscado) {
//         const productosModelo = productos.filter(producto => producto.modelo.toLowerCase().includes(modeloBuscado.toLowerCase()));
//         mostrarResultados(productosModelo);
//     } else {
//         alert("Ingrese un modelo disponible por favor.");
//         buscarProductos();
//     }
// }
// //buscar producto
// function buscarProductos() {
//     let opcionesDeBusqueda;
//     do {
//         opcionesDeBusqueda = prompt(`
//         Como quieres buscar los productos :
//         \n1. Buscar por marca
//         \n2. Buscar por modelo 
//         \n3. Exit`);

//         switch (opcionesDeBusqueda) {
//             case "1":
//                 buscarPorMarca();
//                 break;
//             case "2":
//                 buscarPorModelo();
//                 break;
//             case "3":
//                 verMenu();
//                 return;
//             default:
//                 alert("Opción incorrecta. Elija una opción válida.");
//                 break;
//         }
//     } while (opcionesDeBusqueda !== "3");
// }

// //ver resultados de los productos
// function mostrarResultados(productosEncontrados) {
//     if (productosEncontrados.length > 0) {
//         let mensaje = "Productos encontrados:\n";
//         productosEncontrados.forEach((producto, index) => {
//             mensaje += `${index + 1}. ${producto.marca} ${producto.modelo} - Precio: ${producto.precio}\n`;
//         });
//         mensaje += `${productosEncontrados.length + 1}. Exit`;

//         const respuesta = prompt(mensaje);

//         if (respuesta <= productosEncontrados.length) {
//             agregarCarrito(productosEncontrados[respuesta - 1]);
//             buscarProductos();
//         } else if (respuesta == productosEncontrados.length + 1) {
//             buscarProductos();
//         } else {
//             alert("Elija una opción válida.");
//         }
//     } else {
//         alert("No se encontraron los productos de la búsqueda.");
//         buscarProductos();
//     }
// }
// //calcular precios
// function calcularPrecioTotal() {
//     total = 0;
//     for (const producto of carrito) {
//         total += producto.precio;
//     }
// }
// //sacar productos del carrito
// function quitarDelCarrito() {
//     if (carrito.length === 0) {
//         alert("El carrito está vacío.");
//         verMenu();
//         return;
//     }

//     let mensaje = "Productos en el carrito:\n";
//     carrito.forEach((producto, index) => {
//         mensaje += `${index + 1}. ${producto.marca} ${producto.modelo} - Precio: ${producto.precio}\n`;
//     });
//     mensaje += `${carrito.length + 1}. Volver`;

//     const respuesta = prompt(mensaje);

//     if (respuesta <= carrito.length) {
//         const productoQuitado = carrito.splice(respuesta - 1, 1)[0];
//         total -= productoQuitado.precio;
//         alert(`${productoQuitado.marca} ${productoQuitado.modelo}   Quitado del inventario.`);
//         quitarDelCarrito();
//     } else if (respuesta == carrito.length + 1) {
//         verMenu();
//     } else {
//         alert("Elija una opción válida.");
//         quitarDelCarrito();
//     }
// }

// //ver carrito
// function verCarrito() {
//     if (carrito.length === 0) {
//         alert("El carrito está vacío.");
//         verMenu();
//         return;
//     }

//     let mensaje = "Productos en el carrito:\n";
//     carrito.forEach((producto, index) => {
//         mensaje += `${index + 1}. ${producto.marca} ${producto.modelo} - Precio: ${producto.precio}\n`;
//     });

//     calcularPrecioTotal();

//     mensaje += `Total de compra: USD ${total}\n${carrito.length + 1}. Quitar productos del Carrito\n${carrito.length + 2}. Volver`;

//     const respuesta = prompt(mensaje);
//     if (respuesta == carrito.length + 1) {
//         quitarDelCarrito();
//     } else if (respuesta == carrito.length + 2) {
//         verMenu();
//     } else {
//         alert(`Elija una opción correcta`);
//         verCarrito();
//     }
// }

// //menu
// function verMenu() {
//     let menu;
//     do {
//         menu = Number(prompt("Gamer, selecciona la opcion que deseas:\n1. Ver nuestros productos\n2. Mirar Carrito para equipar!\n3. Salir"));
//         switch (menu) {
//             case 1:
//                 buscarProductos();
//                 break;
//             case 2:
//                 verCarrito();
//                 break;
//             case 3:
//                 alert("Gamer over!");
//                 break;
//             default:
//                 alert("Opción incorrecta. Vuelva a selecionar una opcion.");
//                 break;
//         }
//     } while (menu !== 3);
//     alert("Gracias por visitarnos, te esperamos pronto!");
// }

// verMenu();

//tercera entrega

let total = 0;
let carrito = [];

// localStorage 
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    total = carrito.reduce((sum, product) => sum + product.precio, 0);
}

// Productos
const productos = [
    {
        marca: "ASUS Notebook i7",
        modelo: "TUF Gamer i7",
        precio: 2100,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_714144-MLA52160876834_102022-O.webp",
        
    },
    {
        marca: "Razer Notebook i7",
        modelo: "Blade Stealth i7",
        precio: 2200,
        imagen: "https://cdn.mos.cms.futurecdn.net/EZtnh9k9vfAcJupEheRt4d-768-80.jpg.webp",
    },
    {
        marca: "Intel 16gb Pc Gamer",
        modelo: "Intel 16g ram y video rtx 3090",
        precio: 1500,
        imagen: "https://images.unsplash.com/photo-1587202372583-49330a15584d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        marca: "AMD 16gb Pc Gamer",
        modelo: "AMD 16g ram y video rtx 3090",
        precio: 1600,
        imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        marca: "Intel 32gb Pc Gamer",
        modelo: "Intel 32gb ram y video rtx 4090",
        precio: 2200,
        imagen: "https://images.unsplash.com/photo-1573053986275-840ffc7cc685?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        marca: "AMD 32gb Pc Gamer",
        modelo: "AMD 32gb ram y video rtx 4090",
        precio: 2200,
        imagen: "https://images.unsplash.com/photo-1613307446588-bd79208b1fe8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

// display productos
function displayProductos() {
    const productosLista = document.getElementById("productos-lista");

    productos.forEach(producto => {
        const col = document.createElement("div");
        col.classList.add("col-4", "mb-4");

        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = producto.imagen;
        image.alt = `${producto.marca} - ${producto.modelo}`;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = `${producto.marca} - ${producto.modelo}`;

        const cardPrice = document.createElement("p");
        cardPrice.classList.add("card-text");
        cardPrice.textContent = `$${producto.precio}`;

        const addButton = document.createElement("button");
        addButton.classList.add("btn", "btn-primary");
        addButton.textContent = "Agregar al Carrito";
        addButton.addEventListener("click", () => agregarAlCarrito(producto));

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(addButton);
        card.appendChild(image);
        card.appendChild(cardBody);
        col.appendChild(card);
        productosLista.appendChild(col);
    });
}

// carrito
function displayCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    const totalElement = document.getElementById("total");

    carritoLista.innerHTML = "";
    totalElement.textContent = total;

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.marca} - ${producto.modelo} - $${producto.precio}`;
        const removeButton = document.createElement("button");
        removeButton.classList.add("btn", "btn-danger");
        removeButton.textContent = "Quitar del Carrito";
        removeButton.addEventListener("click", () => quitarDelCarrito(producto));
        li.appendChild(removeButton);
        carritoLista.appendChild(li);
    });
}

// agregar al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    total += producto.precio;
    displayCarrito();
    saveToLocalStorage();
    showSweetAlert("success", "¡Producto agregado!", `${producto.marca} - ${producto.modelo} se ha agregado al carrito.`);
}

// quitar del carrito
function quitarDelCarrito(producto) {
    const index = carrito.indexOf(producto);
    if (index !== -1) {
        total -= producto.precio;
        carrito.splice(index, 1);
        displayCarrito();
        saveToLocalStorage();
        showSweetAlert("success", "¡Producto quitado!", `${producto.marca} - ${producto.modelo} se ha quitado del carrito.`);
    }
}

// Función al hacer clic del botón "Comprar"
document.getElementById("comprar-btn").addEventListener("click", comprar);

// "Ver Carrito" al hacer click
document.getElementById("ver-carrito-btn").addEventListener("click", verCarrito);

// F"Vaciar Carrito"  al hacer click
document.getElementById("vaciar-carrito-btn").addEventListener("click", vaciarCarrito);

// funcion al comprar
function comprar() {
    showSweetAlert("success", "¡Compra realizada!", `Total: $${total}`);
    
}

// funcion ver carrito
function verCarrito() {
    showSweetAlert("info", "Contenido del Carrito", carrito.map(item => `${item.marca} - ${item.modelo}`).join("\n"));
}

// funcion  vaciar carrito
function vaciarCarrito() {
    carrito = [];
    total = 0;
    displayCarrito();
    saveToLocalStorage();
    showSweetAlert("info", "Carrito vaciado", "El carrito se ha vaciado.");
}

// Función para guardar datos del carrito en localStorage
function saveToLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para mostrar mensajes de SweetAlert2
function showSweetAlert(icon, title, text) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        showConfirmButton: false,
        timer: 1500
    });
}

// Mostrar productos y carrito de compras cuando se carga la página
displayProductos();
displayCarrito();

