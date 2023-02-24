import dotenv from "dotenv";

export const CONFIG = {
	BASE_URL: "http://localhost:3000",
	dotEnvConfig: () => dotenv.config(),
	ROOT_PATH: `./src`,
	TOKEN_SECRET:
		"ksjfhsdfbdsfkjsdfbhsdlkhfkugh%^%$hgasdklfdkslfsdkjfgjh23t762423ug432jg423j",

	EXPIRESIN: "8h",
};
