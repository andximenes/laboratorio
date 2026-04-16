const productName = document.getElementById("productName")
const productPrice = document.getElementById("productPrice")
const addBtn = document.getElementById("addBtn")
const productList = document.getElementById("productList")

const products =  []

function renderProducts() {
    productList.innerHTML = ""

    for (let i = 0; i < products.length; i++) {
        productList.innerHTML += `
            <div class = item>
                <strong>Name:</strong>${products[i].name}<br>
                <strong>Price:</strong>${products[i].price}
            <div>
        `
    }

}

addBtn.addEventListener("click", () =>{
    //Valida se o campo productName e productPrice estão vazios
    const name = productName.value.trim()
    const price = productPrice.value.trim()

    if(name === "") {
        return alert("Field product name empty")
    } else if (price === "") {
        return alert("Field product price empty")
    }

    //add produto
    products.push({
        name: name,
        price: Number(price)
    })

    //render
    renderProducts()

    productName.value = ""
    productPrice.value = ""
    productName.focus()
    
})