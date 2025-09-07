import Button from "@mui/material/Button";
import "./page.css";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
export default function Sales() {
  const [Art] = useState(() => [
    {
      image: "/G1.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Robert Bechtle",
      desc: "Arkansas Street (6), 2013 Crown Point Press",
      price: "US$5,500",
    },
    {
      image: "/G2.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Robert Bechtle",
      desc: "Arkansas Street (6), 2013 Crown Point Press",
      price: "US$5,500",
    },
    {
      image: "/G3.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Robert Bechtle",
      desc: "Arkansas Street (6), 2013 Crown Point Press",
      price: "US$5,500",
    },
    {
      image: "/G4.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Robert Bechtle",
      desc: "Arkansas Street (6), 2013 Crown Point Press",
      price: "US$5,500",
    },
    {
      image: "/G5.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Robert Bechtle",
      desc: "Arkansas Street (6), 2013 Crown Point Press",
      price: "US$5,500",
    },
    {
      image: "/G6.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Robert Bechtle",
      desc: "Arkansas Street (6), 2013 Crown Point Press",
      price: "US$5,500",
    },
  ]);
  const [likedItems, setLikedItems] = useState({});

  const handelClick = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <>
      <div className="head"></div>
      <div className="cards" style={{ marginTop: "90px" }}>
        <h1 style={{ marginLeft: "10px" }}>Curators’</h1>
        <h3 style={{ marginLeft: "10px", color: "#555", fontWeight: "400" }}>
          Picks Fresh standout works handpicked by our chief curator.
        </h3>
        <Grid container spacing={2}>
          {Art.map((item) => (
            <Grid
              item
              size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
              key={item.id}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  width: "100%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div
                className="title"
                style={{
                  textAlign: "left",
                  marginTop: "10px",
                  lineHeight: "1.5",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "1rem" }}>{item.Title}</h3>

                  {/* أيقونة الLike خاصة بكل عنصر */}
                  <div style={{ position: "relative" , display:"flex" , alignItems:"center" , gap:8}}>
                    {likedItems[item.id] ? (
                      <FavoriteIcon
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => handelClick(item.id)}
                        aria-label="unlike"
                      />
                    ) : (
                      <FavoriteBorderIcon
                        style={{ color: "gray", cursor: "pointer" }}
                        onClick={() => handelClick(item.id)}
                        aria-label="like"
                      />
                    )}
                    <IconButton>
                      <ShoppingCartIcon />
                    </IconButton>
                  </div>
                </div>

                <p
                  style={{
                    margin: "6px 0",
                    color: "#868686",
                    fontSize: "0.8rem",
                  }}
                >
                  {item.desc}
                </p>
                <h4 style={{ marginTop: "8px", fontWeight: 600 }}>
                  {item.price}
                </h4>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
