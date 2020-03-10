import React, { Component } from 'react'
import ReactModal from 'react-modal'

import BlogForm from '../blog/blog-form'

ReactModal.setAppElement(".app-wrapper")

export default class BlogModal extends Component {
    constructor(props) {
        super(props)
        
        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: 'auto',
                // bottom: '-150px',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                minWidth: '800px'
                // backgroundColor: "#1fc8db", 
                // backgroundImage: "linear-gradient(135deg, #2cb5e8, #9fb8ad)"
                // background: "rgb(31, 200, 219) linear-gradient(90deg, rgb(0, 203, 121), rgb(44, 181, 232)) repeat scroll 0% 0%"
            },
            overlay: {
                backgroundColor: 'rgba(1,1,1, 0.75)'
            }
        }   

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)
    }

    handleSuccessfulFormSubmission(blog) {
        this.props.handleSuccessfulNewBlogSubmission(blog);
    }

    render() {
        return (
            <ReactModal 
                style={this.customStyles}
                isOpen={this.props.modalIsOpen}
                ariaHideApp={false}
                onRequestClose={() => {
                    this.props.handleModalClose()
                }}
            >
                <BlogForm handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}/>
            </ReactModal>
        )
    }
}