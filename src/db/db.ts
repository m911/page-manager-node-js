import ILoginCredentials from "../models/ILoginCredentials";
import IPage from "../models/IPage";

export const pagesDb: IPage[] = [
	{
		id: 0,
		metaData: "Navbar",
		pageContent: "",
		parts: {
			first: `<!DOCTYPE html>
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
			second: `
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
            crossorigin="anonymous"></script>
    </main>
</body>

</html>`,
		},
		title: `Welcome`,
		url: `/`,
	},
	{
		id: 1,
		title: "Home",
		metaData: `homepage`,
		pageContent: ``,
		url: "home",
	},
	{
		id: 2,
		title: "Login",
		metaData: `loginPage`,
		pageContent: `<form>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">User name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword">
    </div>
    <button type="button" onclick="handleLogin()" class="btn btn-primary">Submit</button>
    </form>`,
		url: "login",
	},
	{
		id: 3,
		metaData: "Sucessfully logged in",
		pageContent: `<h1>Login Succesfullly</h1>`,
		title: "Sucessfully logged in",
		url: "loginSuccess",
	},
	{
		id: 4,
		metaData: "404 page",
		pageContent: `<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap 5 404 Error Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>


<body>
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 fw-bold">404</h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
            <p class="lead">
                The page you’re looking for doesn’t exist.
            </p>
            <a href="/" class="btn btn-primary">Go Home</a>
        </div>
    </div>
</body>


</html>`,
		title: "404",
		url: "404",
	},
];

export const userLoginCredentials: ILoginCredentials[] = [
	{
		username: "Mitko",
		password: "1234",
	},
];

export const authenticatedUsers: ILoginCredentials[] = [];
