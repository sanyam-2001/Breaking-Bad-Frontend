import React, { useState, useEffect } from 'react';
import Back from '../Components/Back/Back';
import Blockquote from '../Components/Blockquote/Blockquote';
import CharCard from '../Components/CharCard/CharCard';
const CharacterPage = (props) => {
    const [characterData, setCharacterData] = useState({
        appearance:[],
        occupation:[]
    });
    const [quotes, setQuotes] = useState([])
    useEffect(()=>{
        window.scrollTo(0, 0)
        fetch(`https://www.breakingbadapi.com/api/characters/${props.location.state.id}`)
            .then(res=>res.json())
            .then(data=>{
                setCharacterData(data[0]);
                const queryName = data[0].name.split(' ').join('+');
                fetch(`https://www.breakingbadapi.com/api/quote?author=${queryName}`)
                    .then(response=>response.json())
                    .then(resquotes=>setQuotes(resquotes))
            })
        
        
        
    }, [props.location.state.id]);
    const QuoteList = quotes.map((m, i)=><Blockquote text={m.quote} key={i} author={m.author}/>)
    return ( 
        <div>
            <Back />
            <CharCard  data={characterData}/>
            <div style={{width:'70%', margin:'auto', marginTop:'5%'}}>
                {QuoteList}
            </div>
        </div>
     );
}
 
export default CharacterPage;