import { useFormik } from "formik";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router-dom";
import { styled } from '@mui/material/styles';
import routes from "../utils/routes";
import { useQuery } from "../utils/hooks";

const SearchField = styled(TextField)({
  '& .MuiInput-root': {
    '&::before, &::after': {
      display: 'none',
    },
  },
  '& .MuiInput-input': {
    padding: '13px 20px',
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
  padding: '12px 20px',
  borderRadius: 30,
  backgroundColor: '#000000',
  '&:hover': {
    background: theme.palette.primary.main,
  },
}));

const SearchForm = styled('form')({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridGap: 10,
});

const Search = () => {
  const query = useQuery();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: ({ search }) => {
      query.set('query', search);
      history.push({ pathname: routes.search, search: query.toString() });
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