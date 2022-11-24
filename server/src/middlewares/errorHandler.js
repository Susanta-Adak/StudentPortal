const errorHandler = (err, req, res, next) =>{
    if(err.message == "notFound"){
        return res.status(400).json({message: "Not found"});
    }
    if(err.name === 'UnauthorizedError'){
        return res.status(401).json({ message: 'Invalid Token' });
    }
    return res.status(500).json({ message: err.message });
}

export default errorHandler;