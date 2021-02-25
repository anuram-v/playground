import React from 'react';
const DownloadImage = async path => {
    console.log(`api/download/${path}`)
    fetch(`api/download/${path}`, {
        method: 'GET'
    })
    .then((response) => {
        console.log(response)
        response.blob()})
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
export default DownloadImage