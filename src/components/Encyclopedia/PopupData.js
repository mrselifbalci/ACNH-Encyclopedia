import React from "react";

export default function PopupData({ currentCard, namePage }) {
	if (namePage === "bugs") {
		return (
			<div className="data-container">
				<p className="data-title">Price:</p>
				<p className="data-paragraph">$ {currentCard.price}</p>
				<p className="data-title">Price Flick:</p>
				<p className="data-paragraph">$ {currentCard["price-flick"]}</p>
				<p className="data-title">Location:</p>
				<p className="data-paragraph">{currentCard.availability.location}</p>
				<p className="data-title">Rarity:</p>
				<p className="data-paragraph">{currentCard.availability.rarity}</p>
				<p className="data-title">Month:</p>
				<p className="data-paragraph">
					{currentCard.availability["month-northern"] === "" ? "All year" : currentCard.availability["month-northern"]}
				</p>
				<p className="data-title">Time:</p>
				<p className="data-paragraph">
					{currentCard.availability.time === "" ? "All day" : currentCard.availability.time}
				</p>
				<p className="data-title">Catch phrase:</p>
				<p className="data-paragraph">{currentCard["catch-phrase"]}</p>
			</div>
		);
	} else if (namePage === "fish") {
		return (
			<div className="data-container">
				<p className="data-title">Price:</p>
				<p className="data-paragraph">$ {currentCard.price}</p>
				<p className="data-title">Price CJ:</p>
				<p className="data-paragraph">$ {currentCard["price-cj"]}</p>
				<p className="data-title">Shadow:</p>
				<p className="data-paragraph">{currentCard.shadow}</p>
				<p className="data-title">Location:</p>
				<p className="data-paragraph">{currentCard.availability.location}</p>
				<p className="data-title">Rarity:</p>
				<p className="data-paragraph">{currentCard.availability.rarity}</p>
				<p className="data-title">Month:</p>
				<p className="data-paragraph">
					{currentCard.availability["month-northern"] === "" ? "All year" : currentCard.availability["month-northern"]}
				</p>
				<p className="data-title">Time:</p>
				<p className="data-paragraph">
					{currentCard.availability.time === "" ? "All day" : currentCard.availability.time}
				</p>
				<p className="data-title">Catch phrase:</p>
				<p className="data-paragraph">{currentCard["catch-phrase"]}</p>
			</div>
		);
	} else if (namePage === "sea") {
		return (
			<div className="data-container">
				<p className="data-title">Price:</p>
				<p className="data-paragraph">$ {currentCard.price}</p>
				<p className="data-title">Shadow:</p>
				<p className="data-paragraph">{currentCard.shadow}</p>
				<p className="data-title">Speed:</p>
				<p className="data-paragraph">{currentCard.speed}</p>
				<p className="data-title">Month:</p>
				<p className="data-paragraph">
					{currentCard.availability["month-northern"] === "" ? "All year" : currentCard.availability["month-northern"]}
				</p>
				<p className="data-title">Time:</p>
				<p className="data-paragraph">
					{currentCard.availability.time === "" ? "All day" : currentCard.availability.time}
				</p>
				<p className="data-title">Catch phrase:</p>
				<p className="data-paragraph">{currentCard["catch-phrase"]}</p>
			</div>
		);
	} else if (namePage === "fossils") {
		return (
			<div className="data-container">
				<p className="data-title">Price:</p>
				<p className="data-paragraph">$ {currentCard.price}</p>
				<p className="data-title">Part of:</p>
				<p className="data-paragraph">
					{currentCard["part-of"].charAt(0).toUpperCase() + currentCard["part-of"].slice(1)}
				</p>
				<p className="data-title">Museum phrase:</p>
				<p className="data-paragraph">{currentCard["museum-phrase"]}</p>
			</div>
		);
	}
}
