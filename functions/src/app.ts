import * as functions from "firebase-functions";
import * as express from "express";

const expressApp = express();

expressApp.get("/", async (req, res) => {
  try {
    return res.status(200).send("/");
  } catch (e) {
    return Promise.reject(e);
  }
});

expressApp.get("/api", async (req, res) => {
  try {
    return res.status(200).send("/api");
  } catch (e) {
    return Promise.reject(e);
  }
});

expressApp.get("/*", async (req, res) => {
  try {
    return res.status(200).send("OK");
  } catch (e) {
    return Promise.reject(e);
  }
});

export const app = functions.https.onRequest(expressApp);
