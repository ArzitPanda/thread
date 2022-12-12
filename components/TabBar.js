import { Box, Container, Paper, Slider, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { ColorLens } from '@mui/icons-material';



const TabBar=({resolution,setResolution,setColor,textHeight})=>{
const [index,setIndex]=useState(0);
const[text,setText]=useState(" ");



const handleRatio=(type)=>{

if(type===1)
{
    setResolution({
        width:200,height:200
    })
}
if(type===2)
{
    setResolution({
        width:200,height:267
    })
}
if(type===3)
{
    setResolution({
        width:200,height:356
    })
}



}



const handleChange=(event,value)=>{

setIndex(value);



}


return(
   <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center',}} >
     <Box sx={{bottom:10,position:'fixed',maxWidth: { xs: "100%", sm: 480 }}}>
            <Tabs
            
            value={index}
            variant="scrollable"
            onChange={handleChange}
            scrollButtons={true}
            allowScrollButtonsMobile
            
            
            >
                <Tab label="size"/>
                <Tab label="fonts"/>
                <Tab label="color"/>
                <Tab label="text"/>
                <Tab label="align"/>
                <Tab label="save"/>



            </Tabs>
            </Box>
{index===0 &&
(<Container sx={{position:'fixed',bottom:60,display:'flex',flexDirection:'row',justifyContent:'space-around',height:50,alignItems: 'center',}}>
<Paper elevation={4}

onClick={()=>{handleRatio(1)}}
sx={{width:60,
    height:30,
    borderRadius:2,
    textAlign: 'center',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    fontSize:10,
    backgroundColor:'black',
    color: 'white',
    }}>
    
    1 X 1
    
    
    
    </Paper>
    <Paper elevation={12}
onClick={()=>{handleRatio(2)}}

sx={{width:60,
    height:30,
    borderRadius:2,
    textAlign: 'center',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    fontSize:10,
     backgroundColor:'black',
    color: 'white',
    }}>
    
    3 X 4
    
    
    
    </Paper>
    <Paper elevation={12}
onClick={()=>{handleRatio(3)}}

sx={{width:60,
    height:30,
    borderRadius:2,
    textAlign: 'center',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    fontSize:10,
    backgroundColor:'black',
    color: 'white',
    }}>
    
   9 x 16
    
    
    
    </Paper>

</Container> 
)}


{
    index===3 &&
    (
       <Container sx={{
        display:'flex',
        alignItems:'center',
       }}>

   <TextField
          id="filled-multiline-flexible"
          sx={{
            width:"80%",
            bottom:60,
            position:'fixed'

          }}
          label="your text"
          multiline
          maxRows={4}
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          variant="filled"
        />

       </Container>
    )
}



{
    index===4 &&
    (
       <Container sx={{
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
       }}>

<Slider defaultValue={30} step={10} marks min={10} max={110} onChange={
(e)=>{
textHeight.setTxtHeight(e.target.value)
}

}/>
       </Container>
    )
}






{
    index===2 &&
    (
        <div style={{
            position:'fixed',bottom:60,
        }}>
                <div style={{
                    display:'flex',
                    flexDirection:'row',justifyContent: 'space-between',
                    alignItems:'center'
                }}>
                    <Typography variant="h6">color of surface</Typography>
            <label for="color">
<ColorLens fontSize='medium'/>
            </label>
            <input type="color" id='color' style={{display:'none'}} onChange={(e)=>{
            
            setColor(e.target.value)
            
            }}/>
            </div>
            <div style={{
                    display:'flex',
                    flexDirection:'row',justifyContent: 'space-between',
                    alignItems:'center'
                }}>
                    <Typography variant="h6">color of the text</Typography>
            <label for="color">
<ColorLens fontSize='medium'/>
            </label>
            <input type="color" id='color' style={{display:'none'}} onChange={(e)=>{
            
            setColor(e.target.value)
            
            }}/>
            </div>
        </div>
    )
}




   
   
   </div>
)




}

export default TabBar;