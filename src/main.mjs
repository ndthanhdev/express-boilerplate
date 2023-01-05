import "dotenv/config";

import { logger } from "./utils/logger.mjs";
import { app } from "./app.mjs";

const port = process.env.PORT || 3000;

app.listen(port, () => {
	logger.log(`Server is running on port at http://localhost:${port}`);

	logger.log(
		`Swagger UI is running on port at http://localhost:${port}/api-docs`,
	);
});
