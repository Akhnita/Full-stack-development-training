function handleClick() {
    alert("button clicked");
}

function handleFormSubmit() {
    return (
        <div> 
            <button onClick={() => handleClick}>click</button>

            <br /> <br />

            <form onSubmit={() => handleFormSubmit()}>
                <label> Enter your name </label>
                <input type="string" required /> <br />

                <button> submit form </button>
            </form>
        </div>
    )
}

export { EventHandle }