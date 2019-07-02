import React from 'react';
import MoviesContainer from './movie_container';

//import ContactList from './contact_list';
//import ContactForm from './contact_form';

//PART OF COMPONENT PROTOTYPE
// import Stopwatch from './stopwatch'
// export default (props) => {
//     return (<div className="container">
//            <h1 className="text-center">Stopwatch</h1>
//            <Stopwatch />
//     </div>)
// }  

// export default () => {
//     return (
//         <div className="container" >
//             <h1 className="text-center">Address Book</h1>
//             <div className="row">
//                 <div className="col-4">
//                     <ContactForm />
//                 </div> 
//                 <ContactList />
//             </div>    
//         </div>
//     )
// }

export default props => {
    return (
        <div className="container">
            <h1 className="text-center">Axios Demo</h1>
            <MoviesContainer />
        </div>
    )
}


