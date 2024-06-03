// import React, { useState, useEffect, useRef } from 'react';

// function SpotifyAlbums() {
//     const [token, setToken] = useState(localStorage.getItem('token'));
//     const [albums, setAlbums] = useState([]);
    // const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);
    // const albumContainerRef = useRef(null);  // Reference to the scrollable container

//     useEffect(() => {
//         const hash = window.location.hash;
//         let token = localStorage.getItem('token');

//         if (!token && hash) {
//             token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
//             window.location.hash = '';
//             localStorage.setItem('token', token);
//         }

//         setToken(token);
//     }, []);

//     useEffect(() => {
//         if (token) {
//             fetch('https://api.spotify.com/v1/me/albums', {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             })
//             .then(res => res.json())
//             .then(data => setAlbums(data.items))
//             .catch(error => console.error(error));
//         }
//     }, [token]);

//     const login = () => {
//         const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
//         const CLIENT_ID = '462629295a4a48b5bfc0267fbfe1857f';
//         const REDIRECT_URI = 'http://localhost:3000/';
//         const RESPONSE_TYPE = 'token';
//         window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-library-read`;
//     };

    // const handleScroll = (event) => {
    //     const container = albumContainerRef.current;
    //     const scrollLeft = container.scrollLeft;
    //     const containerWidth = container.clientWidth;
    //     const newAlbumIndex = Math.round(scrollLeft / containerWidth);

    //     if (newAlbumIndex !== currentAlbumIndex) {
    //         setCurrentAlbumIndex(newAlbumIndex);
    //     }
    // };

//     return (
//         <div>
            // <h3 style={{color: "white"}}>Some of my favorite albums:</h3>
//             {!token ?
//                 <button onClick={login}>Login to Spotify</button> :
//                 albums.length > 0 && (
                    // <div ref={albumContainerRef} onScroll={handleScroll} style={{ overflowX: 'auto', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
                        
                    //     {albums.map((album, index) => (
                    //         <div className="albumContainer" key={album.album.id} style={{ width: '100vw', display: 'inline-block', textAlign: 'center', marginRight: "10vw", marginTop: "5vh" }}>
                    //             <img src={album.album.images[0].url} alt={album.album.name} style={{ width: '500px', height: '500px' }} />
                    //             <div style={{ display: 'flex', flexDirection: 'column' }}>
                    //                 <h1 style={{color: "white"}}>{album.album.name}</h1>
                    //                 <p style={{color: "white"}}>{album.album.artists[0].name}</p>
                    //             </div>
                    //         </div>
                    //     ))}
                    // </div>
//                 )
//             }
//         </div>
//     );
// }

// export default SpotifyAlbums;
import React, { useState, useEffect, useRef } from 'react';

function SpotifyAlbums() {
    const [token, setToken] = useState(localStorage.getItem('spotify_access_token') || null);
    const [albums, setAlbums] = useState([]);
    const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);
    const albumContainerRef = useRef(null);

    const handleScroll = (event) => {
        const container = albumContainerRef.current;
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.clientWidth;
        const newAlbumIndex = Math.round(scrollLeft / containerWidth);

        if (newAlbumIndex !== currentAlbumIndex) {
            setCurrentAlbumIndex(newAlbumIndex);
        }
    };

    useEffect(() => {
        if (token) return; // if there's already a token, no need to extract it

        const hash = window.location.hash
            .substring(1)
            .split('&')
            .reduce((initial, item) => {
                if (item) {
                    var parts = item.split('=');
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});
        window.location.hash = ''; // Clear the hash after extracting the access token

        const _token = hash.access_token;
        if (_token) {
            setToken(_token);
            localStorage.setItem('spotify_access_token', _token);
        }
    }, [token]);

    // spotify API for albums
    useEffect(() => {
        if (!token) return;

        fetch('https://api.spotify.com/v1/me/albums', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            setAlbums(data.items);
        })
        .catch(error => console.error('Error fetching albums:', error));
    }, [token]);

    const handleLogin = () => {
        const clientId = '462629295a4a48b5bfc0267fbfe1857f';
        const redirectUri = 'https://portfoliov20-tungpham2001s-projects.vercel.app/';
        // const redirectUri = 'http://localhost:3000/';
        const scopes = [
            'user-library-read',
        ];
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
    };

    return (
        <div>
            <h3 style={{color: "white", marginLeft: "5vw"}}>Some of my favorite albums:</h3>
            {!token ? (
                <div>
                    <h2>Login to Spotify to see your albums (currently required login, working on it...)</h2>
                    <button onClick={handleLogin}>Login to Spotify</button>
                </div>
            ) : (
                <div ref={albumContainerRef} onScroll={handleScroll} style={{ overflowX: 'auto', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>       
                    {albums.map((album, index) => (
                        <div className="albumContainer" key={album.album.id} style={{ width: '100vw', display: 'inline-block', textAlign: 'center', marginLeft: "5vw", marginRight: "2vw", marginTop: "5vh" }}>
                            <img src={album.album.images[0].url} alt={album.album.name} style={{ width: '500px', height: '500px' }} />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h1 style={{color: "white"}}>{album.album.name}</h1>
                                <p style={{color: "white"}}>{album.album.artists[0].name}</p>
                            </div>
                        </div>
                    ))}
            </div>
            )}
        </div>
    );
}

export default SpotifyAlbums;
// import React, { useState, useEffect, useRef } from 'react';

// function SpotifyAlbums() {
//     const [token, setToken] = useState(() => {
//         const savedToken = localStorage.getItem('spotify_access_token');
//         return savedToken;
//     });
//     const [albums, setAlbums] = useState([]);
//     const albumContainerRef = useRef(null);

//     // Check and clean token on component mount
//     useEffect(() => {
//         const checkTokenValidity = async () => {
//             if (!token) return;

//             try {
//                 const response = await fetch('https://api.spotify.com/v1/me', {
//                     headers: {'Authorization': `Bearer ${token}`}
//                 });

//                 if (!response.ok) {
//                     throw new Error('Token validation failed');
//                 }
//             } catch (error) {
//                 console.error('Error validating token:', error);
//                 // Clear the token if it's invalid
//                 localStorage.removeItem('spotify_access_token');
//                 setToken(null);
//             }
//         };

//         checkTokenValidity();
//     }, [token]);

//     // Fetch albums using the Spotify Web API
//     useEffect(() => {
//         if (!token) return;

//         fetch('https://api.spotify.com/v1/me/albums', {
//             headers: {'Authorization': `Bearer ${token}`}
//         })
//         .then(response => response.json())
//         .then(data => {
//             setAlbums(data.items);
//         })
//         .catch(error => {
//             console.error('Error fetching albums:', error);
//             setAlbums([]);
//         });
//     }, [token]);

//     const handleLogin = () => {
//         const clientId = '462629295a4a48b5bfc0267fbfe1857f';
//         const redirectUri = 'https://portfoliov20-tungpham2001s-projects.vercel.app/';
//         const scopes = ['user-library-read'];
//         window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
//     };

//     return (
//         <div>
//             <h3 style={{color: "white", marginLeft: "5vw"}}>Some of my favorite albums:</h3>
//             {!token ? (
//                 <div>
//                     <h2>Login to Spotify to see your albums</h2>
//                     <button onClick={handleLogin}>Login to Spotify</button>
//                 </div>
//             ) : (
//                 <div ref={albumContainerRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>       
//                     {albums && albums.length > 0 ? albums.map((album, index) => (
//                         <div className="albumContainer" key={album.album.id} style={{ width: '100vw', display: 'inline-block', textAlign: 'center', marginLeft: "5vw", marginRight: "2vw", marginTop: "5vh" }}>
//                             <img src={album.album.images[0].url} alt={album.album.name} style={{ width: '500px', height: '500px' }} />
//                             <div style={{ display: 'flex', flexDirection: 'column' }}>
//                                 <h1 style={{color: "white"}}>{album.album.name}</h1>
//                                 <p style={{color: "white"}}>{album.album.artists[0].name}</p>
//                             </div>
//                         </div>
//                     )) : <p>Loading albums or no albums found.</p>}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default SpotifyAlbums;


