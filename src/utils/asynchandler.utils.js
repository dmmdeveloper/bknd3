export const asyncHandler = (fnx) =>{
    return ( req , res , next  ) =>{
        Promise.resolve( fnx(req , res,next))
        .catch( (err) => next(err))
    }
}