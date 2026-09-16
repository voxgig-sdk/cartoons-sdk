# Cartoons SDK feature factory

from cartoons_sdk.feature.base_feature import CartoonsBaseFeature
from cartoons_sdk.feature.ratelimit_feature import CartoonsRatelimitFeature
from cartoons_sdk.feature.retry_feature import CartoonsRetryFeature
from cartoons_sdk.feature.test_feature import CartoonsTestFeature
from cartoons_sdk.feature.timeout_feature import CartoonsTimeoutFeature


_FEATURES = {
    "base": lambda: CartoonsBaseFeature(),
    "ratelimit": lambda: CartoonsRatelimitFeature(),
    "retry": lambda: CartoonsRetryFeature(),
    "test": lambda: CartoonsTestFeature(),
    "timeout": lambda: CartoonsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
