import React from "react";

export const Pagination = ({ postsPerPage, totalPosts, paginate, namePage }) => {
	const pageNumbers = [];

	for (var i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div>
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<li key={number} className="page-item">
						<button onClick={() => paginate(number)} className={`page-link page-link-bg-${namePage}`}>
							{number}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
