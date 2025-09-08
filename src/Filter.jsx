import React from "react";
import {
  Button,
  Menu,
  MenuItem,
  Box,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LayersIcon from "@mui/icons-material/Layers";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import PublicIcon from "@mui/icons-material/Public";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckIcon from "@mui/icons-material/Check";

const FilterMenu = ({ label, options, icon, sx }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelected] = React.useState(""); // يخزن الاختيار الحالي لكل فلتر
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setAnchorEl(null);
    // لو عايز تبعت الاختيار لبرا: add a prop like onChange(option) وتتصل هنا
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

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            border: "1px solid #e6e6e6", // border حوالين القائمة
            borderRadius: 2,
            boxShadow: "0px 6px 18px rgba(0,0,0,0.06)",
            minWidth: 200,
          },
        }}
        MenuListProps={{
          sx: {
            p: 0,
            // تنسيق كل MenuItem
            "& .MuiMenuItem-root": {
              backgroundColor: "transparent",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              fontWeight: 100,
              fontSize: "0.95rem",
              color: "#848080ff",
              py: 1.2,
              px: 2,
              "&:last-child": {
                borderBottom: "none",
              },
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.03)",
                color: "#555",
              },
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => handleSelect(option)}
            selected={option === selected}
            sx={{
              // لون العنصر لو هو المختار
              backgroundColor:
                option === selected ? "rgba(0,128,128,0.06)" : "transparent",
              "&.Mui-selected:hover": {
                backgroundColor: "rgba(0,128,128,0.08)",
              },
            }}
          >
            <ListItemText>{option}</ListItemText>
            {option === selected && (
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckIcon fontSize="small" />
              </ListItemIcon>
            )}
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
        flexWrap: "wrap",
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
        icon={<AttachMoneyIcon />}
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
