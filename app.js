/*Creating object of express*/
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = 8080;

/*setting public directory folder*/
const path_for_public_directory = path.join(__dirname, 'assets');
app.use(express.static(path_for_public_directory));


/*setting the path for views folder*/
const path_for_views = path.join(__dirname, 'views');
app.set('views', path_for_views);
app.set('view engine', 'hbs');


/*path for partials*/
const path_for_partials = path.join(__dirname, 'views/partials');
hbs.registerPartials(path_for_partials);

app.use(bodyParser.urlencoded({extended:false}));

/*URL for index page*/
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Homepage',
        js:[
           'https://code.jquery.com/jquery-3.3.1.slim.min.js',
           'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
           'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' 
        ],
        css:[
            'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',

        ]
    })
});
app.listen(port);