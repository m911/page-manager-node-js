export default interface IPage {
	id: number;
	url: string;
	metaDescription: string;
	title: string;
	// style?: string;
	pageContent: string;
	parts?: {
		header: string;
		footer: string;
	};
}
