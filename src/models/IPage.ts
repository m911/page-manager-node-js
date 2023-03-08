export default interface IPage {
	id: number;
	title: string;
	metaDescription: string;
	pageContent: string;
	url: string;
	[Symbol.iterator](): any;
}
