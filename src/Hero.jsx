import { Grid } from "@mui/material";
import Header from "./header";
import "./syle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

const SliderSection = () => {
  const items = [
    {
      image: "/Hero-1.jpg",
      alt: "Hero Image",
      id: uuidv4(),
      Title: "Discover, collect, and sell extraordinary NFTs",
      desc: "Turn art into a daily habit. Follow artists, explore stories, and get personalized recommendations, all in one place.",
    },
    {
      image: "/Hero-2.jpg",
      alt: "Hero Image",
      id: uuidv4(),
      Title: "The Armory Show 2025",
      desc: "Discover highlights from the New York art fair. Browse Works and explore upcoming exhibitions.",
    },
    {
      image: "/Hero-3.jpg",
      alt: "Hero Image",
      id: uuidv4(),
      Title: "Curators’ Picks: Seoul Art Week",
      desc: "Explore our favorite works from fairs happening across the South Korean capital.",
    },
    {
      image: "/Hero-4.jpg",
      alt: "Hero Image",
      id: uuidv4(),
      Title: "The Selfie: A Modern Portrait",
      desc: "Take a candid look at self-portraiture in the digital age with curated works.",
    },
  ];

  return (
    <>
      <Header />

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        style={{ width: "100%" }}
        speed={1200}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Grid
              container
              spacing={4}
              alignItems="center"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
            >
              {/* الصورة */}
              <Grid item size={{ xs: 10, sm: 2, md: 6 }}>
                <img
                  src={item.image}
                  alt={item.Title}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Grid>

              {/* النصوص */}
              <Grid
                item
                size={{ xs: 10, sm: 2, md: 6 }}
                sx={{ textAlign: "center" }}
              >
                <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
                  {item.Title}
                </h1>
                <h4
                  style={{
                    fontWeight: "400",
                    marginTop: "10px",
                    lineHeight: "1.8",
                    fontSize: "1rem",
                    fontFamily: "Be Vietnam",
                    fontWeight: "100",
                    color: "#555",
                  }}
                >
                  {item.desc}
                </h4>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    marginTop: "20px",
                    width: { xs: "100%", md: "50%" },
                    backgroundColor: "#fff",
                    padding: "10px 30px",
                    fontSize: "16px",
                    textTransform: "capitalize",
                    color: "#000",
                    boxShadow: "none",
                    border: "1px solid #000",
                  }}
                >
                  Browse Work
                </Button>
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderSection;
