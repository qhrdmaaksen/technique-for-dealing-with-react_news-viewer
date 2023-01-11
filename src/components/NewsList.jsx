import styled from "styled-components";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

/* 더미 데이터
const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};*/
const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  /** 컴포넌트가 화면에 보이는 시점에 API 요청하기 위해서 useEffect 사용
   * 주의사항: useEffect 에 등록하는 함수에 async/await 을 붙이면안됨
   * --useEffect 에서 반환해야하는 값은 뒷정리 함수이기때문
   * --만약 useEffect 내부에서 async/await 을 사용하고싶다면 함수 내부에 async 키워드가 붙은
   * --또다른 함수를 만들어서 사용해줘야함
   * 추가로 loading 상태도 관리해 api 요청이 대기중인지 판별*/
  useEffect(() => {
    // async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        // props 로 받아온 category 에 따라 카테고리를 지정해 api 를 요청
        const query = category === "all" ? "" : `&category=${category}`;
        /** ㅊ현재 category 값이 무엇인지에 따라서 요청할 주소가 동적으로 바뀌도록함
         * category 값이 all 이라면 query 값을 공백으로 설정해 모두 보이도록하고
         * -all 이아니라면 해당 category 값에 따른 url 을 &category=카테고리 형태의 문자열을 만들도록함*/
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0d740fbe0f94426295a62879ccbae82c`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    // category 값이 바뀔때마다 useEffect 함수가 호출되도록함
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  /** 주의사항: 데이터를 불러와 뉴스 데이터 배열을 map 함수를 사용해 컴포넌트 배열로 변환할때
   * 신경써야할 부분이 map 함수를 사용하기전에 꼭 !articles 를 조회해 해당 값이 현재 null 이 아닌지
   * 검사를 해야함 이 작업을 하지 않으면 아직 데이터가 없을 때 null 에는 map 함수가 없기때문에 렌더링과정에서
   * 오류가 발생하고 앱이 제대로 나타나지않고 흰 페이지만 보이게됨*/
  if (!articles) {
    return null;
  }

  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
export default NewsList;
