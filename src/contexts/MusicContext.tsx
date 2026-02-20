import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

interface MusicContextType {
    isMuted: boolean;
    toggleMute: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

// Video IDs
const BG_MUSIC_ID = 'jxAe8D_WBSY'; // General background music
const STOTRAM_MUSIC_ID = 'LjiYDcMH3SE'; // Stotram page music

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Start as "unmuted" in state
    const [isMuted, setIsMuted] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const playerRef = useRef<any>(null);
    const location = useLocation();
    const lastTrackId = useRef<string>('');

    // Normalize paths
    const isGalleryPage = location.pathname === '/gallery' || location.pathname === '/stotram';
    const targetVideoId = isGalleryPage ? STOTRAM_MUSIC_ID : BG_MUSIC_ID;

    useEffect(() => {
        // Load YouTube API
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.id = 'youtube-api';
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        }

        const initPlayer = () => {
            if (playerRef.current) return;

            let playerDiv = document.getElementById('global-youtube-player');
            if (!playerDiv) {
                playerDiv = document.createElement('div');
                playerDiv.id = 'global-youtube-player';
                // Move slightly off-screen but keep it "visible" for playback engine
                playerDiv.style.cssText = 'position:fixed; top:0; left:0; width:10px; height:10px; opacity:0; pointer-events:none; z-index:-1;';
                document.body.appendChild(playerDiv);
            }

            playerRef.current = new window.YT.Player('global-youtube-player', {
                videoId: targetVideoId,
                playerVars: {
                    autoplay: 1,
                    loop: 1,
                    playlist: targetVideoId,
                    controls: 0,
                    mute: 1 // Browser policy: must start muted
                },
                events: {
                    onReady: (event: any) => {
                        setIsReady(true);
                        lastTrackId.current = targetVideoId;
                        event.target.playVideo();

                        // Instant unmuting attempts
                        const tryUnmute = () => {
                            if (!isMuted && playerRef.current) {
                                try {
                                    playerRef.current.unMute();
                                    playerRef.current.setVolume(70);
                                    if (playerRef.current.isMuted()) {
                                        setTimeout(tryUnmute, 100);
                                    }
                                } catch (e) { }
                            }
                        };
                        tryUnmute();
                    },
                    onStateChange: (event: any) => {
                        if (event.data === window.YT.PlayerState.PLAYING && !isMuted) {
                            try {
                                event.target.unMute();
                            } catch (e) { }
                        }
                        if (event.data === window.YT.PlayerState.PAUSED && !isMuted && isReady) {
                            // Force play if browser tries to pause it (happens on some mobile browsers)
                            event.target.playVideo();
                        }
                    }
                }
            });
        };

        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            window.onYouTubeIframeAPIReady = initPlayer;
        }
    }, []);

    // Interaction Unlocker - Broader and faster
    useEffect(() => {
        const unlock = () => {
            if (playerRef.current && isReady) {
                try {
                    playerRef.current.playVideo();
                    if (!isMuted) {
                        playerRef.current.unMute();
                    }
                } catch (e) { }
            }
        };

        const events = ['mousedown', 'touchstart', 'scroll', 'keydown', 'wheel'];
        events.forEach(e => window.addEventListener(e, unlock, { once: true, passive: true }));

        return () => {
            events.forEach(e => window.removeEventListener(e, unlock));
        };
    }, [isReady, isMuted]);

    // Track switching
    useEffect(() => {
        if (playerRef.current && isReady && lastTrackId.current !== targetVideoId) {
            playerRef.current.loadVideoById({
                videoId: targetVideoId,
                playlist: targetVideoId
            });
            lastTrackId.current = targetVideoId;
        }

        // Periodic check to ensure playback
        const interval = setInterval(() => {
            if (playerRef.current && isReady && !isMuted) {
                const state = playerRef.current.getPlayerState();
                if (state !== 1 && state !== 3) { // Not playing or buffering
                    playerRef.current.playVideo();
                    playerRef.current.unMute();
                }
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [location.pathname, isReady, isMuted, targetVideoId]);

    const toggleMute = () => {
        if (!playerRef.current || !isReady) return;
        if (isMuted) {
            playerRef.current.unMute();
            playerRef.current.playVideo();
        } else {
            playerRef.current.mute();
        }
        setIsMuted(!isMuted);
    };

    return (
        <MusicContext.Provider value={{ isMuted, toggleMute }}>
            {children}
        </MusicContext.Provider>
    );
};

export const useMusic = () => {
    const context = useContext(MusicContext);
    if (context === undefined) throw new Error('useMusic must be used within a MusicProvider');
    return context;
};