import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const categoryIndicatorFor = "#00BA13";
export const categoryIndicatorNeutral = "#FFAB00";
export const categoryIndicatorAgainst = "#F7685B";

export const categoryColourMap = {
  for: categoryIndicatorFor,
  neutral: categoryIndicatorNeutral,
  against: categoryIndicatorAgainst,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#c8cdd1",
      dark: "#929DA5",
      contrastText: "#191919",
    },
    secondary: {
      light: "#ff4081",
      main: "#447BFE",
      dark: "#929DA5",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
