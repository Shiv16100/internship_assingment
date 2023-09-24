import './Card.css'

const Card =(props) => {
    const headin = props.card_data.heading;
    const img_name = props.card_data.img;
    const placement =props.card_data.placement;
    const project = props.card_data.projects;
    const rating = props.card_data.rating;
    
    return(
        <div id="card-main-div">
            
           <div id="card-div-1">
             <h2 id="card-heading">{headin}</h2>
            <p id="card-info">lorem ipsum epsum lorem emposh lorem</p>
            <img src={img_name} id="card-image"></img>
            <div id="card-main-info">
                <div>{placement}</div> 
                <div>{project}</div>
                 <div>{rating}</div>
                <div>Study at your own Pace</div>
            </div>
            <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card ;