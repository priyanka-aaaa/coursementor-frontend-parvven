import React, { useEffect } from "react";
import Footer from './Footer'
import Header from './Header'
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
export default function About() {

    const routePath = useLocation();
    useEffect(() => {

        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="main-content">
            <div className="full-width-header">
                <Header />

            </div>
            <div className="rs-breadcrumbs img1">
                <div className="breadcrumbs-inner text-center">
                    <h1 className="page-title">Term & Condition</h1>
                    <ul>
                        <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                            <a className="active" href="index.html">Home</a>
                        </li>
                        <li>Term & Condition</li>
                    </ul>
                </div>
            </div>
            <div className="rs-about gray-color pt-120 pb-120 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 md-mb-30">
                            <div className="rs-animation-shape">

                            </div>
                        </div>

                        <div className="container">
                            <div className="faq-heading">
                                {/* <span><i className="far fa-file-alt"></i></span>
			 <h2 className="termsconditionhead">Terms and Conditions</h2> */}
                                <p>This document lays out the Terms and Conditions (“Terms”) which shall be applicable to all the legal and fiduciary relations (present /future) with CourseMentor.com a product of Ownly Digital LLP</p>
                            </div>
                            <div className="termscondition-content">
                                <div className="termscondition-block1">
                                    <ul className="privacy-content" style={{ listStyleType: 'decimal' }}>
                                        <li>By registering for or using the site or the platform/network or downloading information or using the CourseMentor.com website located at CourseMentor.com, and all associated sites linked to CourseMentor.com, the user agrees to be bound by these terms.</li>
                                        <li>If you do not accept these terms, please do not use the site or the platform/network.</li>
                                        <li>By entering into a contract with CourseMentor.com, the Contract shall come into force on 24-07-2014 (the “Commencement Date”) and unless terminated earlier in accordance with its terms shall continue in full force and effect until specified (the “Contract Period”).</li>
                                        <li>With reference to the terms and conditions of the contract, stipulated prior, the payment will be made to the client (in terms of delivery of product/service) and employee (Subject to Employment Contract mandate).</li>
                                        <li>Refund policy as stipulated in terms &amp; conditions of contract.</li>
                                        <li>Ownly Digital LLP (including its affiliates, successors, and assignees), an academic consultancy, educational training, online tutoring, app development, and digital marketing company, incorporated in India under the Companies Act 2013 and having its office at #211, Sector 7, Kurukshetra, India 136118</li>
                                    </ul>
                                    <br></br>
                                    <h4> 1. ACCEPTANCE </h4>
                                    <p>1.1 These CourseMentor.com Service Terms and conditions with the Privacy Policy apply to all referrals of candidates made to a client by the Company for either temporary/permanent employment or contract engagements, subject only to any variation recorded in writing and mutually agreed to by the parties.</p>
                                    <p>1.2 The Service (collectively “Terms”) govern your use of the service, site, content, and software (collectively the “Service”). By registering for or using the Service or any portion of it you accept the Terms.</p>
                                    <p>1.3 These terms and conditions also apply to any other consultancy services provided by the Company to the client, unless any variation is recorded in writing and mutually agreed to by the parties.</p>
                                    <p>1.4 The Terms constitute an agreement between you and CourseMentor.com including its affiliates and supplie</p>
                                    <h4>2. REGISTRATION &amp; TERMINATION</h4>
                                    <p>2.1 To use a Service, you may need to register and create an account with a username and a password. You may need to provide us with certain personal and other information. CourseMentor.com may verify your email address before your account can be used.</p>
                                    <p>2.2 You agree to disclose truthful and complete information, in bonafide, when you register for the Service and to keep that information updated accordingly. User to observe due care and diligence, to protect your username and password against misuse by others and promptly notify CourseMentor.com about any misuse. You are personally responsible for any use of the Service.</p>
                                    <p>2.3 User may terminate its registration, if no longer continues the use of Service. After the termination, the user will no longer have any access to the Service. CourseMentor.com may terminate the registration in accordance with the user’s correspondence or restrict the access to certain parts of the Service if CourseMentor.com reasonably believes that the user has breached the Terms of use.</p>
                                    <h4>3. CONTRACTS</h4>
                                    <p>3.1 The Agreement will, once approved by other party, commence on the Start Date, and shall continue for the defined period and shall, unless earlier termination takes place in accordance with the provisions set out in clause 2.1 &amp; 2.2.</p>
                                    <p>3.2 This Agreement may be terminated by:</p>
                                    <p>3.2.1 Customer on written notice / correspondence to CourseMentor.com after receiving notice of an amendment (as permitted under this Agreement) which is materially detrimental to Customer (“Detrimental Amendment”), which for the avoidance of doubt includes an increase in Charges and/or substantial loss of content or functionality in the Software to Customer’s detriment and for which no reasonable substitute is provided, which notice shall not take effect until the date on which such amendment or increase comes into effect; or</p>
                                    <p>3.2.2 either party on written notice to the other if:</p>
                                    <p>(a) the other commits a material breach of this Agreement, provided that where the breach is capable of being remedied then the defaulting party shall have failed to remedy the same within 30 days of receiving notice specifying the breach and requiring its remedy</p>
                                    <p>3.2.3 either party on receipt of written notice by the other of not less than 30 days prior to, but not taking effect until, the expiry of the contract; or</p>
                                    <p>3.4 Expiry or termination of this Agreement shall be without prejudice to the accrued rights and obligations of the parties.</p>
                                    <p>3.5 Contract with CourseMentor.com is non-exclusive, non-transferable, revocable at any time at CourseMentor.com sole discretion, to access and use the Service strictly in accordance with the Terms. Use of the Service does not grant you any intellectual property rights in or to any information or content in the Service.</p>
                                    <p>3.6 As part of the Service, CourseMentor.com may provide you with content developed by CourseMentor.com CourseMentor.com grants you a non-exclusive permission to use the Content for the purpose it is intended, unless otherwise defined in the applicable Terms or the purchase order. The CourseMentor.com, however, retains the right to withdraw the aforementioned license at its sole discretion.</p>
                                    <p>3.7 You are bound by any restrictions applicable to specific Content you obtain through the Service. Any license acquired to third-party Content is a binding agreement between you and the third-party Content provider. You have only the rights to the Content which are expressly granted herein. Any liability arising out of your use of the Content shall be solely to your account and the CourseMentor.com shall not take any responsibility for the same.</p>
                                    <p>3.8 You may not distribute, transfer the right to use, modify, translate, reproduce, resell, sublicense, rent, lease, reverse engineer, or otherwise attempt to discover the source code of or make derivative works of the Software. For open source licensed software, applicable open source license terms apply.</p>
                                    <p>3.9 You may be able to submit information or content (“Material”) to the Service. CourseMentor.com does not claim ownership in your Material. Your submission of Material does not transfer ownership of rights of the Material to CourseMentor.com CourseMentor.com is only transmitting the Material and is not responsible for editorial control over it.</p>
                                    <p>3.10 Any liability arising out of the use of your Material shall not be borne by the CourseMentor.com and you shall keep the CourseMentor.com indemnified and harmless in this regard. By submitting Material to the Service you grant CourseMentor.com a world-wide, non-exclusive, sub-licensable, assignable, fully paid-up, royalty-free, perpetual and irrevocable license to use, copy, publicly perform, display, distribute in any media and modify the Material to incorporate the Material into other works, and to grant similar sublicenses to the extent necessary for CourseMentor.com to provide the Service.</p>
                                    <p>3.11 You are solely responsible for taking backup copies of the data you store on the Service, including Content you upload. If the Service is discontinued or cancelled, CourseMentor.com may permanently delete your data. CourseMentor.com has no obligation to return data to you after the Service is discontinued or cancelled.</p>
                                    <h4>4. CONFIDENTIAL INFORMATION</h4>
                                    <p>4.1 Service provider acknowledges that any documents, the contents thereof, or other proprietary or confidential materials expressly designated as confidential that are provided to by Customer during the Term of this Agreement (“Customer Confidential Information”) are valuable assets of Customer. We will take reasonable steps to ensure that the Customer Confidential Information is not used or disclosed except as expressly permitted by this Agreement. Service providers will not permit any unaffiliated third-party access to, in any manner, the Customer Confidential Information, except as provided in this Agreement. Customer Confidential Information shall not include information that consists of ideas, concepts, know-how or techniques relating to the enhancement, customisation, installation, or implementation of the Software.</p>
                                    <p>4.2 Customer acknowledges and agrees that the Software constitutes a valuable proprietary product of Supplier and that the Software, together with the terms of this Agreement, shall be referred to as the “Supplier Confidential Information.” Customers will take reasonable steps to ensure that the Supplier Confidential Information is not used or disclosed except as expressly permitted by this Agreement. Customer will not permit any third-party access to, in any manner, the Supplier Confidential Information, except as provided in this Agreement. Customer may permit its independent contractors access to the Supplier Confidential Information to the extent necessary for such contractor’s provision of services to Customer if such contractor executes a confidentiality agreement with Customer or Supplier which prohibits the contractor from using or disclosing the Supplier Confidential Information; provided, however, that such independent contractors may not include any Competitor.</p>
                                    <h4>5. CONTENT</h4>
                                    <p>Before downloading or accessing any Content, please check whether the Content which you wish to access is restricted by age or marked as potentially ‘offensive’ or ‘explicit’. CourseMentor.com shall not be responsible for any claims or offense caused or suffered by you accessing such Content. You agree:</p>
                                    <p>To use the Content only for your personal, non-commercial purposes; To use the Content in accordance with the restrictions set out in the applicable laws, additional terms, guidelines, and policies or on the product pages that apply to that particular piece of the Content;</p>
                                    <p>Not to make copies, give, sell, resell, loan, rent, offer, broadcast, send, distribute, transfer, communicate to the public, reproduce, modify, display, perform, commercially exploit, or make the Content available unless otherwise authorized in the applicable Terms and to advise CourseMentor.com promptly of any such unauthorized use;</p>
                                    <p>Not to remove, circumvent, reverse engineer, decrypt, or otherwise alter or interfere with any applicable usage rules or attempt to circumvent digital rights management or copy protection features associated with the Content or any other technologies used to control the access to or use of the Content or its identifying information; Not to use any automated systems or means, except for those provided by us, for the selection or downloading of the Content.</p>
                                    <p>Not to give out authorised passwords or otherwise allow other people to access the Content. The restrictions on copying that apply to applicable media also apply to the Content accessed as part of this Service.</p>
                                    <p>The Content is owned and/or controlled by CourseMentor.com and/or its respective licensors and is protected by intellectual property laws. The third-party Content provider is solely responsible for any Content it provides, any warranties to the extent that such warranties have not been disclaimed and for any claims you may have relating to that Content or your use of that Content.</p>
                                    <p>However, CourseMentor.com reserves the right to enforce the third-party Content agreement terms against you as a third-party beneficiary of those terms. The third-party Content providers are third-party beneficiaries under these Terms and may enforce the provisions that directly concern the Content in which they have rights. CourseMentor.com may be acting as an agent for a third party Content provider in providing the Content to you. CourseMentor.com is not a party to the transaction between you and the third-party Content provider for such Content.</p>
                                    <h4>6. USING THE SERVICES</h4>
                                    <p>While making use of this service, the user agrees to:</p>
                                    <ul className="privacy-content">
                                        <li>-Use the Service only for your personal, non-commercial purposes;</li>
                                        <li>-Not submit unlawful, offensive, inaccurate, misleading, abusive, pornographic, harassing, libellous, blasphemous, defamatory, obscene, paedophilic, invasive of another’s privacy, hateful, racially, or ethically objectionable, disparaging, relating to or encouraging money laundering or gambling, or otherwise inappropriate material.</li>
                                        <li>-Not to upload or share any information that impersonates another person, threatens the unity, integrity, defence, security, or sovereignty of India.</li>
                                        <li>-Obtain any consents, permission or licenses that may be legally required for you to submit any Material;</li>
                                        <li>-Respect the privacy of others;</li>
                                        <li>-Not distribute or post spam, unreasonably large files, chain letters, pyramid schemes, viruses; or Not use any other technologies or initiate other activities that may harm the Service, or the interest or property of the Service users.</li>
                                        <li>-Not to use any automated systems or means to access, acquire, copy, or monitor any part of the service.</li>
                                        <li>-Be responsible for the consequences related to the Material that you post.</li>
                                        <li>-Report any abuse of the above terms at the below email id CourseMentor.com</li>
                                        <p>CourseMentor.com may but has no obligation to:</p>
                                        <p>Monitor or moderate any Content or Material; Remove any Material from the Service; and Restrict access to any part of the Service at any time in its sole discretion.</p>
                                        <h4>7. ORDER AND PAYMENT TERMS</h4>
                                        <p>“Order” shall mean the selection of payable Content and/or subscription to Content offered by CourseMentor.com and available in the Service and submission of payment method, as well as submitting the order by selecting the “buy”, “ok”, “I accept” or other similar confirmation of acceptance in the order flow or providing other indication of acceptance terms that are presented to you in the order flow.</p>
                                        <p>You agree that all Orders shall be legally valid and binding. All Orders are subject to acceptance by CourseMentor.com</p>
                                        <h5>7.1 You may pay by credit or debit card, network service provider billing, or other payment methods if available.</h5>
                                        <p>7.1.1 Your credit or debit card must have a billing address in the country where the Content is offered by the Service. CourseMentor.com will charge your credit card or debit your bank account within a reasonable time after you have made your Order. All credit card payments are subject to validation checks and authorization by the card issuer.</p>
                                        <p>7.1.2 If you choose network service provider billing, charges will appear on your mobile phone bill or be deducted from your prepaid account if it is a prepaid account. Some network service providers may subject your usage of the Service to additional terms and conditions including placing limits on the amount of charges possible with network service provider billing. Charges in excess of network service provider limits or account balance may be rejected.</p>
                                        <p>7.1.3 You agree to pay the charges related to your Order, to ensure that the instrument of payment is valid at the time of the Order, that you are the rightful holder of the instrument and that the instrument is used within its credit limits.</p>
                                        <p>The Content that is delivered is licensed to you. You agree to use such Content solely as permitted in these Terms and in any additional terms that you may be presented in the order flow.</p>
                                        <p>The Service may offer subscriptions. You authorize the Service to place a periodical charge during the period of the subscription. The Service may also offer a trial period. If your Order involves a trial period (also known as try-and-buy), you may be charged when the trial period expires, unless you cancel in accordance with the subscription/trial terms.</p>
                                        <p>The prices in the Service may change from time to time. Prices include applicable taxes in effect at the time of your transaction, unless otherwise stated. There may be instances where you incur additional charges from your bank or credit card provider based on currency conversion rates used and/or additional fees assessed.</p>
                                        <h4>8. GENERAL PROVISIONS</h4>
                                        <h5>8.1 NOTICES</h5>
                                        <p>CourseMentor.com may post notices within the Service. CourseMentor.com may also send you notices about products and Services to the email address or telephone number you have provided to us. You are deemed to have received such notices at the latest within seven (7) days from CourseMentor.com sending or posting those. Your continued use of the Services constitutes your receipt of all notices regardless of delivery method.</p>
                                        <p>Except as otherwise provided, all notices and correspondence must be given in writing to Service Provider at: info@CourseMentor.com or such other addresses as may from time to time be notified to Customer in writing; and to Customer at the address set out in the applicable ordering document unless otherwise notified to Service provider in writing.</p>
                                        <h5>8.2 FEES</h5>
                                        <p>Your use of the Service may be or may become subject to charges.</p>
                                        <p />
                                        <p>Use of the Service may involve transmission of data through your service provider’s network. Prices listed within the Service do not include possible data transmission, text message, voice, or other service provision charges by your network service provider.</p>
                                        <p />
                                        <p>CourseMentor.com assumes no responsibility for the payment of any charges of your service providers.</p>
                                        <p />
                                        <h5>8.3 DELAYS AND COMPLAINTS</h5>
                                        <p>8.3.1 In the event that the Client proves that the Services are delayed or not in accordance with the Contract, the Company shall be obliged to remedy or redeliver, at its own discretion, without undue delay. In the event that the Services continue to be not in accordance with the Contract after reasonable attempts have been made to remedy this, the Client shall be entitled to cancel the Order, provided that the breach is material.</p>
                                        <p />
                                        <p>8.3.2 Complaints concerning delays or breach of Contract shall be submitted immediately after the time when the Client became or should have become aware of the matter. If the Client fails to bring the defect (unless by its very nature it is impossible to ascertain within such a period) to the attention of the Company within 48 hours the Client shall be deemed to have accepted the Services and shall not be entitled to assert remedies based on delays or breach of Contract.</p>
                                        <p />
                                        <p>8.3.3 The Client hereby acknowledges that certain Services rely upon goods and/or services being provided by third parties (‘Third Party Services’). The Client acknowledges that the Third-Party Services will be governed by that third parties’ terms and conditions and that the Company cannot provide any warranties in respect of the Third Party’s Services and will not be liable to the Client for any delays and/or failings in respect of the same. Providers of Third Party Services may provide their own warranties to the Client and the Client must satisfy itself whether or not such warranties (where given) are acceptable for the Client’s business purposes or risk management policies.</p>
                                        <p />
                                        <p>8.3.4 The Company’s only responsibility in respect of the Third-Party Services is to take reasonable care and skill when selecting the providers of the same.</p>
                                        <p />
                                        <p>8.3.5 The Client’s exclusive remedies for late delivery or Services not conforming with the Contract, if the remedies set out in these Terms have been exhausted, the Client’s final remedy is limited to cancellation of the Contract and the Company’s sole liability is to refund any payments for Services not conforming with the Contract, subject to the limitations set out in clause 9.</p>
                                        <p />
                                        <h5>8.4 LIABILITY</h5>
                                        <p>8.4.1 Except as expressly stated the Company shall have no liability to the Client for any loss or damage whatsoever arising from or in connection with the provision of the Services or for any claim made against the Client by any third party.</p>
                                        <p />
                                        <p>8.4.2 Without prejudice to the generality, the Company shall have no liability for any losses or damages which may be suffered by the Client whether the same are suffered directly or indirectly or are immediate or consequential which fall into the following categories:</p>
                                        <p />
                                        a) Any indirect or consequential loss arising under or in relation to the Contract even though the Company was aware of the circumstances in which such loss could arise;
                                        b) Loss of profits; loss of anticipated savings; loss of business opportunity or goodwill;
                                        c) Loss of data; and
                                        d) Fraudulent clicks on any of the Client’s accounts managed by the Company.
                                        <h5>8.5 SEVERABILITY</h5>
                                        <p>Each provision of this Agreement shall be interpreted in such a manner as to be effective and valid under applicable law. The invalidity or unenforceability of any provision of this Agreement shall in no way affect the validity or enforceability of any other provision hereof. Any invalid or unenforceable provision shall be deemed severed from this Agreement and the balance of this Agreement shall be construed and enforced as if this Agreement did not contain the particular provisions(s) held to be invalid or unenforceable.</p>
                                        <p />
                                        <h5>8.6 FORCE MAJEURE</h5>
                                        <p>Neither party shall be responsible for any failure to perform, or delay in performing any of its obligations under this Agreement, other than payment obligations, where and to the extent that such a failure or delay results from causes outside the control of such party. Such causes shall include, without limitation, delays caused by the other party, acts of God or of the public enemy, acts of the government in its sovereign or contractual capacity, fires, floods, epidemics, quarantine restrictions, freight embargoes, strikes, civil commotion, or the like.</p>
                                        <p />
                                        <h5>8.7 DISPUTES</h5>
                                        <p>Any controversy or claim between the parties shall be settled first by negotiation between the Client’s Representative and the Company’s project manager. In the event the parties are unable to resolve the dispute in a reasonable period of time, the parties agree to elevate the dispute to their respective Presidents, Managers, or equivalent officers. If, after a reasonable period of time, the parties are still unable to resolve the dispute, the parties agree to resolve the dispute in accordance with clause 8.8</p>
                                        <p />
                                        <h5>8.8 GOVERNING LAW</h5>
                                        <p>The Company and the Client shall be obliged to attempt to settle any disputes arising between them including disputes relating to the existence or validity of the Contract through negotiation provided always that either party shall be entitled at all times to exercise any of its other remedies including through taking legal action.</p>
                                        <p />
                                        <p>The Contract shall be governed by and construed in accordance with India and Haryana’s law and the parties hereby agree to submit to the non-exclusive jurisdiction of the Kurukshetra courts.</p>
                                        <p />
                                        <h5>8.9 CONFIDENTIALITY AND PERSONAL DATA</h5>
                                        <p>A party (Receiving Party) shall keep in strict confidence all technical or commercial know-how, specifications, inventions, processes, or initiatives which are of a confidential nature and have been disclosed to the Receiving Party by the other party (Disclosing Party), its employees, agents or subcontractors, and any other confidential information concerning the Disclosing Party’s business or its products or its services which the Receiving Party may obtain. The Receiving Party shall restrict disclosure of such confidential information to such of its employees, agents or subcontractors as need to know it for the purpose of discharging the Receiving Party’s obligations under the Contract, and shall ensure that such employees, agents, or subcontractors are subject to obligations of confidentiality corresponding to those which bind the Receiving Party. This clause shall survive termination of the Contract.</p>
                                        <p />
                                        <h4>9. INTELLECTUAL PROPERTY RIGHTS</h4>
                                        <ul className="privacy-content" style={{ listStyleType: 'decimal' }}>
                                            <li>It is the responsibility of the Client to ensure that they have the right to use any Intellectual Property Rights when they provide any text, image, or representation (“Materials”) to the Company for incorporation into the Services and the Client hereby grants or agrees to procure the grant of (as applicable) an irrevocable licence to the Company to use such Materials for the purposes of providing the Services for the duration of the Contract.</li>
                                            <li>The Client shall be responsible for ensuring that the contents of Materials which the Client has contributed or approved are not in contravention of legislation, decency, marketing rules or any other third-party rights. the Company shall be entitled to reject and delete such material without incurring any liability. In addition, the Company shall be entitled to cancel the Order.</li>
                                            <li>The Client shall indemnify the Company against all damages, losses and expenses suffered or incurred by the Company as a result of the Materials which the Client has contributed or approved being in contravention of legislation, decency, marketing rules or any action that any such Materials infringe any Intellectual Property Rights of a third party.</li>
                                            <li>The parties shall be obliged to notify the other party without undue delay of any claims raised against a party as described above.</li>
                                            <li>Unless expressly stated otherwise in these Terms or in an Order, the Intellectual Property Rights created, developed, subsisting, or used in connection with the Services and whether in existence at the date hereof or created in the future shall vest in and be the property of the Company or the relevant third party from whom the Company has acquired a right of use with a view to executing the Order. The Client agrees to execute and deliver such documents and perform such acts as may be necessary from time to time to ensure such Intellectual Property Rights vest in the Company.</li>
                                            <li>The Intellectual Property Rights as mentioned in Clause 8.2 shall not be used, assigned, distributed, copied, forwarded to online or offline activities by the Client without a separate, express written agreement.</li>
                                            <li>If the Company makes software, scripts, services etc. available to the Client as part of the execution of an Order, the Client shall only acquire a non-exclusive personal non-transferable license to use such material until the Services under this agreement cease.</li>
                                            <li>The Client hereby irrevocably licenses the Company to use and display the Client’s name, figure, logo etc. as a reference on the Company’s website, other marketing materials or types of media after the Contract terminates. The Client agrees to send the Company its most recent logo or figure as and when it is amended from time to time.</li>
                                        </ul>
                                        <h4>10. REFUND POLICY ENTIRE AGREEMENT</h4>
                                        <p>This Agreement, together with the Terms and Conditions and the most recent Statement of Work, supersedes all prior oral or written representations, communications, or agreements between the parties, and, together with any appendices, constitutes the final and entire understanding of the parties regarding the subject matter of this Agreement. Neither party has relied on any such prior oral or written representations, communications, or agreements.</p>
                                        <p>CourseMentor.com SERVICE TERMS</p>
                                        <p> <b>Privacy</b></p>
                                        <p>The Company Web-sites (“Site”) are maintained by:</p>
                                        <p>Ownly Digital LLP<br></br>
                                            #211, Sector 7<br></br>
                                            Kurukshetra – 136118</p>
                                        <p>We can be reached at Contact Us</p>
                                        <p>Any personal information identifying any visitor to the CourseMentor.com Sites or Subscriber (“Personal Information”) if required, is asked for explicitly in the relevant page on the CourseMentor.com Sites. Personal Information is used to operate the CourseMentor.com Sites, and we may occasionally inform you of new features, services, and products from the Company.</p>
                                        <p>We may place a text file called a “cookie” in the browser files of your computer. The cookie itself does not contain Personal Information although it will enable the CourseMentor.com Sites to relate your use of the CourseMentor.com Sites to information that you have specifically and knowingly provided to the CourseMentor.com Sites.</p>
                                        <p>If at any time you believe the CourseMentor.com Sites have not adhered to these principles, please notify at Contact Us and we will use all commercially reasonable efforts to promptly determine and correct the problem.</p>
                                        <p>If you have questions about this policy, Contact Us at info@CourseMentor.com</p>
                                        <h4>11. Feedback to CourseMentor.com</h4>
                                        <p>By submitting any ideas, feedback and/or proposals (“Feedback”) to CourseMentor.com through the Service or other means, you acknowledge and agree that:</p>
                                        <ul className="privacy-content" style={{ listStyleType: 'decimal' }}>
                                            <li>CourseMentor.com may have similar development ideas to the Feedback</li>
                                            <li> your Feedback does not contain confidential or proprietary information of you or any third party</li>
                                            <li> CourseMentor.com is not under any obligation of confidentiality with respect to the Feedback</li>
                                            <li> CourseMentor.com may freely use, distribute, exploit and further develop and modify Feedback for any purpose; an</li>
                                            <li> you are not entitled to any compensation of any kind from CourseMentor.com</li>
                                        </ul>
                                        <h4>12. Social Activities and Location Sharing</h4>
                                        <p>You may use features in the Service to share your location, status, content, Materials, or personal information or to interact with other users, sites, and services. By using these features, you agree that CourseMentor.com may use and provide that information to other services and persons with whom you choose to interact or share this information. Users of these services and persons, such as your contacts, may see your location, status, and/or personal information. In using these features, you agree not to share information, Content or Material, or to link to any service or site containing information, Content or Material, that: (a) contains content or other material that is illegal or inappropriate; (b) exploits intellectual property rights without authorization or encourages users to piracy; or (c) contains sensitive personal data of others. Any interaction does not involve CourseMentor.com and is solely between you and the other user(s).</p>
                                        <h4>13. Availability and Technical Requirements</h4>
                                        <p>The availability of Content and the Service may vary and is subject to CourseMentor.com’s sole discretion. CourseMentor.com expressly disclaims any representation or warranty that any particular Content or Service will be available. The Service, operations and some features may also be dependent on the network, compatibility of the devices used, and the content formats supported.</p>
                                        <p>To access the Service, you may need to download a specific piece of software developed by CourseMentor.com or by another party.</p>
                                        <p>CourseMentor.com may, in its sole discretion, change, correct or discontinue the Service in whole or in part. CourseMentor.com may disable any Content or Software contained in your Service account for any reason and remove any Content or Software and/or disable copies of any application on your device in order to protect the Service, application providers, wireless carriers over whose network you access the service or any other affected or potentially affected parties.</p>
                                        <h4>14. Links to Third Party Sites and Content</h4>
                                        <p>CourseMentor.com may include access to sites and services on the Internet or preloaded clients that enable you to interact with sites and services that are owned or operated by third parties and that are not part of the Service. You must review and agree to the terms and conditions of these sites or services before using these sites or services.</p>
                                        <p>CourseMentor.com has no control over the third-party content, sites or services and assumes no responsibility for services provided or material created or published on these third-party sites or services. A link to a third-party site does not imply that CourseMentor.com endorses the site or the products or services referenced in the site.</p>
                                        <p>In addition, you and other users may create content and links to content within the Service that has not otherwise been submitted to the Service. CourseMentor.com is not responsible for this type of content or links.</p>
                                        <h4>15. Advertisements</h4>
                                        <p>Service may include advertisements. Advertisements may be targeted to the content or information stored on the Service, queries made through the Service, or other information.</p>
                                        <h4>16. Limitation of Liability</h4>
                                        <p>The Service is provided on “AS IS” and “AS AVAILABLE” basis. CourseMentor.com does not warrant that the Service will be uninterrupted or error or virus-free. No warranty of any kind, either express or implied, including but not limited to warranties of title, non-infringement, merchantability, or fitness for a particular purpose, is made in relation to the availability, accuracy, reliability, information or content of the Service. You expressly agree and acknowledge that the use of the Service is at your sole risk and that you may be exposed to content from various sources.</p>
                                        <p>CourseMentor.com is not liable for any direct damages caused by your use or inability to use the Service. In no case will CourseMentor.com be liable for any indirect, incidental, punitive, or consequential damages resulting from your use or inability to use the Service.</p>
                                        <h4>17. Indemnification</h4>
                                        <p>You agree to defend and indemnify CourseMentor.com from and against all third party claims and all liabilities, assessments, losses, costs or damages resulting from or arising out of (i) your breach of these Terms, (ii) your infringement or violation of any intellectual property rights, other rights or privacy of a third party, or (iii) misuse of the Service by a third party where the misuse was made possible by your failure to take reasonable measures to protect your username and password against misuse.</p>
                                        <h4>Applicable Law</h4>
                                        <p>Your agreement with CourseMentor.com shall be governed by the laws and decisions of the State of Haryana, India. In the event of commencement of any legal action regarding any term or condition of this engagement, such action by agreement is to be subject to the jurisdiction of the courts of the Kurukshetra-Haryana(India).</p>
                                    </ul></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Video Section End */}
            <Footer />
        </div>

    );
}

