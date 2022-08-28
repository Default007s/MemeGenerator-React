import '../Styles/Form.css'
import React, {useEffect, useState} from 'react';

export default function Form() {    
    const [meme, setMeme] = useState({
        topText : '',
        bottomText : '',
        imageUrl : ''
    })
    const [allMemes, setAllMemes] = useState([]);

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleClick() {
        const memesArray = allMemes; 
        const i = Math.floor(Math.random() * 100);
        setMeme(prevState => ({...prevState, imageUrl : memesArray[i].url}));
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevState => ({...prevState, [name] : value}))
    }

    return(
    <div className='formContainer'>
        <div className="Form">
            <div className="FormFirstRow">
                <input 
                type="text"
                placeholder="Top Text"
                onChange={handleChange}
                value={meme.topText}
                name="topText"
                />
                <input
                type="text"
                placeholder="Bottom Text"
                onChange={handleChange}
                value={meme.bottomText}
                name="bottomText"
                 />
            </div>
            <button onClick={handleClick} className="FormSecondRow">Get a new meme image</button>
            <div className='container'>
                {meme.imageUrl !== "" ? <img alt='' src={meme.imageUrl}/> : false}
                <h1 className='topTxt'>{meme.topText}</h1>
                <h1 className='bottomTxt'>{meme.bottomText}</h1>
            </div>
        </div>
    </div>
    )
}