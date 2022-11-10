import express from "express";
import { db, records } from "../data/index.js";

const router = express.Router();

export const getRecords = (req, res) => {
  console.log("get records");
  res.send(records);
};

export const addRecord = async (req, res) => {
  records.push(req.body);
  await db.write();
  res.send(records);
};

export const updateRecord = async (req, res, next) => {
  try {
    const idFromParams = req.params.id;
    const { id, title, artist, year, cover, price } = req.body;
    const elementForUpdate = records.find(
      (ele) => ele.id === Number(idFromParams)
    );
    //some code for changing part of data
    elementForUpdate.id = id;
    elementForUpdate.title = title;
    elementForUpdate.artist = artist;
    elementForUpdate.year = year;
    elementForUpdate.cover = cover;
    elementForUpdate.price = price;
    await db.write();
    res.send(records);
  } catch (err) {
    next(err);
  }
};

export const deleteRecord = async (req, res, next) => {
  try {
    const id = req.params.id;
    for (let [index, value] of records.entries()) {
      if (value.id === Number(id)) {
        records.splice(index, 1);
        break;
      }
    }
    await db.write();
    res.send(records);
  } catch (err) {
    next(err);
  }
};

export const getOneRecord = async (req, res, next) => {
  try {
    const id = req.params.id;
    const selectedRecord = records.find((ele) => ele.id === Number(id));
    res.send(selectedRecord);
  } catch (err) {
    next(err);
  }
};
