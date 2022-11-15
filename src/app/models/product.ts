export interface Product {
    name: string,
    description: string,
    imageUrl: string[],
    category: string[],
    euro_price: number,
    ariary_price: number,
    created_at: string,
    updated_at?: string,
}
