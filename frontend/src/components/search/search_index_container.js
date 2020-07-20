import connect from 'react-redux';
import SearchIndex from './search_index';
import fetchUsers from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    const users = Object.values(state.entities.users);
    const input = ownProps.match.params.input;
    const filtered = users.filter(user => user.username.toLowerCase().includes(input));

    return {
        users = filtered
    }
};

const mapDispatchToProps = dispatch => ({
   fetchUsers: () => dispatch(fetchUsers()),
    openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
