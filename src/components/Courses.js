import { useState, useEffect } from 'react';
import { list } from '../services/apiService';
import { Link } from 'react-router-dom';

const Courses = () => {
    
const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        list('courses', data => {
            setCourses(data);
        })
    }, [])

    return (
    <div className='container'>
    <h2>Courses</h2>
    <table className='table table-striped table-bordered'>
        <thead className='table-primary'>
            <tr>
                <th>Course Name</th>
                <th>Points</th>
                <th>
                    <Link className='link' to='/courses/0'>Add New</Link>
                </th>
            </tr>
        </thead>
        <tbody>
            {courses.map(c => (
             <tr key={c._id}>
                 <td>{c.courseName}</td>
                 <td>{c.coursePoints}</td>
                 <td>
                     <Link className='link' to={`/courses/${c._id}`}>Edit</Link>
                 </td>
             </tr>
            ))}
        </tbody>
    </table>
    </div>
    )
}

export default Courses;