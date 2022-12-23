const fullScreen = () => {
    if(document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    }else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    }
}

export default fullScreen;