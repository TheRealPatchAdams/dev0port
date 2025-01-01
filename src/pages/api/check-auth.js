// src/pages/api/check-auth.js
export default function handler(req, res) {
    // Mockup example; Replace this with real authentication logic
    if (req.session?.user) {
      res.status(200).json({ isAuthenticated: true, userAuthority: req.session.user.authority });
    } else {
      res.status(200).json({ isAuthenticated: false, userAuthority: null });
    }
  }
  