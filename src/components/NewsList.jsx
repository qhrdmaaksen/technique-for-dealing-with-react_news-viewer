import styled from "styled-components";
import NewsItem from "./NewsItem";
import {useEffect, useState} from "react";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 2rem auto 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};
const NewsList = () => {
  const [atricle, setArticle] = useState(null)
  const [loading, setLoading] = useState(false)
  /** 컴포넌트가 화면에 보이는 시점에 API 요청하기 위해서 useEffect 사용
   * 주의사항: useEffect 에 등록하는 함수에 async/await 을 붙이면안됨
   * --useEffect 에서 반환해야하는 값은 뒷정리 함수이기때문
   * --만약 useEffect 내부에서 async/await 을 사용하고싶다면 함수 내부에 async 키워드가 붙은
   * --또다른 함수를 만들어서 사용해줘야함
   * 추가로 loading 상태도 관리해 api 요청이 대기중인지 판별*/
  useEffect(() => {
    return () => {
      effect
    };
  }, [input]);


  return (
    <NewsListBlock>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewsListBlock>
  );
};
export default NewsList;
