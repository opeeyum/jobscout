import { InputLabel, useTheme } from "@mui/material";
import React from "react";
import Select from "react-select";

const CustomSelectInput = ({
  title,
  required,
  options,
  labelStyles,
  noPadding,
  styles,
  containerStyles,
  inputRef,
  borderRadius,
  paddingTop,
  ...props
}) => {
  const ref = React.createRef();

  const theme = useTheme();
  const customStyles = {
    control: (styles) => ({
      ...styles,
      paddingTop: paddingTop ? paddingTop : "6px",
      paddingBottom: "7px",
      borderRadius: borderRadius ? borderRadius : "8px",
      ":hover": {
        borderColor: theme.palette.grey[800],
      },
      ":focus-within": {
        borderColor: theme.palette.primary.main,
      },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 99999,
      // fontFamily: "Mulish, sans-serif",
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: "none",
    }),
    option: (styles) => ({
      ...styles,
      fontWeight: 500,
      fontSize: "16px",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme.palette.text.primary,
      fontWeight: 500,
      fontSie: "16px",
    }),
    placeholder: (styles) => ({
      ...styles,
      // color: theme.palette.text.secondary,
      fontWeight: 500,
      fontSize: "16px",
    }),
  };

  return (
    <div
      style={{
        paddingTop: noPadding ? "0px" : "24px",
        width: "100%",
        ...containerStyles,
      }}
      ref={inputRef}
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
                  fontWeight: 600,
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
      <Select
        ref={ref}
        styles={styles || customStyles}
        closeMenuOnSelect
        placeholder={`Select ${title}`}
        theme={(th) => ({
          ...th,
          // borderRadius: 0,
          colors: {
            ...th.colors,
            primary: theme.palette.primary.main,
            primary75: theme.palette.primary.main,
          },
          borderColor: th.primary,
        })}
        options={options}
        {...props}
      />
    </div>
  );
};

export default CustomSelectInput;
