import React from 'react'

function Sidebar(props) {
  const{handleDisplayModal,data}=props;
  return (
    <div onClick={handleDisplayModal}         className="sidebar">
        <div className="bgOverlay"></div>
        <div className='sidebarContents'>
            <h2>{data?.title}</h2>
            <div>
                <p className='description'>{data?.date}</p>
               <br />
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleDisplayModal}>
            <i className="fa-solid fa-right-to-bracket"></i> 
            </button>
        </div>
    </div>
  )
}

export default Sidebar