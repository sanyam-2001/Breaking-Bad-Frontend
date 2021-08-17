import React from 'react';
import './CharCard.css'
const CharCard = (props) => {
    const data = props.data;
    return ( 
        <div className="charCardContainer">
                <div className="imageContainer">
                    <img src={data.img} alt={data.name} style={{width:"100%", borderRadius:'6px'}} />
                    <div style={{textAlign:'center'}}>a.k.a <span style={{fontWeight:'bold'}}>{data.nickname?data.nickname:null}</span></div>
                </div>
                <div className="detailContainer">
                    <div className="detailName">
                        <div style={{fontSize:"1.5em", fontWeight:400, color:'grey', textAlign:'right'}}>{data.status}</div>
                        <div style={{fontSize:"2em"}}>{data.name}</div>
                    </div>
                    <div style={{display:'flex', flexWrap:'wrap'}}>
                        <div className="dataEntry">
                            <div style={{fontSize:"1em"}}>Portrayed By</div>
                            <div style={{fontSize:'1.5em'}}>{data.portrayed}</div>
                        </div>
                        <div className="dataEntry">
                            <div style={{fontSize:"1em"}}>Seasons</div>
                            <div style={{fontSize:'1.5em'}}>{data.appearance.join(', ')}</div>
                        </div>
                       
                        <div className="dataEntry">
                            <div style={{fontSize:"1em"}}>Occupation</div>
                            <div style={{fontSize:'1.5em'}}>{data.occupation.join(', ')}</div>
                        </div>
                        <div className="dataEntry">
                            <div style={{fontSize:"1em"}}>Date of birth</div>
                            <div style={{fontSize:'1.5em'}}>{data.birthday}</div>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default CharCard;