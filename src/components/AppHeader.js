import logo from '../assets/images/paragon.png';
import Navigator from './Navigator';

const style = {
    image: {
       width: '80%',
       height: '50%',
       margin: '15px',
      
    }
}

const AppHeader = () => {
    return <header>
            <div className='left'>
                <img src={logo} alt='Logo' style={style.image} />
            </div>
            <div className='left'>
                <h2 className='left-text'>React-App</h2>
            </div>
             <div className='right'>
                <Navigator />
             </div>
           </header>
}

export default AppHeader;