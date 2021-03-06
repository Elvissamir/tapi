import Category from "./Category"

export default interface Product {
    id: string | number
    name: string 
    price: number
    imageUrl: string
    stock: number
    dateAdded: Date
    available: boolean
    discount: number
    description: string
    categoryIds: Category[]
}