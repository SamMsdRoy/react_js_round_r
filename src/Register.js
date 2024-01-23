import React from "react"
export default function Register(){
    return (
        <>
        <div className="card col-lg-8 text-center border-box">
            <form>
                <div className="input-group m-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control"/>
                </div>
                <div className="input-group">
                <label className="label">Email</label>
                <input type="email" className="form-control"/>
                </div>
                <div className="input-group">
                <label className="label">Password</label>
                <input type="password" className="form-control"/>
                </div>
                <div className="input-group">
                <label className="label">Re-Password</label>
                <input type="text" className="form-control"/>
                </div>
                <div className="btn-group">
                    <input type="checkbox"/>
                    <button type="button" >Submit</button>

                </div>
            </form>
        </div>
        </>
    )
}