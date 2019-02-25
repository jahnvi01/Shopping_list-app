import React,{Component} from 'react';
import {connect} from 'react-redux';
class list extends Component{

handleitem=()=>{
     var name=document.getElementById("data").value;
 var item={
      name:name
 }
   
this.props.add(item);
 
}

componentDidMount=()=>{

    this.props.get();
}
    render(){
        var items=this.props.items;
 
   var names=items.map((item)=>{
        return <div key={item.id} className="d-flex"><li className="list-item">{item.name}</li>
        
        <button type="submit" id="del" onClick={()=>this.props.remove(item.id)}>del</button></div>
        });
return(
   
        
<div className="col-md-12 add">
<div className="input">
<input type="text" placeholder="add item" id="data"/>
<button type="submit" id="adddata" onClick={()=>this.handleitem()}>add</button>
</div>
<br />
<br />
<ul className="list">{names}

</ul>
</div>
);
    }
    }

    function mapStateToProps(state){
            return {items:state.items};
    }
    function mapDispatchToProps(dispatch){
        return{
            get:()=>{
                return fetch('api/items')
                .then(response=>response.json())
                .then(data=>dispatch({type:"get",payload:data}))
              
            },

            add:(item)=>{
        
            console.log(item.name);
            return fetch('/api/items',{method:"post", headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },body:JSON.stringify(item)})
            .then(response=>dispatch({type:"add",payload:item}))
            },
            remove:(id)=>{
                console.log(id);
                return fetch('/api/items/'+id,{method:"delete",body:id})
                .then(response=>dispatch({type:"remove",payload:id}))
            
            }
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(list);