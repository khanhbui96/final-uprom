const Pays = require('../models/Pays.model');
module.exports.add = async (req, res)=>{
    try{
        const data = new Pays({
            ...req.fields
        });
        const newPay =  await data.save();
        res.json(newPay)
    }catch(err){
        console.log(err)
    }
};
module.exports.getAll = async (req, res)=>{
    try{
        const pays = await Pays.find();
        res.json(pays);
    }catch(err){
        console.log(err)
    }
};
module.exports.deleteById = async (req, res)=>{
    try{
        const pay = await Pays.findById(req.params.id);
        await pay.remove()
        await res.json(pay);
    }catch(err){
        console.log(err)
    }
};
module.exports.updateById = async (req, res)=>{
    try{
        await Pays.findOneAndUpdate({_id: req.params.id}, {...req.fields});
        const pay = await Pays.findById(req.params.id)
        await res.json(pay);
    }catch(err){
        console.log(err)
    }
};
module.exports.filterByMonth = async (req, res)=>{
    try{
        const pays = await Pays.find();
        const newPays = pays.filter(pay=>{
            return pay.time.slice(3, 5) == req.params.month
        })
        await res.json(newPays);
    }catch(err){
        console.log(err)
    }
};
module.exports.filterByKey = async (req, res)=>{
    try{
        const pays = await Pays.find();
        const newPays = pays.filter(pay=>{
            return pay.person.indexOf(req.params.key) !== -1
        })
        await res.json(newPays);
    }catch(err){
        console.log(err)
    }
};
