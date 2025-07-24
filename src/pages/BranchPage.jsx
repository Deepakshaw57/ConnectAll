import React, { useState } from 'react';
import './BranchPage.css';
import { Link } from 'react-router-dom';

const BranchPage = () => {
  const [selectedBranch, setSelectedBranch] = useState('');

  const handleLearnMore = (branchId) => {
    setSelectedBranch(branchId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  <nav> <Link to="Homepage.jsx">Home</Link></nav>

  const renderDetails = () => {
    const details = {
      cse: {
        title: 'Computer Science & Engineering (CSE)',
        description:
          'Computer Science & Engineering is one of the most popular engineering disciplines...',
        subjects: [
          'Data Structures & Algorithms',
          'Computer Networks',
          'Operating Systems',
          'Database Management Systems',
          'Computer Architecture',
          'Software Engineering',
        ],
        careers: [
          'Software Developer/Engineer',
          'Data Scientist',
          'Systems Analyst',
          'Cybersecurity Specialist',
          'Cloud Architect',
          'DevOps Engineer',
        ],
        alumni:
          '"The CSE program gave me strong fundamentals that helped me adapt to new technologies throughout my career. Focus on problem-solving skills rather than just programming languages." - Senior Software Engineer, Microsoft',
      },
      iot: {
        title: 'CSE (Internet of Things)',
        description:
          'The Internet of Things specialization focuses on creating smart, connected devices...',
        subjects: [
          'Embedded Systems',
          'Sensor Networks',
          'Wireless Communication',
          'Cloud Computing for IoT',
          'Edge Computing',
          'IoT Security',
        ],
        careers: [
          'IoT Solutions Architect',
          'Embedded Systems Engineer',
          'IoT Security Specialist',
          'Industrial Automation Engineer',
          'Smart City Solutions Developer',
          'IoT Product Manager',
        ],
        alumni:
          '"IoT is transforming every industry from manufacturing to healthcare. This specialization gave me hands-on experience with real-world IoT deployments." - IoT Solutions Lead, Siemens',
      },
      ai: {
        title: 'CSE (Artificial Intelligence)',
        description:
          'The AI specialization focuses on creating intelligent machines that can perform tasks...',
        subjects: [
          'Machine Learning',
          'Deep Learning',
          'Natural Language Processing',
          'Computer Vision',
          'Reinforcement Learning',
          'AI Ethics',
        ],
        careers: [
          'AI Research Scientist',
          'Machine Learning Engineer',
          'Data Scientist',
          'Computer Vision Engineer',
          'AI Product Manager',
          'Robotics Engineer',
        ],
        alumni:
          '"The AI specialization was challenging but rewarding. The mathematical foundations we learned are crucial for understanding modern AI systems." - AI Researcher, Google DeepMind',
      },
      aiml: {
        title: 'CSE (AI & Machine Learning)',
        description:
          'This specialization combines artificial intelligence with advanced machine learning techniques...',
        subjects: [
          'Advanced Machine Learning',
          'Statistical Learning',
          'Neural Networks',
          'Big Data Analytics',
          'Pattern Recognition',
          'AI System Design',
        ],
        careers: [
          'ML Engineer',
          'Data Science Lead',
          'AI Architect',
          'Research Scientist',
          'Predictive Analytics Specialist',
          'AI Consultant',
        ],
        alumni:
          '"The combination of AI theory and practical ML implementation prepared me perfectly for industry." - Head of Machine Learning, Amazon',
      },
      networking: {
        title: 'CSE (Networking)',
        description:
          'The Networking specialization focuses on the design, implementation, and management...',
        subjects: [
          'Advanced Computer Networks',
          'Network Security',
          'Cloud Networking',
          'Wireless & Mobile Networks',
          'Distributed Systems',
          'Network Programming',
        ],
        careers: [
          'Network Architect',
          'Cybersecurity Specialist',
          'Cloud Network Engineer',
          'Network Administrator',
          'Systems Engineer',
          'Telecommunications Specialist',
        ],
        alumni:
          '"With everything moving to the cloud, networking skills are more valuable than ever." - Network Security Lead, Cisco',
      },
      biotech: {
        title: 'Biotechnology (BT)',
        description:
          'Biotechnology applies biological processes for industrial and other purposes...',
        subjects: [
          'Molecular Biology',
          'Genetic Engineering',
          'Bioprocess Engineering',
          'Bioinformatics',
          'Pharmaceutical Biotechnology',
          'Industrial Biotechnology',
        ],
        careers: [
          'Biotech Research Scientist',
          'Pharmaceutical Developer',
          'Genetic Engineer',
          'Bioinformatics Specialist',
          'Quality Control Analyst',
          'Biotech Product Manager',
        ],
        alumni:
          '"Biotechnology is at the forefront of medical and agricultural innovation." - Senior Researcher, Genentech',
      },
    };

    if (!selectedBranch) return null;

    const branch = details[selectedBranch];

    return (
      <div className="branch-details">
        <h2>{branch.title}</h2>
        <p>{branch.description}</p>

        <div className="details-grid">
          <div className="details-card">
            <h3>Core Subjects</h3>
            <ul>
              {branch.subjects?.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>

          <div className="details-card">
            <h3>Career Opportunities</h3>
            <ul>
              {branch.careers?.map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>
          </div>

          <div className="details-card">
            <h3>Alumni Insights</h3>
            <p>{branch.alumni}</p>
          </div>
        </div>

        <Link className="back-button" onClick={() => setSelectedBranch('')}>
          Back to Branches
        </Link>
      </div>
    );
  };

  return (
    <div className="container">
      <Link to="/" className="back-button">Back to Home</Link>

      {!selectedBranch ? (
        <div id="branches-page">
          <div className="card">
            <h2>Engineering Branches</h2>
            <p>
              Explore the various engineering branches available and connect with alumni
              from your specific field of study.
            </p>
          </div>

          <div className="branches-container">
            {/* Cards for each branch */}
            {[
              { id: 'cse', title: 'Computer Science & Engineering (CSE)', desc: 'Focuses on computation, algorithms, programming languages...' },
              { id: 'iot', title: 'CSE (Internet of Things)', desc: 'Specialization in IoT technologies, embedded systems, sensors...' },
              { id: 'ai', title: 'CSE (Artificial Intelligence)', desc: 'Focuses on machine learning, neural networks, NLP, and AI systems.' },
              { id: 'aiml', title: 'CSE (AI & Machine Learning)', desc: 'Advanced study of AI with emphasis on machine learning and data science.' },
              { id: 'networking', title: 'CSE (Networking)', desc: 'Specialization in network architecture, security, and protocols.' },
              { id: 'biotech', title: 'Biotechnology (BT)', desc: 'Application of biological processes in technology and industry.' },
            ].map((branch) => (
              <div className="branch-card" key={branch.id}>
                <div className="branch-header">
                  <h3>{branch.title}</h3>
                </div>
                <div className="branch-body">
                  <p>{branch.desc}</p>
                  <button className="branch-link" onClick={() => handleLearnMore(branch.id)}>
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        renderDetails()
      )}
    </div>
  );
};

export default BranchPage;
