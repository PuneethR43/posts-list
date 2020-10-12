import React from 'react'
import {connect} from 'react-redux'

import {setPost} from '../actions/postsActions'
import Alert from './Alert'

class PostForm extends React.Component {
    constructor(){
        super()
        this.state = {
            title : '',
            body : '',
            titleStatus : false,
            bodyStatus : false 
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        

        const formData = {
            title : this.state.title,
            body : this.state.body
        }
        this.state.title.length === 0 ? this.setState({ titleStatus: true }) : this.setState({ titleStatus: false })
	this.state.body.length === 0 ? this.setState({ bodyStatus: true }) : this.setState({ bodyStatus: false })
        
	    if(this.state.title.length && this.state.body.length > 0){
            this.props.dispatch(setPost(formData))
            this.props.history.push("/")
        }
    }

    render(){
        return(
            <div id = "editor" style={{width:"550px"}}>
                <form onSubmit={this.handleSubmit} className="form-posts">
                    <div>
                        <h3> Title </h3>
                        <input 
                            type="text"
                            name="title" 
                            value = {this.state.title} 
                            onChange={this.handleChange}
                            placeholder = "Give a Title"
                            className = "input"
                            style={{
				border: this.state.titleStatus && '1px solid red',
			    }}

                        />
                        {this.state.titleStatus ? <Alert/>:''}

                        <h3>Body</h3>
                        <textarea
                            name = "body"
                            placeholder="Write Something..."
                            value = {this.state.body} 
                            onChange={this.handleChange}
                            className="textarea"
                            style={{
                                left:"400px",
                                border: this.state.bodyStatus && '1px solid red'
                            }}
                            
                        />
                        {this.state.bodyStatus ? <Alert/>:''}
                        </div> <br/>

                        <input type="submit" value="Publish" className="button"/>
                    </form>
            </div>
        )
    }
}

export default connect()(PostForm)
