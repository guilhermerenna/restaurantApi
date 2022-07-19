import React from "react";
import './Title.css'

interface TitleProps {
    title?: string;
}

const Title: React.FC<TitleProps> = (props) => {
    let pageTitle = "RESTaurantAPI"
    if(props.title != undefined) pageTitle = props.title;
    return (
        <div className="boxed">
            <h1 className="pageHeader content">{pageTitle}</h1>
        </div>
    );
}

export default Title;