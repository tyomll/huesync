import { useCurrentColor } from "../hooks/useCurrentColor";

const BackgroundButton = () => {
	const { currentColor, handleCurrentColorChange } = useCurrentColor(
		"--secondary-button-color"
	);

	return (
		<div className="flex flex-col items-center h-full px-[25px] bg-secondary rounded-[5px] gap-[5px]">
			<div className="w-[60px] h-[10px]">
				<input
					className="w-full h-full text-[13px] outline-none text-center bg-accent"
					type="text"
					maxLength={7}
					value={currentColor}
					onChange={(e) => handleCurrentColorChange(e)}
				/>
			</div>
			<div className="mt-[5px]">Background</div>
		</div>
	);
};

export default BackgroundButton;
