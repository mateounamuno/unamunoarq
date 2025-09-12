import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/assets/img/favicon-new.ico?v=4" />
					<link rel="shortcut icon" href="/assets/img/favicon-new.ico?v=4" />
					<meta name="theme-color" content="#000000" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}


