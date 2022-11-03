export const products = [
    {
        id: 1,
        title:'Mesa de luz',
        price:7000,
        stock:8,
        category:'Dormitorio',
        img:'data:image/jpeg;base64,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',
    },

    {
        id: 2,
        title:'Mesada',
        price:20000,
        stock:5,
        category:'Cocina',
        img:'https://www.biglieri.com.ar/media//post-paula-2-03.jpg',
    },

    {
        id: 3,
        title:'Escritorio',
        price:30000,
        stock:3,
        category:'Oficina',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafNeitBn_gpSr81M2UsYDJC60PYAXbFBeSQ&usqp=CAU',
    },
]

export const getProducts = (categoryName) => {
    return new Promise ((res, rej) =>{
        const prodFiltrados = products.filter(
            (prod) => prod.category === categoryName
        );
        const ref = categoryName ? prodFiltrados : products;
        setTimeout (()=>{
            res(ref);
        }, 500);
    });
};

export const getProduct = (idProd) => {
    return new Promise ((res, rej) =>{
        const product = products.find((prod) => prod.id === +idProd);
        setTimeout (()=>{
            res(product);
        }, 2000);
    });
};