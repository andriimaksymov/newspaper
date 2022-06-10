import { styled } from '@mui/material/styles';
import { Swiper } from 'swiper/react';
import IconButton from '@mui/material/IconButton';

export const Wrapper = styled('div')({
  position: 'relative',
});

export const StyledSwiper = styled(Swiper)(({ theme }) => ({
  paddingTop: 50,
  paddingBottom: 50,
  '& .swiper-pagination-bullet': {
    width: 18,
    height: 4,
    opacity: 1,
    borderRadius: 0,
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  '& .swiper-pagination-bullet-active': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const ButtonsWrap = styled('div')({
  position: 'absolute',
  top: 0,
  left: '50%',
  width: '95vw',
  height: '100%',
  transform: 'translateX(-50%)',
});

export const PrevButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  left: -30,
  transform: 'translateY(-50%)',
});

export const NextButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  right: -30,
  transform: 'translateY(-50%)',
});
