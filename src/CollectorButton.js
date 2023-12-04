import React, { useContext } from "react";
import StylesContext from "./StylesContext";

function CollectorButton(props) {
    const buttonStyling = React.useContext(StylesContext)
    return (
        <div>
            <button style={buttonStyling}>
                Click Here!
            </button>
        </div>
    )
}

export default CollectorButton;