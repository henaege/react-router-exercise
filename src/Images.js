import React, {Component} from 'react'


class Images extends Component{
    constructor(props){
        super(props)
        this.state = {
            images: []
        }
    }

    componentDidMount(props){
        var images = []
        var caption = ""
        
        this.props.images.map((pic, index)=>{
            if(index== 0){
                caption = "Looking south toward Downtown"
            }else if (index == 1){
                caption = "Inside the Georgia Aquarium"
            }else if (index == 2){
                caption = "Piedmont Park"
            }
            images.push(
            <figure className="figure">
            <img className="img-fluid img-thumbnail" key={index} src={pic}/>
            <figcaption class="figure-caption">{caption}</figcaption>
            
            </figure>
            ) 
        })
        this.setState({
            images: images
        })
    }

    componentWillReceiveProps(newProps){
        this.setState({
            images: newProps
        })
    }

    

    render(){
        
    console.log(this.state.images)
        if(this.state.images == []){
            return(
            <h2>Loading</h2>)
        } else {
            return(
        <div>
            {this.state.images}
        </div>
            )
        }
        
    }
}

export default Images