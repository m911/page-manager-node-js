export default interface IPage {
	id: number;
	title: string;
	metaData: string;
	pageContent: string;
	url: string;
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