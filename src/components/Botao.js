import React from 'react'
import '../assets/button.css'





function Botao(props){
    const handleClick = () => {
        window.location = '/intro';
      };
    return(
        <div class="HomeButton">
 <a class="btn cta" onClick={handleClick} href="/">So Click here!</a>
</div>
    )
}
export default Botao

