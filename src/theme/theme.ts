import { createTheme } from "@mui/material/styles";

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
    jobPending: {
      main: "#d97706",
    },
    jobInProgress: {
      main: "#6366f1",
    },
    jobCompleted: {
      main: "#14b8a6",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
  },
});
