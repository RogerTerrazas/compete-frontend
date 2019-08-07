import React from "react";
import content from "./scoresDocumentation.json";
import { Button } from "@material-ui/core";
import "../../css/scoresDocumentation.css";

class scoresDocumentation extends React.Component{
    render(){
        return(
            <div>
               <div className='container scoresDocumentation'>
                    <div className='header'>
                        <h1>Scoring Documentation</h1>
                        <p>February 15 - 23, 2019</p>
                        <p style={{fontWeight:'bold', textDecoration:'underline', fontStyle:'italic'}}>DISCLAIMER: Points will be determined and awarded at SEC’s discretion.</p>
                    </div>
                    <div className='content'>
                        <DocumentationCategories/>
                    </div>
                    <div className='content' style={{backgroundColor: "#FFBABA"}}>
                        <h3>Losing Points</h3>
                        <p>Ways to lose points include, but not limited to, the following:</p>
                        <ul>
                            <li>An organization fails to properly take charge of the event that they host (at the discretion of the judging MALs)</li>
                            <li>Falsifying sign-ins/outs</li>
                            <li>Late submission of room reservation and rules for hosted events</li>
                            <li>Ramshorn contestants not attending a workshop and the dress rehearsal</li>
                            <li>Cheating, including breaking rules of a specific event hosted by a team (at the discretion of judging MALs)</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function find(array, target, key){
    var result = null;
    array.forEach(item =>{
        if (item[key] === target){
            result = item;
        }
    })
    return result;
}
class DocumentationCategories extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content : content.content,
            selected: content.content[0],
            categoriesName: []
        }

        this.changeSelected = this.changeSelected.bind(this);
    }

    componentDidMount(){
        var names = []
        content.content.forEach(category =>{
            names.push(category.name)
        })
        this.setState({
            categoriesName: names
        })   
    }

    renderDetails(details){
        return(
            <div>
                {details.Max_Score && <p style={{fontWeight:'bold'}}>Max Score: {details.Max_Score}</p>}
                {details.Date && <p className='date'>{details.Date}</p>}
                {details.scoring && ScoringDetails(details.scoring)}
            </div>
        )
    }
    renderContent(){
        var content = this.state.selected;
        var notes = content.details.Notes.split("\n");
        var cleanedUpNotes = [];
        notes.forEach(note =>{
            cleanedUpNotes.push(<p style={{"margin":0}}>{note}</p>)
        })

        return(
            <div>
                <h3>{content.name}</h3>
                <div>
                    {this.renderDetails(content.details)}

                    <div style={{"marginTop": "1rem"}}>
                        {cleanedUpNotes}
                        {content.details.Link && <p>For more information: <a href={content.details.Link}>{content.details.Link}</a> </p>}
                    </div>
                </div>
            </div>
        )
    }

    changeSelected(categoryName){
        var category = find(this.state.content, categoryName, "name"); // assume happy path
        this.setState({
            selected: category,
        })
    }
    render(){
        return(
            <div className='row DocumentationCategories'>
                <div className='col-lg-3 col-md-4'>
                    <Sidebar categories={this.state.categoriesName} selectCategory={this.changeSelected} selected={this.state.selected.name}/>
                </div>
                <div className='col'>
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}

function ScoringDetails(scores){
    var keys = Object.keys(scores);
    var components = []

    keys.forEach(key =>{
        var value = scores[key];
        key = key.replace(/_/g, " ");

        components.push(
            <div className='row'>
                <div className='col'>
                    <p>{key}</p>
                </div>
                <div className='col'>
                    <p style={{fontWeight:'200'}}>{value}</p>
                </div>
            </div>
        )
    })

    return components;
}
class Sidebar extends React.Component{
    makeButtons(){
        var components = []
        var categories = this.props.categories

        categories.forEach(category =>{
            if (category === this.props.selected){
                components.push(<Button className='button selected-button' onClick={() => this.props.selectCategory(category)} key={category}>{category}</Button>)    
            }
            else{
                components.push(<Button className='button' onClick={() => this.props.selectCategory(category)} key={category}>{category}</Button>)
            }
        })

        return components
    }
    render(){
        return(
            <div className='Sidebar'>
                {this.makeButtons()}
            </div>
        )
    }
}
export default scoresDocumentation;