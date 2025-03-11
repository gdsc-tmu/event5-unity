import React from "react";
import "./App.css";

async function fetchAllDocuments(url) {
	const response = await fetch(url);
	const data = await response.json();

	return data;
}

function App() {
	const url =
		"https://script.google.com/macros/s/AKfycbyQPUXmckxPOROCSwAZzLHq8xcD8ZHfZQq2UUF6IL3mej1ihBPq3v4Q_Pby6XSPy_5nyQ/exec";
	const [documents, setDocuments] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			const data = await fetchAllDocuments(url);

			setDocuments(data);
		};

		fetchData();
	}, []);

	return (
		<div>
			<div>Unity勉強会サポートページ</div>
			<div>
				{documents.map((document, index) => {
					return <div key={index}>{document.title}</div>;
				})}
			</div>
		</div>
	);
}

export default App;
