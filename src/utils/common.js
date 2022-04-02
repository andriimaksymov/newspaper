import isEqual from 'lodash/isEqual';

export const setPagesCount = count => Math.round(count / 20) > 200 ? 200 : Math.round(count / 20);

export const isEqualPropsMemo = (prevProps, nextProps) => isEqual(prevProps, nextProps);
