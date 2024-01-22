import { useState } from "react"
import { app } from "../firebase-config"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

function Form({ title }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleAction = () => {

        const auth = getAuth(app);

        if(title === "login") {
            console.log("login: ", email, password)
        } else if (title === "register") {
            console.log("register: ", email, password)

            createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res)
                sessionStorage.setItem('token', res._tokenResponse.refreshToken)
            })
        }
    }


  return (
      <form>
        <h3>{title} form</h3>

        <input type="text" autoComplete="off" placeholder="e-mail" onChange={event => setEmail(event.target.value)}/>
        {/* autoComplete - off: így nem akarja automatikusan kitölteni a korábban már beírt adatokat. Pl. a jelszónál. Ez jó lehet, de ost gyakorlunk, és hülyeségeket írunk csak bele */}

        <input type="password" autoComplete="off" placeholder="password" onChange={event => setPassword(event.target.value)}/>

        <button type="button" onClick={handleAction}>{title}</button>
    </form>
  )
}

export default Form