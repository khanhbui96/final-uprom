import React from 'react';
import showRoutes from './ultils/showRoutes';
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <div className="App">
            {showRoutes(routes)}
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
