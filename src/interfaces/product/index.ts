interface Image {
    id: string 
    filename: string 
    filepath: string 
    mimetype: string
    size: bigint
}

interface IProductCreate {
    name: string 
    description: string 
    price: number 
    image: Image[]
}

interface IProduct {
    id: string
    name: string 
    description: string 
    price: number 
    image: Image[]
}