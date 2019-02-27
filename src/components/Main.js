import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SlideShow from './SlideShow';
import PopularGrid from './PopularGrid';
import TopRatedGrid from './TopRatedGrid';
import NowPlayingGrid from './NowPlayingGrid';

class Main extends React.Component {
    render() {
        return (
            <Switch>
              <Route exact path="/" component={SlideShow}/>
              <Route path="/popular" component={PopularGrid}/>
              <Route path="/top-rated" component={TopRatedGrid}/>
              <Route path="/now-playing" component={NowPlayingGrid}/>
            </Switch>
        )
    }
} 


export default Main;