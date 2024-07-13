const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User'); // Asegúrate de que este modelo existe

const app = express();

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:3000', // Asegúrate de que esta URL coincide con la URL de tu cliente React
  credentials: true
}));

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(session({
  secret: 'your_secret_key',  // Cambia esto por una clave secreta segura
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: '581088921600-dv92rekgadmo9dse96muc541c9qtt93u.apps.googleusercontent.com',  // Reemplaza esto con tu Google Client ID
  clientSecret: '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',  // Reemplaza esto con tu Google Client Secret
  callbackURL: 'http://localhost:5000/auth/google/callback'  // Esta URL debe coincidir con la que has configurado en Google Console
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return done(err, user);
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});