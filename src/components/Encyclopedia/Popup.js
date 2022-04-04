import React from "react";

const Popup = ({ handleClose, namePage, posts, currentCard }) => {
	return (
		<div className="popup-box">
			<div className="box">
				<span className="close-icon" onClick={handleClose}>
					x
				</span>
				<div className="popup-container">
					<div className={`popup-img-container border-${namePage}`}>
						<img className="popup-img" src={currentCard.image_uri} alt={namePage} />
					</div>
					<div className="info-container">
						<div className="info-title">
							<img
								className="entry-icon"
								src={namePage === "fossils" ? currentCard.image_uri : currentCard.icon_uri}
								alt={namePage}
							/>
							<div className="rotate">
								<p>
									<span className="popup-name">
										{currentCard.name["name-USen"].charAt(0).toUpperCase() + currentCard.name["name-USen"].slice(1)}
									</span>
								</p>
							</div>
							<img
								className="entry-icon"
								src={namePage === "fossils" ? currentCard.image_uri : currentCard.icon_uri}
								alt={namePage}
							/>
						</div>
						<div className="data-container">
							<p className="data-title">Price:</p>
							<p className="data-paragraph">{currentCard.price}</p>
							<p className="data-title">Shadow:</p>
							<p className="data-paragraph">{currentCard.shadow}</p>
							<p className="data-title">Speed:</p>
							<p className="data-paragraph">{currentCard.speed}</p>
							<p className="data-title">Month:</p>
							<p></p>
							<p></p>
							<p></p>
							<p className="data-title">Time:</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popup;
