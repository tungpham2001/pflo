import React, { useState } from 'react';
import MUSIC_LOGO from "../images/MusicTest.png";
import RECIPE from "../images/Recipe.png";
import GALLERY from "../images/Gallery.png";

import RecentSong from "./RecentSong";
import Spotify from "./Spotify";

function BlogPage() {
    const [selectedOption, setSelectedOption] = useState('music');

    const renderContent = () => {
        switch(selectedOption) {
            case 'music':
                return <RecentSong/>;
            case 'cookbook':
                return <Spotify/>;
            case 'photo':
                return <h2>photo content</h2>;
            default:
                return <h2>Select an option</h2>;
        }
    };

    return (
        <div className="blog-container" style={{ display: 'flex', width: '100%', flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
            <div className="option-container" style={{ width: '5%', height: '25vh', background: '#B2BEB5', margin: "0 0 0 100px", borderRadius: "40px" }}>
                <ul style={{ listStyleType: 'none', padding: '0', }}>
                    <li onClick={() => setSelectedOption('music')}>
                        <img src={MUSIC_LOGO} alt ="music" style={{ filter: 'grayscale(100%)', display: 'block', margin: "auto", width: '40px', height: 'auto', paddingBottom: "45px" }}/>
                    </li>
                    <li onClick={() => setSelectedOption('cookbook')}>
                        <img src={RECIPE} alt="recipe" style={{ filter: 'grayscale(100%)', display: 'block', margin: "auto", width: '40px', height: 'auto', paddingBottom: "45px" }}/>
                    </li>
                    <li onClick={() => setSelectedOption('photo')}>
                        <img src={GALLERY} alt="gallery" style={{ filter: 'grayscale(100%)', display: 'block', margin: "auto", width: '40px', height: 'auto' }}/>
                    </li>
                </ul>
            </div>
            <div className="option-content" style={{ flex: 1, overflowY: 'auto', height: '80vh', margin: "20px 100px 0 100px" }}>
                {renderContent()}
            </div>
        </div>
    );
}

export default BlogPage;
