// useRef는 변해도 리렌더링 되지 않는다.

import React, { useEffect, useRef, useState } from "react";
import { useCookies, Cookies } from "react-cookie";

const App = () => {
  const cookies = new Cookies();
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8080/", {
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return (
    <>
      <div>헬로</div>
      <h2>{countRef.current}</h2>
      <button
        onClick={() => {
          countRef.current++;
          // setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        state갱신
      </button>
    </>
  );
};

export default App;
