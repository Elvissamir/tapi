import Item from "./Item"
import PaymentDetails from "./PaymentDetails"

export default interface Order {
    id: string | number 
    customerId: string | number 
    dateCreated: Date
    dateFullfilled: Date
    status: string
    shipTo: string 
    paymentDetails: PaymentDetails 
    items: Item[]
}