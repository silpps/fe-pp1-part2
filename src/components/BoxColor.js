function BoxColor(props) {
    const backgroundColor = `rgb(${props.r}, ${props.g}, ${props.b})`;
    const boxColorHexa = `#${props.r.toString(16).padStart(2, '0')}${props.g.toString(16).padStart(2, '0')}${props.b.toString(16).padStart(2, '0')}`.toUpperCase();
  
    return (
      <div className="boxColorTask" style={{backgroundColor}}>
        <p className="boxColorText">rgb({props.r}, {props.g}, {props.b})</p>
        <p className="boxColorHexa">{boxColorHexa}</p>
      </div>
    );
  }
  
  export default BoxColor;