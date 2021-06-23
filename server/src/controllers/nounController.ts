import Noun from "../models/Noun";
import { Request, Response } from "express";

export const nounGet = async (req: Request, res: Response) => {
    res.json(await Noun.find({}));
}