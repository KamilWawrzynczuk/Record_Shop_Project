import express from "express";
import {
  getRecords,
  addRecord,
  updateRecord,
  deleteRecord,
  getOneRecord,
} from "../controllers/recordControllers.js";
import cors from "cors";

import { corsOptions } from "../middleware/security.js";
import { validateARecord } from "../middleware/recordValidation.js";

const router = express.Router();

router
  .route("/records", cors(corsOptions))
  .get(getRecords)
  .post(validateARecord, addRecord);

router
  .route("/records/:id", cors(corsOptions))
  .get(getOneRecord)
  .put(updateRecord)
  .delete(deleteRecord);

export default router;
