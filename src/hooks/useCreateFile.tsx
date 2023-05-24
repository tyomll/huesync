import { usePalette } from "@/hooks/usePalette";

export const useCreateFile = () => {
	const { createPalette, palette } = usePalette();
	createPalette();
	const textContent = `Your selected colors:
		Primary: ${palette.primary}
		Secondary: ${palette.secondary}
		Primary Button: ${palette.primaryButton}
		Secondary Button: ${palette.secondaryButton}
		Accent: ${palette.accent} 
Thanks for using Huesync!`;

	const fileName = "colors";
	const createFile = () => {
		const blob = new Blob([textContent], { type: "text/plain" });

		const downloadLink = document.createElement("a");
		const url = URL.createObjectURL(blob);

		downloadLink.href = url;
		downloadLink.download = fileName;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
		URL.revokeObjectURL(url);
	};

	return { createFile };
};
