import React from "react";

function Register() {
return (
<>
<div className="rgr-div">
    <form >
        <label name="FirstName">First Name</label>
        <input className="form-control" id="FirstName" type="Text" placeholder="Jon"  required/>
        <label name="LastName">Last Name</label>
        <input className="form-control" id="LastName" type="Text" placeholder="Jones" />
        <label name="PhoneNumber">Phone Number</label>
        <input className="form-control" id="PhoneNumber" type="number" placeholder="+1 437 911 1669" required/>
        <label name="MailId">Email Id</label>
        <input className="form-control" type="mail" id="MailId" placeholder="jonjones@gmail.com" required/>

        <button className="form-control btn" type="submit">Submit </button>
         </form>
</div>
</>)
}

export default Register;