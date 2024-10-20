import data from '../../mock.json';
import './index.css';
import Header from '../Header';
import ImageCard from '../ImageCard';
import PlantList from '../PlantList';
import Footer from '../Footer';

const Home = () => {

    const filterList = [
        "Type of Plants",
        "Price",
        "Nursery",
        "Ideal Plants Location",
        "Indoor/ Outdoor",
        "Maintenance",
        "Plant Size",
        "Water Schedule",
        "Color",
        "Seasonal",
        "Light Efficient"
    ];

    return (
        <div className="home-container">
            <div className="contact-card">
                <p>Free Shipping on orders above 999/-</p>
                <p className="contact-para">Call us on: +912345678320</p>
            </div>
            <Header />
            <div className="plant-button-card">
                <button className="plant-button">Plants</button>
                <button className="Pots-button">Pots</button>
            </div>
            <p className="home-des">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
            <h1 className="nursery">Nursery</h1>

            <ImageCard />

            <div className="container">
                <div className="filter">
                    <div className="filter-value">
                        <p>Filter</p>
                        <p>CLEAR ALL</p>

                    </div>
                    {
                        filterList.map(eachItem => (
                            <>
                                <hr className="horizontal-line" />
                                <div className="filter-value">
                                    <p>{eachItem}</p>
                                    <p>+</p>
                                </div>
                            </>
                        ))
                    }
                </div>
                <div className="plant-list-box">
                    <div className="sort-by-box">
                        <p className="productNum">{data.productList.length} products</p>
                        <select id="sortBy" className="sortBy">
                            <option value="">SORT BY</option>
                            {
                                filterList.map(eachItem => (
                                    <option value={eachItem}>{eachItem}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="plantList-container">
                        <PlantList />
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}
export default Home