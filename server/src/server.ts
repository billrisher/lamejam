import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Logger from './lib/logger';
import mongoose from 'mongoose';

import { Port, AtlasURI } from './config/server.config';
import nounRouter from './routes/api/noun';

dotenv.config();

const api = express();

mongoose.connect(AtlasURI, () => {
    Logger.debug(`Connected to database`);
})

api.use(cors());

api.use("/api/noun", nounRouter);

api.listen(Port, () => {
    Logger.debug(`Listening @ http://localhost:${Port}`);
});

export {api};