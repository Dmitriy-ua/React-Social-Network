import React from "react";

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, PrevState) {
        if( prevProps.status !== this.props.status ) {
            this.setState( {
                status: this.props.status
            })
        }
    }

    activateEditMode () {  // Should be called with .bind(this)
        this.setState({ editMode: true  } );
        window.status = this.state.status;
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false  } );
        this.props.updateStatus( this.state.status );
    }

    onStatusChange = (e) => {
        let newStatus = e.currentTarget.value;

        this.setState( {
            status: newStatus
        });

    }

   render () {
       return (
           <div>
               { !this.state.editMode &&
                   <div className='profileStatus'>
                        <span onDoubleClick={ this.activateEditMode.bind(this) } style={ {minHeight: '20px'} }>{this.props.status}</span>
                   </div>
               }
               { this.state.editMode &&
                   <div>
                       <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode } type="text" value={this.state.status} />
                   </div>
               }
           </div>
       )
   }
}

export default ProfileStatus;