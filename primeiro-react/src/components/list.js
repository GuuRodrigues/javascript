import Item from "./item"

function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1985}/>
                <Item marca='Lamborghini' ano_lancamento={1964}/>
                <Item marca= 'BMW' /> 
                <Item /> 
            </ul>
        </>
    )
}

export default List