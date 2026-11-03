import { CartoonEntity } from './entity/CartoonEntity';
export type * from './CartoonsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CartoonsEntityBase } from './CartoonsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class CartoonsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Cartoon(entopts?: Record<string, any>): CartoonEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CartoonsSDK;
    tester(testopts?: any, sdkopts?: any): CartoonsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CartoonsSDK;
export { stdutil, config, BaseFeature, CartoonsEntityBase, CartoonsSDK, SDK, };
export type { DirectResult };
