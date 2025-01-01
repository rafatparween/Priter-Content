// import Image from 'next/image';

// const categories = [
//   {
//     id: 1,
//     title: 'Illustration',
//     image: '/images/illustration.png',
//   },
//   {
//     id: 2,
//     title: 'Mobile',
//     image: '/images/mobile.png',
//   },
//   {
//     id: 3,
//     title: 'Branding',
//     image: '/images/branding.png',
//   },
//   {
//     id: 4,
//     title: 'Animation',
//     image: '/images/animation.png',
//   },
//   {
//     id: 5,
//     title: 'Web Design',
//     image: '/images/web-design.png',
//   },
//   {
//     id: 6,
//     title: 'Print',
//     image: '/images/print.png',
//   },
//   {
//     id: 7,
//     title: 'Product Design',
//     image: '/images/product-design.png',
//   },
//   {
//     id: 8,
//     title: 'Typography',
//     image: '/images/typography.png',
//   },
// ];

// export default function Header() {
//   return (
//     <div className="relative overflow-hidden bg-gray-100 py-8">
//       <div className="flex items-center space-x-4 animate-marquee">
//         {/* Duplicate the list for seamless scrolling */}
//         {[...categories, ...categories].map((category, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
//           >
//             <div className="relative w-full h-36">
//               <Image
//                 src={category.image}
//                 alt={category.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <h3 className="text-center text-sm font-medium text-gray-800 mt-2">
//               {category.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import Image from 'next/image';


const categories = [
    { id: 1, title: 'Epson EcoTank L3250', image: '/dtf.jpg' },
    { id: 2, title: 'HP Tango Smart Printer', image: '/hptango.jpg' },
    { id: 3, title: 'Canon PIXMA G2020', image: '/man.webp' },
    { id: 4, title: 'Brother HL-L2350DW', image: '/spaces.jpg' },
    { id: 5, title: 'Xerox Phaser 6510', image: '/print.jpg' },
    { id: 6, title: 'Ricoh SP 210', image: '/happygirl.jpg' },
    { id: 7, title: 'Kyocera TASKalfa 1800', image: '/printer.jpg' },
    { id: 8, title: 'Samsung Xpress M2070W', image: '/coat.jpeg' },
  ];
function Header() {
  return (
    <div className="relative overflow-hidden bg-gray-100 py-8">
      <div className="flex items-center space-x-4 animate-marquee">
        {/* Duplicate the list for seamless scrolling */}
        {[...categories, ...categories].map((category, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="relative w-full h-36">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-sm font-medium text-gray-800 mt-2">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;