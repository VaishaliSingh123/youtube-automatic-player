import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppStyle from './AppStyle';
import youTubeImage from './images.jpg';
import YouTube from 'react-youtube';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      videoUrl:undefined,
      videoId:undefined
    };
    this.handleChangeSearchInput=this.handleChangeSearchInput.bind(this);
    this.handleSubmitAction=this.handleSubmitAction.bind(this);
  }
  handleChangeSearchInput(event){
    if(event){
      this.setState({videoUrl:event.currentTarget.value});
      console.log("videoUrlf: ",this.state.videoUrl);
    }

  }
  handleSubmitAction(event){
    const {videoUrl}=this.state;
    if(event && videoUrl && videoUrl.length>0){
      //var videoUrlString = "https://www.youtube.com/watch?v=m39qvipTCU8";
      var index = videoUrl.indexOf("?v=");
      var videoIdString=videoUrl.substring(index+3,index+3+11);
      this.setState({videoId:videoIdString});
    }
    event.preventDefault();

  }
  render(){
    const {classes}=this.props;
    const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        autoplay: 1
      }
    };
  return (
  <div >
    <div className={classes.header}>
      <div className={classes.headingWidth}>
        <h1 className={classes.headingStyling}>You Tube Automatic Player</h1>
      </div>
      <div className={classes.logoWidth}>
        <img className={classes.logoStyling} src={youTubeImage} alt={"logo"} />
      </div>
    </div>
    <div className={classes.videoBodySection}>
      <div className={classes.videoPlayerSection}>
      <YouTube
        videoId={this.state.videoId}
        opts={opts}
      />
      </div>
      <div className={classes.searchSection}>
      <form className={classes.formStyle} onSubmit={this.handleSubmitAction}>
          <input type="text" placeholder="Search..." name="search2" className={classes.inputStyle} onChange={this.handleChangeSearchInput} />
          <button type="submit" className={classes.buttonStyle}>Search</button>
      </form>
      </div>
    </div>
</div>
  );
  };
};

export default withStyles(AppStyle)(App);
