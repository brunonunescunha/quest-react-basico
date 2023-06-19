import "./card.css"

const Card = ({paragraphs, color, textTransform}) => {
    return (
        <div className="card" style={{color: color, textTransform: textTransform}}>{paragraphs}</div>
    )
}

Card.defaultProps  = {
    color: "#ff6600",
    textTransform: "uppercase"
}

export { Card }