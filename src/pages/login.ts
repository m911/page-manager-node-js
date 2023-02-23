import ILoginCredentials from "../models/loginCredentials";
// import { request } from "express";
import http, { request } from "http";

// import { HTTP } from "../service/HttpServices.mjs";
const userNameField = document.getElementById("userNameField")!;
const passwordField = document.getElementById("passwordField")!;

// function handleLogin(ev) {
// 	console.log("button clicked");
// 	ev.preventDefault();
// }

userNameField.addEventListener("change", (ev) => fieldUpdate(ev));
passwordField.addEventListener("change", (ev) => fieldUpdate(ev));

const formFields: any = {
	username: "",
	password: "",
};

function fieldUpdate(event: any): void {
	const ev = event.target;
	let field = formFields[ev.name];
	field = ev.value;
	console.log(field);
}
function handleLogin(ev: any) {
	console.log("button clicked");
	ev.preventDefault();
	const options = {
		hostname: "www.google.com",
		port: 80,
		path: "/upload",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Content-Length": Buffer.byteLength(JSON.stringify(formFields)),
		},
	};

	const req = http.request(options, (res) => {
		console.log(`STATUS: ${res.statusCode}`);
		console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
		res.setEncoding("utf8");
		res.on("data", (chunk) => {
			console.log(`BODY: ${chunk}`);
		});
		res.on("end", () => {
			console.log("No more data in response.");
		});
	});

	req.on("error", (e) => {
		console.error(`problem with request: ${e.message}`);
	});

	// Write data to request body
	req.write(JSON.stringify(formFields));
	req.end();
}
