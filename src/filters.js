
"use strict";

function usage(req, res, next) {
    if (!req.query.url) {
        return res.redirect('/usage.html');
    } else {
        return next();
    }
}


/* Export functions */

module.exports.usage = usage;