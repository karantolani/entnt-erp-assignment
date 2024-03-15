function Button({text, img, onClick = undefined}) {
    return (
        <button onClick={onClick}>
            {img}
            {text}
        </button>
    )
}

export default Button;