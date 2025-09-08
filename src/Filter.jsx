import React from "react";
import { Button, Menu, MenuItem, Box } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LayersIcon from "@mui/icons-material/Layers";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import PublicIcon from "@mui/icons-material/Public";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const FilterMenu = ({ label, options, icon, sx }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        startIcon={icon}
        onClick={handleClick}
        sx={{ borderRadius: 5, textTransform: "none", mr: 1, ...sx }}
      >
        {label}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};


export default function FiltersBar() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
      }}
    >
      <FilterMenu
        label="All Filters"
        options={["Popular", "Newest", "Trending"]}
        icon={<FilterAltIcon />}
        sx={{ color: "black", borderColor: "black" }}
      />

      <FilterMenu
        label="Price Range"
        options={["Under $50", "$50 - $200", "Above $200"]}
        sx={{ color: "black", border: "1px solid black " }}
        icon={<AttachMoneyIcon/>}
      />
      <FilterMenu
        label="Color"
        options={["Red", "Blue", "Green", "Black & White"]}
        icon={<ColorLensIcon />}
        sx={{ color: "black", border: "1px solid black " }}
      />
      <FilterMenu
        label="Year"
        options={[
          "Before 1900",
          "1900 - 1950",
          "1950 - 2000",
          "2000 - Present",
        ]}
        icon={<CalendarMonthIcon />}
        sx={{ color: "black", border: "1px solid black " }}
      />
      <FilterMenu
        label="Materials"
        options={["Oil", "Acrylic", "Watercolor", "Digital"]}
        icon={<LayersIcon />}
        sx={{ color: "black", border: "1px solid black " }}
      />
      <FilterMenu
        label="Frame"
        options={["Framed", "Unframed"]}
        icon={<CropSquareIcon />}
        sx={{ color: "black", border: "1px solid black " }}
      />
      <FilterMenu
        label="Nationality"
        options={["Egyptian", "Italian", "French", "Spanish", "Other"]}
        icon={<PublicIcon />}
        sx={{ color: "black", border: "1px solid black " }}
      />
    </Box>
  );
}
