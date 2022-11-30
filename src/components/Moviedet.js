import { Link } from "@mui/material"
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router';


export const Moviedet=({movies})=>{
    const {id} =useParams()
    console.log(id)
    const info = movies.find(el=> el.id == id)
    const navigate = useNavigate();
    function handleClick() {
        navigate('/')
      }
    return(
        <>
         <br/>
         <span>{info.title}</span>
         <br/>
         <br/>
         <span>{info.description}</span>
         <br/>
         <br/>
         <span>{info.URL}</span>  
         <br/>
         <button onClick={handleClick}>go back</button>     
        </>
    )
}