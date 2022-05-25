import React from 'react';

import GraphQlProvider from './context/Apollo.context';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  return (
    <GraphQlProvider>
      <MainNavigation />
    </GraphQlProvider>
  );
};

export default App;
