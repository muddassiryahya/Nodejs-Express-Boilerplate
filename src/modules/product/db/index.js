import Model from "../models/index.js";

const getAll = async () => await Model.find();

const getAllPopulated = async (key) => await Model.find().populate({
    path: 'category'
});

const getAggregate = async (query) => await Model.aggregate(query);

const addData = (data) => new Model(data).save().then((user) => user.toObject());

const deleteById = async (id) => await Model.findByIdAndDelete(id);

const updateById = async (id, data) => await Model.findByIdAndUpdate(id, data);


export {
    getAll,
    getAllPopulated,
    getAggregate,
    addData,
    deleteById,
    updateById
}