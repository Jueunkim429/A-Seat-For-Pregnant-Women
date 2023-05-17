import React, { useEffect, useState } from "react";
import "firebase/database";
import { firebaseDB } from '../fbase';


const Home = () => {
  const [pressValue, setPressValue] = useState(null);
  useEffect(() => {
    const dataBase = firebaseDB.ref(`press`);
    dataBase.on('value', snapshot => {
      const data = snapshot.val();
      setPressValue(data);
  })
  return dataBase.off;
  }, [])

  return (
    <>
    <h2>실시간 지하철 임산부 자리 정보</h2>

    <p>{pressValue || "Loading..."}</p>

    
    

    </>
  );
};

export default Home;

