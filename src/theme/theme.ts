import { createTheme } from "@mui/material/styles";
// src/theme/fonts.ts

// Poppins
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/800.css";

// Inter
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

// Roboto
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

declare module "@mui/material/styles" {
  interface Palette {
    jobPending: Palette["primary"];
    jobInProgress: Palette["primary"];
    jobCompleted: Palette["primary"];
  }
  interface PaletteOptions {
    jobPending?: PaletteOptions["primary"];
    jobInProgress?: PaletteOptions["primary"];
    jobCompleted?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: "#2563eb" },
    background: { default: "#edf2ff" },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
      disabled: "#94a3b8",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
    body1: {
      lineHeight: 1.6,
    },
    body2: {
      color: "#475569",
    },
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        },
      },
    },
  },
});
