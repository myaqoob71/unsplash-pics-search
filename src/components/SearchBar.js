import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    /* Appending form element with onSubmit having a function which restricts the default 
    functionality when the user enter's something into input field and clicks enter page refreshes 
    so using event.preventDefault() stops that default behavior */
    /* But now trying to fetch value entered into input field by clicking enter gives error stating state is undefined to fix it we use    */
    onFormSubmit = (e) => {
        e.preventDefault();
        //Below is the callback which is calling the parent component onSearchSubmit method = Child component -> Parent component
        this.props.submit(this.state.term)
    }
    /* Don't write as "this.onInputChange()" as this gets called when render() is called.
    Now if we write like this "this.onInputChange" it becomes reference to the function onInputChange */
    render() {
        return (
            <div className = "ui segment">
                <form onSubmit = {this.onFormSubmit} className = "ui form">
                    <div>
                        <label>Image Search</label>
                        <input type = "text" 
                            value = {this.state.term}
                            onChange = {(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;