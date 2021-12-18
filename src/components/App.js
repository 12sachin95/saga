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
    <h1>hello from redux saga</h1>
    <p>hello from redux</p>
    <h3>hello from react</h3>
      {isloading && <h1>loading.....</h1>}
      {items && items.map((value,index)=>(
        <h1 key={index}>{value.name}</h1>
      ))}
    </>
  );
};

export default App;