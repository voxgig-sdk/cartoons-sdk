# Cartoons SDK utility: feature_add
module CartoonsUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
