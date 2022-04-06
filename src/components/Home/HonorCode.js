import React,{useEffect} from 'react';
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
                    <h1 className="page-title">Honor Code</h1>
                    <ul>
                        <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                            <a className="active" href="index.html">Home</a>
                        </li>
                        <li>Honor Code</li>
                    </ul>
                </div>
            </div>
            <div className="rs-about gray-color pt-50 pb-50 ">
            <div className="container">
        <div className="termscondition-content">
          <div className="termscondition-block1">
            <h4> Honor Code - Term of use</h4>
            <p> In today’s world of group projects and web searches, students have unprecedented access to information. This is especially true when you’re using a resource like CourseMentor.com, an online learning platform where you can access over thousands of course-specific study resources contributed by a community of students and educators.</p>
            <p> Given this wealth of available resources, how do you make sure you’re using these tools in a way that’s consistent with your school/Institute’s expectations?</p>
            <h5> Academic Integrity</h5>
            <p> Start by making sure you have a solid understanding of academic integrity. Generally speaking, as a student, you’re responsible for completing your own work, and your work should be original. If you’re referring to someone else’s original work, you should correctly cite it. Your school, your professors, and your peers are trusting you to be honest and authentic in your academic career.</p>
            <p> Some do an especially great job of showing examples of academic do’s and don’ts.</p>
            <p>And remember, when you’re using CourseMentor.com, you’re also bound by our Terms of Use, Privacy Policy, and Refund Policy. Be sure to know and follow all our guidelines as you share and learn from others in our community. We’re excited to have you here.</p>
            <p> <b>CourseMentor.com </b>goes above and beyond to help you— not just in passing your classes, but in expanding your education by connecting you with new topics, concepts, ideas, educators, and students. We’re dedicated to providing high-quality academic resources to help you learn and study more effectively, and we’re equally committed to ensuring proper usage and protecting ownership of those resources.</p>
            <p>While we believe that most CourseMentor.com users use the site in the manner for which it was intended, upon registration all users must confirm that they have read, understood, and agreed to comply with CourseMentor.com’s Honor Code.</p>
            <p> We expect our users to act with academic integrity. Therefore, anyone who misuses our site for the express purpose of cheating and/or claiming another user’s content as their own will be met with appropriate action. Review our rules for proper use. The solutions/services provided by our expert/tutors serve as sample model papers for our clients and are not to be submitted as it is a violation of fair use under academic integrity. These papers are intended to be used for research and reference purposes only.</p>
            <h4> For Students &amp; Users:</h4>
            <p>CourseMentor.com is committed to students. We want to help you learn, at every stage of the journey, at your own pace and with the tools you need to succeed. For some of you, that may mean using our step-by-step solutions to help you understand the answer in your textbook – or it may mean working with our tutors to help you master the subject. It might mean just using our tools to make sure your work is properly sourced and cited.</p>
            <p>It should never mean that you use our services for any sort of cheating or fraud – like passing someone else’s work off as your own.</p>
            <p>The vast majority of CourseMentor.com students use our services to help them learn and understand. We don’t tolerate abuse of our platform or services. Dishonest behavior damages your reputation as a student. It’s also unfair to other students, and it makes it difficult for your instructors to assess your learning. Misuse of CourseMentor.com’s services can have serious consequences, up to and including being banned from our platforms or having an investigation opened by your institution.</p>
            <h4>For professors and instructors:</h4>
            <p>Our services are designed to support learning, not replace it. Our tutors and subject matter experts work hard to supplement your instruction with a number of different tools. We offer step by step explanations, real time tutoring, and interactive feedback.</p>
            <p> Please be as clear as possible with your students about what resources are appropriate for them to use on any given assignment. If you believe your students are using our services inappropriately, we encourage you to first have an open and honest discussion with your students.</p>
          </div>
        </div>
      </div>
            </div>
     


            <Footer />
        </div>

    );
}

