import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  link: {
    textDecoration: "none",
  },
  image: {
    objectFit: "contain",
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { title, content, image, height, contentHeight, href, contain } = props;

  return (
      <Link className={classes.link} href={href}>
        <Fade in timeout={4000}>
        <Card className={classes.root} elevation={0}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={title}
              height={height}
              image={image}
              title={title}
              classes={contain ? { img: classes.image } : {}}
            />
            <CardContent style={{padding:"10px", height: contentHeight}} >
              <Typography
                color="primary"
                gutterBottom
                variant="h5"
                component="h3"
              >
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Fade>
      </Link>
  );
}
