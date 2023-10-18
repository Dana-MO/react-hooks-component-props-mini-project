
export default function About(props) {

    if(!props.image) {
        const imgSrc = "https://via.placeholder.com/215"

        return (
            <aside>
                <img src={imgSrc} alt="blog logo" />
                <p>{props.about}</p>
            </aside>
        )
    } else {
        return (
            <aside>
                <img src={props.image} alt="blog logo" />
                <p>{props.about}</p>
            </aside>
        )
    }
    
}