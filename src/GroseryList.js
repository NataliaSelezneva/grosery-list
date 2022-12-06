import { Component } from "react";


export class GroseryList extends Component{
    state = {
        userInput: "",
        groseryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if(input === ''){
            alert('Enter information')
        }
        else{
        let listArray = this.state.groseryList;
        listArray.push(input);
        this.setState({groseryList: listArray, userInput: ''})
        }
    }

    DeleteItem(){
        let listArray = this.state.groseryList;
        listArray = [];
        this.setState({groseryList: listArray})
    }

    crosseWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render() {
        return(
            <div> 
                
                <form onSubmit={this.onFormSubmit}>
                <div className="inputStyle">
                <input className="inputStyle" type="text" placeholder="add products to the list" 
                onChange={(e) =>{this.onChangeEvent(e.target.value)} }
                value={this.state.userInput} />
                </div>

                <div className="blockStyle">
                    <button className="btnAdd" onClick={() => this.addItem(this.state.userInput)} >ADD</button>
                </div>

                <div className="blockStyle">
                    <ul>
                        {this.state.groseryList.map((item, index) => 
                        (<li onClick={this.crosseWord} key={index}> {item}</li>)) }
                    </ul>
                </div>

                <div className="blockStyle">
                    <button className="btnDelete" onClick={() => this.DeleteItem()}>DELETE</button>
                </div>
                </form>
            </div>
        )
    }
}