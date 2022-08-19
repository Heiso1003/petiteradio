// import React from "react";
// import Header from "../src/components/common/header/Header";
// import { getRediff } from "../lib/wordpress/api";
// import Footer from "../src/components/common/footer/Footer";
// import { useQuery } from "@apollo/client";
// import Link from "next/link";

// export default function Rediffusion() {
//   const { data } = useQuery(getRediff);

//   // IF data is undefined return empty
//   if (data == undefined) {
//     return;
//   }

//   return (
//     <div>
//       <Header />
//       {/* <main className="mainRediffusions"> */}
//       {/* <h1 className="title">Rediffusions</h1> */}
//       {data.rediffusions.nodes.map((rediffusion) => {
//         if (rediffusion.slug === 'saturday-clubbing-du-24-04-2022-retour-stromae') {
//           return (
//               <div>
//                   <h3>{rediffusion.title}</h3>
//                   <h3>{rediffusion.rediffusionContent.description}</h3>

//               </div>
//             // <Link href={rediffusion.slug}>
//             //   <div
//             //     className="container-fluid rediffusions"
//             //     key={rediffusion.id}
//             //   >
//             //     <div className="col-md-6 col-12 img">
//             //       <img
//             //         src={
//             //           rediffusion.rediffusionContent.imageMiseEnAvant.sourceUrl
//             //         }
//             //       />
//             //     </div>
//             //     <div className="col-md-6 col-12 content">
//             //   <span>{rediffusion.rediffusionContent.animateur}</span>
//             //   <p>{rediffusion.rediffusionContent.description}</p>
//             // </div>
//             //   </div>
//             // </Link>
//           );
//         }
//       })}
//       {/* </main> */}
//       <Footer />
//     </div>
//   );
// }

import React from 'react'

export default function rediffusion() {
  return (
    <div>
      
    </div>
  )
}
