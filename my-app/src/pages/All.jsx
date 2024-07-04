import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const All = () => {
    const [showRightsheet, setShowRightSheet] = useState(false);
    const data = useSelector(state => state);
    const [type, setType] = useState("headers");
    const [currentData, setCurrentData] = useState({});


    const handleSetShowRightSheet = () => {
        setShowRightSheet(true);
    }


  return (
    <div style={{display: "flex"}}>
        {/* <pre>
            <code>
        {JSON.stringify(data?.data?.data, null, 2)}
        </code>
        </pre> */}
       
        <table style={{minWidth: "100px"}}>
        {
            data?.data?.data?.items?.map(el => {
                return <tbody>
                    <tr>
                        <td style={{cursor:"pointer"}} onClick={()=>{
                            setCurrentData(el);
                            handleSetShowRightSheet();
                        }}>Kind</td>
                        { !showRightsheet && <td>{el.kind}</td> }
                    </tr>
                    <tr>
                        <td style={{cursor:"pointer"}}  onClick={()=>{
                            setCurrentData(el)
                            handleSetShowRightSheet()}}>Title</td>
                        { !showRightsheet && <td>{el.title}</td>}
                    </tr>
                    <tr>
                        <td style={{cursor:"pointer"}}  onClick={()=>{
                            setCurrentData(el)
                            handleSetShowRightSheet()}}>Html Title</td>
                        {!showRightsheet && <td>{el.htmlTitle}</td>}
                    </tr>
                    <tr>
                        <td style={{cursor:"pointer"}}  onClick={()=>{
                            setCurrentData(el)
                            handleSetShowRightSheet()}}>Link</td>
                        { !showRightsheet && <td>{el.link}</td>}
                    </tr>
                    <tr>
                        <td style={{cursor:"pointer"}}  onClick={()=>{
                            setCurrentData(el)
                            handleSetShowRightSheet()}}>Display Link</td>
                        { !showRightsheet && <td>{el.displayLink}</td>}
                    </tr>
                    <tr>
                        <td style={{cursor:"pointer"}}  onClick={()=>{
                            setCurrentData(el)
                            handleSetShowRightSheet()}}>Snippet</td>
                        { !showRightsheet && <td>{el.snippet}</td>}
                    </tr>
                    <tr>
                        <td style={{cursor:"pointer"}}  onClick={()=>{
                            setCurrentData(el)
                            handleSetShowRightSheet()}}>Html Snippet</td>
                        { !showRightsheet && <td>{el.htmlSnippet}</td>}
                    </tr>
                    <tr>
                        <td style={{cursor:"pointer"}}  onClick={()=>{
                            setCurrentData(el)
                            handleSetShowRightSheet()}}>Formetted Urls</td>
                        { !showRightsheet && <td>{el.formattedUr}</td>}
                    </tr>
                    <tr>
                        <td style={{cursor:"pointer"}}  onClick={()=>{
                            setCurrentData(el)
                            handleSetShowRightSheet()}}>Html Formatted Url</td>
                        { !showRightsheet && <td>{el.htmlFormattedUrl}</td>}
                    </tr>

                </tbody>
            })
        }
        </table>
       {
        showRightsheet && <div style={{overflowX: "hidden"}}>
            <div style={{display:"flex", justifyContent:"space-evenly", gap:"10px", background:"#ebedf3", alignItems:"flex-start"}}>
            <div style={{borderBottom:"3px solid green"}} onClick={()=> {
                setShowRightSheet(false);
                setType("headers");
            }}>X</div>
            <div onClick={()=> setType("headers")} style={{borderBottom:"3px solid green"}}>Headers</div>
            <div onClick={()=> setType("payload")} style={{borderBottom:"3px solid green"}}>Payload</div>
            <div onClick={()=> setType("preview")} style={{borderBottom:"3px solid green"}}>Preview</div>
            <div onClick={()=> setType("response")} style={{borderBottom:"3px solid green"}}>Response</div>
            <div onClick={()=> setType("cookies")} style={{borderBottom:"3px solid green"}}>Cookies</div>
            </div>
           {type==="headers" && <div>
                <table>
                    <tr>
                        <td>Request URL:</td>
                        <td>{data?.data?.request?.url}</td>
                    </tr>
                    <tr>
                        <td>
                            Request Method
                        </td>
                        <td>{data?.data?.config?.method}</td>
                    </tr>
                    <tr>
                        <td>Status Code</td>
                        <td>{data?.data?.request?.status}</td>
                    </tr>
                </table>
            </div>}
            {
                type ==="payload" && JSON.stringify(data?.data?.data?.queries?.nextPage?.[0], null, 2)
            }
             {
                type ==="preview" && JSON.stringify(currentData, null, 2)
            }
             {
                type ==="response" && JSON.stringify(currentData, null, 2)
            }
             {
                type ==="cookies" && JSON.stringify(currentData, null, 2)
            }
        </div>
       }
                      
    </div>
  )
}

export default All