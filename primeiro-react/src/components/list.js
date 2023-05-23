import Item from "./item"

function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca={'Ferrari'}/>
                <Item marca={'Lamborghini'}/>
            </ul>
        </>
    )
}

export default List