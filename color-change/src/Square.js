const Square = ({ colorValue='Empty Color Value' }) => {
    return(
        <section
            className="square"
            style={{ backgroundColor: colorValue }}
        >

        <p>{colorValue ? colorValue : "Empty Value"}</p>
        </section>
    )
}

export default Square