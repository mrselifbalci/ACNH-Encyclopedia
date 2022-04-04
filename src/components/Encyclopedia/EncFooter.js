import React from "react";

export default function EncFooter({ namePage }) {
	return (
		<div>
			<div>
				<footer className={`bg-${namePage.toLowerCase()}`}>
					<div className="footer-wrapper">
						<p>Ryuusei3 ©</p>
					</div>
				</footer>
			</div>
		</div>
	);
}
