import { useState } from 'react'

function SimpleForm() {
    //we use useState functtion to initialize state/memory
    let[name, setName] = useState("")

    function handleSubmit(e) {
        //preventDefault function preventing webpage from reload
        e.preventDefault();
        alert('form is submitted your name=' + name)
        //save form response

    }
    return (
        <div>
            <h1> your name is = {name} </h1>
            <form
                on onSubmit={(e) => handleSubmit(e)}>
                    <h2>Enter your name </h2>
                        <input
                        type="text"
                        placeholder="Your name"
                        required
                        //value attribute is tracking change in input area 
                        value={name}

                        //onChange attribute is tracking change in input area and inside we are updating name state
                        onChange={(e) => setName(e.target.value)}
                        />

                        <button type="submit">submit</button>
                  
                </form>
        </div>
    )
}
export { SimpleForm }