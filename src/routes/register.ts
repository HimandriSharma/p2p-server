import type { Request, Response } from "express";
import { addNode } from "../servers";
export function register(req: Request, res: Response) {
  const { user, uri } = req.body;
  addNode({
    uri,
    user,
  });
  res.json({ message: "success" });
}
