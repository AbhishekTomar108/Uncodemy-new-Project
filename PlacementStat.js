import React, {useEffect} from 'react'
import Axis from "../image/Axis_Bank_logo.svg.png"
import Cognizant from "../image/Cognizant's_logo.svg.png"
import IBM from "../image/IBM_logo.svg.png"
import TechMahindra from "../image/Tech_Mahindra_New_Logo.svg.png"
import Wipro from "../image/Wipro_Primary_Logo_Color_RGB.svg.png"
import Adobe from "../image/images.png"

const PlacementStat = () => {

  useEffect(()=>{
    let imageList  = document.getElementById('list');
    imageList.style.transform="translate3d(-300px,0,0)";
    imageList.style.transitionDuration="4s";
   
   let value = -300;
    imageList.addEventListener("transitionend", () => {
     
      console.log("running");
      if(value===(-2100))
      {
        value=-300;
        imageList.style.transform="translate3d("+value+"px,0,0)";
        imageList.style.transitionDuration="1s";
      }
      else{
        value = value-300;
        imageList.style.transform="translate3d("+value+"px,0,0)";
        imageList.style.transitionDuration="4s";

      }
    });

  },[1])
 
  return (
    <div className='placement-container'>

<div className='placement-box'>
        <div className='placement-box-left'>
            <h1><b>Placement</b> Stats</h1>
        </div>
        <div className='placement-box-right'>
            <span><b>2700+</b>
            Tech transitions</span>
            <span><b>12LPA</b>
            Exciting salaries</span>
            <span><b>44%</b>
            Average Salary Hike</span>
            <span><b>650+</b>
            Hiring Partners</span>
        </div>
        </div>

        <div className='company'>
        <h2>Companies that trust upGrad learners</h2>
        <div className='company-logo-moving'>
           <ul id="list">
            <li className=''><img src={Axis}/></li>
            <li className=''><img src={Cognizant}/></li>
            <li className=''><img src={TechMahindra}/></li>
            <li className=''><img src={Wipro}/></li>
            <li className=''><img src={TechMahindra}/></li>
            <li className=''><img src={IBM}/></li>
            <li className=''><img src={Adobe}/></li>
            <li className=''><img src={Cognizant}/></li>
            <li className=''><img src={IBM}/></li>
            <li className=''><img src={TechMahindra}/></li>
            <li className=''><img src={Axis}/></li>
            <li className=''><img src={Wipro}/></li>
            <li className=''><img src={Adobe}/></li>
            <li className=''><img src={Wipro}/></li>
            <li className=''><img src={Axis}/></li>
            <li className=''><img src={IBM}/></li>
            <li className=''><img src={Adobe}/></li>
            <li className=''><img src={Cognizant}/></li>
          
        
            
            </ul> 
        </div>
        </div>
    </div>
  )
}

export default PlacementStat