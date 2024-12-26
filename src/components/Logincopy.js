import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { VscKey,VscAzureDevops } from "react-icons/vsc";


const Login = () => {
  const [selectedOption, setSelectedOption] = useState('SAAS'); // Default to "SAAS"

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Left Section */}
      <div className="split left" style={{ position: 'relative', height: '100vh' }}>
        <img src="/group.png" alt="stats" className="center" />
        <img 
          src="./Subtract.png" 
          alt="codeAnt" 
          width={350} 
          height={350} 
          className="whiteant" 
          style={{ position: 'absolute', bottom: '0', left: '0' }} 
        />
      </div>

      {/* Right Section */}
      <div className="split right" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  }}>
        {/* Login Box */}
        <div 
          className="rcenter container" 
          style={{
            padding: '20px',
            borderRadius: '15px',
            // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            border: '1px solid #ccc',
            maxWidth: '500px',
            height: '500px', // Fixed height for consistency
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
              <img src="/CodeAnt.png" alt="logo" height={50} width={50} />
              <h2 style={{ marginLeft: '10px', font: '28px Arial', margin: 0 }}>CodeAnt AI</h2>
            </div>

            <h2 style={{ textAlign: 'center', font: 'bold 25px Arial' }}>Welcome to CodeAnt AI</h2>

            {/* Buttons for SAAS and Self Hosted */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0px', marginBottom: '50px' }}>
              <button 
                onClick={() => handleOptionClick('SAAS')} 
                style={{
                  width: '100%',
                  height: '50px',
                  padding: '15px', 
                  borderRadius: '5px', 
                  backgroundColor: selectedOption === 'SAAS' ? '#1570EF' : '#ebe6e6', 
                  color: selectedOption === 'SAAS' ? '#fff' : '#000',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  font: '18px  ',
                }}
              >
                <strong>SAAS</strong>
              </button>
              <button 
                onClick={() => handleOptionClick('Self Hosted')} 
                style={{
                  width: '100%',
                  height: '50px',
                  padding: '15px', 
                  borderRadius: '5px', 
                  backgroundColor: selectedOption === 'Self Hosted' ? '#1570EF' : '#ebe6e6', 
                  color: selectedOption === 'Self Hosted' ? '#fff' : '#000',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  font: '18px',
                }}
              >
                <strong>Self Hosted</strong>
              </button>
            </div>

            {/* Options based on selected button */}
            <div style={{ textAlign: 'center' }}>
              {selectedOption === 'SAAS' && (
                <div>
                  <button style={buttonStyle}>
                    <div style={btall}>
                      <FaGithub style={{width:'20', height:'20'}}/>Sign in with GitHub
                    </div>
                  </button>
                  <br />
                  <button style={buttonStyle}>
                      <div style={btall}>
                        <img width = {18} height={18} src='bitbucket.svg' alt='bitbucket'/>Sign in with BitBucket
                      </div>
                  </button>
                  <br />
                  <button style={buttonStyle}>
                    <div style={btall}>
                      <  VscAzureDevops style={{color:'#008AD7',height:'20', width:'20'}}/>Sign in with Azure DevOps
                    </div>
                  </button>
                  <br />

                  <button style={buttonStyle}>
                    <div style={btall}>

                    <img src='GitLab.svg' alt='gitlab' width={20} height={20}/>Sign in with GitLab
                    </div>
                   </button>
                </div>
              )}
              {selectedOption === 'Self Hosted' && (
                <div>
                  <button style={buttonStyle}>
                    <div style={btall}>
                    <img src='GitLab.svg' alt ='gitlab' width={20} height={20}/>Sign in with GitLab
                    </div>
                  </button>
                  <br />
                  <button style={buttonStyle}>
                    <div style={btall}>
                      <VscKey style={{width:'20', height:'20'}}/>Sign in with SSO
                    </div>

                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Policy Text */}
        <div 
          className="container bysign" 
          style={{ 
            marginTop: '650px', 
            textAlign: 'center', 
            maxWidth: '800px', 
            width: '90%', 
          }}
        >
          <p style={{ fontSize: '14px', margin: 0 }}>
            By signing up you agree to the <span style={{  cursor: 'pointer' }}><strong>Privacy Policy</strong></span>
          </p>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .split.left {
              display: none;
            }
            .rcenter.container {
              width: 30%;

            }
            .split.right {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

const buttonStyle = {
  width: '80%',
  height: '50px',
  marginBottom: '10px', 
  padding: '10px 20px', 
  borderRadius: '5px', 
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  cursor: 'pointer',
  font: 'bold 15px Arial',
};
const btall={
  display:'flex',  alignItems: 'center', justifyContent: 'center', gap: '6px', 
}

export default Login;
