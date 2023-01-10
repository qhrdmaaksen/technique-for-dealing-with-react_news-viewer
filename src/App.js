import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";

function App() {
  return <NewsList />;
}
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
