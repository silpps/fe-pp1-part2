

function CreditCard(props){
    const hiddenDigits = '•'.repeat(4);
    const lastFourDigits = props.number.slice(-4);
    return(
        
        <div className="creditCard"style={{backgroundColor: props.bgColor, color: props.color}}>
            <img className="creditCardType"src={props.type}/>
            <p className="creditCardNumber">&emsp;{hiddenDigits}  {hiddenDigits} {hiddenDigits} {lastFourDigits}</p>
            <p className="creditCardExpiration">Expires {props.expirationMonth}/{props.expirationYear}&emsp;&emsp; {props.bank}</p>
            <p className="creditCardOwner">{props.owner}</p>
        </div>
    )
}

export default CreditCard;