const FiltrarPokemon = ({filter,setFilter}) => {
    return (
        <form>
            <div>
                <label htmlFor="type">Type:     </label>
                <select name="type" id="type" value={filter} onChange={(e)=> setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Electric">Electric</option>
                    <option value="Fire">Fire</option>
                    <option value="Water">Water</option>
                </select>
            </div>
        </form>
    )

}


export default FiltrarPokemon;

