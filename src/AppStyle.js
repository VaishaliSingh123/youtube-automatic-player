const AppStyle=theme=>({
  header: {
    overflow: "hidden",
    backgroundColor: "#f1f1f1",
    padding: "10px 5px",
    display:"flex",
    justifyContent:"flex-end"
 
  },
  headingWidth:{
   width:"70%",
   display:"flex",
    justifyContent:"flex-start",
    marginLeft:"10px"    
  },
  logoWidth:{
    width:"30%",
    display:"flex",
    justifyContent:"flex-end",
    marginRight:"5vh"   
  },
  logoStyling:{
    width:"33vh",
    height:"11vh"
  },
  headingStyling:{
    fontFamily: "cursive",
    color: "crimson"
  },
  videoBodySection:{
    overflow: "hidden",
    padding: "10px 5px",
    display:"flex",
    marginTop:"2vh",
    width:"100%"
  },
  videoPlayerSection:{
    width:"50%",
    display:"flex",
     justifyContent:"flex-start",
     marginRight:"2px",
     marginLeft:"10px"
  },
  searchSection:{
    width:"50%",
    display:"flex",
    justifyContent:"end",
    marginRight:"5vh",
    marginLeft:"2px" ,
  },
  inputStyle: {
    padding: "10px",
    fontSize: "17px",
    border: "1px solid grey",
    float: "left",
    width: "69%",
    background: "#f1f1f1"
  }, 
  buttonStyle: {
    float: "left",
    width: "23%",
    padding: "10px",
    background: "#2196F3",
    color: "white",
    fontSize: "17px",
    border: "1px solid grey",
    borderLeft: "none",
    cursor: "pointer"
  },
  formStyle:{
    width:"100%"
  }

});
export default AppStyle;