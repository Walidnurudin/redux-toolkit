import React from 'react';
// RTK query
import { useGetUsersQuery } from '../../services/json';

function Detail() {
  const { data, error, isLoading } = useGetUsersQuery();

  return (
    <div>
      <div>Detail</div>

      <div>
        {isLoading
          ? 'Loading...'
          : error
          ? 'Error!'
          : data.map((user) => <div key={user.id}>{user.name}</div>)}
      </div>
    </div>
  );
}

export default Detail;
