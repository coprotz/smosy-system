import PropTypes from 'prop-types'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './Home.css'


const Home = ({ title }) => {
  return (
      <div className="home">
        
         <FeaturedInfo /> 
         <Chart />
      </div>
    
  )
}

Home.defaultProps = {
  title: 'Dashboard'
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Home
