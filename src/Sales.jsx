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
  // items تولد مرة واحدة عند أول رندر
  const [items] = useState(() => [
    {
      image: "/Gallary-12.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Jess Allen",
      desc: "everything dissolves, 2025 NINO MIER GALLERY",
      price: "US$13,000–US$16,000",
    },
    {
      image: "/Gallary-2.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Amy Lincoln",
      desc: "Sun with Trees (Yellow Monochrome), 2025 Taymour Grahne Projects",
      price: "US$60,000",
    },
    {
      image: "/Gallary-11.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Roger Herman",
      desc: "Large vessel, 1 hole, 1 handle, scar, 2023 NINO MIER GALLERY",
      price: "US$18,000–US$22,000",
    },
    {
      image: "/Gallary-4.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Matteo Massagrande",
      desc: "Il giardino di Hajòs, 2015 Pontone Gallery",
      price: "US$7,000",
    },
    {
      image: "/Gallary-5.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Liv Tandrevold Eriksen",
      desc: "WindBody, 2025 QB Gallery",
      price: "US$8,000–US$12,000",
    },
    {
      image: "/Gallary-9.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Robert Bechtle",
      desc: "Arkansas Street (6), 2013 Crown Point Press",
      price: "US$5,500",
    },
  ]);

  // حالة الإعجابات لكل عنصر محفوظة حسب id
  const [likedItems, setLikedItems] = useState({});

  const handelClick = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <h1 style={{ marginLeft: "10px" }}>At Auction</h1>

        <div className="head">
          <div>
            <Button>New Works for You</Button>
          </div>
          <div>
            <Button>New Works by Artists You Follow</Button>
          </div>
          <div>
            <Button>Recently Viewed</Button>
          </div>
        </div>
        <div className="cards" style={{ marginTop: "50px" }}>
          <Grid container spacing={2}>
            {items.map((item) => (
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
                    <h2 style={{ margin: 0, fontSize: "1rem" }}>
                      {item.Title}
                    </h2>

                    {/* أيقونة الLike خاصة بكل عنصر */}
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
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
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
