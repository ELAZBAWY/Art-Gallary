// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["A, B, Arial, sans-serif"] // استخدم الخط A كخط أساسي و B كخط ثانوي
  },
  palette: {
    primary: {
      main: "#1976d2", // اللون الأساسي
    },
    secondary: {
      main: "#dc004e", // اللون الثانوي
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // النص يفضل زي ما هو مش Capital
          borderRadius: "12px", // مثال: حواف مستديرة أكتر
        },
      },
    },
  },
});

export default theme;
