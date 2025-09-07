import Button from "@mui/material/Button";
import "./page.css";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function TrendArtists() {
  const [items] = useState(() => [
    {
      image: "/G8.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "THE  GALLERY",
      desc: "East Hampton",
    },
    {
      image: "/G9.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Lithium",
      desc: "Women-Owned",
    },
    {
      image: "/G10.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Galactic Panther",
      desc: "Vilnius, New York, Berlin, Palanga ",
    },
    {
      image: "/G11.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Peter Harrington Gallery",
      desc: "Vilnius, New York, Berlin, Palanga ",
    },
    {
      image: "/G4.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Tumo Gallery",
      desc: "Vilnius, New York, Berlin, Palanga ",
    },
    {
      image: "/G6.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Robert Bechtle",
      desc: "Arkansas Street (6), 2013 Crown Point Press",
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
      {" "}
      <div>
        <div
          style={{
            width: "100%",
            background: "black",
            border: "2px solid",
            marginTop: "50px",
            marginBottom: "90px",
          }}
        ></div>
        <h1 style={{ marginLeft: "10px" }}>Trending Artists on Art Gallary</h1>
        <div className="cards" style={{ marginTop: "50px"  , marginRight:"20px" , marginLeft:"20px"}}>
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid
                item
                size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
                key={item.id}
                sx={{ display: "flex", flexDirection: "column" }}
              >
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
                    <h3 style={{ margin: 0, fontSize: "1rem" }}>
                      {item.Title}
                    </h3>
                    <div style={{ position: "relative" }}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handelClick(item.id)}
                        style={{
                          color: likedItems[item.id] ? "white" : "black",
                          borderColor: likedItems[item.id] ? "red" : "grey",
                          background: likedItems[item.id] ? "red" : "white",
                          textTransform: "none",
                          fontWeight: likedItems[item.id] ? "bold" : "normal",
                        }}
                      >
                        {likedItems[item.id] ? "Following" : "Follow"}
                      </Button>
                    </div>
                  </div>

                  <p
                    style={{
                      margin: "6px 0",
                      color: "#555",
                      fontSize: "0.8rem",
                    }}
                  >
                    {item.desc}
                  </p>
                  <h4 style={{ marginTop: "8px", fontWeight: 600 }}>
                    {item.price}
                  </h4>
                </div>
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
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
