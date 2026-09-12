import { CartoonsEntityBase } from '../CartoonsEntityBase';
import type { CartoonsSDK } from '../CartoonsSDK';
import type { Control } from '../types';
import type { Cartoon, CartoonListMatch } from '../CartoonsTypes';
declare class CartoonEntity extends CartoonsEntityBase<Cartoon> {
    constructor(client: CartoonsSDK, entopts: any);
    make(this: CartoonEntity): CartoonEntity;
    list(this: any, reqmatch?: CartoonListMatch, ctrl?: Control): Promise<CartoonEntity[]>;
}
export { CartoonEntity };
