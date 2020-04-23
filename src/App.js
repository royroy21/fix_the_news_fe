import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import {BrowserRouter as Router} from 'react-router-dom'
import Root from "./components/Root";
import theme from "./theme"

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
