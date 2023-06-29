const productos = [
    { nombre: "Mace Windu", precio: 50, id: "1", img: "../public/ActionFigure.png", idCat: "2" },
    { nombre: "Villain Set", precio: 35, id: "2", img: "../public/Collectibles.png", idCat: "2" },
    { nombre: "Star Wars: Hidden Empire", precio: 20, id: "3", img: "../public/Comic.png", idCat: "3" },
    { nombre: "Blue Lightsaber", precio: 200, id: "4", img: "../public/Lightsaber1.png", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}



export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}



export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}