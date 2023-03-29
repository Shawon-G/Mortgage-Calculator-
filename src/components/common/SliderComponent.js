import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({
  defaultValue,
  min,
  max,
  amount,
  lebel,
  unit,
  step,
  value,
  onChange,
}) => {
  return (
    <React.Fragment>
      <Stack gap={1}>
        <Typography variant="subtitle2"> {lebel}</Typography>
        <Typography variant="h5">
          {unit}
          {amount}
        </Typography>
      </Stack>

      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        value={value}
        onChange={onChange}
      />

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </React.Fragment>
  );
};

export default SliderComponent;
