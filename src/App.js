import logo from "./logo.svg";
import "./App.css";
import {useCallback, useState} from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import {Route, Routes} from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {

  return (
      <Routes>
        {/*경로에 category url 파라미터가 없어도 NewsPage 컴포넌트를 보여줘야하고 있어도 보여줘야하기때문에 Route 두번 사용함*/}
        <Route path="/" element={<NewsPage/>} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
  )
}

/* react router 적용전 컴포넌트 출력
function App() {
  // category 상태를 관리하는 useState
  const [category, setCategory] = useState("all");
  /!** category 값을 업데이트하는 onSelect 함수*!/
  const onSelect = useCallback((category) => {
    return setCategory(category)
  }, [])

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category}/>
    </>
  );
}*/
/*const [data, setData] = useState(null);*/

/*/!** 클릭시 url 에 get 요청하여 결과는 .then 을 통해 비동기적으로 확인할수있음*!/
  const onClick = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((response) => {
        setData(response.data);
      });
  };*/
/*/!** 위 코드에 async/await 적용
   * 클릭시 url 에 get 요청하여 결과는 .then 을 통해 비동기적으로 확인할수있음*!/
  const onClick = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=0d740fbe0f94426295a62879ccbae82c`
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}*/

export default App;
