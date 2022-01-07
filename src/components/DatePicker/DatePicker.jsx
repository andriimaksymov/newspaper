import { useState, memo, useEffect } from "react";
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { TextField } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

const DatePicker = ({ name, date, dateFormat = 'yyyyMMdd', label, onChange, ...rest }) => {
  const [value, setValue] = useState(date || new Date());

  useEffect(() => {
    setValue(date);
  }, [date]);

  const handleChangeDate = () => {
    onChange(format(value, dateFormat), name);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        label={label}
        value={value}
        onClose={handleChangeDate}
        onChange={newValue => setValue(newValue)}
        renderInput={params => <TextField {...params} />}
        {...rest}
      />
    </LocalizationProvider>
  );
};

DatePicker.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  label: PropTypes.string,
  dateFormat: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default memo(DatePicker);