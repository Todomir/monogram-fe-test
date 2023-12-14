import { useId } from "react";

import "./Marquee.style.css";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	orientation?: "vertical" | "horizontal";
	reverse?: boolean;
	children: React.ReactNode;
}

export default function Marquee({
	orientation = "horizontal",
	reverse,
	className,
	children,
	...props
}: Props) {
	const id = useId();
	return (
		<div
			{...props}
			className={className ? `marquee ${className}` : "marquee"}
			data-orientation={orientation}
			data-reverse={reverse}
		>
			{Array.from({ length: 2 }).map((_, i) => (
				<div
					key={`marquee-${id}-${i}`}
					className="marquee__content h-full w-full"
					data-orientation={orientation}
					data-reverse={reverse}
					aria-hidden={i !== 0 && "true"}
				>
					{children}
				</div>
			))}
		</div>
	);
}
