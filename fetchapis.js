 fetch('https://fakestoreapi.com/products')
 .then((data)=>{
    //console.log(data)
    return data.json()  //converting data to json
 })
 .then((completedata)=>{
    //console.log(completedata[2].title);
    let data1 = "";
    completedata.map((values) => {
        data1 += ` <div class="card">
        <hi class="title">${values.title}</hi>
        <img src=${values.image}  alt="" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    });
     
    document.getElementById("cards").innerHTML = data1
 })

 .catch((err) => {
    console.log(err);
 })