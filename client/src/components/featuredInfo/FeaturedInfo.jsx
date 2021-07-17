import './featuredInfo.css'
import madam from '../../img/madam.jfif'

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <div className="featuredItemList">
                <h2 className="listItemQty">175</h2>
                <h4 className="listItemName">Total Students</h4>

            </div>
            <div className="featuredItemList">
                <h2 className="listItemQty">75</h2>
                <h4 className="listItemName">Total Teachers</h4>

            </div>
            <div className="featuredItemList">
                <h2 className="listItemQty">15</h2>
                <h4 className="listItemName">Absentees</h4>

            </div>
            <div className="featuredItemList">
                <img src={madam} />
                <h3 className="listItemTeacher">Teacher on Duty</h3>
                <h4 className="listItemNameTeacher">Madam Mwana</h4>

            </div>
        </div>
    </div>
  )
}

export default FeaturedInfo
