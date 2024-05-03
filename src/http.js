export  async function getFoodProducts() {
    const response = await fetch('http://localhost:3000/meals');
    const resData = await response.json();

    // adding quantity to each product = 0 
    resData.map((product) => {
        product.quantity = 0
        return product
    })
    return resData
}

export  async function saveOrder(order) {
    console.log(order)
    const respone = await fetch('http://localhost:3000/orders',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({order})
    }
    
   
)
   if (await(respone.ok)) {
    return "success" 
   }
    else {``
    return "failed"
    }

}