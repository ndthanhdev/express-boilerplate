import { Router } from "express";
import { usersRoute } from "./users.route.mjs";

const routes = Router();

routes.use("/users", usersRoute);

export { routes };
