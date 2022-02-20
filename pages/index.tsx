import { useState } from "react";
//index file is default page
// dont really have to import react if you use write jsx
//but if you want to use useState , useEffect like react life cycle method, you should import react
export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Hello~{counter}</h1>
      {/* pre-rendering by initial state */}
      {/* hydration : start react.js in the front side */}
      {/* .리액트는 서버에서 완성된 HTML이 내려와 이미 화면에 제대로 렌더링이 되어있는지 모르고 렌더링을 할 
      수 있기 때문에 SSR을 하는경우 render method가 아닌 hydrate 메소드를 사용해야함(리렌더링방지) */}
      <button onClick={() => setCounter(prev => prev + 1)}></button>
    </div>
  );
}
