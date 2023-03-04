export default interface IPage {
	id: number;
	url: string;
	metaDescription: string;
	title: string;
	header?: string;
	pageContent: string;
	footer?: string;
}
