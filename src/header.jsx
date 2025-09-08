import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./syle.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 20px",
          width: "100%",
          height: "70px", // ارتفاع ثابت للهيدر
          position: "fixed",
          top: 0,
          left: 0,
          background: "#fff",
          zIndex: 1201, // فوق الـDrawer
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{ flexGrow: 1 }}
          justifyContent={"space-between"}
        >
          {/* العمود الأول */}
          <Grid size={{ xs: 9, sm: 2, md: 8 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div className="logo">
                <a href="/">
                  <img
                    src="https://www.artrewards.net/assets/uploads/media-uploader/group-1081723878495.png"
                    alt="logo"
                  />
                </a>
              </div>
              <div
                className="search"
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "5px 10px",
                  flex: 1,
                }}
              >
                <ScreenSearchDesktopIcon
                  style={{ marginRight: "8px", color: "#666" }}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </Grid>

          {/* العمود الثاني */}
          <Grid size={{ xs: 3, sm: 6, md: 4 }}>
            <nav className="nav">
              <div className="All">
                {/* زرار القائمة / الإغلاق */}
                <div
                  className="menu-icons"
                  style={{ display: "flex", gap: "10px", marginTop: "20px" }}
                >
                  <IconButton
                    sx={{
                      display: { xs: "block", md: "none" },
                      marginTop: "20px",
                    }}
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                      display: { xs: "block", md: "none" },
                      marginTop: "20px",
                    }}
                  >
                    {open ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                </div>

                {/* القائمة */}
                <Drawer
                  anchor="left"
                  open={open}
                  onClose={() => setOpen(false)}
                  PaperProps={{
                    sx: {
                      width: "100%",
                      backgroundColor: "#181616ff",
                      mt: "70px", // تبدأ من تحت الهيدر
                      height: "100vh",
                      color: "white",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      p: 2,
                    }}
                  >
                    <List
                      sx={{
                        mt: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        width: "100%",
                      }}
                    >
                      {[
                        "Sculptures",
                        "Prints",
                        "Photography",
                        "Paintings",
                        "Mixed Media",
                        "Drawings",
                        "Art Advisory",
                        "Artists",
                        "Artworks",
                        "Inspiration",
                      ].map((item, idx) => (
                        <ListItem
                          key={idx}
                          button
                          sx={{
                            borderBottom: "1px solid #dcd4d4ff",
                            paddingBottom: "10px",
                          }}
                        >
                          <ListItemText primary={item} />
                          <ArrowForwardIcon />
                        </ListItem>
                      ))}
                    </List>

                    <Grid container spacing={2} sx={{ mt: 3 }}>
                      <Grid size={{ xs: 6 }}>
                        <Button
                          className="sign"
                          variant="contained"
                          sx={{ width: "100%" }}
                        >
                          SignUp
                        </Button>
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <Button
                          className="log"
                          variant="contained"
                          sx={{ width: "100%" }}
                        >
                          Log in
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Drawer>
              </div>

              {/* القائمة العادية للديسكتوب */}
              <ul
                style={{
                  marginTop: 0,
                  display: "flex",
                  width: "100%",
                  padding: "10px 0",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {[
                  { label: "Sales", link: "#sculptures" },
                  { label: "Artical", link: "#prints" },
                  { label: "You may Know", link: "#photography" },
                  { label: "Paintings", link: "#paintings" },
                ].map((item, idx) => (
                  <a
                    href={item.link}
                    key={idx}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li
                      style={{
                        borderBottom: "1px solid #dcd4d4ff",
                        padding: "0 12px",
                        cursor: "pointer",
                        listStyle: "none",
                      }}
                    >
                      {item.label}
                    </li>
                  </a>
                ))}

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginLeft: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <div className="buttons">
                      <IconButton>
                        <ShoppingCartIcon />
                      </IconButton>
                      <IconButton>
                        <PersonIcon />
                      </IconButton>
                      <IconButton>
                        <MailIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </ul>
            </nav>
          </Grid>
        </Grid>
      </header>
      <div className="min-head">
        <ul
          style={{
            marginTop: 0,
            display: "flex",
            width: "100%",
            backgroundColor: "#fff",
            padding: "10px 0",
          }}
        >
          {[
            "Sculptures",
            "Prints",
            "Photography",
            "Paintings",
            "Artists",
            "Artworks",
            "Inspiration",
          ].map((item, idx) => (
            <li
              key={idx}
              style={{
                borderBottom: "1px solid #dcd4d4ff",
                padding: "0 12px", // padding افقي متحكم فيه
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
