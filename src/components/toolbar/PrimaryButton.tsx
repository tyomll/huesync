import { useCurrentColor } from "../../hooks/useCurrentColor";

const PrimaryButton = () => {
	const { currentColor, handleCurrentColorChange } = useCurrentColor(
		"--primary-button-color"
	);

	return (
		<label
			className="flex flex-col items-center h-full px-[25px] bg-[#ffffff] rounded-[5px] gap-[5px] cursor-pointer"
			htmlFor="primary"
		>
			<div className="w-[60px] h-[10px]">
				<input
					className="w-full h-full text-[13px] outline-none text-center bg-[#f3f3f3]"
					type="text"
					maxLength={7}
					value={currentColor}
					onChange={(e) => handleCurrentColorChange(e)}
				/>
			</div>
			<div className="flex flex-col items-center cursor-pointer">
				<label className="mt-[5px] cursor-pointer" htmlFor="primary">
					Primary Button
				</label>
				<input
					className="invisible"
					type="color"
					id="primary"
					value={currentColor}
					onChange={(e) => handleCurrentColorChange(e.target.value)}
				/>
			</div>
		</label>
	);
};

export default PrimaryButton;
