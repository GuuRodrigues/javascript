import { useState } from 'react'

function Form() {
    
    function efetuarCadastro(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }
    
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    function addCart() {
        setValor(valor + 1)
    }

    const [valor, setValor] = useState(0)

    return(
        <>
        <h1>Meu Cadastro</h1>
        <form onSubmit={efetuarCadastro}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" placeholder="Digote o seu nome" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Senha: </label>
                <input type="password" id="password" name="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <input type="submit" value = "Cadastrar"/>
            </div>
        </form>
        { /* testando masi useState*/ }
        <div>Quantidade de produtos no carrinho: <b>{valor}</b></div>
        <button onClick={addCart}>Adicionar +1 no carrinho</button>

        </>
    )
}

export default Form