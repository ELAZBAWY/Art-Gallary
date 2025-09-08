import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "./syle.css";
import "swiper/css";
import "swiper/css/navigation";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

export default function Featured() {
  const items = [
    {
      image: "/Gallary-1.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Discover, collect, and sell extraordinary NFTs",
      desc: "Turn art into a daily habit. Follow artists, explore stories, and get personalized recommendations, all in one place.",
    },
    {
      image: "/Gallary-2.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "The Armory Show 2025",
      desc: "Discover highlights from the New York art fair. Browse Works and explore upcoming exhibitions.",
    },
    {
      image: "/Gallary-3.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "Curators’ Picks: Seoul Art Week",
      desc: "Explore our favorite works from fairs happening across the South Korean capital.",
    },
    {
      image: "/Gallary-4.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "The Selfie: A Modern Portrait",
      desc: "Take a candid look at self-portraiture in the digital age with curated works.",
    },
    {
      image: "/Gallary-5.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "The Selfie: A Modern Portrait",
      desc: "Take a candid look at self-portraiture in the digital age with curated works.",
    },
    {
      image: "/Gallary-6.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "The Selfie: A Modern Portrait",
      desc: "Take a candid look at self-portraiture in the digital age with curated works.",
    },
    {
      image: "/Gallary-7.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "The Selfie: A Modern Portrait",
      desc: "Take a candid look at self-portraiture in the digital age with curated works.",
    },
    {
      image: "/Gallary-8.jpg",
      alt: "Gallary Image",
      id: uuidv4(),
      Title: "The Selfie: A Modern Portrait",
      desc: "Take a candid look at self-portraiture in the digital age with curated works.",
    },
  ];
  return (
    <>
      <div
        style={{
          marginTop: "50px",
          borderTop: "1px solid rgb(194, 194, 194)",
          paddingTop: "50px",
        }}
      >
        <div
          style={{
            textAlign: "left",
            width: "100%",
          }}
        >
          <h1 style={{ marginLeft: "10px" }}>Featured</h1>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            style={{ width: "100%", padding: "20px 0" }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            speed={1500}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <Card
                  sx={{
                    boxShadow: "none",
                    borderRadius: 0,
                    height: "100%",
                  }}
                >
                  {/* الصورة */}
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      aspectRatio: "4/3", // يخلي الشكل زي المثال
                      objectFit: "cover",
                    }}
                  />

                  {/* النصوص */}
                  <CardContent sx={{ padding: "12px 0" }}>
                    {/* التصنيف */}
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "6px",
                      }}
                    >
                      {item.Title}
                    </Typography>

                    {/* العنوان */}
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{
                        fontWeight: "600",
                        lineHeight: 1.3,
                        fontSize: "0.8rem",
                        color: "text.secondary",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          background: "black",
          border: "2px solid",
          marginTop: "50px",
          marginBottom: "90px",
        }}
      ></div>
    </>
  );
}
