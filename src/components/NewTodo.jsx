import { useState } from "react"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

function NewTodo() {
    const [todo, setTodo] = useState("")

    const addTodo = async () => {
        console.log(todo)
        
        try {
            const todosCollection = collection(db, "todos")

            const docRef = await addDoc(todosCollection, {
              todo: todo,    
            });
            console.log("Document written with ID: ", docRef.id);
            /* const res = await deleteDoc(docRef) //itt most ki is törölném ezzel azt, amit most adtam hozzá :-)
            console.log(res) */
            
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return (
        <div className="new-todo">
            <input
                type="text"
                placeholder="write todo"
                value={todo}
                onChange={event => setTodo(event.target.value)}
            />
            <button onClick={addTodo}>add todo</button>
        </div>
    )
}

export default NewTodo;