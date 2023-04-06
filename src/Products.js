import styled from "styled-components"
import React from 'react'
import menu from"./Item"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useState } from "react";

const Containers=styled.div`
padding:20px;
display:flex;
flex-wrap :wrap;
justify-content :space-between;
`;
const Info = styled.div`
opacity: 0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.2);
display:flex;
z-index:3;
align-items:center;
justify-content:center;
transition : all 0.5s ease;
cursor:pointer;
`;

const Container =  styled.div`
      flex:1;
      margin: 5px;
      height:350px;
      min-width : 280px;
      display:flex;
      align-items:center;
      justify-content:center;
      background-color:  #ADD8E6;
      position: relative;
      
    &:hover ${Info}{
       opacity:1;
    }
    
`;
const Circle = styled.div`
width:270px;
height:270px;
border-radius:50%;
background-color:white;
position:absolute;

`;

const Image= styled.img`
    height :75%;
    z-index:2;
    border-radius:100%;
`;

const Icon = styled.div`
width:10%;
height:10%;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:2%;
 &:hover
{
  transform: scale(1.1);
  background-color: #e9f5f5;
}

`;


const Products = () => {
   const [list, setList] = useState([]);
   const [selectedValue, setSelectedValue] = useState("low");
   const [myVariable, setMyVariable] = useState(null);

   function addItemToList(currentList, newItem) {
      return [...currentList, newItem];
    }
    
   function handleAddItem(item) {
     const newList = addItemToList(list, item);
    
         setList(newList);
        
    }
    const moveToTop = (index) => {
      const selectedItem = list[index];
      list.splice(index, 1);
      setList([selectedItem, ...list]);
    }

    function removeItem(itemToRemove) {
      const updatedList = list.filter(item => item !== itemToRemove);
      setList(updatedList);
    }
    function handleSelectChange(item, newValue) {
    item.priority=newValue;
    return {...item,newValue};
        }
      
        
   /* function handleSelectChange(id,priority) {
     
         menu.map((item,index) => {
            if (item.id === id) {
               setSelectedValue(priority);
              alert(priority);
            }
            
          });
       
      }*/
     
      

    
    function handlePriorityChange(id, priority) {
      setList(list.map((item,index) => {
         if (item.id === id) {
          
          return {...item,priority };
         }
         return item;
       }));
     }
  
  
  const menu =[
    {
       id :1,
       img:"https://pk-live-21.slatic.net/kf/S6c3446ba00944018a497fcdc5ba18d88o.jpg",
       title :"Smart Watch",
       price:1500,
       max:10,
       priority:"low",
    
     
       
       
    },
    
    {
       id :2,
       img:"https://static-01.daraz.pk/p/4f64b3c0d29a475536d72e2c3a032814.jpg",
       title :"Lip Gloss ",
       price:300,
       max:8,
       priority:"low",
     
    
    },
    {
       id :3,
       img:"https://static-01.daraz.pk/p/2366933b00b1bc233fbb49578ede4af2.jpg",
       title :"Handbag Set of 4 for Women",
       price:3800,
       max:15,
       priority:"low",
    },
    
    {
       id :4,
       img:"https://static-01.daraz.pk/p/d39dca4ed78c98f15164a0035ae23da1.png",
       title :"Smart Watch for Women",
       price:4000,
       max:10,
       priority:"low",
       
    },
    {
       id :5,
       img:"https://static-01.daraz.pk/p/e8275a869a4780d2984d01d962157cfc.jpg",
       title :"Iphone cover",
       price:1500,
       max:5,
       priority:"low",
      
    },
    {
       id :6,
       img:"https://static-01.daraz.pk/p/b6852f866778f950b7a643c44dff98c1.jpg",
       title :"Choker Necklace with Earrings",
       price:2000,
       max:7,
       priority:"low",
       
    },
    {
       id :7,
       img:"https://static-01.daraz.pk/p/32e31cbda6d38aa3ae4c6198223b3aa4.jpg",
       title :"Miss Rose LipStick",
       price:800,
       max:10,
       priority:"low",
     
    
    },
    {
       id :8,
       img:"https://static-01.daraz.pk/p/f6654c69db3d88e12183d3a1347947ca.jpg",
       title :"Pack of Six Beautiful LipSticks ",
       price:1000,
       max:9,
       priority:"low",
    },
     
   ];
   
   
   
  return (

    <Containers>

      
     
      {menu.map((item,index) =>{
        return(
         <Container>
         <Circle/>
         <Image src ={item.img}/>
         
              <Info>
                   <Icon class ="success"  onClick={() => handleAddItem(item)} >
                   
                   <ShoppingCartOutlined/>
                   </Icon>
                   <Icon>
                   <SearchOutlined/>
                     </Icon>
                     <Icon>
                     <FavoriteBorderOutlined />
                    
                     </Icon>
                  
                
                 
           
          <select value={this} onChange={e => handleSelectChange(item, e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
               </Info>
             
        </Container>
       
         
        )
       
        })}

<section className ="py-4 container">
      
    <div  className="row justify-content-center">
        <div className="col-12">
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<h1>WISHLIST</h1>
        <table className="table table-light table-hover">
            <tbody>
        {list.map((item,index)=>{
            return(
              
            <tr>
               
            <td>
               <img src={item.img} style={{height :'6rem'}}/>
            </td>
            <td>{item.title}</td>
            <td>{item.price}</td>
           
            <td><button className ="btn btn-info ms-2" onClick={() => moveToTop(index)}>Move to Top</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className ="btn btn-info danger-2" onClick={() => removeItem(item)}>Remove</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select value={item.priority}  onChange={e => handlePriorityChange(item.id, e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
            </td>
          
         </tr>
        )


        })}

      </tbody>
        </table>
        
        </div>
      
    </div>
    </section>
    </Containers>
    
  )
  
      }
      
export default Products
