import { useState } from 'react'
function CreateAccountForm() {
//username,number,email, password
let [name, setName] = useState("");
let [number, setNumber] = useState("");
let [email, aetEmail] = useState("");
let [password, setPassword] = useState("");

function handleSubmit(e){
    alert(`form submitted \n your name is ${name}, number is ${number}, email is ${email}, password is${password}`)
    //save user detail in our database
}

return(
    <div>
        <form onSubmit={(e) => handleSubmit(e) }>
            <label>Enter your name</label>
            <br/>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
                <br />

                <label> Enter your number </label>
                <br />
                <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}/>
                <br />

                <label>Enter your email</label>
                <br />
                <input 
                type="eamil"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <br />

                <label>Enter your password</label>
                <br />
                <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <br />

                <button type="submit">submit button</button>
        </form>
    </div>
)
}

export default CreateAccountForm;