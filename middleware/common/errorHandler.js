const createError= require('http-errors')
function notFoundHandler (req,res,next){
    next(createError(404,"error was not found at this time!"))
}

function errorHandler(err,req,res,next){
    res.locals.error = process.env.NODE_ENV ==="development"?err:err.message

    if(res.locals.html){
        res.render('error',{
            title:'error page'
        })
    }else{
        res.json({
            message:err
        })
    }

}

module.exports= {
    notFoundHandler,
    errorHandler

}