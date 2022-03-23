import React,{useEffect,useState} from 'react'
import actionImg from './Images/DashboardImages/Vector.png'
import profileImg from './Images/DashboardImages/m 5.png'

import './styles/Dashboard.css'

function Dashboard() {

const [Data,setData] = useState([])
const [Loading,setLoading] = useState(true)

useEffect(()=>{

const raw=[

{
  pic:'mmm',
  action:'lorem lorem lorem lorem lorem',
  name:'mayank arya',
  date:'May 26,2019',
  priority:'high',
  updatedDaysAgo:'2 days ago',
  updatedDate:'on 24 05 2022',
  updatedTime:'9:30 pm'
},

{
  pic:'mmm',
  action:'lorem lorem lorem lorem lorem',
  name:'mayank arya',
  date:'May 26,2019',
  priority:'low',
  updatedDaysAgo:'2 days ago',
  updatedDate:'on 24 05 2022',
  updatedTime:'9:30 pm'
},

{
  pic:'mmm',
  action:'lorem lorem lorem lorem lorem',
  name:'mayank arya',
  date:'May 26,2019',
  priority:'high',
  updatedDaysAgo:'2 days ago',
  updatedDate:'on 24 05 2022',
  updatedTime:'9:30 pm'
},

{
  pic:'mmm',
  action:'lorem lorem lorem lorem lorem',
  name:'mayank arya',
  date:'May 26,2019',
  priority:'high',
  updatedDaysAgo:'2 days ago',
  updatedDate:'on 24 05 2022',
  updatedTime:'9:30 pm'
},

{
  pic:'mmm',
  action:'lorem lorem lorem lorem lorem',
  name:'mayank arya',
  date:'May 26,2019',
  priority:'high',
  updatedDaysAgo:'2 days ago',
  updatedDate:'on 24 05 2022',
  updatedTime:'9:30 pm'
},

{
  pic:'mmm',
  action:'lorem lorem lorem lorem lorem',
  name:'mayank arya',
  date:'May 26,2019',
  priority:'normal',
  updatedDaysAgo:'2 days ago',
  updatedDate:'on 24 05 2022',
  updatedTime:'9:30 pm'
},

{
  pic:'mmm',
  action:'lorem lorem lorem lorem lorem',
  name:'mayank arya',
  date:'May 26,2019',
  priority:'high',
  updatedDaysAgo:'2 days ago',
  updatedDate:'on 24 05 2022',
  updatedTime:'9:30 pm'
},

{
  pic:'mmm',
  action:'lorem lorem lorem lorem lorem',
  name:'mayank arya',
  date:'May 26,2019',
  priority:'high',
  updatedDaysAgo:'2 days ago',
  updatedDate:'on 24 05 2022',
  updatedTime:'9:30 pm'
}

]


setData(raw)
setLoading(false)

},[])


const apply=(text)=>{

  console.log('hhh',text)

if(text === 'HIGH'){

  return 'red'

}
if(text === 'NORMAL'){

  return 'blue'

}
if(text === 'LOW'){

  return 'orange'

}

}


  return (
        <div className="dashboard-wrapper d-flex">
        
        <div className="sidebar">
        
        <div className="brand-name">

        <div className="logo">
        
        </div>

       <h4> Dashboard kit  </h4> 

        </div>

        <div className="links">
          <div className="link">
           <div className="logo"></div>
           <div className="heading">Overview</div>
          </div>
          <div className="link">
           <div className="logo"></div>
           <div className="heading">Tickets </div>
          </div>
          <div className="link">
           <div className="logo"></div>
           <div className="heading">Ideas</div>
          </div>
          <div className="link">
           <div className="logo"></div>
           <div className="heading">Contacts</div>
          </div>
          <div className="link">
           <div className="logo"></div>
           <div className="heading">Agents</div>
          </div>
          <div className="link">
           <div className="logo"></div>
           <div className="heading">Articles</div>
          </div>
          <div className="link">
           <div className="logo"></div>
           <div className="heading">Settings</div>
          </div>
          <div className="link">
           <div className="logo"></div>
           <div className="heading">Subscription</div>
          </div>
        </div>

        </div>

        <div className="main">
              <div className="header d-flex justify-content-between">
                   <div className="heading first-half">  <h4>  Tickets </h4>  </div>
                   <div className="heading second-half d-flex justify-content-between">
                     <div className="icons d-flex">
                     <div className="logo">logo</div>
                     <div className="logo">logo</div>
                     </div>
                     <div className="profile-section d-flex">
                       mayank arya
                       <div className="profile-img"></div>
                     </div>
                   </div>
              </div>



              {


                Loading ? 'loading' :            <div className="table-box table-responsive">



                <div className="table-header d-flex justify-content-between">
                <div className="fisrt-half">
                All tickets
                </div>
                <div className="second-half ">
                  <div className="tools d-flex">
                    <div className="tool">
                        <div className="icon"></div>
                         Sort
                    </div>
                    <div className="tool">
                        <div className="icon"></div>
                         Sort
                    </div>
                  </div>
                </div>
              </div>
                <table class="table">
  
              
                <thead>
                  <tr>
                    <th scope="col">Ticket details</th>
                    <th scope="col"> Customer name </th>
                    <th scope="col"> Date </th>
                    <th scope="col"> Priority  </th>
                    <th scope="col">  </th>
                  </tr>
                </thead>
                <tbody>
  
                  {
                    Data.length > 0 ?  Data.map((ET)=>{
return              (  <tr>
  
                        <td > 
      
                        <div className="d-flex align ">
                               <div className="image-box">
                               <img src={profileImg} alt="" />
                               </div>
                               <div className="info">
                               <p className='p' > {ET.action}</p>
                               <small className='small'  > {ET.updatedDaysAgo}</small>
                               </div>
                        </div>
                        
                        </td>
                        <td>
                        <div className="">
                         <p className='p'> {ET.name} </p> 
                        <small className='small'   > {ET.updatedDate} </small>
                        </div>

             
                        
                        
                        </td>
                        <td> 
                        <div className="">
                        <p className='p'> {ET.date}   </p>  
                                  <small className='small'   > {ET.updatedDate} </small>
                        </div>
                   
                      
                        </td>
                        <td  > <span className={apply(ET.priority.toUpperCase())} >  {ET.priority}  </span> </td>
                        <td> <div className="action">
                        
                        <img src={actionImg} alt="" />
                        </div> </td>
                      </tr>
                      )

                    })  : 'no tickets'

                  } 
         
                </tbody>
              </table>
                </div>



              }

   

          
        </div>
        
        
        </div>
  )
}

export default Dashboard