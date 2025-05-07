import { useEffect, useState } from "react";
import axios from "axios";

import ReactDOM from 'react-dom/client'

const API = "https://your-backend-url.onrender.com"; // Replace with Render backend URL

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     axios.get(`${API}/tasks`).then(res => setTasks(res.data));
//   }, []);

//   const addTask = async () => {
//     await axios.post(`${API}/tasks`, { title });
//     setTitle("");
//     const res = await axios.get(`${API}/tasks`);
//     setTasks(res.data);
//   };

//   const toggleTask = async (id, completed) => {
//     await axios.put(`${API}/tasks/${id}`, { completed: !completed });
//     const res = await axios.get(`${API}/tasks`);
//     setTasks(res.data);
//   };

//   return (
//     <div>
//       <h1>My Tasks</h1>
//       <input value={title} onChange={(e) => setTitle(e.target.value)} />
//       <button onClick={addTask}>Add</button>
//       <ul>
//         {tasks.map(t => (
//           <li key={t.id}>
//             <input type="checkbox" checked={t.completed} onChange={() => toggleTask(t.id, t.completed)} />
//             {t.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

const App = ()=>{
  return(
    <div>Hello World</div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)

// export default App;
