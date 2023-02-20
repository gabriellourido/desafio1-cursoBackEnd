class ProductManager {
    constructor(){
        this.products = []
    }

    getProducts(){
        return this.products
    }
    addProduct(title,description,precio,thumbnail,code,stock){
        const id = this.products.length === 0
        ? 1
        : this.products[this.products.length-1].id + 1

        const product = {
            id,
            title,
            description,
            precio,
            thumbnail,
            code,
            stock
        }
        this.products.push(product)
    }
    getProductById(id){
        const products = this.products.find((products) => products.id === id);
        if (products) {
            return products;
        } else {
            console.log('Error: Not found');
        }
    }
}



const manager = new ProductManager()
manager.addProduct('producto prueba','Este es un producto prueba',200,'sin imagen','abc123',25)
manager.addProduct('producto prueba2','Este es un producto prueba2',200,'sin imagen2','abc123',30)
console.log(manager);

