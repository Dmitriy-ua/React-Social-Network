import React from "react";

class ProfileStatus extends React.Component{
    state = {
        editMode: false
    }

    activateEditMode () {  // Shode be called with .bind(this)
        this.setState({ editMode: true  } )
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false  } )
    }

   render () {
       return (
           <div>
               { !this.state.editMode &&
                   <div className='profileStatus'>
                        <p onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</p>
                   </div>
               }
               { this.state.editMode &&
                   <div>
                       <input autoFocus={true} onBlur={this.deactivateEditMode } type="text" value={this.props.status} />
                   </div>
               }
           </div>
       )
   }
}

export default ProfileStatus;