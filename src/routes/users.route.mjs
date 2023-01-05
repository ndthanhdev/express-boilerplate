import { Router } from "express";

const usersRoute = Router();

usersRoute.get("/", (req, res) => {
	res.send("Hello World!");
});

export { usersRoute };
