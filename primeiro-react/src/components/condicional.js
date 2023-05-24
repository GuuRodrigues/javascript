import {useState} from "react"

function Condicional() {
    
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }
    
    return (
        <>
        <h2>Cadastre seu E-mail</h2>
        <form>
            <input type="email" placeholder="Digite seu e-mail..." onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" onClick={enviarEmail}>Enviar E-mail</button>
            {userEmail && (
                <div>
                    <p>O E-mail do usuário é: {userEmail}</p>
                </div>
            )}
        </form>
        </>
    )
}

export default Condicional