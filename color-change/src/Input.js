const Input = ({ colorValue, setColorValue })=>{
    return(
        <form
            onSubmit={(e)=>e.preventDefault()}>
                <label>Add Color Name</label>
                <input
                autoFocus
                type="Text"
                placeholder="Add Color Name"
                required
                value={colorValue}
                onChange={(e)=> setColorValue(e.target.value)}
                ></input>

            </form>
    )
}
export default Input