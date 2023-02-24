export default interface IRenderer {
	renderer(res: Response, pageContent?: string | any | undefined): any;
	renderer(res: Response, pageContent?: Buffer | any | undefined): any;
}
