import { db } from "../db.mjs";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function handleGetUser(req, res) {
	const users = await db.user.findMany();

	res.json({ users });
}
