// TODO(agent): This is a temporary "under construction" page.
// Replace the entire contents of this file with the actual index page implementation
// as instructed by the user. Delete this comment and the placeholder UI below.

import { useState, useEffect } from "react";

const AGENT_THOUGHTS = [
	"Crafting the perfect landing page",
	"Fine-tuning the color palette",
	"Making buttons actually clickable",
	"Ensuring it works on your phone too",
	"Adding just the right amount of whitespace",
	"Teaching forms to be polite",
	"Making the logo pixel-perfect",
	"Optimizing for speed (patience, ironic)",
	"Writing code that future-me won't hate",
	"Building something worth the wait",
];

function Index() {
	const [thoughtIndex, setThoughtIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setThoughtIndex((prev) => (prev + 1) % AGENT_THOUGHTS.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center p-8">

			<h1 className="text-[clamp(2.5rem,10vw,6rem)] font-black tracking-[-0.03em] text-black leading-none mb-10 text-center">
				Under
				<br />
				Construction
			</h1>

			{/* Agent thought with shimmer */}
			<div className="h-8 flex items-center justify-center">
				<p className="text-base md:text-lg shimmer-text italic">
					"{AGENT_THOUGHTS[thoughtIndex]}"
				</p>
			</div>

			<style>{`
				.shimmer-text {
					background: linear-gradient(
						90deg,
						#737373 0%,
						#737373 40%,
						#d4d4d4 50%,
						#737373 60%,
						#737373 100%
					);
					background-size: 200% 100%;
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;
					animation: shimmer 2s ease-in-out infinite;
				}

				@keyframes shimmer {
					0% { background-position: 100% 0; }
					100% { background-position: -100% 0; }
				}
			`}</style>
		</div>
	);
}

export default Index;
