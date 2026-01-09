// Sidebar toggle logic
(function () {
  var toggle = document.getElementById('sidebarToggle');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    document.body.classList.toggle('sidebar-collapsed');
  });
})();

