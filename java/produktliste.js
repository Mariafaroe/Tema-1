fetch("https://kea-alt-del.dk/t7/api/products")
    .then(res=>res.json())
    .then(showProducts);

function showProducts(produkter){
     //looper og kalder funktionen ShowProduct
     produkter.forEach(showProduct)

}

function showProduct(product){
    //console.log(product);
    //fange template
    const template = document.querySelector("#ProductTemplate").content;
    //kopi
    const copy = template.cloneNode(true);
    //indhold
    copy.querySelector("h3").textContent = product.productdisplayname;
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector(".produktliste p").textContent = product.price; 
   
    if(product.soldout){
        //produkt udsolgt
        copy.querySelector("article").classList.add("soldOut"); 
    }

    copy.querySelector(".readmore").setAttribute("href", `produkt.html?id=${product.id}`);



    if(product.discount){
        copy.querySelector("article").classList.add("discount");  
    }
    //appende 
    document.querySelector("main").appendChild(copy);
}


/* 
<div class="produkt">
            <a href="produkt.html">
                <img src="./Billeder/produkt1.jpg" alt="Bold">
            </a>
            <h3>Puma bold</h3>
            <p>Pris: 200Dkk </p>
        </div>
    </article>
</template>
*/

/*
{
  "id": 1525,
  "gender": "Unisex",
  "category": "Accessories",
  "subcategory": "Bags",
  "articletype": "Backpacks",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Deck Navy Blue Backpack",
  "price": 1299,
  "discount": 55,
  "brandname": "Puma",
  "soldout": 0
}
*/