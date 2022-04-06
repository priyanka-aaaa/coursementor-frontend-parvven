import React from "react";
import EducationDocument from './Mydocument/EducationDocument'
import WorkExperienceDocument from './Mydocument/WorkExperienceDocument';
import RecommendationDocuments from './Mydocument/RecommendationDocuments';
import ExtraCurricularDocument from './Mydocument/ExtraCurricularDocument';
import OtherDocument from './Mydocument/OtherDocument';
import EnglishProficiencyDocument from './Mydocument/EnglishProficiencyDocument';
import IdentityDocument from './Mydocument/IdentityDocument';
export default function Document() {

    return (
        <div className="container">
        <div className=" align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Application Documents</h1>
            <p>File extensions supported .pdf, .doc, .docx, .jpeg, .jpg, .png</p>

            <div className="row">
                <div className="col-xl-12 col-lg-7">
                    <div id="accordion">
                        <IdentityDocument />
                        <EducationDocument />
                        <WorkExperienceDocument />
                        <EnglishProficiencyDocument />
                        <ExtraCurricularDocument />
                        <RecommendationDocuments />
                        <OtherDocument />
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}
