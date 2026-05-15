# ProjectName SDK exists test

import pytest
from cartoons_sdk import CartoonsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CartoonsSDK.test(None, None)
        assert testsdk is not None
