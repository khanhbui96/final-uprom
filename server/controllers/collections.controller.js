const Collections = require('../models/Collections.model');
module.exports.add = async (req, res)=>{
    try{
        const data = new Collections({
            ...req.fields
        });
        const newCollection =  await data.save();
        res.json(newCollection)
    }catch(err){
        console.log(err)
    }
};
module.exports.getAll = async (req, res)=>{
    try{
        const collections = await Collections.find();
        res.json(collections);
    }catch(err){
        console.log(err)
    }
};
module.exports.deleteById = async (req, res)=>{
    try{
        const collection = await Collections.findById(req.params.id);
        await collection.remove()
        await res.json(collection);
    }catch(err){
        console.log(err)
    }
};
module.exports.updateById = async (req, res)=>{
    try{
        await Collections.findOneAndUpdate({_id: req.params.id}, {...req.fields});
        const collection = await Collections.findById(req.params.id)
        await res.json(collection);
    }catch(err){
        console.log(err)
    }
};
module.exports.filterByMonth = async (req, res)=>{
    try{
        const collections = await Collections.find();
        const newCollections = collections.filter(collection=>{
            return collection.time.slice(3, 5) == req.params.month
        })
        await res.json(newCollections);
    }catch(err){
        console.log(err)
    }
};
module.exports.filterByKey = async (req, res)=>{
    try{
        const collections = await Collections.find();
        const newCollections = collections.filter(collection=>{
            return collection.person.indexOf(req.params.key) !== -1
        })
        await res.json(newCollections);
    }catch(err){
        console.log(err)
    }
};
