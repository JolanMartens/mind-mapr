import { useCallback } from 'react';

function CustomNode(props) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="container bg-white border-black border">
            <div className="container-fluid">
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" onChange={onChange} className="nodrag" />
                <button className="btn btn-primary" >press me</button>
            </div>
        </div>
    );
}

export default CustomNode;
