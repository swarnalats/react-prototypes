import React from 'react';
import Table from './Table'


export default (props) => { 
    
    const students = [
        {
            name:"Swarna",
            course:"Criminal Justice",
            grade:100
        },
        {
            name:"Anusha",
            course:"Accounting",
            grade:100
        },
        {
            name:"Venu",
            course:"Mind",
            grade:100    
        }
    ];

    return (<div className = "container">
                        <h1>Student Grade Table </h1>
                        <Table data={students} /> 
                    </div> 
)  
}

