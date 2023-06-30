import { useCurrentColor } from "../../../hooks/useCurrentColor";

const PrimaryButton = () => {
	const { currentColor, handleCurrentColorChange } = useCurrentColor(
		"--primary-button-color"
	);

	return (
		<label
			className="flex flex-col items-center h-full px-[25px] bg-[#ffffff] rounded-[5px] gap-[5px] cursor-pointer duration-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
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
				<label className="font-500 mt-[5px] cursor-pointer" htmlFor="primary">
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
