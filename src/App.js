import "./tailwind.css"
import Button from "./components/Button/button"

function App() {

  const todos =['todo1','todo2','todo3']
  return (
  //  <main id="main" className="test">
  //    <h1 style={{color:'red'}} onClick={()=>alert('naber')}>merhaba</h1>
  //    <label htmlFor="search">Arama</label>
  //    <input type="text" id="search"></input>
  //    <ul>
  //     {todos.map((todo,index)=>(
  //       <li key={index}>
  //       {todo}
  //     </li>
  //     ))}
      
  //    </ul>
  //  </main>
  <div style={{padding:20}}>
  <Button  text="asdasd" />
  <Button  text="asdasd" variant="success"/>
  <Button  text="asdasd" variant="danger"/>
  <Button  text="asdasd" variant="warning"/>
  </div>
  );
}

export default App;
