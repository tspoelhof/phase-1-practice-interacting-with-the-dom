document.addEventListener('DOMContentLoaded', function () {
    const counter = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');
    const likeList = document.getElementById('likes');
    const commentComment = document.getElementById('comment-comment');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments');

    let count = 0;
    let isPaused = false;
    const likeCounts = {};

    function counterCounter() {
        if (!isPaused) {
        count++;
        counter.textContent = count;
    }
}

plusButton.addEventListener('click', function () {
    count++;
    counter.textContent = count;
});

likeButton.addEventListener('click', function () {
    if (likeCounts) {
        likeCounts[count]++;
        document.getElementById('like-${count}')
    }
}