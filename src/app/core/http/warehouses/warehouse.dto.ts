export interface WarehouseResponse {
    id: number;
    color: Color;
    size: Size;
    price: number;
    quantity: number;
}
export interface WarehouseCreatedResponse {
    
}
export interface WarehouseCreateRequest {
    color: Color,
    size: Size,
    price: number,
    quantity: number
}

export interface WarehouseUpdateRequest {
    price: number,
    quantity: number
}

export enum Color {
    Red = 0,
    Green = 1,
    Yellow = 2,
    Black = 3,
}
export enum Size {
    XSmall = 0,
    Small = 1,
    Medium = 2,
    Large = 3,
    XLarge = 4
}