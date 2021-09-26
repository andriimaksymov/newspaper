import { useRef } from 'react'
import { isEqual } from 'lodash'
import { useLocation } from "react-router-dom";

export const useQuery = () => new URLSearchParams(useLocation().search);

export function useDeepEqualMemo(value) {
	const ref = useRef(null);
	
	if (!isEqual(ref.current, value)) {
		ref.current = value
	}
	
	return ref.current
}