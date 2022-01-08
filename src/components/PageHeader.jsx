import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerWrap: {
    marginBottom: 30,
  },
  pageHeader: {
    textDecoration: 'underline',
    textTransform: 'capitalize',
  },
});

const PageHeader = ({ title, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.headerWrap}>
      <Typography className={classes.pageHeader} variant="h5" component="h2" {...rest}>{title}</Typography>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;