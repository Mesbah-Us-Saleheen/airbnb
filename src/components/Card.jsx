
export default function Card(props) {
	let badgeText
	if(props.openSpots === 0) {
		badgeText = "SOLD OUT"
	}else if (props.location === "Online") {
		badgeText = "ONLINE"
	}


	return (
		<div className="card">
			{badgeText && <div className="card--badge">{badgeText}</div>}	
			<img src={`img/${props.coverImg}`} alt="image of katie-zaferes" className="card--image" />
			<div className="card--stats">
				<img src="img/star.png" alt="star" className="card--star" />
				<span>{props.stats.rating}</span>
				<span className="gray">({props.stats.reviewCount}) &#x2022;</span>
				<span className="gray">{props.location}</span>
			</div>
			<h2 className="card--title">{props.title}</h2>
			<p><span className="bold">From ${props.price}</span>  / person</p>
		</div>
	)
}