import { IResponseLike } from './types';

function checkResHttp(req: IResponseLike, options: {
	/**
	 * only do this if you trust the proxy
	 */
	xForwardedProto?: boolean,
} = {}): boolean
{

	// For node requests without any framework
	if (('connection' in req) && req.connection.encrypted)
	{
		return true
	}

	// For express requests
	if ('secure' in req)
	{
		return !!req.secure;
	}

	/**
	 * https://github.com/nuxt-community/is-https/blob/master/index.js
	 */
	if ('protocol' in req && req.protocol === 'https')
	{
		return true;
	}

	// Test the headers
	if (options.xForwardedProto && ('headers' in req) && req.headers['x-forwarded-proto'])
	{
		let v = req.headers['x-forwarded-proto'].split(',')[0].trim();

		if (v === 'https')
		{
			return true;
		}
		else if (v === 'http')
		{
			return false;
		}
	}

	// For Hapi requests check req.server.info.protocol
	if (('server' in req) && req.server.info && req.server.info.protocol)
	{
		let v = req.server.info.protocol;

		if (v === 'https')
		{
			return true;
		}
		else if (v === 'http')
		{
			return false;
		}
	}

	return null;
}

// @ts-ignore
(() => checkResHttp.default = checkResHttp)();

export = checkResHttp
