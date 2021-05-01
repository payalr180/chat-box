import React from "react"

export const User1 = (props) => {
    let textInput = React.createRef();

    function clearInputField()
    {
        document.getElementById('textfield1').value = '';
    }

    return(
    <div>
        <input id="textfield1" type="text" placeholder="Type a message..."
               ref={textInput}
        />
        <button type="submit"  onClick={() => {
              props.sendMessage(textInput.current.value);
              clearInputField();
            }}>Send</button>
    </div>
)}