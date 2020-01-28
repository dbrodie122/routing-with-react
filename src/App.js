import React, { useState, useEffect } from 'react';
import qs from 'qs';
import Home from './components/Home';
import Nav from './components/Nav';
import Users from './components/Users';
import { getHash } from './utils/utils';

function App() {
  const [params, setParams] = useState(qs.parse(getHash()));
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);
  console.log('params', params);
  return (
    <div>
      <Nav />
      {params.view === undefined && <Home />}
      {params.view && params.view.includes('users') && (
        <Users setParams={setParams} params={params} />
      )}
       
    </div>
  );
}

export default App;
