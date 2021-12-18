import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersRequest } from '../action/Action';


const App = ()=> {
  const items = useSelector(state => state.users.items )
  const isloading = useSelector(state => state.users.isloading )

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  return (

    <>
    <h3>hello redux</h3>
      {isloading && <h1>loading.....</h1>}
      {items && items.map((value,index)=>(
        <h1 key={index}>{value.name}</h1>
      ))}
    </>
  );
};

export default App;