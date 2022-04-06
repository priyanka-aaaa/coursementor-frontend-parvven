import React ,{useEffect}from 'react';
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
export default function About() {
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
                    <h1 className="page-title">Privacy Policy</h1>
                    <ul>
                        <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                            <a className="active" href="index.html">Home</a>
                        </li>
                        <li>Privacy Policy</li>
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

                       
                    </div>
                </div>
            </div>
            <div className="container">
        <div className="privacy-block-content">
          <div className="privacy-block1">
            <p><span>Your privacy is important to us. This privacy statement provides information about the personal information that is collected by this site and provided for purchased services, and the ways in which we use that personal information. </span></p>
            <h4>Personal information collections</h4>
            <p>We may collect and use the following kinds of personal information: </p>
            <ul className="privacy-content">
              <li>Information that you provide using to register with website newsletters and competitions.</li>
              <li>Information about various transactions that are carried out over this website.</li>
              <li>Information that you provide for the purpose of purchasing various services on our website.</li>
              <li>Information that you supply for the administration of services.</li>
              <li>Any other relevant information that you send to us through any mode.</li>
            </ul>
            <br></br>
            <h4> HOW WE USE YOUR INFORMATION</h4>
            <p> use your information for a variety of business purposes, including to:</p>
            <p> <b> Fulfill our contract with you and provide you with our Services, such as:</b></p>
            <ul className="privacy-content">
              <li><span>Managing your information and accounts;</span></li>
              <li><span>Providing access to certain areas, functionalities, and features of our Services, including providing access to eBooks, sample papers &amp; digital documents;</span></li>
              <li><span>Communicating with you about your account, activities on our Services, and policy changes;</span></li>
              <li><span>Undertaking activities to verify or maintain the quality or safety of a service or device;</span></li>
              <li><span>Providing advertising, analytics, and marketing services;</span></li>
              <li><span>Collect payments from you based on the services that you have taken from us.</span></li>
              <li><span>Send newsletters and relevant information so that you stay updated regarding our services, offers, and packages.</span></li>
            </ul>
            <h4>How We Share Your Personal Data</h4>
            <p>We disclose your Personal Data to the categories of service providers and other parties listed in this section. Depending on state laws that may be applicable to you, some of these disclosures may constitute a sale of your Personal Data. For more information, please refer to the state-specific sections below.</p>
            <ul style={{color: '#666'}}>
              <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Service Providers. These parties help us provide the Services or perform business functions on our behalf. They include:</span></li>
              <ul>
                <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Hosting, technology, and communication providers.</span></li>
                <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Security and fraud prevention consultants.</span></li>
                <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Analytics providers.</span></li>
                <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Support and customer service vendors.</span></li>
                <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Payment processors.</span></li>
                <ul>
                  <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Our payment processing partners collect your voluntarily-provided payment card information necessary to process your payment.</span></li>
                  <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Please see the payment processor’s terms of service and privacy policy for information on each of their use and storage of your Personal Data.</span></li>
                </ul>
              </ul>
              <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Advertising Partners. These parties help us market our services and provide you with other offers that may be of interest to you. They include:</span></li>
              <ul>
                <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Ad networks.</span></li>
                <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Data brokers.</span></li>
                <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Marketing providers.</span></li>
              </ul>
              <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Business Partners. These parties partner with us in offering various services. They include:</span></li>
              <ul>
                <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Businesses that you have a relationship with.</span></li>
                <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Companies that we partner with to offer joint promotional offers or opportunities.</span></li>
              </ul>
              <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Parties You Authorize, Access, or Authenticate</span></li>
              <ul>
                <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Social media services.</span></li>
              </ul>
            </ul>
            <br></br>
            <h4>Business Transfers </h4>
            <p> All of your Personal Data that we collect may be transferred to a third party if we undergo a merger, acquisition, bankruptcy, or other transaction in which that third party assumes control of our business (in whole or in part). Should one of these events occur, we will make reasonable efforts to notify you before your information becomes subject to different privacy and security policies and practices.</p>
            <h4>Data that is Not Personal Data</h4>
            <p><span style={{fontWeight: 400}}>We may create aggregated, de-identified, or anonymized data from the Personal Data we collect, including removing information that makes the data personally identifiable to a particular user. We may use such aggregated, de-identified or anonymized data and share it with third parties for our lawful business purposes, including to analyze, build and improve the Services and promote our business, provided that we will not share such data in a manner that could identify you.</span></p>
            <h4>Information Collected Automatically / Tracking Tools, Advertising, and Opt-Out</h4>
            <p>The Services use cookies and similar technologies such as pixel tags, web beacons, clear GIFs and JavaScript (collectively, “Cookies”) to enable our servers to recognize your web browser, tell us how and when you visit and use our Services, analyze trends, learn about our user base and operate and improve our Services. Cookies are small pieces of data– usually text files – placed on your computer, tablet, phone or similar device when you use that device to access our Services. We may also supplement the information we collect from you with information received from third parties, including third parties that have placed their own Cookies on your device(s). Please note that because of our use of Cookies, the Services do not support “Do Not Track” requests sent from a browser at this time.</p>
            <ul style={{color: '#666'}}>
              <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Essential Cookies. Essential Cookies are required for providing you with the features or services that you have requested. For example, certain Cookies enable you to log into secure areas of our Services. Disabling these Cookies may make certain features and services unavailable.</span></li>
              <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Functional Cookies. Functional Cookies are used to record your choices and settings regarding our Services, maintain your preferences over time and recognize you when you return to our Services. These Cookies help us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).</span></li>
              <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Performance/Analytical Cookies. Performance/Analytical Cookies allow us to understand how visitors use our Services. They do this by collecting information about the number of visitors to the Services, what pages visitors view on our Services, and how long visitors are viewing pages on the Services. Performance/Analytical Cookies also help us measure the performance of our advertising campaigns in order to help us improve our campaigns and the Services’ content for those who engage with our advertising. For example, Google Inc. (“Google”) uses cookies in connection with its Google Analytics services. Google’s ability to use and share information collected by Google Analytics about your visits to the Services is subject to the Google Analytics Terms of Use and the Google Privacy Policy. You have the option to opt-out of Google’s use of cookies by visiting the Google advertising opt-out page at www.google.com/privacy_ads.html or the Google Analytics Opt-out Browser Add-on at https://tools.google.com/dlpage/gaoptout/.</span></li>
              <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Retargeting/Advertising Cookies. Retargeting/Advertising Cookies collect data about your online activity and identify your interests so that we can provide advertising that we believe is relevant to you. For more information about this, please see the section below titled “Information about Interest-Based Advertisements.”</span></li>
            </ul>
            <p>You can decide whether or not to accept cookies through your internet browser’s settings. Most browsers have an option for turning off the cookie feature, which will prevent your browser from accepting new Cookies, as well as (depending on the sophistication of your browser software) allow you to decide on acceptance of each new cookie in a variety of ways. You can also delete all cookies that are already on your device. If you do this, however, you may have to manually adjust some preferences every time you visit our website and some of the Services and functionalities may not work. </p>
            <h4>Data Security and Retention </h4>
            <p>We seek to protect your Personal Data from unauthorized access, use, and disclosure using appropriate physical, technical, organizational, and administrative security measures based on the type of Personal Data and how we are processing that data. You should also help protect your data by appropriately selecting and protecting your password and/or other sign-on mechanisms; limiting access to your computer or device and browser, and signing off after you have finished accessing your account. Although we work to protect the security of your account and other data that we hold in our records, please be aware that no method of transmitting data over the internet or storing data is completely secure. </p>
            <p>We retain Personal Data about you for as long as you have an open account with us or as otherwise necessary to provide you with our Services. In some cases, we retain Personal Data for longer if doing so is necessary to comply with our legal obligations, resolve disputes, or collect fees owed, or is otherwise permitted or required by applicable law, rule, or regulation. We may further retain information in an anonymous or aggregated form where that information would not identify you personally.</p>
            <h4>Communication</h4>
            <p>All communications/correspondences are generally done via emails. It is the client’s responsibility to keep us updated with their relevant email addresses. In case, any detail that has been provided by the client changes, then it would be the responsibility of the client to update the details.</p>
            <h4>Updating this statement</h4>
            <p>In case, the management wants to bring forth any new changes, keeping the improvement of our services in mind, then, in that case, we may update this statement by posting a new version on this website without notification.</p>
            <p>It would be solely the website user's responsibility to keep checking this page occasionally, in order to ensure that you are familiar with any changes.</p>
            <p>If you have any questions or comments about this Privacy Policy, the ways in which we collect and use your Personal Data, or your choices and rights regarding such collection and use, please do not hesitate to contact us at:</p>
            <p>Contact info@CourseMentor.com</p>
            <p>don’t hesitate to contact us! In addition to this, we assure you that all your queries shall be entertained by us, within two working days.</p>
            <h4>Vocabulary</h4>
            <p>“Website” means CourseMentor.com<br></br>
            “You,” “Yours”, “Client” or “Customer” means you or any other person<br></br>
            “We,” “Our” or “Company” means CourseMentor.com / Ownly Digital LLP registered under the laws<br></br>
           “Order” “Session” means an electronic request paid for a particular product or service</p>
          </div>
        </div>
      </div>
   
            <Footer />
        </div>

    );
}

