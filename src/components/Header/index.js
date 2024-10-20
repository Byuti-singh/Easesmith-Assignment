import React, { useEffect } from 'react';
import { BsCart, BsPersonCircle, BsSearch } from "react-icons/bs";
import './index.css'

const Header = () => {
    const itemCountString = localStorage.getItem('cartItemCount');
    const itemCount = parseInt(itemCountString);

    return (
        <div className="header">
            <div className="header-card">
                <div className="header-section">
                    <img src="/logo.png" className="logo-image" />
                    <h1 className="logo-name-heading">Chaperone</h1>
                </div>
                <div className="name-section">
                    <button>Home</button>
                    <button>Plants and Pots</button>
                    <select id="Tools">
                        <option value="">Tools</option>
                    </select>
                    <select id="services">
                        <option value="">Our Services</option>
                    </select>
                    <button>Blog</button>
                    <button>Our Story</button>
                    <button>FAQs</button>
                </div>
                <div className="profile-cart-box">
                    {
                        itemCount > 0 ? (
                            <>
                                <BsPersonCircle size={35} style={{ margin: '10px' }} />
                                <BsCart size={35} style={{ margin: '10px' }} />
                                <span className="notification-badge">{itemCount}</span>
                            </>
                        ) : (
                            <>
                                <BsPersonCircle size={35} style={{ margin: '10px' }} />
                                <BsCart size={35} style={{ margin: '10px' }} />
                            </>
                        )
                    }
                </div>
            </div>
            <div className="search-input">
                <BsSearch className="search-icon" />
                <input
                    type="search"
                    id="userName"
                    placeholder="Search Plant"
                />
                <img src="/search-img.png" alt="Search Image" />
            </div>
        </div>
    );
}
export default Header