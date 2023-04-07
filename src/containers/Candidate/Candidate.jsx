import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Userlist from '../../components/User-list/User-list';
import { getuserList } from '../../redux/actions';

function Candidate(props) {
  useEffect(() => {
    props.getuserList('1');
  }, []);

  return (
    <div>
      <Userlist Userlist={props.Userlist} />
    </div>
  );
}

export default connect(state => ({ Userlist: state.userList }), { getuserList })(Candidate);