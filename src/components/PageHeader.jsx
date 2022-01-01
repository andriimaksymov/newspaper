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

export default function PageHeader({ title }) {
    const classes = useStyles();

    return (
        <div className={classes.headerWrap}>
            <Typography className={classes.pageHeader} variant="h5" component="h2">{title}</Typography>
        </div>
    );
}