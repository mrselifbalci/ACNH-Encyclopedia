import React from "react";

export default function FavouriteItems({ namePage, favouritePosts, removeFromFavourites }) {
	return (
		<div className={`favourites-container border-${namePage}`}>
			<p>Favourites:</p>
			<div className="favourites-list">
				{favouritePosts.map((item) => (
					<div key={item["file-name"]} onClick={() => removeFromFavourites(item)}>
						{
							<div className="tooltip">
								<span className={`tooltiptext bg-${namePage}`}>
									{item.name["name-USen"].charAt(0).toUpperCase() + item.name["name-USen"].slice(1)}
								</span>
								<img
									className={`fav-icon ${item["file-name"]}`}
									src={namePage === "fossils" ? item.image_uri : item.icon_uri}
									alt={namePage}
								/>
							</div>
						}
					</div>
				))}
			</div>
		</div>
	);
}
