import React, {Component} from 'react';
import { connect } from 'react-redux';
import { SelectText } from '../actions';
class TextList extends React.Component{
    
    renderList(){
        return this.props.text.map((tex)=>{
           return(
              <div key={tex.title}>
                   <div> 
                        {tex.title}
                        {}
                        {/* <button onCilck={()=>{this.props.SelectedText(tex)}} >Click me</button> */}
                   </div>
              </div>
           );
        });
    }

    render(){
        console.log(this.props);
        return <div>{this.renderList()}</div>
    }
}

const mapStateToProps = state=>{
console. log(state);  
     return {text : state.text};
} 

export default connect(mapStateToProps, {SelectText} )(TextList);