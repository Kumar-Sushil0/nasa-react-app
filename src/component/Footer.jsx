import React from 'react'

function Footer(props) {
  const{handleDisplayModal,data}=props;
  return (
    <footer>
        <div className="bgGradient"></div>
        <div>  
            <h1>APOD Project</h1>
            <h2>{data?.title}</h2>
        </div>
        <button onClick={handleDisplayModal}>
        <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}

export default Footer