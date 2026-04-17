import React from "react";

function Register() {
return (
<>
<div className="container m-auto">
    <form >
        <label name="FirstName">First Name</label>
        <input id="FirstName" type="Text" placeholder="Jon"  required/>
        <label name="LastName">Last Name</label>
        <input id="LastName" type="Text" placeholder="Jones" />
        <label name="PhoneNumber">Phone Number</label>
        <input id="PhoneNumber" type="number" placeholder="+1 437 911 1669" required/>
        <label name="MailId">Email Id</label>
        <input type="mail" id="MailId" placeholder="jonjones@gmail.com" required/>
        <button type="submit">Submit </button>
         </form>
</div>
</>)
}

export default Register;