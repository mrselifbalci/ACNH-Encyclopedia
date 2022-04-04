import React from "react";

export default function Filter({
	namePage,
	getPriceBelow1000,
	getPriceBelow2500,
	getPriceBelow5000,
	getPriceBelow10000,
	getPriceAbove10000,
	getAllPosts,
	getShadowXS,
	getShadowS,
	getShadowM,
	getShadowL,
	getShadowXL,
	getShadowXXL,
	getShadowFin,
	getShadowNarrow,
	getLocationTree,
	getLocationPalmtree,
	getLocationFlying,
	getLocationGround,
	getLocationOther,
	getLocationPond,
	getLocationRiver,
	getLocationSea,
	getLocationPier,
}) {
	if (namePage === "bugs") {
		return (
			<div>
				<div className={`filters-container border-${namePage}`}>
					<button onClick={getAllPosts} className={`filter-off-btn bg-${namePage}`}>
						Reset
					</button>
					<p>Location</p>
					<div className="btn-container">
						<button onClick={getLocationTree} className={`filter-off-btn bg-${namePage}`}>
							Tree
						</button>
						<button onClick={getLocationPalmtree} className={`filter-off-btn bg-${namePage}`}>
							Palm tree
						</button>
						<button onClick={getLocationFlying} className={`filter-off-btn bg-${namePage}`}>
							Flying
						</button>
						<button onClick={getLocationGround} className={`filter-off-btn bg-${namePage}`}>
							Ground
						</button>
						<button onClick={getLocationOther} className={`filter-off-btn bg-${namePage}`}>
							Others
						</button>
					</div>
					<p>Price</p>
					<div className="btn-container">
						<button onClick={getPriceBelow1000} className={`filter-off-btn bg-${namePage}`}>
							&lt; 1K
						</button>
						<button onClick={getPriceBelow2500} className={`filter-off-btn bg-${namePage}`}>
							1K - 2.5K
						</button>
						<button onClick={getPriceBelow5000} className={`filter-off-btn bg-${namePage}`}>
							2.5K - 5K
						</button>
						<button onClick={getPriceBelow10000} className={`filter-off-btn bg-${namePage}`}>
							5K - 10K
						</button>
						<button onClick={getPriceAbove10000} className={`filter-off-btn bg-${namePage}`}>
							&gt; 10K
						</button>
					</div>
				</div>
			</div>
		);
	} else if (namePage === "fish") {
		return (
			<div>
				<div className={`filters-container border-${namePage}`}>
					<button onClick={getAllPosts} className={`filter-off-btn bg-${namePage}`}>
						Reset
					</button>
					<p>Location</p>
					<div className="btn-container">
						<button onClick={getLocationSea} className={`filter-off-btn bg-${namePage}`}>
							Sea
						</button>
						<button onClick={getLocationRiver} className={`filter-off-btn bg-${namePage}`}>
							River
						</button>
						<button onClick={getLocationPond} className={`filter-off-btn bg-${namePage}`}>
							Pond
						</button>
						<button onClick={getLocationPier} className={`filter-off-btn bg-${namePage}`}>
							Pier
						</button>
					</div>
					<p>Shadow size</p>
					<div className="btn-container">
						<button onClick={getShadowXS} className={`filter-off-btn bg-${namePage}`}>
							XS
						</button>
						<button onClick={getShadowS} className={`filter-off-btn bg-${namePage}`}>
							S
						</button>
						<button onClick={getShadowM} className={`filter-off-btn bg-${namePage}`}>
							M
						</button>
						<button onClick={getShadowL} className={`filter-off-btn bg-${namePage}`}>
							L
						</button>
						<button onClick={getShadowXL} className={`filter-off-btn bg-${namePage}`}>
							XL
						</button>
						<button onClick={getShadowXXL} className={`filter-off-btn bg-${namePage}`}>
							XXL
						</button>
						<button onClick={getShadowFin} className={`filter-off-btn bg-${namePage}`}>
							Fin
						</button>
						<button onClick={getShadowNarrow} className={`filter-off-btn bg-${namePage}`}>
							Narrow
						</button>
					</div>
					<p>Price</p>
					<div className="btn-container">
						<button onClick={getPriceBelow1000} className={`filter-off-btn bg-${namePage}`}>
							&lt; 1K
						</button>
						<button onClick={getPriceBelow2500} className={`filter-off-btn bg-${namePage}`}>
							1K - 2.5K
						</button>
						<button onClick={getPriceBelow5000} className={`filter-off-btn bg-${namePage}`}>
							2.5K - 5K
						</button>
						<button onClick={getPriceBelow10000} className={`filter-off-btn bg-${namePage}`}>
							5K - 10K
						</button>
						<button onClick={getPriceAbove10000} className={`filter-off-btn bg-${namePage}`}>
							&gt; 10K
						</button>
					</div>
				</div>
			</div>
		);
	} else if (namePage === "sea") {
		return (
			<div>
				<div className={`filters-container border-${namePage}`}>
					<button onClick={getAllPosts} className={`filter-off-btn bg-${namePage}`}>
						Reset
					</button>
					<p>Shadow size</p>
					<div className="btn-container">
						<button onClick={getShadowXS} className={`filter-off-btn bg-${namePage}`}>
							XS
						</button>
						<button onClick={getShadowS} className={`filter-off-btn bg-${namePage}`}>
							S
						</button>
						<button onClick={getShadowM} className={`filter-off-btn bg-${namePage}`}>
							M
						</button>
						<button onClick={getShadowL} className={`filter-off-btn bg-${namePage}`}>
							L
						</button>
						<button onClick={getShadowXL} className={`filter-off-btn bg-${namePage}`}>
							XL
						</button>
					</div>
					<p>Price</p>
					<div className="btn-container">
						<button onClick={getPriceBelow1000} className={`filter-off-btn bg-${namePage}`}>
							&lt; 1K
						</button>
						<button onClick={getPriceBelow2500} className={`filter-off-btn bg-${namePage}`}>
							1K - 2.5K
						</button>
						<button onClick={getPriceBelow5000} className={`filter-off-btn bg-${namePage}`}>
							2.5K - 5K
						</button>
						<button onClick={getPriceBelow10000} className={`filter-off-btn bg-${namePage}`}>
							5K - 10K
						</button>
						<button onClick={getPriceAbove10000} className={`filter-off-btn bg-${namePage}`}>
							&gt; 10K
						</button>
					</div>
				</div>
			</div>
		);
	} else if (namePage === "fossils") {
		return (
			<div>
				<div className={`filters-container border-${namePage}`}>
					<button onClick={getAllPosts} className={`filter-off-btn bg-${namePage}`}>
						Reset
					</button>
					<p>Price</p>
					<div className="btn-container">
						<button onClick={getPriceBelow2500} className={`filter-off-btn bg-${namePage}`}>
							&lt; 2.5K
						</button>
						<button onClick={getPriceBelow5000} className={`filter-off-btn bg-${namePage}`}>
							2.5K - 5K
						</button>
						<button onClick={getPriceBelow10000} className={`filter-off-btn bg-${namePage}`}>
							5K - 10K
						</button>
					</div>
				</div>
			</div>
		);
	}
}
