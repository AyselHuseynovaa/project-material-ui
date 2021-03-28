import {BrowserRouter,Switch,Route} from  "react-router-dom"
import Notes from "./components/Notes"
import Create from "./components/Create"
import {createMuiTheme, ThemeProvider} from "@material-ui/core"
import {purple} from "@material-ui/core/colors"
import Layout from "./components/Layout"


const theme=createMuiTheme({
palette:{
  primary:{
    main:"#fefefe"
  },
  secondary:purple
},
typography:{
  fontFamily:"revert"
}
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
        <div className="App">
<Layout>
      <Switch>
        <Route  exact  path="/" component={Notes}/>
        <Route path="/create"  component={Create}/>
      </Switch>
      </Layout>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
