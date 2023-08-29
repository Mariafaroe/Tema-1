const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


fetch("https://kea-alt-del.dk/t7/api/products/" + id)
    .then((response) =>response.json())
    .then((data) => showProduct (data));

    function showProduct(product){
        console.log(product);
        document.querySelector(".produktside h3").textContent = product.productdisplayname; 
        document.querySelector(".produktside .brand").textContent = product.brandname; 
        document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
        document.querySelector(".produktside .pris").textContent = product.price; 
        document.querySelector(".produktside .kategori").textContent = product.subcategory;
    }
/*{
  "id": 1565,
  "gender": "Unisex", 
  "category": "Accessories",
  "subcategory": "Bags",
  "articletype": "Backpacks",
  "basecolour": "Green",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Travel",
  "productdisplayname": "Green Light Backpack",
  "parsed": 1,
  "soldout": 0,
  "relid": 1565,
  "price": 399,
  "discount": null,
  "variantname": "Small",
  "brandname": "Quechua",
  "brandbio": null,
  "brandimage": null,
  "agegroup": "Adults-Unisex",
  "colour1": "Black",
  "colour2": "",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "description": "-",
  "styledesc": null
}
*/
