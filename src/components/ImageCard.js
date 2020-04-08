import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        //Creating React Ref to access DOM element
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        /* We are fetching the image element after the page is loaded,
        by adding a event listener with load and a callback function because componentDidMount is called before page renders */
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        // 10 is the grid-auto-rows value from ImageList CSS file
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style = {{ gridRowEnd : `span ${this.state.spans}` }} >
                {/* Passing Ref as a prop */}
                <img ref = {this.imageRef} alt = {description} src = {urls.regular} />
            </div>
        );
    }
}
export default ImageCard;