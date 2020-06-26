import express from 'express';
import path from 'path';
// importing routes
import IndexRoutes from './routes';

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/v1', IndexRoutes)

// Statics
app.use(express.static(path.join(__dirname, 'public')));
// Starting server






app.listen(app.get('port'), async () => {
   console.log('app server on port', app.get('port'))
})