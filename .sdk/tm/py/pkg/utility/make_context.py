# Cartoons SDK utility: make_context

from projectname_sdk.core.context import CartoonsContext


def make_context_util(ctxmap, basectx):
    return CartoonsContext(ctxmap, basectx)
