import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pager from './Pager';
import getHash from '../utils/utils';

export default function Users({ setParams, params }) {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  const fetchUsers = async (idx = 0) => {
    const response = await axios.get(
      `https://acme-users-api-rev.herokuapp.com/api/users/${idx}`
    );
    console.log(response);
    return response.data;
  };
  useEffect(() => {
    fetchUsers(params.idx).then(userObj => {
      setUsers(userObj.users);
      setCount(userObj.count);
    });
  }, [params]);
  return (
    <div>
      <Pager count={count} setParams={setParams} />
      <ul>
        {users && users.length > 0 ? (
          users.map((user, i) => <li key={user.id}>{user.fullName}</li>)
        ) : (
          <p>loading</p>
        )}
      </ul>
    </div>
  );
}
