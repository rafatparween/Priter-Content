// pages/disclaimer.js
import React from 'react';

const Disclaimer = () => {
  return (
    <div className="font-sans min-h-screen" style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0), rgba(212, 167, 213, 0.4) 17%, rgb(207, 81, 165) 82%)' }}>
      <header className=" ext-white py-6 style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0), rgba(212, 167, 213, 0.4) 17%, rgb(207, 81, 165) 82%)' }}">
        <h1 className="text-center text-3xl font-bold">IjStart Printer Disclaimer</h1>
      </header>
      <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer</h2>
        <p className="text-gray-600 mb-4">
          The information provided by IjStart Printer on our website and related services (collectively, the "Services") is for general informational purposes only.
          All information on the Services is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Services.
        </p>
        <p className="text-gray-600 mb-4">
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Services or reliance on any information provided on the Services.
          Your use of the Services and your reliance on any information on the Services is solely at your own risk.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">External Links Disclaimer</h2>
        <p className="text-gray-600 mb-4">
          The Services may contain (or you may be sent through the Services) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising.
          Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
        </p>
        <p className="text-gray-600 mb-4">
          We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Services or any website or feature linked in any banner or other advertising.
          We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Disclaimer</h2>
        <p className="text-gray-600 mb-4">
          The Services cannot and do not contain professional advice.
          The information is provided for general informational and educational purposes only and is not a substitute for professional advice.
        </p>
        <p className="text-gray-600 mb-4">
          Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
          We do not provide any kind of professional advice.
          The use or reliance of any information contained on the Services is solely at your own risk.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testimonials Disclaimer</h2>
        <p className="text-gray-600 mb-4">
          The Services may contain testimonials by users of our products and/or services.
          These testimonials reflect the real-life experiences and opinions of such users.
          However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services.
          We do not claim, and you should not assume, that all users will have the same experiences.
        </p>
        <p className="text-gray-600 mb-4">
          Your individual results may vary.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Errors and Omissions Disclaimer</h2>
        <p className="text-gray-600 mb-4">
          While we have made every attempt to ensure that the information contained in the Services is correct, we are not responsible for any errors or omissions, or for the results obtained from the use of this information.
          All information in the Services is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.
        </p>
        <p className="text-gray-600 mb-4">
          In no event will IjStart Printer, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in the Services or for any consequential, special or similar damages, even if advised of the possibility of such damages.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have any feedback, comments, requests for technical support, or other inquiries, please contact us by email: support@ijstartprinter.com.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;