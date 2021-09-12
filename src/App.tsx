import './App.css';
import { createStyles, ThemeProvider } from '@material-ui/styles';
import { AppBar, Button, Card, CardContent, Container, createTheme, Grid, IconButton, makeStyles, Paper, Theme, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  const theme = createTheme()
  const n = 8
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Prevision
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container style={{color:"white",backgroundColor:"#121212",height:"100vh"}}>
        <Grid container direction="column" alignItems="center" justify="center" spacing={0} style={{paddingTop:"20px"}}>
          <Grid item xs={3} >
            <Typography variant="h5" gutterBottom>
              Bahia Blanca, BA
            </Typography>
            <Typography variant="h5" gutterBottom>
              Nublado
            </Typography>
            <Typography>
              Actualizado a las 11:39 PM
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h5" style={{paddingTop:"20px"}}>
          Diario
        </Typography>
        <Grid container direction="row" alignItems="center" justify="center" spacing={1} style={{paddingTop:"20px"}}>
          {[...Array(n)].map((e, i) => (
            <Grid item xs={2}>
              <Paper elevation={1} style={{color:"white",backgroundColor:"#121212"}}>
                <Typography>
                  dom 12
                </Typography>
                <Typography>
                  21
                </Typography> 
              </Paper>
            </Grid>)
          )}
        </Grid> 
      </Container>
    </ThemeProvider> 
  );
}

export default App;
