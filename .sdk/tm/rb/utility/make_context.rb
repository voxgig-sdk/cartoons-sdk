# Cartoons SDK utility: make_context
require_relative '../core/context'
module CartoonsUtilities
  MakeContext = ->(ctxmap, basectx) {
    CartoonsContext.new(ctxmap, basectx)
  }
end
