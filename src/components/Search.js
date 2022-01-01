import { useFormik } from "formik";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router-dom";
import { styled } from '@mui/material/styles';
import routes from "../utils/routes";

const SearchField = styled(TextField)({
  '& .MuiInput-root': {
    '&::before, &::after': {
      display: 'none',
    },
  },
  '& .MuiInput-input': {
    padding: '10px 24px',
    borderRadius: 30,
    border: 'none',
    background: '#fff',
    borderBottom: '1px solid #ccc',
    '&::placeholder': {
      opacity: .9,
      color: '#808080',
    },
  },
});

const SearchButton = styled(IconButton)(({ theme }) => ({
  color: '#ffffff',
  padding: '10px 16px',
  borderRadius: 30,
  backgroundColor: '#000000',
  '&:hover': {
    background: theme.palette.primary.main,
  },
}));

const SearchForm = styled('form')({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridGap: 20,
});

const Search = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: ({ search }) => {
      history.push(routes.search(search ? `?query=${search}` : ''));
    },
  });

  const { handleSubmit, handleChange } = formik;

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchField
        name="search"
        variant="standard"
        placeholder="Search..."
        onChange={handleChange}
      />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </SearchForm>
  );
};

export default Search;