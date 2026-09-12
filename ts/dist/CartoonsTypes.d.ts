export interface Cartoon {
    creator?: any[];
    episodes?: number;
    genre?: any[];
    id?: number;
    image?: string;
    rating?: string;
    runtime_in_minutes?: number;
    title?: string;
    year?: number;
}
export interface CartoonListMatch {
    creator?: any[];
    episodes?: number;
    genre?: any[];
    id?: number;
    image?: string;
    rating?: string;
    runtime_in_minutes?: number;
    title?: string;
    year?: number;
    $action?: string;
    [action: string]: any;
}
