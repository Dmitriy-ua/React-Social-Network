import React from "react";

const ProfileStatusWithHooks = (props) => {

    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }
    //
    // componentDidUpdate(prevProps, PrevState) {
    //     if( prevProps.status !== this.props.status ) {
    //         this.setState( {
    //             status: this.props.status
    //         })
    //     }
    // }
    //
    // activateEditMode () {  // Should be called with .bind(this)
    //     this.setState({ editMode: true  } );
    //     window.status = this.state.status;
    // }
    //
    // deactivateEditMode = () => {
    //     this.setState({ editMode: false  } );
    //     this.props.updateStatus( this.state.status );
    // }
    //
    // onStatusChange = (e) => {
    //     let newStatus = e.currentTarget.value;
    //
    //     this.setState( {
    //         status: newStatus
    //     });
    //
    // }

   return (
       <div>
           {
               <div className='profileStatus'>
                    <p style={ {minHeight: '20px'} }>{props.status}</p>
               </div>
           }
           { false &&
               <div>
                   <input  />
               </div>
           }
       </div>
   )
}


export default ProfileStatusWithHooks;