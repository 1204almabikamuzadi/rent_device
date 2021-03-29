import React,{Component} from 'react';



class Field extends Component{
render(){
    const {name,value,onChange,children}=this.props;
    return(
        <div
         className="form-group">
         <label htmlFor={name}>{children}</label> 
         <input className="form-control" type="text" name={name}  onChange={onChange} value={value} id={name} /> 
        </div>
    );
} 
}
export default Field;
