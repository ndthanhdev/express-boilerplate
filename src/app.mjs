import Express from "express";
import expressJSDocSwagger from "express-jsdoc-swagger";

import { loggerMiddleware } from "./middlewares/logger.middleware.mjs";

const app = Express();

app.use(loggerMiddleware);
app.use(Express.json());

/**
 * @type {import("swagger-jsdoc").Options}
 */
const options = {
	info: {
		version: "1.0.0",
		title: "Library de Thanh",
		license: {
			name: "MIT",
		},
	},
	security: {
		BasicAuth: {
			type: "http",
			scheme: "basic",
		},
	},
	// Base directory which we use to locate your JSDOC files
	baseDir: "./",
	// Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
	filesPattern: "./**/*.js",
	// URL where SwaggerUI will be rendered
	swaggerUIPath: "/api-docs",
	// Expose OpenAPI UI
	exposeSwaggerUI: true,
	// Expose Open API JSON Docs documentation in `apiDocsPath` path.
	exposeApiDocs: false,
	// Open API JSON Docs endpoint.
	apiDocsPath: "/v3/api-docs",
	// Set non-required fields as nullable by default
	notRequiredAsNullable: false,
	// You can customize your UI options.
	// you can extend swagger-ui-express config. You can checkout an example of this
	// in the `example/configuration/swaggerOptions.js`
	swaggerUiOptions: {},
	// multiple option in case you want more that one instance
	multiple: true,
	// servers: ["http://localhost:4000"],
};

expressJSDocSwagger(app)(options);

export { app };
