import React from "react";
import "./App.css";
import tulipeNoBg from "./assets/tulipe_no_bg.svg";

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<div className="logo-container">
					<img src={tulipeNoBg} alt="Logo" className="logo" />
					<div className="text-container">
						<h1>B&BY .</h1>
						<p>Coming soon</p>
					</div>
				</div>
			</header>
		</div>
	);
};

export default App;
