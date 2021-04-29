import { useEffect, useState } from 'react';
import { read, insert, update, remove } from '../services/apiService';

const Course = ({ match, history }) => {
    const [id] = useState(match.params.id);
    const  [course, setCourse]  = useState({
        // _id: '0',
        courseName: '',
        coursePoints: ''
 })

    
 useEffect(() => {
     if (id !== '0') {
         read('courses', id, data => {
             if (data) setCourse(data);
         })
     }
 }, [id]);
    
 function changeHandler(e) {
        setCourse({
            ...course,
           [e.target.name]: e.target.value
            
        });
 }

 const back = () => {
     history.push('/courses')
 }

 const save = () => {
    if (course.courseName.length && course.coursePoints.length > 0) {
        if (id === '0') {
        insert('courses', course, data => {
            if (data) return history.push('/courses');
            console.log('There was error during save data!')
        })
     } else {
         update('courses', id, course, data => {
            if (data) return history.push('/courses');  
            console.log('There was error during save data!')
         })
     }
    } 
 }
    const del = () => {
        remove('courses', id, data => {
            history.push('/courses');
        })
    }
    return (
    <div className='container'>
        <h2>Course</h2>
        <form className='input-form mx-auto' style={{width: '50%'}}>
            <div className='col-sm-10 mx-auto mb-3'>
                <label htmlFor='validationDefault01' className='form-label'>Name</label>
                <input type='text' 
                       name='courseName'
                       placeholder='Course Name'
                       className='form-control' 
                       value={course.courseName}
                       onChange={changeHandler}
                       required
                 />
            </div> 
            <div className='col-sm-10 mx-auto mb-3'>
                <label htmlFor='coursePoints' className='form-label'>Points</label>  
                <input type='text'
                       name='coursePoints'
                       placeholder='Course Points'
                       className='form-control'
                       value={course.coursePoints}
                       onChange={changeHandler} 
                       />  
            </div>  
            {id !== '0' && (
            <div className='left'>
                <button type='button' onClick={del} className='btn btn-outline-secondary ms-5'>DELETE</button>    
            </div> 
            )} 
            <div className='right'>
                <button type='button' onClick={back} className='btn btn-outline-secondary me-3'>BACK</button>  
                <button type='button' onClick={save} className='btn btn-outline-primary me-5'>SAVE</button>    
            </div>
            
        </form>
        </div>
    )
}

export default Course;
