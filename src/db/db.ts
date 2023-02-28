import ILoginCredentials from "../models/ILoginCredentials";
import IPage from "../models/IPage";

export const pagesDb: IPage[] = [
	{
		id: 0,
		url: `/`,
		metaDescription: "Navbar",
		title: `Welcome`,
		pageContent: "",
		parts: {
			header: `<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="loginSuccess">Login Success</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                <a href="/login" class="btn btn-outline-success" id="adminPanelBtn" type="button">Login</a>
            </div>
        </div>
    </nav>
    <main id="pageContent" class="container">`,
			footer: `
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
            crossorigin="anonymous"></script>
    </main>
</body>

</html>`,
		},
	},
	{
		id: 1,
		title: "Home",
		metaDescription: `homepage`,
		pageContent: ``,
		url: "home",
	},
	{
		id: 2,
		title: "Login",
		metaDescription: `loginPage`,
		pageContent: `<main id="pageContent" class="container">
    <form action="/cPanel" method="post" id="form">
        <div class="mb-3">
            <label for="username" class="form-label">User name</label>
            <input type="text" class="form-control" id="userNameField" name="username" aria-describedby="textHelp"
                minlength="3" pattern="[\w\d]{3,}" placeholder="Min. length 3. Letters and numbers only" required>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="passwordField" name="password"
                pattern="[\w\d!@#$%^&*_&.-]{4,}" minlength="4"
                placeholder="Min. length 4. Letters, numbers and special chars only" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>`,
		url: "login",
	},
	{
		id: 3,
		metaDescription: "Sucessfully logged in",
		pageContent: `<h1>Login Succesfullly</h1>`,
		title: "<h1>Sucessfully logged in<h1>",
		url: "loginSuccess",
	},
];

export const userLoginCredentials: ILoginCredentials[] = [
	{
		username: "Mitko",
		password: "1234",
	},
];

export const authenticatedUsers: ILoginCredentials[] = [];
