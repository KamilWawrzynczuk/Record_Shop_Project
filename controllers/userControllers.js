import express from "express";
import { db, users } from "../data/index.js";

export const getAllUsers = (req, res) => {
  res.send(users);
};

export const getSingleUser = async (req, res, next) => {
  try {
    const name = req.params.name;
    const selectedUser = users.find((ele) => ele.name === name);
    res.send(selectedUser);
  } catch (err) {
    next(err);
  }
};

export const addUser = async (req, res) => {
  users.push(req.body);
  await db.write();
  res.send(users);
};

export const deleteUser = async (req, res, next) => {
  try {
    const email = req.params.email;
    for (let [index, value] of users.entries()) {
      if (value.email === email) {
        users.splice(index, 1);
        break;
      }
    }
    await db.write();
    res.send(users);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const emailFromParam = req.params.email;
    const { firstName, lastName, email, password } = req.body;
    const userForUpdate = users.find((ele) => ele.email === emailFromParam);
    //some code for changing part of data
    userForUpdate.firstName = firstName;
    userForUpdate.lastName = lastName;
    userForUpdate.email = email;
    userForUpdate.password = password;
    await db.write();
    res.send(users);
  } catch (err) {
    next(err);
  }
};
