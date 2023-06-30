import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import makeApiCall from '../../utils/makeApiCall';
import { Box, Grid, InputLabel, debounce } from '@mui/material';


const FilterSelect = ({ name, title, labelStyles, required, noPadding, updateCompanyName }) => {
    const [options, setOptions] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    const debouncedApiCall = debounce(async (value) => {
        try {
            const response = await makeApiCall('GET', `/data/companyList?name=${value}`);
            const formattedOptions = response.data.map(item => ({
                label: item.companyName,
                value: item.companyName,
                logoUrl: item.logoUrl,
            }));
            setOptions(formattedOptions);
        } catch (error) {
            console.error('API call failed:', error);
        }
    }, 500); // Adjust the wait time as needed

    const handleInputChange = (event, value) => {
        setInputValue(value);
        updateCompanyName(value);
    };

    return (
        <div
            style={{
                paddingTop: "24px",
                width: "100%",
            }}
        >
            {title && (
                <InputLabel
                    sx={
                        labelStyles
                            ? labelStyles
                            : {
                                color: (theme) => theme.palette.text.primary,
                                // margin: theme.spacing(1),
                                marginLeft: 0,
                                marginBottom: "8px",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "20px",
                                letterSpacing: "-3%",
                                borderRadius: "8px",
                            }
                    }
                >
                    {title}
                    {required && "*"}
                </InputLabel>
            )}
            <Autocomplete
                multiple
                disableClearable
                filterSelectedOptions
                limitTags={1}
                id={`${name}-filter-select`}
                options={options}
                value={inputValue}
                onChange={handleInputChange}
                getOptionLabel={(option) => option?.label}
                isOptionEqualToValue={(option, value) => {return option.label === value.label && option.value === value.value}}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={`Select ${title}`}
                        variant="outlined"
                        onChange={e => {debouncedApiCall(e.target.value)}}
                    />
                )}
                renderOption={(props, option) => {
                    return (
                        <li {...props}>
                            <Grid container alignItems="center">
                                <Grid item sx={{ display: 'flex', width: 44 }}>
                                    <Box>
                                        <img
                                            width="30"
                                            height="30"
                                            style={{
                                                objectFit: "contain",
                                                border: "1px solid #808080",
                                                borderRadius: "10px",
                                            }}
                                            alt='logo'
                                            src={option?.logoUrl}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                                    <p>{option?.label}</p>
                                </Grid>
                            </Grid>
                        </li>
                    );
                }}
            />
        </div>
    );

};

export default FilterSelect;