import React, { useEffect, useState } from 'react';
import Charts from './components/Charts/Charts';
import Loading from './components/Loading/Loading';
import Users from './components/Users/Users';

interface user {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  name: string;
  email: string;
  phone: number;
}

const App = () => {
  const [users, setUser] = useState<user | undefined>();
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div className='App'>
      
      {users ? <Users users={users} /> : <Loading /> }
      <Charts />
    </div>
  );
};

export default App;