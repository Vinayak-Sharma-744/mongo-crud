// import { db, myModel } from "../config/db";
// import * as db from "../config/db"
import  db  from "../config/db";
import myModel from "../model/models";

const create= async (obj: any) =>{
  try {
    const result = await myModel.create(obj) 
    console.log("db",result);
  } catch (error) {
    console.log(error);
  }
}


const find = async ():Promise<any> => {
  try {
    const result = await myModel.find();
    console.log(result);
    return result
  } catch (error) {
    console.error(error);
  }
};

const findOne = async (id: any) => {
  try {
    const result = await myModel.findOne(id);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const findById = async (id: any):Promise<any>  => {
  try {
    const result = await myModel.findById(id);
    console.log(result);
    return result
  } catch (error) {
    console.error(error);
  }
};



const findByIdAndDelete = async (id: any) => {
  try {
    const result = await myModel.findByIdAndDelete(id);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const findByIdAndupdate = async (id: any, update: any) => {
  try {
    const result = await myModel.findByIdAndUpdate(id, update, { new: true });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const findOneAndDelete = async (id: any) => {
  try {
    const result = await myModel.findOneAndDelete(id);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const findOneAndReplace = async (docId: any, replaceDock: any) => {
  try {
    const result = await myModel.findOneAndReplace(docId, replaceDock);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const findOneAndUpdate = async (id: any, update: any) => {
  try {
    const result = await myModel.findOneAndUpdate(id, update, { upsert: true, new: true });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const replaceOne = async (id: any, update: any) => {
  try {
    const result = await myModel.replaceOne(id, update);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateOne = async (id: any, update: any) => {
  try {
    const result = await myModel.replaceOne(id, update);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateMany = async (id: any, update: any) => {
  try {
    const result = await myModel.updateMany(id, update);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
const deleteOne = async (id: any) => {
  try {
    const result = await myModel.deleteOne(id);
    return result
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteMany = async (id: any) => {
  try {
    const result = await myModel.deleteMany(id);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Example usage

export {
  find,
  findOne,
  findById,
  findByIdAndDelete,
  findByIdAndupdate,
  findOneAndDelete,
  findOneAndReplace,
  findOneAndUpdate,
  replaceOne,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
  create
};
