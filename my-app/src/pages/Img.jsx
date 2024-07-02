import React from 'react'
import { useSelector } from 'react-redux';

const Img = () => {
    const data = useSelector(state => state);
    // const img1 = data?.data?.data?.items?.[0]?.pagemap?.cse_thumbnail?.[0]?.["src"];
    // const img2 = data?.data?.data?.items?.[0]?.pagemap?.metatags?.[0]?.["og:image"];
    // const img3 = data?.data?.data?.items?.[0]?.pagemap?.["cse_image"]?.[0]?.["og:url"];

  return (
    <div>
        {
             data?.data?.data?.items?.map(el => {
                console.log("-------------------",el);
                const img1 = el?.pagemap?.cse_thumbnail?.[0]?.["src"];
                const img2 = el?.pagemap?.metatags?.[0]?.["og:image"];
                const img3 = el?.pagemap?.["cse_image"]?.[0]?.["og:url"];

                // console.log(img1, img2, img3, "-----------")
                return <>
                {img1 && <img src={img1} alt="" />}
                <br />
                {img2 && <img src={img2} alt="" />}
                <br />
                {img3 && <img src={img3} alt="" />}
                </>
             })
        }
        {/* {img1 && <img src={img1} alt="" />}
        <br />
        {img2 && <img src={img2} alt="" />}
        <br />
        {img3 && <img src={img3} alt="" />} */}
    </div>
  )
}

export default Img