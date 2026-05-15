
import { Context } from './Context'


class CartoonsError extends Error {

  isCartoonsError = true

  sdk = 'Cartoons'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CartoonsError
}

