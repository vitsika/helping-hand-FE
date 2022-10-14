export interface Product {
    _id: string,
    name: string,
    description: string,
    imageUrl: string[],
    category: string[],
    regular_price: number,
    created_at: Date,
    updated_at?: Date,
}
