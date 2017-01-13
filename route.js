var router = require("./lib/router"),
    get = router.get,
    post = router.post,
    put = router.put,
    all = router.all;

get("/", "home.index");