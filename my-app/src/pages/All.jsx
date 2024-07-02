import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const All = () => {
    // const [showRightsheet, setShowRightSheet] = useState(false);
    const data = useSelector(state => state);

    console.log(data?.data, "dataaaaaaa");


  return (
    <div>
        {/* <pre>
            <code>
        {JSON.stringify(data?.data?.data, null, 2)}
        </code>
        </pre> */}
        <table>
        {
            data?.data?.data?.items?.map(el => {
                return <tbody>
                    <tr>
                        <td>Kind</td>
                        <td>{el.kind}</td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>{el.title}</td>
                    </tr>
                    <tr>
                        <td>Html Title</td>
                        <td>{el.htmlTitle}</td>
                    </tr>
                    <tr>
                        <td>Link</td>
                        <td>{el.link}</td>
                    </tr>
                    <tr>
                        <td>Display Link</td>
                        <td>{el.displayLink}</td>
                    </tr>
                    <tr>
                        <td>Snippet</td>
                        <td>{el.snippet}</td>
                    </tr>
                    <tr>
                        <td>Html Snippet</td>
                        <td>{el.htmlSnippet}</td>
                    </tr>
                    <tr>
                        <td>Formetted Urls</td>
                        <td>{el.formattedUr}</td>
                    </tr>
                    <tr>
                        <td>Html Formatted Url</td>
                        <td>{el.htmlFormattedUrl}</td>
                    </tr>

                </tbody>
            })
        }
        </table>
    </div>
  )
}

export default All