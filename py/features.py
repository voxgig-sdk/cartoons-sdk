# Cartoons SDK feature factory

from feature.base_feature import CartoonsBaseFeature
from feature.test_feature import CartoonsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CartoonsBaseFeature(),
        "test": lambda: CartoonsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
