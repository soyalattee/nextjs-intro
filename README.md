# NextJs Introduction

next.js 강의 보며 연습
https://nomadcoders.co/nextjs-fundamentals/

## Why NextJs?(SSR)

client-side-rendering은 유저의 브라우저가 js를 받아와 ui를 보여주므로 처음 빈 html 화면이 나오고
유저가 원하는 페이지를 보는데 시간이 소요된다.

server-side-rendering은 서버에서 만든 ui(html)문서를 가져오므로 더 빠르게 ui를 볼 수 있다.

ex)
ctrl+u 눌러서 소스코드 확인

- CSR 사이트
  https://funderful.kr/
  (처음에 하얀화면상태 )
  https://www.plaync.com/kr/index

### Note

1. Pages
   index file is default page  
   dont really have to import react if you use write jsx  
   but if you want to use useState , useEffect like react life cycle method, you should import react

2. pre rendering  
   pre-rendering by initial state(ex. react useState)  
   hydration : start react.js in the front side  
   리액트는 서버에서 완성된 HTML이 내려와 이미 화면에 제대로 렌더링이 되어있는지 모르고 렌더링을 할
   수 있기 때문에 SSR을 하는경우 render method가 아닌 hydrate 메소드를 사용해야함(리렌더링방지)

3. Link 사용
4. style jsx
   css를 import 할 필요가 없다.  
   독립적이다. 부모컴포넌트에서 전체 선언을해도 자식컴포넌트에 적용되지 않고 해당컴포넌트에만 적용된다.
