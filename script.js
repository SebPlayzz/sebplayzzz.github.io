function redirectToRandomActivity() {
  var activities = document.querySelectorAll('.activity-list li');
  var randomIndex = Math.floor(Math.random() * activities.length);

  activities[randomIndex].classList.add('selected');

  setTimeout(function() {
    window.location.href = activities[randomIndex].querySelector('a').href;
  }, 2000);
}