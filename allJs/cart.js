let cart = [];

function showProductsInCart() {
    if (localStorage.getItem("productsInCart")) {
        cart = JSON.parse(localStorage.getItem("productsInCart"));
        if (cart.length) {
            document.getElementById("cart").innerHTML = "";
            document.getElementById("cartTable").style.display = "block";
            document.getElementById("noProducts").style.display = "none";
            for (let i in cart) {

                document.getElementById("cart").innerHTML += `
            <tr>
                
                <td><img src="${cart[i].image}"</td>
                <td>${cart[i].id}</td>
                <td>${cart[i].name}</td>
                <td>${cart[i].price}</td>
                <td><p onclick="deleteProductFromCart(${i})"><i class="fa-solid fa-trash" style="color: #36afe2;"></i></p></td>
            </tr>
        `;
            }
        }
        else {
            document.getElementById("cartTable").style.display = "none";
            document.getElementById("noProducts").style.display = "block";
        }
    } else {
        document.getElementById("cartTable").style.display = "none";
        document.getElementById("noProducts").style.display = "block";
    }

}
showProductsInCart();

function deleteProductFromCart(index) {
    if (confirm("Do you want to delete this product?")) {
        cart.splice(index, 1);
        alert("Deleted successfuly!")
        localStorage.setItem("productsInCart", JSON.stringify(cart));
        showProductsInCart();
    }

}
