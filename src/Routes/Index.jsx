import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home/Index'
import About from '../Pages/About/Index'
import Blog from '../Pages/Blog/Index';
import Classes from '../Pages/Classes/Index';
import Oils from '../Pages/Oils/Index';
import Faq from '../Pages/Faq/Index';


function Routes() {
  return (
    <Switch>
      <Route path="/about" component={ About } />
      <Route exact path="/" component={ Home } />
      <Route path="/blog" component={ Blog } />
      <Route path="/classes" component={ Classes } />
      <Route path="/oils" component={ Oils } />
      <Route path="/faq" component={ Faq } />
    </Switch>
  );
}

export default Routes;