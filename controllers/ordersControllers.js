import express from "express";
import { db, orders } from "../data/index.js";

export const getAllOrders = (req, res) => {
  res.send(orders);
};

export const getSingleOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const selectedOrder = orders.find((ele) => ele.recordId === Number(id));
    console.log(selectedOrder);
    res.send(selectedOrder);
  } catch (err) {
    next(err);
  }
};

export const addOrder = async (req, res) => {
  orders.push(req.body);
  await db.write();
  res.send(orders);
};

export const deleteOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    for (let [index, value] of orders.entries()) {
      if (value.recordId === Number(id)) {
        orders.splice(index, 1);
        break;
      }
    }
    await db.write();
    res.send(orders);
  } catch (err) {
    next(err);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { recordId, quantity } = req.body;
    const orderForUpdate = orders.find((ele) => ele.recordId === Number(id));
    //some code for changing part of data
    orderForUpdate.recordId = recordId;
    orderForUpdate.quantity = quantity;

    await db.write();
    res.send(orders);
  } catch (err) {
    next(err);
  }
};
