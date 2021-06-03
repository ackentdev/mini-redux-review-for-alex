import {connect} from 'react-redux';

const Main = (props) => {
    return <div>
        <h3>Welcome to the website, {props.username}</h3>
    </div>
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Main);