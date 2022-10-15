export interface Product {
    _id: string,
    name: string,
    description: string,
    imageUrl: string[],
    category: string[],
    euro_price: number,
    ariary_price: number,
    created_at: Date,
    updated_at?: Date,
}
