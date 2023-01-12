import styled, { css } from "styled-components";
import {NavLink} from "react-router-dom";

/** 카테고리별 객체*/
const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "과학",
  },
];

/** 카테고리가 들어갈 공간 디자인*/
const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

/** 카테고리 제목 디자인
 * 카테고리에서 NavLink 사용
 * 카테고리스에서 기존의 onSelect 함수를 사용하여 카테고리를 선택했을때 선택된 카테고리에 다른 스타일을 주는 기능을 NavLink 로 설정*/
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  
  /** 카테고리 제목 마우스 오버 시 색 설정*/
  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #3bc9db;
    &:hover {
      color: #3bc9db;
    }
  }
  
  /*
  /!** 카테고리 클릭 시 디자인 및 클릭 후 마우스 오버 시 컬러색 설정*!/
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}
  */
  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ category, onSelect }) => {
  return (
    <CategoriesBlock>
      {/*categories 배열안에 name 과 text 값이 들어가있는 개체들을 넣어줘서 한글로된 카테고리와
			실제 카테고리 값을 연결 시켜줬으며 name 은 실제 카테고리 값을 가리키고 text 값은 렌더링할때 사용할 한글 카테고리를 가리킴*/}
      {categories.map((c) => {
        return (
            /*NavLink 로 만들어진 Category 컴포넌트에 to 값은 /카테고리이름 으로 설정해줬음
            * 카테고리 중에서 전체보기의 경우는 예외적으로 /all 대신 / 로 설정해줌*/
          <Category
            key={c.name}
            className={({isActive}) => (isActive ? 'active' : undefined)}
            to={c.name === 'all' ? '/' : `/${c.name}`}
            /*active={category === c.name}*/
            /*onClick={() => onSelect(c.name)}*/
          >
            {c.text}
          </Category>
        );
      })}
    </CategoriesBlock>
  );
};
export default Categories;
