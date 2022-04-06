import React from "react";
import PersonalInfoProfile from './ApplicationProfile/PersonalInfoProfile';
import AddressProfile from './ApplicationProfile/AddressProfile';
import FamilyProfile from './ApplicationProfile/FamilyProfile';
import EducationProfile from './ApplicationProfile/EducationProfile';
import TestScoreProfile from './ApplicationProfile/TestScoreProfile';
import WorkExperienceProfile from './ApplicationProfile/WorkExperienceProfile';
import ExtraCurricultarActivityProfile from './ApplicationProfile/ExtraCurricultarActivityProfile';
import RecommendationProfile from './ApplicationProfile/RecommendationProfile';
export default function ApplicationProfile() {
    return (
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Application Profile </h1>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-7">
                    <div id="accordion">
                        <PersonalInfoProfile />
                        <AddressProfile />
                        <FamilyProfile />
                        <EducationProfile />
                        <TestScoreProfile />
                        <WorkExperienceProfile />
                        <ExtraCurricultarActivityProfile />
                        <RecommendationProfile />
                    </div>
                </div>
            </div>
        </div>

    );
}