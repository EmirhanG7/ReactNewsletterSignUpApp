

export default function Subscribe({ email, setEmail, isFormSubmitted, setFormSubmit }) {
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const formObj = Object.fromEntries(data.entries());
        setEmail(formObj.email)
        
        if(email !== "") {
            setFormSubmit(true)
        }
    }
    console.log(email)

    return (
        <div className="subscribes">
            <h5>Email address</h5>
            <form onSubmit={handleSubmit}>
                <label><input type="email" name="email" className="inputemail" placeholder="email@company.com" autoComplete="off" /></label>
                <br />
                <button type="submit" >Subscribe to monthly newsletter</button>
            </form>
        </div>
    )
}
