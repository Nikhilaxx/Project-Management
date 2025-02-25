import { cn } from "@/lib/utils";

interface DottedSeparatorProps {
	className?: string;
	color?: string;
	height?: string;
	dotSize?: string;
	gapSize?: string;
	direction?: "horizontal" | "vertical";
}

export const DottedSeparator = ({
	className,
	color = "#7a7a84",
	height = "1px",
	dotSize = "1px",
	gapSize = "6px",
	direction = "horizontal",
}: DottedSeparatorProps) => {
	const isHorizontal = direction === "horizontal";

	// Convert dotSize and gapSize to numbers safely
	const dot = Math.max(1, Number(dotSize.replace("px", "")));
	const gap = Math.max(1, Number(gapSize.replace("px", "")));

	return (
		<div
			className={cn(
				isHorizontal
					? "w-full flex items-center"
					: "h-full flex flex-col items-center",
				className
			)}
		>
			<div
				style={{
					width: isHorizontal ? "100%" : `${dot}px`,
					height: isHorizontal ? `${dot}px` : "100%",
					backgroundImage: `radial-gradient(circle, ${color} 100%, transparent 0)`,
					backgroundSize: isHorizontal ? `${dot + gap}px ${dot}px` : `${dot}px ${dot + gap}px`,
					backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
					backgroundPosition: "center",
				}}
			/>
		</div>
	);
};
