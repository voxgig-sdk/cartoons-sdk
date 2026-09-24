"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartoonsError = void 0;
class CartoonsError extends Error {
    isCartoonsError = true;
    sdk = 'Cartoons';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CartoonsError = CartoonsError;
//# sourceMappingURL=CartoonsError.js.map