function Basket() {
    this.products = [],
    this.sum = 0;
}

Basket.prototype.addProduct = function(name, price) {
    this.products.push({
        name: name, 
        price: price
    });
    this.sum += price;
}

Basket.prototype.showBasket = function() {
    for (let product in this.products) {
        console.log(this.products[product]);
    }
    console.log("Price: " + this.sum);
}



var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
