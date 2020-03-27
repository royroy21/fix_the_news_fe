import React from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from '@material-ui/styles';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import {BrowserRouter as Router} from 'react-router-dom'
import Root from "./components/Root";

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const store = configureStore();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Root />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
