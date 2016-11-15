# Display all your express routes in the terminal!

![](http://g.recordit.co/PhGRKSCZjL.gif)

# HOW TO:

```npm install express-routemap```

```js
  // in your index.js:

  const express = require('express'),
        displayRoutes = require('express-routemap');

  var app = express();

  var adminRouter = require('./routes/admin');

  app.use('/admin', adminRouter);

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.listen(3000, () => {
    console.log('Web server started at port 3000!');
    // HERE IS THE FUN PART:
    displayRoutes(app);
  });
```
