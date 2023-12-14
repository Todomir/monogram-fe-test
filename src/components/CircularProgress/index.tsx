import { clsx } from "clsx";
import "./CircularProgress.style.css";

export interface Props extends React.HTMLAttributes<SVGElement> {
	progress: number;
	strokeWidth?: number;
}

export default function CircularProgress({
	progress,
	strokeWidth = 4,
	className,
}: Props) {
	return (
		<svg
			className={clsx("progress", className)}
			viewBox="0 0 217 216"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Circular Progress</title>

			<path
				className="progress__progress"
				pathLength={1}
				opacity="0.8"
				d="M214.5 108C214.5 80.8613 204.091 54.7563 185.417 35.0635C166.744 15.3707 141.228 3.59033 114.128 2.1496C87.0271 0.708864 60.4062 9.7175 39.7499 27.3194C19.0935 44.9213 5.97518 69.7756 3.09777 96.7614C0.220372 123.747 7.80307 150.809 24.2836 172.37C40.7641 193.932 64.8869 208.351 91.6819 212.657C118.477 216.963 145.903 210.828 168.309 195.515C190.715 180.203 206.395 156.879 212.117 130.351"
				stroke="#EFFFE2"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
			/>
			<g>
				<text
					x="50%"
					y="50%"
					textAnchor="middle"
					fill="white"
					fontSize="63px"
					fontFamily="Inter"
					fontWeight="bold"
					dy=".3em"
				>
					{progress.toFixed(0)}
				</text>
			</g>
		</svg>
	);
}
