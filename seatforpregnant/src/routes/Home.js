import React, { useEffect, useState } from "react";
import "firebase/database";
import { firebaseDB } from '../fbase';
import "../style.css"

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
    <p className="Name">실시간 지하철 임산부 자리 정보</p>
    <img src="./img/subway_seoul_4.gif" width="100%"></img>
    <div className="Logo">
    <img src="./img/logo.png"  width="100%"></img>
    </div>


    <div className="Box_Notice">
    <div className="Box_Pregnant2">
        &nbsp;
      </div>
      착석 가능

      <div className="Box_NoPregnant2">
        &nbsp;
      </div>
      착석 불가      
    </div>

    <div className="Container">
      {pressValue==10 ? <div className="Box_NoPregnant">
          &nbsp;
      </div> : <div className="Box_Pregnant">
          &nbsp;
      </div> }
      
      <div className="Box">
        &nbsp;
      </div>
      <div className="Box">
        &nbsp;
      </div>
      <div className="Box">
        &nbsp;
      </div>
      <div className="Box">
        &nbsp;
      </div>
      <div className="Box">
        &nbsp;
      </div>
      <div className="Box_Pregnant">
        &nbsp;
      </div>
    </div>
    <div className="Container2">
      <div>
        1-2
      </div>

      <div className="Number">
        1-3
      </div>
    </div>
    

    <div>
      <p><a href="https://smss.seoulmetro.co.kr/traininfo/traininfoUserView.do">실시간 열차 위치</a></p>
    </div>
 
    

    </>
  );
};

export default Home;


