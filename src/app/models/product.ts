export interface Product {
    name: string,
    description: string,
    imageUrl: string,
    categories: string[],
    prix: number,
    created_at: Date,
    updated_at?: Date,
}
