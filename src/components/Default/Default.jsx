import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  defaultWrap: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    justifyContent: 'center',
  },
  defaultItem: {
    '--delay': 0,
    fontSize: 30,
    animation: '$arrows 1s var(--delay) infinite ease-in',
  },
  '@keyframes arrows': {
    '0%, 100%': {
      color: 'black',
      transform: 'translateY(0)',
    },
    '50%': {
      color: '#3AB493',
      transform: 'translateY(20px)',
    },
  },
});

export default function Default() {
  const classes = useStyles();

  return (
    <div className={classes.defaultWrap}>
      {
        [0, 1, 2, 3, 4, 5].map(i =>
          <span key={i} style={{ '--delay': `0.${i}s` }} className={classes.defaultItem}>↓</span>,
        )
      }
    </div>
  );
}
