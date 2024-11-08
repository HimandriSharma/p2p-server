import { Request, Response } from "express";

export function message(req: Request, res: Response) {
  console.log(req.body)
  console.log(`${req.body.from}:${req.body.message}`);
  res.json({ message: "success" });
}
