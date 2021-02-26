import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Navbar from './components/Navebar';

function App() {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>

      <GlobalStyles />
    </>
  );
}

export default App;