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

// export default interface IPage {
// 	id: number;
// 	pageContent: {
// 		metaData: string;
// 		title: string;
// 		header: string;
// 		nav: string;
// 		main: string;
// 		footer: string;
// 	};
// 	url: string;
// }
