// import React from "react";
// import Slider from "react-slick";
// import { getPosts } from "../../../../lib/wordpress/api";
// import { useQuery } from "@apollo/client";

// export default function SliderNews() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const { loading, error, data } = useQuery(getPosts);

//   // IF data is undefined return empty
//   if (data == undefined) {
//     return;
//   }

//   console.log(data);
//   {
//     data.posts.nodes.map((post) => {
//       if (post.posts.ishighlighted === "yes") {
//         return (
//           <div className="cardNews">
//             <div className="cardNewsImg">
//               <img src={post.posts.image.sourceUrl}/>
//             </div>
//             <div className="cardNewsHeader">
//               <span>{post.date}</span>
//               <h3>{post.title}</h3>
//             </div>
//             <div className="cardNewsBody">
//               <p>{post.excerpt}</p>
//             </div>
//           </div>
//         );
//       } else {
//         return
//       }
//     });
//   }
// }

import React from "react";
import Slider from "react-slick";
import { getPosts } from "../../../../lib/wordpress/api";
import { useQuery } from "@apollo/client";

export default function SimpleSlider() {
  const { data } = useQuery(getPosts);

  // IF data is undefined return empty
  if (data == undefined) {
    return;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data.posts.nodes.map((post) => {
        return (
          <div className="col-lg-4 col-12 cardNews" key={post.slug}>
            <div className="cardNewsImg">
              <img src={post.posts.image.sourceUrl} alt="" />
            </div>
            <div className="cardNewsHeader">
              <span>{post.posts.date}</span>
              <h3>{post.title}</h3>
            </div>
            <div className="cardNewsBody">
              <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
