const express = require('express');
const app = express();
var expressVue = require('express-vue');
var path = require('path');
var Vue = require('vue');


// vue engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('vue', {
  //ComponentsDir is optional if you are storing your components in a different directory than your views
  componentsDir: __dirname + '/components',
  //Default layout is optional it's a file and relative to the views path, it does not require a .vue extention.
  //If you want a custom layout set this to the location of your layout.vue file.
  defaultLayout: 'layout'
});
app.engine('vue', expressVue);
app.set('view engine', 'vue');

app.get('/', function (req, res) {
  res.render('index',{
    data: {},
    vue: {}
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
