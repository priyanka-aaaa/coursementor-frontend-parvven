import React, { useState } from "react";
import Footer from './Home/Footer'
import Header from './Home/Header'
import AgentRegisterForm from './AgentRegisterForm'
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|webp)$/));

export default function AgentRegister() {
    return (
        <div className="main-content">
            <div className="full-width-header">
                <Header />
                <section className="Form-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={images["login.png"]} alt="login" />
                            </div>
                            <div className="col-lg-6">
                                <AgentRegisterForm />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}