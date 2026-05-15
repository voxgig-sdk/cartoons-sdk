package core

type CartoonsError struct {
	IsCartoonsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCartoonsError(code string, msg string, ctx *Context) *CartoonsError {
	return &CartoonsError{
		IsCartoonsError: true,
		Sdk:              "Cartoons",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CartoonsError) Error() string {
	return e.Msg
}
