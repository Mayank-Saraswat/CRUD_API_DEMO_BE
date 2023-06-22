const {getDatase, postDatase, putDatase, deleteDatase} = require('../services/crud');

const getDataco = async (req, res)=>{
    try{
        const result = await getDatase();
        console.log(req.query);
        res.send({
            status : '0', 
            message: 'successful', 
            result: result
        })
    }catch(error){
        res.send({
            status : '-1', 
            message: 'Something went wrong', 
            result: error
        })
    }
}

const postDataco = async (req, res)=>{
    try{
        console.log("Data", req.body);
        const result = await postDatase(req.body);
        res.send({
            status : '0', 
            message: 'successful', 
            result: result
        })
    }catch(error){
        res.send({
            status : '-1', 
            message: 'Something went wrong', 
            result: error.message
        })
    }
}

const putDataco = async (req, res)=>{
    try{
        console.log("Data", req.body);
        const Id = req.params.ID;
        console.log('Id:', Id)
        const result = await putDatase(Id, req.body);
        res.send({
            status : '0', 
            message: 'successful', 
            result: result
        })
    }catch(error){
        res.send({
            status : '-1', 
            message: 'Something went wrong', 
            result: error.message
        })
    }
}

const deleteDataco = async (req, res)=>{
    try{
        const Id = req.params.ID;
        console.log('Id:', Id)
        const result = await deleteDatase(Id);
        res.send({
            status : '0', 
            message: 'successful', 
            result: result
        })
    }catch(error){
        res.send({
            status : '-1', 
            message: 'Something went wrong', 
            result: error.message
        })
    }
}

module.exports = {
    getDataco,
    postDataco,
    putDataco,
    deleteDataco
};