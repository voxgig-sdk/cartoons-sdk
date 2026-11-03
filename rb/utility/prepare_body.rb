# Cartoons SDK utility: prepare_body
require_relative 'media'
module CartoonsUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return CartoonsUtilities.raw_body(ctx.reqdata) if CartoonsUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
