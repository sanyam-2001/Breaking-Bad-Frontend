import React, {useState} from 'react';
import './Main.css';
import CharacterGrid from './Elements/CharacterGrid/CharacterGrid';
import Filter from './Elements/Filter/Filter'
const Main = () => {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    return ( 
        <div className="mainContainer">
            <div className="container">
                <div className="filterPanel">
                    <div onClick={()=>setOpen(true)}>
                        <Filter />
                    </div>
                    <div>
                        <input 
                            type="text"
                            className="searchBar"
                            placeholder="Search Characters.."
                            style={{width:"100%"}}
                            value={value}
                            onChange={(e)=>setValue(e.target.value)}

                        />
                    </div>
                </div>

                <div>
                    <CharacterGrid value={value} open={open} setOpen = {setOpen}/>
                </div>
            </div>

        </div>
     );
}
 
export default Main;