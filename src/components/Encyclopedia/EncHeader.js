import React from "react";

export default function EncHeader({ namePage }) {
	return (
		<div>
			<header className={`bg-${namePage.toLowerCase()}`}>
				<div className="header-wrapper">
					<div className="header-home-path">
						<a href="/">
							<img className="home-icon" src="https://svgshare.com/i/fPq.svg" alt="Home" />
						</a>
					</div>
					<a href="/" className="brand-name">
						{`Nook'Pedia - ${
							namePage === "sea" ? "Sea Creatures" : namePage.charAt(0).toUpperCase() + namePage.slice(1)
						}`}
					</a>
					<div className="header-paths">
						<a href="/encyclopedia/bugs">
							<img
								className={namePage === "bugs" ? "inactive" : "header-icon"}
								src="https://svgshare.com/i/fRb.svg"
								alt="Bugs"
							/>
						</a>
						<a href="/encyclopedia/fish">
							<img
								className={namePage === "fish" ? "inactive" : "header-icon"}
								src="https://svgshare.com/i/fRP.svg"
								alt="Fish"
							/>
						</a>
						<a href="/encyclopedia/sea">
							<img
								className={namePage === "sea" ? "inactive" : "header-icon"}
								src="https://svgshare.com/i/fRu.svg"
								alt="Sea"
							/>
						</a>
						<a href="/encyclopedia/fossils">
							<img
								className={namePage === "fossils" ? "inactive" : "header-icon"}
								src="https://svgshare.com/i/fQC.svg"
								alt="Fossils"
							/>
						</a>
					</div>
				</div>
			</header>
		</div>
	);
}
