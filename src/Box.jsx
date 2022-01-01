import "./box.css"

//Object deconstruction (props: { color, title})
function Box( {color, title}) {

    let className = ''; 

    switch(color) {
        case 'blue':
        className = 'deepskyblue';
        break;
        case 'red':
            className = "tomato"
            break;
            default:
                className = "gray"
    }


    return <div className={className}>{title}</div>
}

export default Box;