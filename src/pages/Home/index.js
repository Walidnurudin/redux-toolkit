import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/counterSlice';
import './index.css';

// RTK query
import { useGetPostsQuery } from '../../services/json';

function Home() {
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetPostsQuery();

  return (
    <div className='home__wrapper'>
      <button
        style={{ width: '100px', height: '100px' }}
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <h1>{count}</h1>
      <button
        style={{ width: '100px', height: '100px' }}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <div>
        {isLoading
          ? 'Loading...'
          : error
          ? 'Error!'
          : data.map((post) => <div key={post.id}>{post.title}</div>)}
      </div>
    </div>
  );
}

export default Home;
