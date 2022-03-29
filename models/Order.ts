export default interface Order {
    userId: string | number 
    productId: string | number
    numberOfItems: number
    total: number
    date: Date
}