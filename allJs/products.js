

let products = [
    {
        id: 2536,
        name: "Sony Professional 32GB XQD",
        price: 500,
        category: "Storage",
        description: "The new XQD cards achieve Max read",
        image: "images/images/sony.jpg",
    },
    {
        id: 2537,
        name: "Lenovo Legion 15.6 Gaming",
        price: 4228,
        category: "Laptops",
        description:
            "Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean and minimalist design",
        image: "images/images/lenovo.jpg",
    },
    {
        id: 2538,
        name: "ASUS ROG GL552VW-DH71",
        price: 5300,
        category: "Laptops",
        description:
            "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro",
        image: "images/images/asus.jpg",
    },
    {
        id: 1234,
        name: "JBL TUNE 510BT",
        price: 179,
        category: "Headphones",
        description: "JBL Tune 510BT headphones allow you to stream strong JBL bass sound without wires connected. The headphones are easy to use, they provide up to 40 hours of pure enjoyment, 5 minutes of charging will give you two hours of enjoyable music using the charging cable USB-C",
        image: "images/images/jbl.jpeg"
    },
    {
        id: 1235,
        name: "Sumsung Galaxy A53 5G",
        price: 1199,
        category: "Phones",
        description: "The Samsung Galaxy A53 5G is an impressive device for the price, offering many high-end features in a cheaper body",
        image: "images/images/galaxyA53.webp"
    },
    {
        id: 1236,
        name: "Samsung Galaxy Tab S6 Lite",
        price: 1249,
        category: "Tablet",
        description: "טאבלט איכותי מבית Samsung בעל מסך 10.4'', מצלמה אחורית 8 מגה פיקסל ומצלמת סלפי 5 מגה פיקסל, ערכת שבבים בעלת 8 ליבות ומערכת הפעלה אנדרואיד מתקדמת. כולל עט S Pen.",
        image: "images/images/galaxyTabS6.webp"
    },
    {
        id: 1238,
        name: "RAZER BLACKWIDOW V4",
        price: 699,
        category: "Gaming, Keyboard",
        description: "FULL-BLOWN BATTLESTATION IMMERSION. 2-SIDE UNDERGLOW AND PER-KEY LIGHTING",
        image: "images/images/blackwidow-v4.jpg"
    },
    {
        id: 1239,
        name: "RAZER COBRA PRO",
        price: 499,
        category: "Gaming, Mouse",
        description: "PERFECTED FOR PLAY! Razer Cobra Pro—a wireless gaming mouse powered by Razer Chroma RGB. Featuring Razer HyperSpeed Wireless and 11 individually programmable lighting zones, color your play with an illuminating level of freedom and immersion.",
        image: "images/images/cobra-pro.png"
    },
];



let cart = [];

if (localStorage.getItem("productsInCart") != null) {
    cart = JSON.parse(localStorage.getItem("productsInCart"));
}


function showCards() {
    for (let i = 0; i < products.length; i++) {
        document.getElementById("products").innerHTML += `
        <div class="col-md-3 mb-3">
            <div class="card " >
                <img src=${products[i].image} class="card-img-top" alt=${products[i].name}>
                <div class="card-body">
                    <h5 class="card-title">${products[i].name}</h5>
                    <p class="card-text">${products[i].category}</p>
                    <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100 mb-2" 
                        onclick="setModal(${i})">
                            See more
                    </a>
                </div>
            </div>
        </div>
        `;
    }
}

showCards();

function setModal(index) {
    document.getElementById("title").innerText = products[index].name;
    document.getElementById("mbody").innerHTML = `
        <p>
            <b>Serial Number:</b> ${products[index].id}
        </p>
        <p>
            <b>Category:</b> ${products[index].category}
        </p>
        <p>
            <b>Description:</b> ${products[index].description}
        </p>
        <h4 class="text-end">Price: ${products[index].price} </h4>`;
    document.getElementById("mfooter").innerHTML = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary" data-bs-dismiss="modal" onclick="addProductToCart(${index})">Add to cart</button>
        `;
}

function addProductToCart(index) {
    cart.push(products[index]);
    alert("Added seccessfuly!")
    localStorage.setItem("productsInCart", JSON.stringify(cart))

}




