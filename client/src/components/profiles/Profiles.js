import React,{useEffect,Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getProfiles} from '../../actions/profile'
import Spinner from '../layout/Spinner'
import ProfileItem from './ProfileItem'
const Profiles = ({getProfiles,profile:{profiles,loading}})=>{
    useEffect(() => {
        getProfiles()
    }, [getProfiles])
    console.log('profiles profiles',profiles)
    return <Fragment>
        {loading ? <Spinner/> : <Fragment>
        <h1 className='large text-primary'>developers</h1>
        <p className='lead'>
            <i className='fab fa-connectdevelop'></i>Browse and connect with developers
        </p>
        <div className='profiles'>
            {profiles.length > 0 ? (
                profiles.map(profile=>(
                    <ProfileItem key={profile._id} profile={profile}/>
                ))
            ) :<h4>No profiles found....</h4>}
        </div>
        </Fragment>}
    </Fragment>
}

Profiles.propTypes={
  getProfiles:PropTypes.func.isRequired,
  profile:PropTypes.object.isRequired
}
const mapStateToProps = (state, ownProps) => ({
    profile:state.profile
})
export default connect(mapStateToProps,{getProfiles})(Profiles)