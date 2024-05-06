import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

function Template5() {
    const dataStore = useSelector(state => state.dataStore);

    return (
        <div className="resume-template-container">
            <div className="header" style={{ border: "5px solid #f0bebe", backgroundColor: "#fffeec", padding: "20px" }}>
                <div className="row m-0 align-items-center" style={{ height: "200px", backgroundColor: "#f0bebe" }}>
                    <div className="col-2 text-center">
                        <img
                            className="rounded profile-pic"
                            src={dataStore.imageFile}
                            alt='profile-pic'
                            style={{ maxHeight: '180px', minHeight: '120px', width: '100px', background: 'grey' }}
                        />
                    </div>
                    <div className="col-6 font-weight-bold">
                        <div className='text-center name' style={{ color: 'white', fontSize: '55px' }}>{dataStore.personalInfo.firstName + " " + dataStore.personalInfo.lastName}</div>
                        <h5 className='text-center'>{dataStore.workEx[dataStore.workEx.length - 1].title}</h5>
                    </div>
                    <div className="col-4">
                        <div className='contact-info' style={{ fontSize: '18px', float: 'left', display: 'inline-block' }}>
                            <div>{dataStore.personalInfo.Email}</div>
                            <div>{dataStore.personalInfo.Mobile}</div>
                            <div>
                                {dataStore.personalInfo.Address1 + ", " + dataStore.personalInfo.Address2
                                    + ",  " + dataStore.personalInfo.City + ", " + dataStore.personalInfo.State + ", " + dataStore.personalInfo.Pin}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="section-divider" style={{ height: '5px', backgroundColor: '#f0bebe' }} />
            <div className="objective" style={{ textAlign: 'justify', margin: '0 20px' }}>{dataStore.personalInfo.Objective}</div>
            <hr className="section-divider" style={{ height: '5px', backgroundColor: '#f0bebe' }} />

            <div className="container">
                <div className="row">
                    <div className="col-3 section-heading" style={{ color: '#de5b7b' }}>
                        <h3>Professional Experience</h3>
                    </div>
                    <div className="col-9">
                        {dataStore.workEx.map((item) => (
                            <div key={shortid.generate()} className="experience">
                                <div className='mt-2'><b>{item.title}</b></div>
                                <div className='mt-2'>
                                    Worked in {item.orgName} from {item.startYear} to {item.endYear}.
                                </div>
                                <div>{item.jobDescription}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="section-divider" style={{ height: '5px', backgroundColor: '#f0bebe' }} />
                <div className="row">
                    <div className="col-3 section-heading" style={{ color: '#de5b7b' }}>
                        <h3>Education</h3>
                    </div>
                    <div className="col-9">
                        {dataStore.education.map((item) => (
                            <div key={shortid.generate()} className="education">
                                <b>{item.Degree}</b>
                                <div>I have pursued my {item.Type} in {item.Degree} from {item.University}</div>
                                <p>Duration: {item.Start} - {item.End}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="section-divider" style={{ height: '5px', backgroundColor: '#f0bebe' }} />
                <div className="row">
                    <div className="col-3 section-heading" style={{ color: '#de5b7b' }}>
                        <h3>Key Skills</h3>
                    </div>
                    <div className="col-9">
                        <ul className="skills">
                            {dataStore.skills.map((skill) => (
                                <li key={shortid.generate()}>{skill.skillName}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template5;
