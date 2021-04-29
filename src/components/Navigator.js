import { Link } from 'react-router-dom';

const Navigator = () => {
return (
    <div className='navigator'>
       <Link className='link-n' to='/'>Home</Link> 
       &nbsp;|&nbsp;
       <Link className='link-n' to='/courses'>Courses</Link>
       &nbsp;|&nbsp;
       <Link className='link-n' to='/students'>Students</Link>
     </div>
);

}

export default Navigator;