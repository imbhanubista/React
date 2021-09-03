import React from 'react';

function Card(props){
    console.log(props)
    return(
            <>
            
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="myPic" className="card_img"/>
                    <div className="card_info">
                        <span className="card_category">{props.sname}</span>
                        <h2 className="card_title">{props.title}</h2>
                        <a href={props.link} target="_blank">
                            <button>WATCH Now</button>
                        </a>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Card;