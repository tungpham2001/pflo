import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    subheading: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3vh',
        fontSize: '14px',
    },

    songContainer: {
        display: 'flex',
        justifyContent: 'center',
    },

    recentSong: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10vh',
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: '0 0 10px 0',
        textAlign: 'center',
    },

    recentSongLink: {
        textDecoration: 'none',
        color: 'white',
    },

    songInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    artist: {
        fontSize: 15,
        textAlign: 'center',
        margin: '0',
        '@media (max-width: 768px)': {
            fontSize: 24,
        },
    },
});

function RecentSong() {
    const [recentSong, setRecentSong] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://ws.audioscrobbler.com/2.0',
            params: {
                method: 'user.getrecenttracks',
                user: 'tungpham2001',
                api_key: '5502ebce9e9aa56c03eed8593d7c475f',
                format: 'json',
            },
        }).then((res) => {
            const recentTrack = res.data.recenttracks.track[0];
            const newSong = {
                artist: recentTrack.artist['#text'],
                title: recentTrack.name,
                imageSrc:recentTrack.image[2]['#text'],
                songLink: recentTrack.url,
            };
            setRecentSong(newSong);
        });
    }, []);

    if (!recentSong) {
        return null;
    }

    return (
            <div className="songContainer">
                <>
                    <a
                        target="_blank"
                        rel = "noreferrer"
                        className={classes.recentSongLink}
                        href={recentSong.songLink}
                    >
                        <div className={classes.recentSong}>
                            <img style={{width: '500px', height: '500px'}}
                                className={classes.albumArt}
                                src={recentSong.imageSrc}
                                alt="album art"
                                loading="eager"
                            />
                        </div>
                        <div>
                            <h1 className={classes.subheading}>Most recent song I listened to:</h1>
                        </div>
                        <div className={classes.songInfo}>
                            <p className={classes.title}>{recentSong.title}</p>
                            <h1 className={classes.artist}>{recentSong.artist}</h1>  
                        </div>
                    </a>
                </>
            </div>
    );
}
export default RecentSong;