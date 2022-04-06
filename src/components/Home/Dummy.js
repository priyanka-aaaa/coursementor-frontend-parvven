import React, { useState } from "react";

function Dummy(props) {
    const [userinfo, setUserInfo] = useState({
        univeristyEnglishProficiency: [],
        response: [],
    });

    const handleuniveristyEnglishProficiencyChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const { univeristyEnglishProficiency } = userinfo;

        // Case 1 : The user checks the box
        if (checked) {
            setUserInfo({
                univeristyEnglishProficiency: [...univeristyEnglishProficiency, value],
                response: [...univeristyEnglishProficiency, value],
            });
        }

        // Case 2  : The user unchecks the box
        else {
            setUserInfo({
                univeristyEnglishProficiency: univeristyEnglishProficiency.filter((e) => e !== value),
                response: univeristyEnglishProficiency.filter((e) => e !== value),
            });
        }
    };
    return (
        <>
            <div className="container-fluid top ">
                <div className="container mt-5  pb-5 pt-5">
                    <h3 className="form-head-contact-h3 ">
                        Your programming expertise lies in what univeristyEnglishProficiency?{" "}
                    </h3>

                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-check m-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="univeristyEnglishProficiency"
                                        value="Javascript"
                                        id="flexCheckDefault"
                                        onChange={handleuniveristyEnglishProficiencyChange}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Javascript
                                    </label>
                                </div>
                                <div className="form-check m-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="univeristyEnglishProficiency"
                                        value="Python"
                                        id="flexCheckDefault"
                                        onChange={handleuniveristyEnglishProficiencyChange}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Python
                                    </label>
                                </div>
                                <div className="form-check m-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="univeristyEnglishProficiency"
                                        value="Java"
                                        id="flexCheckDefault"
                                        onChange={handleuniveristyEnglishProficiencyChange}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Java
                                    </label>
                                </div>
                                <div className="form-check m-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="univeristyEnglishProficiency"
                                        value="PHP"
                                        id="flexCheckDefault"
                                        onChange={handleuniveristyEnglishProficiencyChange}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        PHP
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-check m-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="univeristyEnglishProficiency"
                                        value="C#"
                                        id="flexCheckDefault"
                                        onChange={handleuniveristyEnglishProficiencyChange}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        C#
                                    </label>
                                </div>
                                <div className="form-check m-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="univeristyEnglishProficiency"
                                        value="C++"
                                        id="flexCheckDefault"
                                        onChange={handleuniveristyEnglishProficiencyChange}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        C++
                                    </label>
                                </div>
                                <div className="form-check m-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="univeristyEnglishProficiency"
                                        value="C"
                                        id="flexCheckDefault"
                                        onChange={handleuniveristyEnglishProficiencyChange}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        C
                                    </label>
                                </div>
                                <div className="form-check m-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="univeristyEnglishProficiency"
                                        value="Typescript"
                                        id="flexCheckDefault"
                                        onChange={handleuniveristyEnglishProficiencyChange}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Typescript
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="form-floating mt-3 mb-3 text-center">
                            <label htmlFor="exampleFormControlTextarea1">
                                You're proficient in the following univeristyEnglishProficiency :{" "}
                            </label>
                            <textarea
                                className="form-control text"
                                name="response"
                                value={userinfo.response}
                                placeholder="The checkbox values will be displayed here "
                                id="floatingTextarea2"
                                style={{ height: "150px" }}
                                onChange={handleuniveristyEnglishProficiencyChange}
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Dummy;