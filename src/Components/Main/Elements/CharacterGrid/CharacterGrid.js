import React, { useState, useEffect} from 'react';
import Character from '../../../Character/Character';
import './CharacterGrid.css';
import Pagination from '@material-ui/lab/Pagination';
import FilterDrawer from '../FilterDrawer/FilterDrawer';
const CharacterGrid = (props) => {
    const [characters, setCharacters] = useState([]);
    const [selectedPage, setSelectedPage] = useState(1);
    const [status, setStatus] = useState("Any");
    const [category, setCategory] = useState("Any");
    useEffect(()=>{
        fetch(`https://www.breakingbadapi.com/api/characters`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setCharacters(data)
            })
    }, []);
    useEffect(()=>{
        setSelectedPage(1);
    }, [props.value])

    const CharacterComponent = characters.filter((m)=>{
        let isValid = true;
        if(status!=="Any" && m.status!==status)isValid=false;
        if(category!=="Any" && !m.category.includes(category))isValid=false;
        if(!m.name.includes(props.value))isValid=false;
        return isValid
    }).map((m, i)=> <Character img={m.img} name={m.name} key={i} id={m.char_id} status={m.status} occupation={m.occupation} birthday={m.birthday}/>);
    return ( 
        <>
            <div style={{paddingTop:'10%'}}>
                <Pagination count={Math.ceil(CharacterComponent.length/10)} page={selectedPage} size="large" onChange={(e, v)=>setSelectedPage(v)}/>
            </div>
            {CharacterComponent.length===0?
            <div style={{textAlign:'center', fontFamily:"IBM Plex Serif", fontSize:'4em'}}>
                No Results
            </div>
            :
            <div className="mainGridContainer">
                {CharacterComponent.slice((selectedPage-1)*10,(selectedPage-1)*10 +10 )}
            </div>
            }
            <div style={{paddingTop:'10%'}}>
                <Pagination count={Math.ceil(CharacterComponent.length/10)} page={selectedPage} size="large" onChange={(e, v)=>setSelectedPage(v)}/>
            </div>
            <FilterDrawer 
                open={props.open} setOpen={props.setOpen}
                status={status} setStatus={setStatus}
                category={category} setCategory={setCategory}
            />
        </>
     );
}
 
export default CharacterGrid;