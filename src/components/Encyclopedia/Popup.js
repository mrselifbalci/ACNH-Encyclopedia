import React from "react";
import PopupData from "./PopupData";

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
								className="popup-entry-icon"
								src={namePage === "fossils" ? currentCard.image_uri : currentCard.icon_uri}
								alt={namePage}
							/>
							<p className="popup-name">
								{currentCard.name["name-USen"].charAt(0).toUpperCase() + currentCard.name["name-USen"].slice(1)}
							</p>
							<img
								className="popup-entry-icon-reversed"
								src={namePage === "fossils" ? currentCard.image_uri : currentCard.icon_uri}
								alt={namePage}
							/>
						</div>
						<PopupData currentCard={currentCard} namePage={namePage} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popup;
