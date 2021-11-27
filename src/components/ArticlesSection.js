import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { articlesFetchAction } from "../store/articles/actions";
import ArticleList from "./ArticleList";
import { makeStyles } from "@mui/styles";

const types = {
    books: 'Книги',
    science: 'Наука',
};

const useStyles = makeStyles({
    wrap: {
        padding: '30px 0',
    },
    title: {
        display: 'inline-block',
        position: 'relative',
        fontSize: 30,
        marginBottom: '20px !important',
        fontWeight: 400,
        borderBottom: '1px solid #222',
        '&::before': {
            position: 'absolute',
            content: "",
            height: 1,
            background: '#777',
        },
    },
});

const ArticlesSection = ({ type }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { articles } = useSelector(({ articles }) => ({
        articles: articles.articles[type],
    }));

    useEffect(() => {
        dispatch(articlesFetchAction({ type, config: { params: { limit: 10 } } }));
    }, [type]);

    return (
        <div className={classes.wrap}>
            <Typography component="h3" className={classes.title}>{types[type]}</Typography>
            <ArticleList list={articles?.list} />
        </div>
    );
};

export default memo(ArticlesSection);