import { useState, useEffect } from 'react';
import { list } from '../services/apiService';
import { Link } from 'react-router-dom';

const Students = () => {
    
const [students, setStudents] = useState([]);
    
    useEffect(() => {
        list('students', data => {
            setStudents(data);
        })
    }, [])

    return (
    <div className='container'>
    <h2>Students</h2>
    <table className='table table-striped table-bordered'>
        <thead className='table-primary'>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Year of Birth</th>
                <th>Address</th>
                <th>
                    <Link className='link' to='/students/0'>Add New</Link>
                </th>
            </tr>
        </thead>
        <tbody>
            {students.map(c => (
             <tr key={c._id}>
                 <td>{c.firstName}</td>
                 <td>{c.lastName}</td>
                 <td>{c.yearOfBirth}</td>
                 <td>{c.adress}</td>
                 <td>
                     <Link className='link' to={`/students/${c._id}`}>Edit</Link>
                 </td>
             </tr>
            ))}
        </tbody>
    </table>
    </div>
    )
}



export default Students;