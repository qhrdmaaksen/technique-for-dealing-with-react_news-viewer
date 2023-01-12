import {useParams} from "react-router-dom";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

const NewsPage = () => {
	/** 현재 선택된 category 값을 URL 파라미터를 통해 사용할것이므로 Categories 컴포넌트에서
	 * 현재 선택된 카테고리 값을 알려줄 필요도없고 onSelect 함수를 따로 전달해줄 필요도 없음*/
	const params = useParams()
	// 카테고리가 선택되지 않았으면 기본값 all 로 사용
	const category = params.category || 'all' ;

	return (
		<>
			<Categories />
			<NewsList category={category}/>
		</>
	)
}
export default NewsPage;