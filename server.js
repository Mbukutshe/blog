const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));
// app.use(function(request, response, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Content-Type, Authorization, Content-Length, X-Requested-With'
//     );
//     next();
//   });

//Add session middleware

//opening an endpoint
app.use('/api/user', require('./routes/api/user'));
app.use('/api/post', require('./routes/api/post'));

//opening a port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});