import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import mainData from "./MainData";
import MainCard from "./components/Main/MainCard";
import Encyclopedia from "./components/Encyclopedia/Encyclopedia";

function App() {
	const [data] = useState(mainData);

	return (
		<div className="page-content">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div>
								<Header />
								<main className="main-page">
									<div className="main-wrapper">
										{data.map((mainInfo) => {
											return <MainCard key={mainInfo.id} {...mainInfo} />;
										})}
									</div>
								</main>
								<Footer />
							</div>
						}
					/>
					<Route path="/encyclopedia/:encyclopediaPage" element={<Encyclopedia data={data} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
