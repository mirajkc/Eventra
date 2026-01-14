export default function notFound(req, res, next) {
    try {
        throw {
            code: 404,
            message: "The page you are seraching for does not exist",
            status: "NOT_FOUND_ERR"
        };
    }
    catch (exception) {
        next(exception);
    }
}
//# sourceMappingURL=notfound.js.map