import dotenv from "dotenv";

export const CONFIG = {
	dotEnvConfig: () => dotenv.config(),
	ROOT_PATH: "./src",
};
