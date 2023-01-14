import {useState, useEffect} from "react";

/** 프로젝트의 다양한 곳에서 사용될수있는 유틸 함수들은 보통 src/lib 디렉터리를 만든 후 그 안에 작성함
 * usePromise hooks 은 Promise 의 대기중 완료결과 실패결과에대한 상태를 관리함
 * usePromise 의 의존 배열 deps 를 파라미터로 받아서 받아온 deps 배열은 usePromise 내부에서 사용한
 * --의존 배열로 설정되며 이 배열을 설정하는 부분에서 eslint 경고가 나타나는데 규칙 무시를 해줘야함*/
export default function usePromise (promiseCreator, deps) {
	// 대기 중/완료/실패에 대한 상태 관리
	const [loading, setLoading] = useState(false)
	const [resolved, setResolved] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const process = async () => {
			setLoading(true)
			try {
				const resolved = await promiseCreator()
				setResolved(resolved)
			} catch (e) {
				setError(e)
			}
			setLoading(false)
		}
		process()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps)
	return [loading, resolved, error]
}

