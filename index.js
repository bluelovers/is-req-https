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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsU0FBUyxZQUFZLENBQUMsR0FBa0IsRUFBRSxVQUt0QyxFQUFFO0lBR0wsMENBQTBDO0lBQzFDLElBQUksQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQ3JEO1FBQ0MsT0FBTyxJQUFJLENBQUE7S0FDWDtJQUVELHVCQUF1QjtJQUN2QixJQUFJLFFBQVEsSUFBSSxHQUFHLEVBQ25CO1FBQ0MsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztLQUNwQjtJQUVELG1CQUFtQjtJQUNuQixJQUFJLE9BQU8sQ0FBQyxlQUFlLElBQUksQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxFQUNyRjtRQUNDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFOUQsSUFBSSxDQUFDLEtBQUssT0FBTyxFQUNqQjtZQUNDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFDSSxJQUFJLENBQUMsS0FBSyxNQUFNLEVBQ3JCO1lBQ0MsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0lBRUQsbURBQW1EO0lBQ25ELElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUNwRTtRQUNDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVqQyxJQUFJLENBQUMsS0FBSyxPQUFPLEVBQ2pCO1lBQ0MsT0FBTyxJQUFJLENBQUM7U0FDWjthQUNJLElBQUksQ0FBQyxLQUFLLE1BQU0sRUFDckI7WUFDQyxPQUFPLEtBQUssQ0FBQztTQUNiO0tBQ0Q7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNiLENBQUM7QUFFRCxhQUFhO0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUM7QUFFOUMsaUJBQVMsWUFBWSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJlc3BvbnNlTGlrZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5mdW5jdGlvbiBjaGVja1Jlc0h0dHAocmVxOiBJUmVzcG9uc2VMaWtlLCBvcHRpb25zOiB7XG5cdC8qKlxuXHQgKiBvbmx5IGRvIHRoaXMgaWYgeW91IHRydXN0IHRoZSBwcm94eVxuXHQgKi9cblx0eEZvcndhcmRlZFByb3RvPzogYm9vbGVhbixcbn0gPSB7fSk6IGJvb2xlYW5cbntcblxuXHQvLyBGb3Igbm9kZSByZXF1ZXN0cyB3aXRob3V0IGFueSBmcmFtZXdvcmtcblx0aWYgKCgnY29ubmVjdGlvbicgaW4gcmVxKSAmJiByZXEuY29ubmVjdGlvbi5lbmNyeXB0ZWQpXG5cdHtcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG5cblx0Ly8gRm9yIGV4cHJlc3MgcmVxdWVzdHNcblx0aWYgKCdzZWN1cmUnIGluIHJlcSlcblx0e1xuXHRcdHJldHVybiAhIXJlcS5zZWN1cmU7XG5cdH1cblxuXHQvLyBUZXN0IHRoZSBoZWFkZXJzXG5cdGlmIChvcHRpb25zLnhGb3J3YXJkZWRQcm90byAmJiAoJ2hlYWRlcnMnIGluIHJlcSkgJiYgcmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLXByb3RvJ10pXG5cdHtcblx0XHRsZXQgdiA9IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1wcm90byddLnNwbGl0KCcsJylbMF0udHJpbSgpO1xuXG5cdFx0aWYgKHYgPT09ICdodHRwcycpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHYgPT09ICdodHRwJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRm9yIEhhcGkgcmVxdWVzdHMgY2hlY2sgcmVxLnNlcnZlci5pbmZvLnByb3RvY29sXG5cdGlmICgoJ3NlcnZlcicgaW4gcmVxKSAmJiByZXEuc2VydmVyLmluZm8gJiYgcmVxLnNlcnZlci5pbmZvLnByb3RvY29sKVxuXHR7XG5cdFx0bGV0IHYgPSByZXEuc2VydmVyLmluZm8ucHJvdG9jb2w7XG5cblx0XHRpZiAodiA9PT0gJ2h0dHBzJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAodiA9PT0gJ2h0dHAnKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuLy8gQHRzLWlnbm9yZVxuKCgpID0+IGNoZWNrUmVzSHR0cC5kZWZhdWx0ID0gY2hlY2tSZXNIdHRwKSgpO1xuXG5leHBvcnQgPSBjaGVja1Jlc0h0dHBcbiJdfQ==