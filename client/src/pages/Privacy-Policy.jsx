import React from 'react';
import Layout from '../components/Layout'; 

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="bg-orange-50 bg-opacity-70 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 relative pb-2">
            <span className="border-l-4 border-orange-500 pl-4">PRIVACY POLICY</span>
          </h1>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-orange-200">
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              This Privacy Policy describes how Shivdan Singh Institute of Technology & Management (SSITM)
              collects, uses, and discloses your personal information when you visit or make use of our
              website, ssitm.ac.in (the "Site"). We are committed to protecting your privacy and ensuring
              the security of your personal data.
            </p>

            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-orange-700 mb-3 border-b border-orange-300 pb-2">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-2">
                We collect various types of information in connection with the services we provide, including:
              </p>
              <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-2">
                <li>
                  <span className="font-semibold">Personal Information:</span> When you interact with our Site,
                  such as filling out inquiry forms, application forms, or subscribing to newsletters,
                  we may collect personally identifiable information like your name, email address,
                  phone number, postal address, educational background, and other relevant details.
                </li>
                <li>
                  <span className="font-semibold">Usage Data:</span> We automatically collect information
                  on how the Site is accessed and used. This Usage Data may include your computer's
                  Internet Protocol address (e.g., IP address), browser type, browser version,
                  the pages of our Site that you visit, the time and date of your visit, the time
                  spent on those pages, unique device identifiers, and other diagnostic data.
                </li>
                <li>
                  <span className="font-semibold">Cookies and Tracking Technologies:</span> We use cookies
                  and similar tracking technologies to track the activity on our Site and hold certain information.
                  Cookies are files with a small amount of data which may include an anonymous unique identifier.
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  However, if you do not accept cookies, you may not be able to use some portions of our Site.
                </li>
              </ul>
            </div>

            {/* Section 2: How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-orange-700 mb-3 border-b border-orange-300 pb-2">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-2">
                SSITM uses the collected data for various purposes:
              </p>
              <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-2">
                <li>To provide and maintain our Site.</li>
                <li>To notify you about changes to our services.</li>
                <li>To allow you to participate in interactive features of our Site when you choose to do so.</li>
                <li>To provide customer support and respond to inquiries.</li>
                <li>To gather analysis or valuable information so that we can improve our Site and services.</li>
                <li>To monitor the usage of our Site.</li>
                <li>To detect, prevent, and address technical issues.</li>
                <li>To provide you with news, special offers, and general information about other goods, services, and events which we offer that are similar to those that you have already purchased or inquired about unless you have opted not to receive such information.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-orange-700 mb-3 border-b border-orange-300 pb-2">
                3. Disclosure of Your Information
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-2">
                We may share your personal information with third parties in the following situations:
              </p>
              <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-2">
                <li>
                  <span className="font-semibold">Service Providers:</span> We may employ third-party companies and individuals to facilitate our Site
                  ("Service Providers"), to provide the Site on our behalf, to perform Site-related services, or to assist us in analyzing how our Site is used.
                  These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </li>
                <li>
                  <span className="font-semibold">Compliance with Law:</span> We may disclose your Personal Information in the good faith belief that such action is necessary to:
                  <ul className="list-circle pl-5 mt-2 space-y-1">
                    <li>Comply with a legal obligation.</li>
                    <li>Protect and defend the rights or property of SSITM.</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Site.</li>
                    <li>Protect the personal safety of users of the Site or the public.</li>
                    <li>Protect against legal liability.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-orange-700 mb-3 border-b border-orange-300 pb-2">
                4. Security of Your Information
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-2">
                The security of your data is important to us, but remember that no method of transmission
                over the Internet, or method of electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your Personal Information, we cannot guarantee
                its absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-orange-700 mb-3 border-b border-orange-300 pb-2">
                5. Your Data Protection Rights (e.g., GDPR, India Data Protection Act, etc.)
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-2">
                Depending on your location and applicable laws, you may have the following data protection rights:
              </p>
              <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-2">
                <li>The right to access, update, or delete the information we have on you.</li>
                <li>The right of rectification (to have your information corrected).</li>
                <li>The right to object to our processing of your personal data.</li>
                <li>The right of restriction (to request that we restrict the processing of your personal information).</li>
                <li>The right to data portability (to receive a copy of your personal information in a structured, machine-readable, commonly used format).</li>
                <li>The right to withdraw consent at any time where SSITM relied on your consent to process your personal information.</li>
              </ul>
              <p className="text-gray-700 text-base leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the details below.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-orange-700 mb-3 border-b border-orange-300 pb-2">
                6. Links to Other Sites
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-2">
                Our Site may contain links to other sites that are not operated by us. If you click on a
                third-party link, you will be directed to that third party's site. We strongly advise
                you to review the Privacy Policy of every site you visit. We have no control over and
                assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-orange-700 mb-3 border-b border-orange-300 pb-2">
                7. Children's Privacy
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-2">
                Our Site does not address anyone under the age of 18 ("Children"). We do not knowingly
                collect personally identifiable information from anyone under the age of 18. If you
                are a parent or guardian and you are aware that your child has provided us with Personal
                Information, please contact us. If we become aware that we have collected Personal
                Information from children without verification of parental consent, we take steps to
                remove that information from our servers.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-orange-700 mb-3 border-b border-orange-300 pb-2">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-2">
                We may update our Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page. We will let you know via email and/or
                a prominent notice on our Site, prior to the change becoming effective and update the
                "effective date" at the top of this Privacy Policy. You are advised to review this
                Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective
                when they are posted on this page.
              </p>
            </div>


          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;