import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export const WorkContent = (props) => {
  const { works } = props;

  return (
    <Grid container spacing={4} pb={1}>
      {
        works.map((work, index) => (
          <Grid item sm={6} lg={4} key={index}>
            <Card>
              <CardActionArea href={work.url}>
                <CardMedia
                  component="img"
                  image={work.image}
                  alt={work.name}
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {work.name}
                </Typography>
                <Typography variant="subtitle1" component="h3" color="text.secondary">
                  ・こだわりポイント
                </Typography>
                <Typography variant="body2" color="text.secondary" height={{ sm: "100vh" }} sx={{ maxHeight: 120, overflow: "scroll" }}>
                  {work.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={work.github} startIcon={<GitHubIcon />
                }>GitHub</Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  );
}