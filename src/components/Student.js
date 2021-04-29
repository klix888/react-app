import { useEffect, useState } from 'react';
import { read, insert, update, remove } from '../services/apiService';

const Student = ({ match, history }) => {
    const [id] = useState(match.params.id);
    const  [student, setStudent]  = useState({
        // _id: '0',
        firstName: '',
        lastName: '',
        yearOfBirth: 0,
        adress: ''
 })
    
 useEffect(() => {
     if (id !== '0') {
         read('students', id, data => {
             if (data) setStudent(data);
         })
     }
 }, [id]);
    
 function changeHandler(e) {
        setStudent({
            ...student,
           [e.target.name]: e.target.value
            
        });
 }

 const back = () => {
     history.push('/students')
 }

 const save = () => {
     if (student.firstName.length && student.lastName.length > 0) {
     if (id === '0') {
        insert('students', student, data => {
            if (data) return history.push('/students');
            console.log('There was error during save data!')
        })
     } else {
         update('students', id, student, data => {
            if (data) return history.push('/students');  
            console.log('There was error during save data!')
         })
     }
    }
 }
    const del = () => {
        remove('students', id, data => {
            history.push('/students');
        })
    }
    return (
    <div className='container'>
        <h2>Student</h2>
        <form className='input-form mx-auto' style={{width: '50%'}}>
            <div className='col-sm-10 mx-auto mb-3'>
                <label htmlFor='firstName' className='form-label'>First Name</label>
                <input type='text' 
                       name='firstName'
                       className='form-control' 
                       value={student.firstName}
                       onChange={changeHandler}
                      
                 />
            </div> 
            <div className='col-sm-10 mx-auto mb-3'>
                <label htmlFor='lastName' className='form-label'>Last Name</label>  
                <input type='text'
                       name='lastName'
                       className='form-control'
                       value={student.lastName}
                       onChange={changeHandler} 
                       
                       />  
            </div>  
            <div className='col-sm-10 mx-auto mb-3'>
                <label htmlFor='yearOfBirth' className='form-label'>Year of Birth</label>  
                <input type='number'
                       name='yearOfBirth'
                       className='form-control'
                       value={student.yearOfBirth}
                       onChange={changeHandler} 
                       />  
            </div>  
            <div className='col-sm-10 mx-auto mb-3'>
                <label htmlFor='adress' className='form-label'>Addres</label>  
                <input type='text'
                       name='adress'
                       className='form-control'
                       value={student.adress}
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

export default Student;