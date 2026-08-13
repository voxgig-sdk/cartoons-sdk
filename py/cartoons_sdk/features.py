# Cartoons SDK feature factory

from cartoons_sdk.feature.base_feature import CartoonsBaseFeature
from cartoons_sdk.feature.test_feature import CartoonsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CartoonsBaseFeature(),
        "test": lambda: CartoonsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
