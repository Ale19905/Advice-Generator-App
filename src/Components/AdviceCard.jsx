import { useState } from "react";

export default function AdviceCard(){
    
    const [advice, setAdvice] = useState('Tap the dice button to get an advice')
    const [adviceID, setAdviceID] = useState()

    function handleClick(){
        fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(result => {
            setAdvice(result.slip.advice)
            setAdviceID(result.slip.id)
        })
        .catch(error => console.log('error', error));
        
    }
    
    return (
        <div className="Advice_card">
            <p className="text text_id">ADVICE #{adviceID}</p>
            <p className="text">{advice}</p>
            <img src="/pattern-divider-desktop.svg" alt=""  width={280}/>
            <button className="Btn" onClick={handleClick}>
                <img src="/icon-dice.svg" alt="imagen del boton"/>
            </button>
        </div>
    )
}
