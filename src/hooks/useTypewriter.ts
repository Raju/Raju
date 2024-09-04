import { useEffect, useState } from "react";

const useTypewriter = (
	texts: string[],
	typingSpeed = 150,
	pauseDuration = 3000,
	deletingSpeed = 50,
) => {
	const [displayedText, setDisplayedText] = useState("");
	const [index, setIndex] = useState(0);
	const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

	useEffect(() => {
		const phaseHandlers = {
			typing: () => {
				if (displayedText.length < texts[index].length) {
					return {
						nextAction: () =>
							setDisplayedText(texts[index].slice(0, displayedText.length + 1)),
						delay: typingSpeed,
					};
				}
				return { nextPhase: "pausing" };
			},
			pausing: () => ({
				nextPhase: "deleting",
				delay: pauseDuration,
			}),
			deleting: () => {
				if (displayedText.length > 0) {
					return {
						nextAction: () => setDisplayedText(displayedText.slice(0, -1)),
						delay: deletingSpeed,
					};
				}
				return {
					nextPhase: "typing",
					nextAction: () => setIndex(prevIndex => (prevIndex + 1) % texts.length),
				};
			},
		};

		const { nextPhase, nextAction, delay } = phaseHandlers[phase]();

		const timer = setTimeout(() => {
			if (nextPhase) setPhase(nextPhase);
			if (nextAction) nextAction();
		}, delay);

		return () => clearTimeout(timer);
	}, [displayedText, index, phase, texts, typingSpeed, pauseDuration, deletingSpeed]);

	return { text: displayedText, isTyping: phase === "typing" || phase === "pausing" };
};

export default useTypewriter;
