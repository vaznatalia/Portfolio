import React from 'react'
import '../assets/button.css'
import { Link } from 'react-router-dom';





function Botao(){
   
 return(
 <div class="HomeButton">
   <Link to='/intro' class="btn cta" >SEE MORE...</Link>
</div>
    )
}
export default Botao

