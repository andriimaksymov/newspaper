import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { isEqualPropsMemo } from '../../../utils/common';
import { StyledBookItem } from './styles';

const BooksItem = ({ img, title, description, author, buy_links }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenBuyLink = url => {
    setAnchorEl(null);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledBookItem>
      <img width="100%" height="auto" alt={title} src={img} />
      <Stack spacing={1}>
        <Typography variant="h6" color="inherit">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2">Author:</Typography>
          <Typography variant="body1" color="inherit">{author}</Typography>
        </Stack>
        <Box>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ArrowDropDownIcon />}
            onClick={handleClick}
          >
            Buy
          </Button>
          <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
          >
            {
              buy_links.map(link =>
                <MenuItem key={link.url} onClick={() => handleOpenBuyLink(link.url)}>
                  {link.name}
                </MenuItem>)
            }
          </Menu>
        </Box>
      </Stack>
    </StyledBookItem>
  );
};

BooksItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  buy_links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
};

export default memo(BooksItem, isEqualPropsMemo);
