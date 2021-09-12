import React from "react";
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
    textDecoration: "none"
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { title, content, image, height, href } = props;

  return (
    <Fade in timeout={4000}>
        <a  className={classes.link} href={href}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={title}
                height={height}
                image={image}
                title={title}
              />
              <CardContent>
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
        </a>
    </Fade>
  );
}
