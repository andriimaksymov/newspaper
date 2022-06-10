import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  articleItem: {
    cursor: 'pointer',
    '& + $articleItem': {
      marginTop: 30,
    },
    '&:hover': {
      '& $title': {
        color: 'var(--color-primary)'
      }
    },
  },
  imageWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 210,
    minHeight: 140,
    backgroundColor: '#f3f2f2',
    '& .MuiSvgIcon-root': {
      width: 100,
      height: 100,
      color: '#808080',
    },
  },
  title: {
    display: 'box',
    overflow: 'hidden',
    maxHeight: '3.25em',
    lineClamp: 2,
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    '-webkit-box-orient': 'vertical',
  },
  description: {
    display: 'box',
    overflow: 'hidden',
    maxHeight: '4.5em',
    lineClamp: 3,
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    '-webkit-box-orient': 'vertical',
  },
});

export default useStyles;
