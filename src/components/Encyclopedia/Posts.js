import React, { useState } from "react";
import Popup from "./Popup";

export const Posts = ({ namePage, posts, loading, searchTerm, addToFavourites }) => {
	// Pop up

	const [isOpen, setIsOpen] = useState(false);
	const [currentCard, setCurrentCard] = useState("");

	const togglePopup = (card) => {
		setIsOpen(!isOpen);
		setCurrentCard(card);
	};

	if (loading) {
		return (
			<div className="loading">
				<h2>Loading...</h2>
			</div>
		);
	}
	return (
		<div className="items-container">
			{posts
				.filter((val) => {
					if (searchTerm === "") {
						return val;
					} else if (val.name["name-USen"].toLowerCase().trim().includes(searchTerm.toLowerCase().trim())) {
						return val;
					} else;
				})
				.map((post) => {
					return (
						<div className={`encyclopedia-entry border-${namePage} bg-gradient-${namePage}`} key={post["file-name"]}>
							<img
								className="entry-icon"
								src={namePage === "fossils" ? post.image_uri : post.icon_uri}
								alt={namePage}
							/>
							<p>{post.name["name-USen"].charAt(0).toUpperCase() + post.name["name-USen"].slice(1)}</p>
							<div className="price-container">
								<button
									onClick={() => togglePopup(post)}
									className={`price-btn ${post.name["name-USen"].replace(/\s+/g, "-").toLowerCase()}`}
								>
									$ {post.price}
								</button>
							</div>
							<button onClick={() => addToFavourites(post)} className="fav-btn">
								&#9733;
							</button>
						</div>
					);
				})}
			{isOpen && <Popup handleClose={togglePopup} namePage={namePage} posts={posts} currentCard={currentCard} />}
		</div>
	);
};
