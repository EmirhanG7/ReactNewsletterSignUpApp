import { useState } from "react";

export default function Subscribe({ email, setEmail, isFormSubmitted, setFormSubmit }) {
    const [isFormEntered, setFormEntered] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        if (e.target.email.value === "") {
            setFormEntered(true)
            setFormSubmit(false)
            return
        }
        
        setEmail(e.target.email.value)
        setFormEntered(false)
        setFormSubmit(true)
    }

    function handleSearch(e) {
        e.preventDefault()
        if (e.target.searchInput.value === "") {
            setError(true)
            return
        }
        setSearchWord(e.target.searchInput.value)
        setError(false)
    }


    console.log(email)

    return (
        <div className="subscribes">
            <h5>Email address</h5>
            <form onSubmit={handleSubmit}>
                <label><input type="email" name="email" className="inputemail" placeholder="email@company.com" autoComplete="off" /></label>
                <br />
                <button type="submit" >Subscribe to monthly newsletter</button>
                {isFormEntered && <p className="error">Please enter a valid email address</p>}

            </form>
        </div>
    )
}
