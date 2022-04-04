import React from "react";

export default function MainCard({ name, color, url, id }) {
	return (
		<section className={`main-card bg-${name.toLowerCase()} bg-gradient-${name}`}>
			<a href={`/encyclopedia/${name}`}>
				<img className="main-icon" src={url} alt={name} />
			</a>
		</section>
	);
}
