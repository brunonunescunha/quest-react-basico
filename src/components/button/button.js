import "./button.css"

const showButtonText = (texButton) => {
    alert(`A label desse botão é (${texButton})`)
}

const Button = ({texButton}) => {
    return (
        <button className="btn" onClick={ () => showButtonText(texButton)}>{texButton}</button>
    )
}

Button.defaultProps = {
    texButton:"Botão sem texto"
}

export  { Button }