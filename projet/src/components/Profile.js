import React from 'react'
import Image from './Image'
import PropTypes from 'prop-types';


function Profile({fullName,bio,profession, handleAlert}) {
  return (
    <div>
        <h1>{fullName}</h1>
        <h1>{bio}</h1>
        <h1>{profession}</h1>
        <br/>
      <Image><img src="https://static.remove.bg/remove-bg-web/035676ee65d6ce9f128769532ffdff315f3005c7/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"  style={{backgroundColor:"red",borderRadius:"50%"}}/>
      </Image>
      <button onClick={()=>handleAlert(fullName)}>click here</button>



        
    </div>
  )
}
Profile.defaultProps = {
  fullName: "jhon",
  Bio: "gbdgtbdv",
  profession: "developeur"
}

Profile.propTypes = {
  fullName: PropTypes.string,
  Bio:PropTypes.string,
  profession:PropTypes.string
};
export default Profile