import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ResumeGenerator = () => {
    const [resumeData, setResumeData] = useState({
        personal: {
            name: '',
            email: '',
            phone: '',
            linkedin: '',
            github: '',
        },
        education: [],
        experience: [],
        projects: [],
        skills: '',
        certifications: [],
        achievements: [],
    });

    const handleInputChange = (section, index, field, value) => {
        setResumeData(prevData => {
            if (section === 'personal') {
                return { ...prevData, personal: { ...prevData.personal, [field]: value } };
            } else if (section === 'skills') {
                return { ...prevData, skills: value };
            } else if (section === 'achievements') {
                const updatedAchievements = prevData.achievements.map((ach, i) => (i === index ? value : ach));
                return { ...prevData, achievements: updatedAchievements };
            } else {
                const updatedSection = prevData[section].map((item, i) => (i === index ? { ...item, [field]: value } : item));
                return { ...prevData, [section]: updatedSection };
            }
        });
    };

    const addEntry = (section) => {
        const newEntry = section === 'education' ? { degree: '', institute: '', cgpa: '', year: '' }
            : section === 'experience' ? { company: '', title: '', city: '', startDate: '', endDate: '', responsibilities: [''] }
            : section === 'projects' ? { name: '', description: '', tools: '' }
            : section === 'certifications' ? { name: '', organization: '', year: '' }
            : section === 'achievements' ? '' // Initialize as an empty string for achievements
            : '';
        
        setResumeData(prevData => ({ ...prevData, [section]: [...prevData[section], newEntry] }));
    };

    const addResponsibility = (expIndex) => {
        setResumeData(prevData => {
            const updatedExperience = prevData.experience.map((exp, index) => {
                if (index === expIndex) {
                    return { ...exp, responsibilities: [...exp.responsibilities, ''] };
                }
                return exp;
            });
            return { ...prevData, experience: updatedExperience };
        });
    };

    const handleResponsibilityChange = (expIndex, respIndex, value) => {
        setResumeData(prevData => {
            const updatedExperience = prevData.experience.map((exp, index) => {
                if (index === expIndex) {
                    const updatedResponsibilities = exp.responsibilities.map((resp, rIndex) => (rIndex === respIndex ? value : resp));
                    return { ...exp, responsibilities: updatedResponsibilities };
                }
                return exp;
            });
            return { ...prevData, experience: updatedExperience };
        });
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFont('Arial');
        let yPosition = 22; // Initial Y position for personal information
    
        // Personal Information
        doc.setFontSize(22);
        doc.text(resumeData.personal.name, 14, yPosition);
        doc.setFontSize(12);
        yPosition += 10; // Adjust for next text
        doc.text(resumeData.personal.email, 14, yPosition);
        yPosition += 4;
        doc.text(resumeData.personal.phone, 14, yPosition);
        yPosition += 4;
        doc.text(resumeData.personal.linkedin, 14, yPosition);
        yPosition += 4;
        doc.text(resumeData.personal.github, 14, yPosition);
        yPosition += 10; // Extra space before line
    
        // Draw gray line
        doc.setDrawColor(200, 200, 200); // Light gray color
        doc.line(14, yPosition, 196, yPosition); // Draw line from x=14, y=position to x=196, y=position
        yPosition += 6; // Space after line
    
        // Education Section
        doc.setFontSize(16);
        doc.setFont("bold");
        doc.text('Education', 14, yPosition);
        doc.setFont("normal");
        doc.setFontSize(12);
        yPosition += 10; // Adjust for next text
        resumeData.education.forEach((edu, index) => {
            doc.text(`${edu.degree}, ${edu.institute} (${edu.year}) - CGPA: ${edu.cgpa}`, 14, yPosition);
            yPosition += 10; // Space after each education entry
        });
    
        // Draw gray line after education
        doc.line(14, yPosition, 196, yPosition);
        yPosition += 6; // Space after line
    
        // Experience Section
        doc.setFontSize(16);
        doc.setFont("bold");
        doc.text('Experience', 14, yPosition);
        doc.setFont("normal");
        doc.setFontSize(12);
        yPosition += 10; // Adjust for next text
        resumeData.experience.forEach((exp, index) => {
            doc.text(`${exp.title} at ${exp.company}, ${exp.city} (${exp.startDate} - ${exp.endDate})`, 14, yPosition);
            yPosition += 10; // Space after each experience entry
            exp.responsibilities.forEach((resp, respIndex) => {
                doc.text(`• ${resp}`, 20, yPosition);
                yPosition += 5; // Space after each responsibility
            });
        });
    
        // Draw gray line after experience
        doc.line(14, yPosition, 196, yPosition);
        yPosition += 6; // Space after line
    
        // Projects Section
        doc.setFontSize(16);
        doc.setFont("bold");
        doc.text('Projects', 14, yPosition);
        doc.setFont("normal");
        doc.setFontSize(12);
        yPosition += 10; // Adjust for next text
        resumeData.projects.forEach((proj, index) => {
            doc.text(`${proj.name}: ${proj.description} (Tools: ${proj.tools})`, 14, yPosition);
            yPosition += 10; // Space after each project entry
        });
    
        // Draw gray line after projects
        doc.line(14, yPosition, 196, yPosition);
        yPosition += 6; // Space after line
    
        // Skills Section
        doc.setFontSize(16);
        doc.setFont("bold");
        doc.text('Skills', 14, yPosition);
        doc.setFont("normal");
        doc.setFontSize(12);
        yPosition += 10; // Adjust for next text
        doc.text(resumeData.skills, 14, yPosition);
        yPosition += 10; // Space after skills
    
        // Draw gray line after skills
        doc.line(14, yPosition, 196, yPosition);
        yPosition += 6; // Space after line
    
        // Certifications Section
        doc.setFontSize(16);
        doc.setFont("bold");
        doc.text('Certifications', 14, yPosition);
        doc.setFont("normal");
        doc.setFontSize(12);
        yPosition += 10; // Adjust for next text
        resumeData.certifications.forEach((cert, index) => {
            doc.text(`${cert.name} from ${cert.organization} (${cert.year})`, 14, yPosition);
            yPosition += 10; // Space after each certification entry
        });
    
        // Draw gray line after certifications
        doc.line(14, yPosition, 196, yPosition);
        yPosition += 6; // Space after line
    
        // Achievements Section
        doc.setFontSize(16);
        doc.setFont("bold");
        doc.text('Achievements', 14, yPosition);
        doc.setFont("normal");
        doc.setFontSize(12);
        yPosition += 10; // Adjust for next text
        resumeData.achievements.forEach((ach, index) => {
            doc.text(`• ${ach}`, 20, yPosition);
            yPosition += 5; // Space after each achievement
        });
    
        // Draw gray line after achievements
        doc.line(14, yPosition, 196, yPosition);
    
        // Save PDF
        doc.save('resume.pdf');
    };
    
    
    return (
        <div style={{ backgroundColor: '#5D93A2', minHeight: '100vh', padding: '20px' }}> {/* Page background color set to pink */}
            <div style={styles.container}>
    
            <h2 style={styles.heading}><strong>ResumeGenerator</strong></h2>

            {/* Personal Information Section */}
            <div style={styles.section}>
                <h3 style={styles.subheading}><strong>Personal Information</strong></h3>
                <input style={styles.input} type="text" placeholder="Name" value={resumeData.personal.name} onChange={(e) => handleInputChange('personal', 0, 'name', e.target.value)} />
                <input style={styles.input} type="email" placeholder="Email" value={resumeData.personal.email} onChange={(e) => handleInputChange('personal', 0, 'email', e.target.value)} />
                <input style={styles.input} type="text" placeholder="Phone" value={resumeData.personal.phone} onChange={(e) => handleInputChange('personal', 0, 'phone', e.target.value)} />
                <input style={styles.input} type="text" placeholder="LinkedIn" value={resumeData.personal.linkedin} onChange={(e) => handleInputChange('personal', 0, 'linkedin', e.target.value)} />
                <input style={styles.input} type="text" placeholder="GitHub" value={resumeData.personal.github} onChange={(e) => handleInputChange('personal', 0, 'github', e.target.value)} />
            </div>

            {/* Education Section */}
            <div style={styles.section}>
                <h3 style={styles.subheading}><strong>Education</strong></h3>
                {resumeData.education.map((edu, index) => (
                    <div key={index}>
                        <input style={styles.input} type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleInputChange('education', index, 'degree', e.target.value)} />
                        <input style={styles.input} type="text" placeholder="Institute" value={edu.institute} onChange={(e) => handleInputChange('education', index, 'institute', e.target.value)} />
                        <input style={styles.input} type="text" placeholder="CGPA" value={edu.cgpa} onChange={(e) => handleInputChange('education', index, 'cgpa', e.target.value)} />
                        <input style={styles.input} type="text" placeholder="Year" value={edu.year} onChange={(e) => handleInputChange('education', index, 'year', e.target.value)} />
                    </div>
                ))}
                <button style={styles.button} onClick={() => addEntry('education')}>Add Education</button>
            </div>

            {/* Experience Section */}
            <div style={styles.section}>
                <h3 style={styles.subheading}><strong>Experience</strong></h3>
                {resumeData.experience.map((exp, index) => (
                    <div key={index}>
                        <input style={styles.input} type="text" placeholder="Company" value={exp.company} onChange={(e) => handleInputChange('experience', index, 'company', e.target.value)} />
                        <input style={styles.input} type="text" placeholder="Title" value={exp.title} onChange={(e) => handleInputChange('experience', index, 'title', e.target.value)} />
                        <input style={styles.input} type="text" placeholder="City" value={exp.city} onChange={(e) => handleInputChange('experience', index, 'city', e.target.value)} />
                        <input style={styles.input} type="text" placeholder="Start Date" value={exp.startDate} onChange={(e) => handleInputChange('experience', index, 'startDate', e.target.value)} />
                        <input style={styles.input} type="text" placeholder="End Date" value={exp.endDate} onChange={(e) => handleInputChange('experience', index, 'endDate', e.target.value)} />
                        {exp.responsibilities.map((resp, respIndex) => (
                            <div key={respIndex}>
                                <input style={styles.input} type="text" placeholder="Responsibility" value={resp} onChange={(e) => handleResponsibilityChange(index, respIndex, e.target.value)} />
                            </div>
                        ))}
                        <button style={styles.button} onClick={() => addResponsibility(index)}>Add Responsibility</button>
                    </div>
                ))}
                <button style={styles.button} onClick={() => addEntry('experience')}>Add Experience</button>
            </div>

            {/* Projects Section */}
            <div style={styles.section}>
                <h3 style={styles.subheading}><strong>Projects</strong></h3>
                {resumeData.projects.map((proj, index) => (
                    <div key={index}>
                        <input style={styles.input} type="text" placeholder="Project Name" value={proj.name} onChange={(e) => handleInputChange('projects', index, 'name', e.target.value)} />
                        <input style={styles.input} type="text" placeholder="Description" value={proj.description} onChange={(e) => handleInputChange('projects', index, 'description', e.target.value)} />
                        <input style={styles.input} type="text" placeholder="Tools Used" value={proj.tools} onChange={(e) => handleInputChange('projects', index, 'tools', e.target.value)} />
                    </div>
                ))}
                <button style={styles.button} onClick={() => addEntry('projects')}>Add Project</button>
            </div>

            {/* Skills Section */}
            <div style={styles.section}>
                <h3 style={styles.subheading}><strong>Skills</strong></h3>
                <textarea style={styles.textarea} value={resumeData.skills} onChange={(e) => handleInputChange('skills', 0, '', e.target.value)} />
            </div>

            {/* Certifications Section */}
            <div style={styles.section}>
                <h3 style={styles.subheading}><strong>Certifications</strong></h3>
                {resumeData.certifications.map((cert, index) => (
                    <div key={index}>
                        <input style={styles.input} type="text" placeholder="Certification Name" value={cert.name} onChange={(e) => handleInputChange('certifications', index, 'name', e.target.value)} />
                        <input style={styles.input} type="text" placeholder="Organization" value={cert.organization} onChange={(e) => handleInputChange('certifications', index, 'organization', e.target.value)} />
                        <input style={styles.input} type="text" placeholder="Year" value={cert.year} onChange={(e) => handleInputChange('certifications', index, 'year', e.target.value)} />
                    </div>
                ))}
                <button style={styles.button} onClick={() => addEntry('certifications')}>Add Certification</button>
            </div>

            {/* Achievements Section */}
            <div style={styles.section}>
                <h3 style={styles.subheading}><strong>Achievements</strong></h3>
                {resumeData.achievements.map((ach, index) => (
                    <div key={index}>
                        <input style={styles.input} type="text" placeholder="Achievement" value={ach} onChange={(e) => handleInputChange('achievements', index, '', e.target.value)} />
                    </div>
                ))}
                <button style={styles.button} onClick={() => addEntry('achievements')}>Add Achievement</button>
            </div >
            <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={generatePDF}>Generate PDF</button>
        </div>
        </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#d3ddf5',
        padding: '50px',
        maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        border: '3px solid grey', // Light gray border
    },
    heading: {
        textAlign: 'center',
        fontSize: '28px',
    },
    section: {
        marginBottom: '20px',
    },
    subheading: {
        fontSize: '18px',
        marginBottom: '10px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '5px 0',
        border: '3px solid #ccc',
        borderRadius: '4px',
      
    },
    textarea: {
        width: '100%',
        padding: '10px',
        margin: '5px 0',
        border: '2px solid #ccc',
        borderRadius: '4px',
        height: '60px',
    
    },
    button: {
        padding: '10px 15px',
        backgroundColor: 'blue',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '20px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px', // Optional: add space above the button
    },
   
};

export default ResumeGenerator;
