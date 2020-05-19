import React from "react";

export const TInput = (props) =>{
    return <div >
        <form onSubmit={props.handleSubmit}>
        <div class="input-group mb-3" >
            <input type={props.type} id={"description"}  className="form-control text-capitalize" placeholder="To Do Tasks"
            aria-label="Recipient's username" onChange={props.handleChange}/>
           <div class="input-group-append">
            <button  type="submit"  class="btn btn-outline-success" placeholder="add" > add  </button>
            </div>          
        </div>
        </form>
    </div>
}