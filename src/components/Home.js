import logo from '../assets/images/logo.png'


const styles = {
    image: {
        width: '20%'
    },
    title: {
        fontSize: '2em'
}
}
// Mislim da 120x120px ne izgleda bas lijepo

const Home = () => {
    return (
    <div className='container container-home'>
        <img className="logo" src={logo} alt='Logo' style={styles.image}/>
        <div style={styles.title} ><h2>Welcome to my first React App</h2></div>
    </div>
    )
}

export default Home;