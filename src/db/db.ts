import ILoginCredentials from "../models/ILoginCredentials";
import IPage from "../models/IPage";

export const pagesDb: IPage[] = [
	{
		id: 0,
		title: "Login",
		metaDescription: `This is the login page for my website`,
		pageContent: `
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
		title: "Login success",
		url: "loginSuccess",
	},
	{
		id: 4,
		metaDescription: "Add new page form",
		pageContent: `
         
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
 
<script>tinymce.init({selector:'textarea'});</script>
        <div class="mb-3">

<form>
    <div class="mb-3">
        <label for="titleInputField" class="form-label">Title</label>
        <input type="text" class="form-control" id="titleInputField" name="title">

    </div>
    <div class="mb-3">
        <label for="metaDescriptionInputField" class="form-label">Meta Description</label>
        <input type="text" class="form-control" id="metaDescriptionInputField" name="metaDescription">

    </div>
    <div class="mb-3">
        <label for="contentInputField" class="form-label">Content</label>
        <textarea class="form-control" id="contentInputField" rows="3" name="pageContent"></textarea>
    </div>
    <div class="mb-3">
        <label for="UrlInputField" class="form-label">URL</label>
        <input type="text" class="form-control" id="UrlInputField" name="metaDescription">
    </div>
    <button type="reset" class="btn btn-primary">
        Cancel
    </button>
    <button type="submit" class="btn btn-primary">Save</button>
</form>

`,
		title: "New page form",
		url: "newpage",
	},
];

export const userLoginCredentials: ILoginCredentials[] = [
	{
		username: "Mitko",
		password: "1234",
	},
];

export const authenticatedUsers: ILoginCredentials[] = [];
