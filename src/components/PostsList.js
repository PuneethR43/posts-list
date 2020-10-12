import React from 'react'
import {connect} from 'react-redux'
import parse from 'html-react-parser'
import { FaSearch } from "react-icons/fa"

class PostsList extends React.Component{
    state = {
        searchValue : ''
    }

    handleSearch = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <div  style={{marginLeft:"20px"}}>

                <form className="form-group search">
                <span class="form-search" ><FaSearch/></span>
                    <input 
                        type="search" 
                        class="search-input" 
                        value ={this.state.searchValue} 
                        name="searchValue" 
                        onChange={this.handleSearch} 
                        placeholder=" Search by Title or Body" 
                        style={{width:"300px", height:"30px"}}
                    />
                </form>
                <br/>
                {
                  this.props.posts.length>0 ? this.props.posts.filter((post) => post.title.includes(this.state.searchValue)||post.body.includes(this.state.searchValue)).map((resultPosts, i)=>{
                            return (
                                <div className="card">
                                    <h2 key={i}>{resultPosts.title}</h2>
                                    <p>{parse(resultPosts.body)}</p>
                                </div>
                            )
                    }) : <h3>There are no Posts to Show, Add Posts!!!</h3>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts 
    } 
}

export default connect(mapStateToProps)(PostsList)