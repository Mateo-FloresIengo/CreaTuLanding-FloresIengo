import iphone13 from '../img/iphone13.jpg'
import iphone14 from '../img/iphone14.jpg'
import iphone15 from '../img/iphone15.jpg'
import ipad8 from '../img/ipad8.jpg'
import ipad9 from '../img/ipad9.jpg'
import ipad10 from '../img/ipad10.jpg'
import macbookPro from '../img/macbookPro.jpg'
import macbookAir from '../img/macbookAir.jpg'
import macbookAirPro from '../img/macbookAirPro.jpg'

const products = [
    {
        id: 1,
        name: "IPhone 13",
        category: "celulares",
        description: "Smartphone de última generación con pantalla AMOLED y 128GB de almacenamiento.",
        price: 799.99,
        stock: 25,
        img: iphone13,
    },
    {
        id: 2,
        name: "IPad 8va Generacion",
        category: "tablets",
        description: "Tablet con pantalla de 10 pulgadas, 64GB de almacenamiento y procesador de alto rendimiento.",
        price: 499.99,
        stock: 15,
        img: ipad8,
    },
    {
        id: 3,
        name: "Macbook Pro",
        category: "notebooks",
        description: "Laptop potente con procesador Intel Core i7, 16GB de RAM y 512GB SSD.",
        price: 1499.99,
        stock: 10,
        img: macbookPro,
    },
    {
        id: 4,
        name: "IPad 9na Generacion",
        category: "tablets",
        description: "Tablet de 12 pulgadas con pantalla Retina y 256GB de almacenamiento.",
        price: 799.99,
        stock: 20,
        img: ipad9,
    },
    {
        id: 5,
        name: "IPhone 14",
        category: "celulares",
        description: "Smartphone con cámara de 48MP y batería de larga duración.",
        price: 699.99,
        stock: 30,
        img: iphone14,
    },
    {
        id: 6,
        name: "Macbook Air",
        category: "notebooks",
        description: "Ultrabook ligera con procesador AMD Ryzen 7, 16GB RAM y 1TB SSD.",
        price: 1299.99,
        stock: 12,
        img: macbookAir,
    },
    {
        id: 7,
        name: "IPhone 15",
        category: "celulares",
        description: "Smartphone de última generación con pantalla AMOLED y 128GB de almacenamiento.",
        price: 899.99,
        stock: 15,
        img: iphone15,
    },
    {
        id: 8,
        name: "Macbook Air Pro",
        category: "notebooks",
        description: "Ultrabook ligera con procesador AMD Ryzen 7, 32GB RAM y 1TB SSD.",
        price: 1499.99,
        stock: 20,
        img: macbookAirPro,
    },
    {
        id: 9,
        name: "IPad 10ma Generacion",
        category: "tablets",
        description: "Tablet de 8 pulgadas con pantalla Retina y 128GB de almacenamiento.",
        price: 599.99,
        stock: 14,
        img: ipad10,
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}