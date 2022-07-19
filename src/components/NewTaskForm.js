import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const displayCategories = categories.filter(category => {
    return category !== "All"
  })

  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })

  function onCLickSubmit(e, formData){
    e.preventDefault()
    onTaskFormSubmit(formData)
  }

  function handleOnChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  return (
    <form className="new-task-form" onSubmit={(e) => onCLickSubmit(e, formData)}>
      <label>
        Details
        <input type="text" name="text" onChange={e => handleOnChange(e)} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={e => handleOnChange(e)} value={formData.category}>
          {displayCategories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
