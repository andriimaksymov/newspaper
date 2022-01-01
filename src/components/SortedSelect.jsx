import { memo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useQuery } from "../utils/hooks";

const SortedSelect = ({ value, sortedList }) => {
  const history = useHistory();
  const location = useLocation();
  const query = useQuery();

  const [sort, setSort] = useState(value || sortedList[0].value);

  const handleChangeSort = e => {
    setSort(e.target.value);
    query.set('sort', e.target.value);
    history.push({ pathname: location.pathname, search: query.toString() });
  };

  return (
    <FormControl>
      <Select
        value={sort}
        onChange={handleChangeSort}
      >
        {
          sortedList.map(item => <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>)
        }
      </Select>
    </FormControl>
  );
};

export default memo(SortedSelect);