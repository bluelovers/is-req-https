"use strict";
function checkResHttp(req, options = {}) {
    // For node requests without any framework
    if (('connection' in req) && req.connection.encrypted) {
        return true;
    }
    // For express requests
    if ('secure' in req) {
        return !!req.secure;
    }
    /**
     * https://github.com/nuxt-community/is-https/blob/master/index.js
     */
    if ('protocol' in req && req.protocol === 'https') {
        return true;
    }
    // Test the headers
    if (options.xForwardedProto && ('headers' in req) && req.headers['x-forwarded-proto']) {
        let v = req.headers['x-forwarded-proto'].split(',')[0].trim();
        if (v === 'https') {
            return true;
        }
        else if (v === 'http') {
            return false;
        }
    }
    // For Hapi requests check req.server.info.protocol
    if (('server' in req) && req.server.info && req.server.info.protocol) {
        let v = req.server.info.protocol;
        if (v === 'https') {
            return true;
        }
        else if (v === 'http') {
            return false;
        }
    }
    return null;
}
// @ts-ignore
(() => checkResHttp.default = checkResHttp)();
module.exports = checkResHttp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsU0FBUyxZQUFZLENBQUMsR0FBa0IsRUFBRSxVQUt0QyxFQUFFO0lBR0wsMENBQTBDO0lBQzFDLElBQUksQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQ3JEO1FBQ0MsT0FBTyxJQUFJLENBQUE7S0FDWDtJQUVELHVCQUF1QjtJQUN2QixJQUFJLFFBQVEsSUFBSSxHQUFHLEVBQ25CO1FBQ0MsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztLQUNwQjtJQUVEOztPQUVHO0lBQ0gsSUFBSSxVQUFVLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUNqRDtRQUNDLE9BQU8sSUFBSSxDQUFDO0tBQ1o7SUFFRCxtQkFBbUI7SUFDbkIsSUFBSSxPQUFPLENBQUMsZUFBZSxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFDckY7UUFDQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlELElBQUksQ0FBQyxLQUFLLE9BQU8sRUFDakI7WUFDQyxPQUFPLElBQUksQ0FBQztTQUNaO2FBQ0ksSUFBSSxDQUFDLEtBQUssTUFBTSxFQUNyQjtZQUNDLE9BQU8sS0FBSyxDQUFDO1NBQ2I7S0FDRDtJQUVELG1EQUFtRDtJQUNuRCxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDcEU7UUFDQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFakMsSUFBSSxDQUFDLEtBQUssT0FBTyxFQUNqQjtZQUNDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFDSSxJQUFJLENBQUMsS0FBSyxNQUFNLEVBQ3JCO1lBQ0MsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDO0FBRUQsYUFBYTtBQUNiLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDO0FBRTlDLGlCQUFTLFlBQVksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSZXNwb25zZUxpa2UgfSBmcm9tICcuL3R5cGVzJztcblxuZnVuY3Rpb24gY2hlY2tSZXNIdHRwKHJlcTogSVJlc3BvbnNlTGlrZSwgb3B0aW9uczoge1xuXHQvKipcblx0ICogb25seSBkbyB0aGlzIGlmIHlvdSB0cnVzdCB0aGUgcHJveHlcblx0ICovXG5cdHhGb3J3YXJkZWRQcm90bz86IGJvb2xlYW4sXG59ID0ge30pOiBib29sZWFuXG57XG5cblx0Ly8gRm9yIG5vZGUgcmVxdWVzdHMgd2l0aG91dCBhbnkgZnJhbWV3b3JrXG5cdGlmICgoJ2Nvbm5lY3Rpb24nIGluIHJlcSkgJiYgcmVxLmNvbm5lY3Rpb24uZW5jcnlwdGVkKVxuXHR7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXG5cdC8vIEZvciBleHByZXNzIHJlcXVlc3RzXG5cdGlmICgnc2VjdXJlJyBpbiByZXEpXG5cdHtcblx0XHRyZXR1cm4gISFyZXEuc2VjdXJlO1xuXHR9XG5cblx0LyoqXG5cdCAqIGh0dHBzOi8vZ2l0aHViLmNvbS9udXh0LWNvbW11bml0eS9pcy1odHRwcy9ibG9iL21hc3Rlci9pbmRleC5qc1xuXHQgKi9cblx0aWYgKCdwcm90b2NvbCcgaW4gcmVxICYmIHJlcS5wcm90b2NvbCA9PT0gJ2h0dHBzJylcblx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gVGVzdCB0aGUgaGVhZGVyc1xuXHRpZiAob3B0aW9ucy54Rm9yd2FyZGVkUHJvdG8gJiYgKCdoZWFkZXJzJyBpbiByZXEpICYmIHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1wcm90byddKVxuXHR7XG5cdFx0bGV0IHYgPSByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtcHJvdG8nXS5zcGxpdCgnLCcpWzBdLnRyaW0oKTtcblxuXHRcdGlmICh2ID09PSAnaHR0cHMnKVxuXHRcdHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRlbHNlIGlmICh2ID09PSAnaHR0cCcpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8vIEZvciBIYXBpIHJlcXVlc3RzIGNoZWNrIHJlcS5zZXJ2ZXIuaW5mby5wcm90b2NvbFxuXHRpZiAoKCdzZXJ2ZXInIGluIHJlcSkgJiYgcmVxLnNlcnZlci5pbmZvICYmIHJlcS5zZXJ2ZXIuaW5mby5wcm90b2NvbClcblx0e1xuXHRcdGxldCB2ID0gcmVxLnNlcnZlci5pbmZvLnByb3RvY29sO1xuXG5cdFx0aWYgKHYgPT09ICdodHRwcycpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHYgPT09ICdodHRwJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbi8vIEB0cy1pZ25vcmVcbigoKSA9PiBjaGVja1Jlc0h0dHAuZGVmYXVsdCA9IGNoZWNrUmVzSHR0cCkoKTtcblxuZXhwb3J0ID0gY2hlY2tSZXNIdHRwXG4iXX0=