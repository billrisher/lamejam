import { Router, Response } from "express";
import { nounGet } from "../../controllers/nounController";

const nounRouter: Router = Router();

nounRouter.get("/", nounGet);

export default nounRouter;