import { Box, Button, ButtonGroup, Chip, Container, Divider, Paper, Slider, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { ColorLens } from '@mui/icons-material';



const TabBar=({resolution,setResolution,setColor,textHeight,txt,altcolor})=>{
const [index,setIndex]=useState(0);
const[text,setText]=useState(" ");

const family=['cursive','fantasy','inherit','initial','monospace','revert','revert-layer','sans-serif','serif','unset']

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
    {index===0 &&
(<Container sx={{bottom:60,position:'fixed',display:'flex',flexDirection:'row',justifyContent:'space-around',height:50,alignItems: 'center',}}>
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
        bottom:50,
        flexDirection:'column',
        position:'fixed',
        rowGap:-2,
       }}>



<div
style={{
  

    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    columnGap:8,
    padding:25,
   
    width:'100%',
    // backgroundColor: 'blue',
    justifyContent:'center'
}}>

<ButtonGroup variant="outlined" aria-label="outlined primary button group" size='small' color='inherit'>
  <Button onClick={()=>{txt.setWeight('lighter')}}>lighter</Button>
  <Button onClick={()=>{txt.setWeight('normal')}}>normal</Button>
  <Button onClick={()=>{txt.setWeight('bold')}}>Bold</Button>
</ButtonGroup>
</div>
<Divider />
<div
style={{
  

    display:'flex',
    alignItems:'left',
    flexDirection:'row',
    columnGap:5,
    width:'100%',
    justifyContent:'flex-start',
    padding:25,
    
}}>
    
    <Chip label="text-align"/>
    
    <Slider defaultValue={0}
min={1}
max={25}
step={1}
onChange={(e)=>{txt.setTxtAlign(e.target.value)}}


/>
</div>



<Divider/>
<div

style={{
    display:'flex',
    alignItems:'left',
    flexDirection:'row',
    columnGap:5,
    width:'100%',
    justifyContent:'flex-start',
    padding:25,}}

>
<Chip label="text-size"/>
<Slider defaultValue={13}
min={1}
max={30}
step={1}
onChange={(e)=>{txt.setTxtSize(e.target.value)}}


/>
</div>
   <TextField
          id="filled-multiline-flexible"
          sx={{
            width:"90%",
         

          }}
          label="your text"
          multiline
          maxRows={4}
          value={text}
          onChange={(e)=>{e.preventDefault()
            setText(e.target.value);
            txt.setThread(text)}}
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
        bottom:60,
        flexDirection: 'column',
        position:'fixed'
       }}>

        <div style={{display:'flex',width:'100%',flexDirection:'column'}}>
        <div>
        <Chip label="vertical align"  />
        </div>
        <Slider 
        defaultValue={30} 
        step={10}
         marks
          min={-60} 
          max={110} 
          onChange={
            (e)=>{
        textHeight.setTxtHeight(e.target.value)
                }

                }/>
        </div>
        <Divider variant='fullWidth'/>
        <div style={{display:'flex',width:'100%',flexDirection:'column'}}>
        <div>
        <Chip label="horizontal align"  />
        </div>
        <Slider 
        defaultValue={30} 
        step={10}
         marks
          min={-50} 
          max={100} 
          onChange={
            (e)=>{
        textHeight.setTxtWidth(e.target.value)
                }

                }/>
        </div>
        <Divider />
       </Container>
    )
}
{
    index===1 &&
    (
   <Container sx={{
    display:'flex',
    flexDirection:'row',justifyContent: 'space-between',
    flexWrap:'wrap',
    alignItems: 'center',
    rowGap:4,
    bottom:60,
    position: 'fixed'
   }}>

   {family.map((ele,index)=>{
        return(
            <div key={index} style={{
                backgroundColor:'whitesmoke',
                padding:10,
                borderRadius:4,
                
                boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
                cursor:'pointer'
            }}
            
            onClick={()=>{

txt.setTxtFamily(ele);
console.log(txt.txtFamily)

            }}
            
            >
       
            <Typography variant='h6' 
            
            sx={{
                 fontFamily:ele,
                 fontSize:15
     
            }}
          
            
            >{ele}</Typography>
         </div>
        )


   })}

   </Container>
    )
}





{
    index===2 &&
    (
        <div style={{
            position:'fixed',bottom:60,
            display:'flex',
            flexDirection:'row',justifyContent: 'space-between',
            alignItems:'center',
            columnGap:20
        }}>
                <div style={{
                    display:'flex',
                    flexDirection:'row',justifyContent: 'space-between',
                    alignItems:'center'
                }}>
                  
            <label for="color2">
            <Chip label="surface Color"/>
            </label>
            <input type="color" id='color2' style={{display:'none'}} onChange={(e)=>{
            
            setColor(e.target.value);
            altcolor.setBoxColor(e.target.value);
            
            }}/>
            </div>
            <div style={{
                    display:'flex',
                    flexDirection:'row',justifyContent: 'space-between',
                    alignItems:'center'
                }}>
                  
            <label for="color">
            <Chip label="text Color"/>
            </label>
            <input type="color" id='color' style={{display:'none'}} onChange={(e)=>{
            
           altcolor.setTxtColor(e.target.value)
            
            }}/>
            </div>
            <div style={{
                    display:'flex',
                    flexDirection:'row',justifyContent: 'space-between',
                    alignItems:'center'
                }}>
                  
            <label for="color4">
            <Chip label="box Color"/>
            </label>
            <input type="color" id='color4' style={{display:'none'}} onChange={(e)=>{
            
            altcolor.setBoxColor(e.target.value)
            
            
            }}/>
            </div>
        </div>
    )
}
     <Box sx={{bottom:10,position:'fixed',zIndex:20,maxWidth: { xs: "100%", sm: 480 }}}>
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





   
   
   </div>
)




}

export default TabBar;