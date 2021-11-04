import React, {useState} from "react";

export default function Form(props) {
    const [name, setName] = useState('');

    function handleSubmit(e) {
        if (e.target[0].defaultValue) {
            e.preventDefault();
            props.onSubmitAddTask(name);
            setName("");
        }
        else {
            console.log("Please type text!");
        }
        return false;
    }
    
    function handleChange(e) {
        setName(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label_lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}