import dotenv from "dotenv";

export const CONFIG = {
	PORT: 3000,
	ROOT_PATH: "./src",
	BASE_URL: "http://localhost:3000",
	dotEnvConfig: () => dotenv.config(),
};
