Router.route('/', function () {
  this.render('login2');
  this.layout('login-Layout');
});

Router.route('/camera', function () {
  this.render('camera');
  this.layout('page-layout');
});

Router.route('/categories', function () {
  this.render('categories');
  this.layout('page-layout');
});

Router.route('/ik', function () {
  this.render('challenges1');
  this.layout('page-layout');
});

Router.route('/vrienden', function () {
  this.render('challenges2');
  this.layout('page-layout');
});

Router.route('/hype', function () {
  this.render('challenges3');
  this.layout('page-layout');
});

Router.route('/uitgaan', function () {
  this.render('challenges4');
  this.layout('page-layout');
});

Router.route('/studentenleven', function () {
  this.render('challenges5');
  this.layout('page-layout');
});

Router.route('/friends', function () {
  this.render('friends');
  this.layout('page-layout');
});

Router.route('/timeline', function () {
  this.render('timeline');
  this.layout('page-layout');
});

Router.route('/intro', function () {
  this.render('intro');
  this.layout('page-layout');
});

Router.route('/animals', function () {
  this.render('animals');
  this.layout('page-layout');
});

Router.route('/groenehandjes', function () {
  this.render('groenehandjes');
  this.layout('page-layout');
});

Router.route('/meesterwerk', function () {
  this.render('meesterwerk');
  this.layout('page-layout');
});

Router.route('/freerunner', function () {
  this.render('freerunner');
  this.layout('page-layout');
});

Router.route('/profile', function () {
  this.render('profile');
  this.layout('page-layout');
});

Router.route('/search', function () {
  this.render('search');
  this.layout('page-layout');
});