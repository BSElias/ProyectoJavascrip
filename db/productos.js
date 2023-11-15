const productos = [
    {
        id: 1,
        marca: "ASUS Notebook i7",
        modelo: "TUF Gamer i7",
        imagen:"https://intercompras.com/images/productgallery/ASUS_FX517ZR-F15.I73070_ICECAT_65362496.jpg",
        precio: 2100,
    },
    {
        id: 2,
        marca: "Razer Notebook i7",
        modelo: "Blade Stealth i7",
        imagen:"https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/t8gKH4i5-Razer-Blade-Stealth-13-1.jpg",
        precio: 2200,
    },
    {
        id: 3,
        marca: "Intel 16gb Pc Gamer",
        modelo: "Intel 16g ram y video rtx 3090",
        imagen:"https://www.cyberpuerta.mx/img/product/M/CP-XTREMEPCGAMING-XTXPGI932GB4090W-455c83.jpg",
        precio: 1500,
    },
    {
        id: 4,
        marca: "AMD 16gb Pc Gamer",
        modelo: "AMD 16g ram y video rtx 3090",
        imagen:"https://cdnx.jumpseller.com/compuelite/image/38538828/thumb/240/240?1698351188",
        precio: 1600,
    },
    {
        id: 5,
        marca: "Intel 32gb Pc Gamer",
        modelo: "Intel 32gb ram y video rtx 4090",
        imagen:"https://i5.walmartimages.com.mx/mg/gm/3pp/asr/4bbde09c-5084-4fbf-be7c-6ec7ef46995f.83ffe62f09f102c4bc8adc971cbb43b7.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        precio: 2200,
    },
    {
        id: 6,
        marca: "AMD 32gb Pc Gamer",
        modelo: "AMD 32gb ram y video rtx 4090",
        imagen:"https://ae04.alicdn.com/kf/S2c777b7338b24d3ab1d48c88e04b000b8.jpg",
        precio: 2200,
    },
];

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));