const products = [
    {
        id: 1,
        name: "IPhone 13",
        category: "celular",
        description: "Smartphone de última generación con pantalla AMOLED y 128GB de almacenamiento.",
        price: 499.99,
        stock: 25,
        img: "https://images.pexels.com/photos/12741170/pexels-photo-12741170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        name: "IPad 8va Generacion",
        category: "tablet",
        description: "Tablet con pantalla de 10 pulgadas, 64GB de almacenamiento y procesador de alto rendimiento.",
        price: 599.99,
        stock: 15,
        img: "https://outtec.com.ar/wp-content/uploads/2021/06/3-7.png",
    },
    {
        id: 3,
        name: "Macbook Pro",
        category: "notebook",
        description: "Laptop potente con procesador Intel Core i7, 16GB de RAM y 512GB SSD.",
        price: 1099.99,
        stock: 10,
        img: "https://cdn-ipoint.waugi.com.ar/26772-thickbox_default/apple-macbook-pro-13-m2-chip-8-core-cpu-10-core-gpu-512gb-ssd-space-grey.jpg",
    },
    {
        id: 4,
        name: "IPad 9na Generacion",
        category: "tablet",
        description: "Tablet de 12 pulgadas con pantalla Retina y 256GB de almacenamiento.",
        price: 799.99,
        stock: 20,
        img: "https://5.imimg.com/data5/SELLER/Default/2023/3/295486926/SE/NJ/PI/154920573/new-product.jpeg",
    },
    {
        id: 5,
        name: "IPhone 14",
        category: "celular",
        description: "Smartphone con cámara de 48MP y batería de larga duración.",
        price: 699.99,
        stock: 30,
        img: "https://www.cordobadigital.net/wp-content/uploads/2024/04/iPhone-14-128gb-white.png",
    },
    {
        id: 6,
        name: "Macbook Air",
        category: "notebook",
        description: "Ultrabook ligera con procesador AMD Ryzen 7, 16GB RAM y 1TB SSD.",
        price: 1299.99,
        stock: 12,
        img: "https://m.media-amazon.com/images/I/71N+DK0pEaL._AC_SL1500_.jpg",
    },
    {
        id: 7,
        name: "IPhone 15",
        category: "celular",
        description: "Smartphone de última generación con pantalla AMOLED y 128GB de almacenamiento.",
        price: 899.99,
        stock: 15,
        img: "https://cdn-ipoint.waugi.com.ar/26703-thickbox_default/iphone-15-pro-max-256gb.jpg",
    },
    {
        id: 8,
        name: "Macbook Air Pro",
        category: "notebook",
        description: "Ultrabook ligera con procesador AMD Ryzen 7, 32GB RAM y 1TB SSD.",
        price: 1499.99,
        stock: 20,
        img: "https://http2.mlstatic.com/D_784069-MLM51715672902_092022-C.jpg",
    },
    {
        id: 9,
        name: "IPad 10ma Generacion",
        category: "tablet",
        description: "Tablet de 8 pulgadas con pantalla Retina y 128GB de almacenamiento.",
        price: 999.99,
        stock: 14,
        img: "https://offer.com.ar/wp-content/uploads/2024/08/SB-MPQ03LE-A.jpg",
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === categoryId))
        }, 500)
    })
}