import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import i18n from './main/i18n';
import configureStore from './main/reducers/configureStore';
import { theme } from './main/themes/MaterialUiTheme';
import wazoTheme from './main/themes';

const store = configureStore();

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={wazoTheme}>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            // insert first scene here
          </I18nextProvider>
        </Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;