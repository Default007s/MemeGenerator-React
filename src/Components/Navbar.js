import '../Styles/Navbar.css'
import trollFace from '../Images/TrollFace.png'

export default function Navbar() {
    return(
        <div className='Navbar'>
            <div className='leftNav'>
                <img src={trollFace}></img>
                <h1>Meme Generator</h1>
            </div>
            <p className='rightNav'>React Course - Project 3</p>
        </div>
    )
}