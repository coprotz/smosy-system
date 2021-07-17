import './pagetitle.css'
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return (
    <div className="pagetitle">
        <h3>{title}</h3>
    </div>
  )
}

export default PageTitle

PageTitle.defaultProps = {
    title: 'Dashbord'
}

PageTitle.propTypes = {
    title: PropTypes.string,
       
}
