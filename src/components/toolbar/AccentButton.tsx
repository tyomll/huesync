import { useCurrentColor } from "../hooks/useCurrentColor";

const AccentButton = () => {
	const { currentColor, handleCurrentColorChange } =
		useCurrentColor("--accent-color");

	return (
		<label
			className="flex flex-col items-center h-full px-[25px] bg-[#ffffff] rounded-[5px] gap-[5px] cursor-pointer"
			htmlFor="accent"
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
				<label className="mt-[5px] cursor-pointer" htmlFor="accent">
					Accent
				</label>
				<input
					className="invisible"
					type="color"
					id="accent"
					value={currentColor}
					onChange={(e) => handleCurrentColorChange(e.target.value)}
				/>
			</div>
		</label>
	);
};

export default AccentButton;
