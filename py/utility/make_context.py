# Cartoons SDK utility: make_context

from core.context import CartoonsContext


def make_context_util(ctxmap, basectx):
    return CartoonsContext(ctxmap, basectx)
