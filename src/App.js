import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar, Box, Card, Container, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { FavoriteBorder } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
 appBar:{
   background:"#fff"
 },
 hero:{
   backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.pinimg.com/736x/02/8d/76/028d76bbed1e325e2ece7f2acd16269b.jpg')`,
   height:"500px",
   backgroundPosition:"center",
   backgroundSize:"cover",
   position:"relative",
   display:"flex",
   justifyContent:"center",
   alignItems:"center",
   color:"#fff",
   fontSize:"4rem"
   
 },
 blogContainer:{
   paddingTop:theme.spacing(3),
 },
 BlogTitle:{
   fontWeight:800,
   paddingBottom:theme.spacing(3),
 },
 card:{
   maxWidth:"100%",
 },
 media:{
   height:240,
 },
 CardActions:{
   display:"flex",
   margin:"0 10px",
   justifyContent:"space-between"
 },
 CardBox:{
   display:"flex",
 }
}));


function App() {
  const classes=useStyles();
  return (
    <div className="App">
     <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            React Project Material ui Responsive PC & Mobile
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box >React Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogContainer}>
      <Typography variant="h4" className={classes.BlogTitle}>
            Articles
          </Typography>
          <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                              <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image="https://s1.1zoom.me/big0/626/Dogs_Autumn_Siberian_Husky_Foliage_536937_1280x853.jpg"
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
  
  داستانی زیبا(مناظره سگ با گرگ)
                            </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          سگ نگاه خنده داری به گرگ کرد و گفت،،، آهویت را ربودم،،،
آیا باز هم میگویی گرگها برترند؟؟؟
تواگرعرضه داشتی آهویت را حفظ میکردی…!!!
گرگ،لبخندی زدو گفت،،،
من ( خدای ) غرورم
رقیب ببینم نمیجنگم …
پا رویه عشقو احساسم میگذارم ومیدان راخالی میکنم
آهویی که به سگ چشمک بزند!!! لیاقت ندارد زیر سایه (( گرگ )) زندگی کند
حقش آن است خوراک همان سگ شود
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.CardActions}>
                              <Box className={classes.CardBox}>
                                    <Avatar src="https://roozaneh.net/wp-content/uploads/2019/09/-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-%DA%AF%D8%B1%DA%AF-6-e1567418311238.jpg"/>
                                      <Box ml={2}>
                                      <Typography  variant="subtitle2" component="p">
                                  jaber Batoii
  
                            </Typography>
                                      <Typography  variant="subtitle2" color="textSecondary" component="p">
                                  May 3,2021
  
                            </Typography>
                                      </Box>
                              </Box>
                                      <Box>
                                            <FavoriteBorder/>
                                          <BookmarkBorderIcon/>
                                        
                                      </Box>
                      </CardActions>
                    </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image="https://www.imagesplatform.com/mohsin_site/uploads/2019_09_18/d3ad1e5325048c76.jpg"
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
  
  داستانی زیبا(مناظره سگ با گرگ)
                            </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          سگ نگاه خنده داری به گرگ کرد و گفت،،، آهویت را ربودم،،،
آیا باز هم میگویی گرگها برترند؟؟؟
تواگرعرضه داشتی آهویت را حفظ میکردی…!!!
گرگ،لبخندی زدو گفت،،،
من ( خدای ) غرورم
رقیب ببینم نمیجنگم …
پا رویه عشقو احساسم میگذارم ومیدان راخالی میکنم
آهویی که به سگ چشمک بزند!!! لیاقت ندارد زیر سایه (( گرگ )) زندگی کند
حقش آن است خوراک همان سگ شود
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.CardActions}>
                              <Box className={classes.CardBox}>
                                    <Avatar src="https://www.imagesplatform.com/mohsin_site/uploads/2019_09_18/d3ad1e5325048c76.jpg"/>
                                      <Box ml={2}>
                                      <Typography  variant="subtitle2" component="p">
                                  jaber Batoii
  
                            </Typography>
                                      <Typography  variant="subtitle2" color="textSecondary" component="p">
                                  May 3,2021
  
                            </Typography>
                                      </Box>
                              </Box>
                                      <Box>
                                      <FavoriteBorder/>
                                          <BookmarkBorderIcon/>

                                        
                                      </Box>
                      </CardActions>
                    </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image="https://s1.1zoom.me/big0/626/Dogs_Autumn_Siberian_Husky_Foliage_536937_1280x853.jpg"
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
  
  داستانی زیبا(مناظره سگ با گرگ)
                            </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          سگ نگاه خنده داری به گرگ کرد و گفت،،، آهویت را ربودم،،،
آیا باز هم میگویی گرگها برترند؟؟؟
تواگرعرضه داشتی آهویت را حفظ میکردی…!!!
گرگ،لبخندی زدو گفت،،،
من ( خدای ) غرورم
رقیب ببینم نمیجنگم …
پا رویه عشقو احساسم میگذارم ومیدان راخالی میکنم
آهویی که به سگ چشمک بزند!!! لیاقت ندارد زیر سایه (( گرگ )) زندگی کند
حقش آن است خوراک همان سگ شود
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.CardActions}>
                              <Box className={classes.CardBox}>
                                    <Avatar src="https://www.oiseaux.net/photos/frederic.pelsy/images/pic.epeiche.frpe.1g.jpg"/>
                                      <Box ml={2}>
                                      <Typography  variant="subtitle2" component="p">
                                  jaber Batoii
  
                            </Typography>
                                      <Typography  variant="subtitle2" color="textSecondary" component="p">
                                  May 3,2021
  
                            </Typography>
                                      </Box>
                              </Box>
                                      <Box>
                                      <FavoriteBorder/>
                                          <BookmarkBorderIcon/>

                                        
                                      </Box>
                      </CardActions>
                    </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image="https://www.oiseaux.net/photos/frederic.pelsy/images/pic.epeiche.frpe.1g.jpg"
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
  
  داستانی زیبا(مناظره سگ با گرگ)
                            </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          سگ نگاه خنده داری به گرگ کرد و گفت،،، آهویت را ربودم،،،
آیا باز هم میگویی گرگها برترند؟؟؟
تواگرعرضه داشتی آهویت را حفظ میکردی…!!!
گرگ،لبخندی زدو گفت،،،
من ( خدای ) غرورم
رقیب ببینم نمیجنگم …
پا رویه عشقو احساسم میگذارم ومیدان راخالی میکنم
آهویی که به سگ چشمک بزند!!! لیاقت ندارد زیر سایه (( گرگ )) زندگی کند
حقش آن است خوراک همان سگ شود
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.CardActions}>
                              <Box className={classes.CardBox}>
                                    <Avatar src="data:image/jpeg;base64,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"/>
                                      <Box ml={2}>
                                      <Typography  variant="subtitle2" component="p">
                                  jaber Batoii
  
                            </Typography>
                                      <Typography  variant="subtitle2" color="textSecondary" component="p">
                                  May 3,2021
  
                            </Typography>
                                      </Box>
                              </Box>
                                      <Box>
                                      <FavoriteBorder/>
                                          <BookmarkBorderIcon/>
                                          
                                         
                                        
                                      </Box>
                      </CardActions>
                    </Card>
              </Grid>
          </Grid>
      </Container>
    </div>
  );
}

export default App;
