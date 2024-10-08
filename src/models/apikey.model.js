"use strict";

const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "Apikey";
const COLLECTION_NAME = "Apikeys";

const apiKeySchema = new Schema(
  {
    key: { type: String, require: true, unique: true },
    status: { type: Boolean, default: true },
    permissions: {
      type: [String],
      require: true,
      enum: ["0000", "1111", "2222"],
      default: "0000",
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = model(DOCUMENT_NAME, apiKeySchema);
