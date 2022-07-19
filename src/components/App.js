import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  function handleFormSubmit(formData){
    setTasks([...tasks, formData])
  }

  function handleCategorySelected(e){
    //console.log(e.target.textContent)

    // TODO: Update classNames using state
    e.target.className = "selected"
    setSelectedCategory(e.target.textContent)
  }

  const categorisedTasks = tasks.filter(task => {
    if (selectedCategory === "All") return true

    return task.category === selectedCategory
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategorySelected={handleCategorySelected}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleFormSubmit}/>
      <TaskList tasks={categorisedTasks }/>
    </div>
  );
}

export default App;
