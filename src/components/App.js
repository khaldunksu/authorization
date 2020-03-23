import React from 'react';
import '../App.css';
import Fire from "./Fire";
import {
  HashRouter,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import Home from "./Home"
import News from "./News"
import Profile from "./Profile"
import Login from "./Login"

class App extends React.Component  {
  constructor(props){
    super(props)
    this.state={
      user:{}
    }
  }

  componentDidMount(){
    this.authListener()
  }
  
  authListener(){
    Fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }
 render(){
   return (
    <div className="App">
      
       <HashRouter>
       <div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
    <nav>
    <ul >
      <li><NavLink to="/" exact>Home</NavLink></li>
      <li><NavLink to="/news"  exact>News</NavLink></li>
      <li><NavLink to="/profile" exact>Profile</NavLink></li>
      <li><NavLink to="/login" exact>Login</NavLink></li>
    </ul>
</nav>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
    <button className="navbar-toggler" type="button"
     data-toggle="collapse" data-target="#navbarToggleExternalContent" 
     aria-controls="navbarToggleExternalContent" aria-expanded="false" 
     aria-label="Toggle navigation" style={{outline:'none'}}>
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/news" component={News}/>
          {this.state.user?
          (<Route  exact path="/profile" component={Profile}/>):
          (<Route  exact path="/login" component={Login}/>)}
        </Switch>
    </HashRouter>
    </div>
  );
}
}

export default App;
