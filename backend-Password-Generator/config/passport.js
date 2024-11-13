const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (token, tokenSecret, profile, done) => {
      try {
        let user = await User.findOne({ oauthId: profile.id, oauthProvider: "google" });
        if (!user) {
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            oauthProvider: "google",
            oauthId: profile.id,
            termsChecked: true, // Assume terms checked on social login
            emailChecked: true,
          });
          await user.save();
        }
        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    async (token, tokenSecret, profile, done) => {
      try {
        let user = await User.findOne({ oauthId: profile.id, oauthProvider: "github" });
        if (!user) {
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            oauthProvider: "github",
            oauthId: profile.id,
            termsChecked: true,
            emailChecked: true,
          });
          await user.save();
        }
        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
