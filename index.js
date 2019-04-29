/*Creating object of express*/
const express = require('express');
const app = express();
const port = 8080;

/*Creating object of path*/
const path= require('path');
const path_for_public_directory= path.join(__dirname, 'assets');
app.use(express.static(path_for_public_directory));


/*Creating object of hbs*/
const hbs= require('hbs');
const path_for_views= path.join(__dirname,'views');
app.set('views',path_for_views);
app.set('view engine', 'hbs');


/*path for partials*/
const path_for_partials= path.join(__dirname, 'views/partials');
hbs.registerPartials(path_for_partials);


/*URL for index page*/
app.get('/', (req, res) => {
    res.render('index',{
        'title':'Homepage'
    })
});
app.listen(port);