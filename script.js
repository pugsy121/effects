document.getElementById('playButton').addEventListener('click', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.style.display = 'block'; // Show the video player
    videoPlayer.play(); // Play the video
});
