import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

export default function ReadMore() {
  const articles = [
    {
      id: 1,
      title: "Will Yu: vida, filosofía y arte",
      image:
        "https://www.artrewards.net/assets/uploads/media-uploader/large-165162732-132007188932608-1876524907694937477-n1754295039.jpg",
    },
    {
      id: 2,
      title: "Laberinto. El arte como ritual y memoria",
      image:
        "https://www.artrewards.net/assets/uploads/media-uploader/large-sdfgv1753867697.png",
    },
    {
      id: 3,
      title: "Ha Tran: Poética de la fotografía",
      image:
        "https://www.artrewards.net/assets/uploads/media-uploader/large-viet-ha-tran-artist-studio-21754556900.jpg",
    },
    {
      id: 4,
      title: "Another Amazing Artwork",
      image:
        "https://www.artrewards.net/assets/uploads/media-uploader/large-dsc-06761753091326.jpg",
    },
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          background: "black",
          border: "2px solid",
          marginTop: "50px",
          marginBottom: "90px",
        }}
      ></div>
      <div className="read-more" style={{ margin: "50px" }}>
        <h1>Articles</h1>
        <div className="cards">
          <Grid
            container
            spacing={4}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {articles.map((article, index) => (
              <Grid key={article.id} item xs={12} sm={6} md={4}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{
                      width: "100%",
                      height: "480px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "15px", textAlign: "center" }}>
                    <h2 style={{ color: "#555" }}>{article.title}</h2>
                    <Button
                      variant="outlined"
                      style={{
                        color: "#555",
                        border: "1px solid #000000cf",
                        padding: "10px 20px",
                        borderRadius: "0px",
                      }}
                    >
                      Read More
                    </Button>
                  </div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
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
