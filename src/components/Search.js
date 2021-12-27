import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  search: {
    padding: '5px 20px',
    borderRadius: '30px',
    border: 'none',
    borderBottom: '1px solid #ccc',
  },
});

const Search = () => {
  const classes = useStyles();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: ({ search }) => {
      history.push(`/search${search ? `?query=${search}` : ''}`);
    },
  });

  const { handleSubmit, handleChange } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="search"
        variant="standard"
        inputProps={{
          className: classes.search,
        }}
        placeholder="Search..."
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;