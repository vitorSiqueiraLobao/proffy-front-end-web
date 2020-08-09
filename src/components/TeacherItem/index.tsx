import React from 'react'

import './styles.css'
import wppIcon from '../../assets/images/icons/whatsapp.svg'
function TeacherItem(){
    return(                
    <article className="teacher-item">
                
    <header>
        <img src="https://avatars1.githubusercontent.com/u/37356514?s=460&u=b3f5c947d51b158e0abcd7dec4e2333a2ba6db8b&v=4" alt=""/>
        <div>
            <strong>Vítor Lobão</strong>
            <span>Psicologia</span>
        </div>
        </header>
        <p>
            Apaixonado por ajudar pessoas com problemas, comecei no ramo após chegar a beira da loucura jogando fifa.
        </p>
        <footer>
            <p>Preço/hora <strong>R$80,00</strong></p>
            <button type="button">
                <img src={wppIcon} alt=""/>
                Entrar em contato
            </button>
        </footer>
    
    </article>)
}
export default TeacherItem