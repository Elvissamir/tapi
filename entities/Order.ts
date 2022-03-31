import Item from "./Item"
import OrderCustomer from "./OrderCustomer"
import PaymentDetails from "./PaymentDetails"

export default interface Order {
    id: string | number 
    customer: OrderCustomer
    dateCreated: Date
    dateFullfilled: Date
    status: string
    shipTo: string 
    paymentDetails: PaymentDetails 
    items: Item[]
}