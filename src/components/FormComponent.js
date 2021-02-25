import React, { useState } from 'react';
//import DownloadImage from '../service/DownloadService'

export default function FormComponent() {
    const [state , setState] = useState({
        Downloading : false,
        Downloaded : true
    })
    const handleSubmit = event => {
        event.preventDefault()
        setState(prevState => ({
            ...prevState,
            Downloading: true
        }))
        const path= event.target.path.value
        fetch(`api/download/${path}`, {
            method: 'GET'
        })
        .then((response) => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            console.log(url)
            link.setAttribute('download', "screenshot.png");
            document.body.appendChild(link);
            link.click();
        })
    }
    return(
        <div className="form-class">
            <form onSubmit={handleSubmit}>
                <label htmlFor="path">Url</label>
                <input 
                    id="path" 
                    name="path" 
                    type="text" 
                    placeholder="Enter a url" required />
                {state.Downloading && <button type="submit">Downloading</button> }
                {!state.Downloading && <button type="submit">Submit</button> }
            </form>
            <style jsx>{`
                .form-class{
                    width: 100%;
                    padding: 105px 0;
                    color: #fff;
                }
            `}</style>
        </div>
    )
}