import React ,{ useEffect}from 'react';
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
                    <h1 className="page-title">Refund Policy</h1>
                    <ul>
                        <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                            <a className="active" href="index.html">Home</a>
                        </li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
            </div>
            <div className="rs-about gray-color pt-50 pb-50 ">
            <div className="container">
        <div className="termscondition-content">
          <div className="termscondition-block1">
            <h4>Dear client,</h4>
            <p>We endeavour to provide you with the best online tutoring services in every academic field, academic consultancy, &amp; educational training. However, we also have a refund policy which would ensure that your payments are secure in case of non-receipt of services or in case of duplicate payment.. Also, when you book your session with us, we assume that you must have read and agreed to all the policies that have been stated.</p>
            <p>We work to deliver the best quality to our clients. We follow the best practices to deliver quality solutions that help our clients. We firmly believe in truthfulness so we have crafted a fully transparent refund policy. Also, when you place an order on our website, we assume that you have read and agree to all the policies stated.</p>
            <p>Refund/ cancellation policy will be applicable under certain conditions only. These are:</p>
            <h4>Cancellation by the client </h4>
            <ul className="privacy-content">
              <li>We entertain the cancellation of service on the request of the client as For instance, a client books a service with us before the 24 hours of commencement time, then the following refund process would be initiated from our end.</li>
              <li>If the client cancels the service request any time before 24 hours from the commencement of the service, then 100% of the amount would be refunded.</li>
              <li>If the client cancels the service in between 18-24 hours before the commencement of the service, then 50% of the total amount would be refunded.</li>
              <li>If the client cancels the service, before 6 hours of the commencement of the session, then no amount would be refunded.</li>
              <li>We are not responsible for any charges that your bank will charge on the transaction.</li>
            </ul>
            <h4>Cancellation by us </h4>
            <ul className="privacy-content">
              <li>If the session has been cancelled by us due to any unforeseen situation or could not find the best match tutors/experts according to the need, the total amount would be refunded to the client within 3 working days.</li>
              <li>In addition to these refund/ cancellation policies, some additional terms and conditions are</li>
              <li>Please make sure to go through each and every terms and conditions diligently, before booking a session with us.</li>
              <li>In case, the client is not satisfied with the session/service, then we would provide them with one more session, at no additional cost.</li>
              <li>In case, there is any additional requirement from the client, we would cater to them. However, additional cost might incur, based on the requirement.</li>
              <li>We believe in maintaining the privacy of our clients. Thus, we would not share the contact details of our clients with anyone, except our subject specific experts or tutors.</li>
              <li>In case of any unforeseen events, if we cancel the session, then we will reschedule the session at the time which suits both parties.</li>
            </ul>
            <p>The terms and conditions are subject to change as per the guidelines of the management. So, make sure to check the website for regular updates.</p>
          </div>
        </div>
             </div>
            </div>
           
 
            <Footer />
        </div>

    );
}

