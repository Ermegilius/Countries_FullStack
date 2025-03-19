import { createTheme, PaletteMode, ThemeOptions } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

// Declare module augmentation for custom palette properties
declare module "@mui/material/styles" {
	interface Palette {
		accent: {
			main: string;
		};
	}
	interface PaletteOptions {
		accent?: {
			main: string;
		};
	}
}

// Create a function that returns a theme based on the current mode
export const createAppTheme = (mode: PaletteMode) => {
	// Light theme settings
	const lightTheme: ThemeOptions = {
		palette: {
			mode: "light",
			primary: {
				main: "#314159",
			},
			// secondary: {
			// 	main: "#9c27b0",
			// 	light: "#ba68c8",
			// 	dark: "#7b1fa2",
			// },
			accent: {
				main: "#f50057",
			},
			background: {
				default: "#f5f5f5",
				paper: "#ffffff",
			},
			text: {
				primary: "rgba(0, 0, 0, 0.87)",
				secondary: "rgba(0, 0, 0, 0.6)",
			},
			action: {
				hover: "#e5e5e5",
			},
		},
	};

	// Dark theme settings
	const darkTheme: ThemeOptions = {
		palette: {
			mode: "dark",
			primary: {
				main: "#333333",
				light: "#bbdefb",
				dark: "#64b5f6",
			},
			// secondary: {
			// 	main: "#9c27b0",
			// 	light: "#ba68c8",
			// 	dark: "#7b1fa2",
			// },
			accent: {
				main: "#f50057",
			},
			background: {
				default: "#121212",
				paper: "#333333",
			},
			text: {
				primary: "rgba(255, 255, 255, 0.87)",
				secondary: "rgba(255, 255, 255, 0.6)",
			},
			action: {
				hover: "#e5e5e5",
			},
		},
	};

	// Common theme settings
	const commonTheme: ThemeOptions = {
		typography: {
			fontFamily: [
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
			].join(","),
			h1: {
				fontSize: "2.5rem",
				fontWeight: 600,
			},
			h2: {
				fontSize: "2rem",
				fontWeight: 600,
			},
			h3: {
				fontSize: "1.75rem",
				fontWeight: 600,
			},
			body1: {
				fontSize: "1rem",
				lineHeight: 1.5,
			},
			button: {
				// Use 'none' as a valid TextTransform value
				textTransform: "none" as const,
			},
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 8,
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						borderRadius: 12,
						boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
					},
				},
			},
		},
	};

	// Merge themes based on mode
	const themeOptions = mode === "light" ? deepmerge(commonTheme, lightTheme) : deepmerge(commonTheme, darkTheme);

	return createTheme(themeOptions);
};

// Export a default theme for backward compatibility
export const theme = createAppTheme("light");
