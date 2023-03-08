export default interface IRenderer {
	url?: string;
	pageContent?: Buffer | string | Buffer[];
	pageId?: number;
}
