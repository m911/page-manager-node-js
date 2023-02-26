export default interface IRenderer {
	options: {
		url?: string;
		pageContent?: Buffer | string | Buffer[];
		pageId?: number;
	};
}
