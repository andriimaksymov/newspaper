import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  image: {
    width: '100%',
    height: 'auto',
  },
  slideContent: {
    padding: 40,
    height: '100%',
    backgroundColor: '#f3f3f3',
  },
  imageWrap: {
    display: "flex",
  },
  caption: {
    fontSize: 14,
    color: '#808080',
  },
  buttonWrap: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '90vw',
    height: '100%',
    transform: 'translateX(-50%)',
    '& $sliderButton': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '& $sliderButtonPrev': {
      left: -30,
    },
    '& $sliderButtonNext': {
      right: -30,
    },
  },
  sliderButton: {},
  sliderButtonPrev: {},
  sliderButtonNext: {},
  homeSliderContainer: {
    position: 'relative',
  },
});