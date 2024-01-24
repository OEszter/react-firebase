import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase-config"

function Todos() {
	const [todos, setTodos] = useState(null)

	useEffect(() => {
		const todosCollection = collection(db, "todos")

		getDocs(todosCollection)
			.then(querySnapshot => {
				/* const todosDocs = []
				querySnapshot.docs.forEach(doc => todosDocs.push(doc.data()))
				console.log(todosDocs) */

				const todosData = querySnapshot.docs.map(doc => doc.data())
				setTodos(todosData)
			})
	}, [])

	return (
		<div className="todos">
			{todos
				?
				todos.map((todoData, index) => <p key={index}>{todoData.todo}</p>)
				:
				"loading..."
			}
		</div>
	)
}

export default Todos