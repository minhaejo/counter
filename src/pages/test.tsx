import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CounterNum } from "../redux/slices/counter";

import counter, {
  CounterState,
  decrease,
  increase,
} from "../redux/slices/counter";

const Test = () => {
  const count = useSelector((state: CounterState) => state.counter.count);
  const dispatch = useDispatch();
  console.log(count);

  // initialState 초기값을 설정
  //초기값 원본은 남겨두고 게속 값을 복제하면서 갱신

  // reducer : state의 값을 바꿔주는 놈 = 바꾸는 함수 = reducer state,action 두가지 인자
  // dispatch : reducer를 호출하는 놈 = 형식적인
  // useSelector 란 : 최종 state값을 알고있는 놈 =형식적인
  //
  return (
    <div>
      <div>
        <h1>COUNTER</h1>
        {/* <label>{count}</label> */}
        <br />
        <button onClick={() => dispatch(counter())}> + </button>
        <button onClick={() => dispatch(decrease())}> - </button>
      </div>
    </div>
  );
};

export default Test;
