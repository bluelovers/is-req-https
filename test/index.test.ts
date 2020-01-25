/* global before, beforeEach, after, afterEach, it, describe */
import { expect } from 'chai';
import isHttps from '..';
import { IResponseLike } from '../types';

it('is-req-https', () =>
{

	const httpsReq: IResponseLike = {
		secure: true,
	};

	const httpReq: IResponseLike = {
		server: {
			info: {
				protocol: 'http',
			},
		},
	};

	const httpForwarded: IResponseLike = {
		headers: {
			'x-forwarded-proto': 'https',
		},
	};

	expect(isHttps(httpsReq)).to.be.ok;
	expect(isHttps(httpReq)).to.be.not.ok;
	expect(isHttps({
		server: {
			info: {
				protocol: 'https',
			},
		},
	})).to.be.ok;

	expect(isHttps(httpForwarded)).to.be.not.ok;
	expect(isHttps(httpForwarded, {
		xForwardedProto: true,
	})).to.be.ok;

	expect(isHttps({
		headers: {
			'x-forwarded-proto': 'http',
		},
	}, {
		xForwardedProto: true,
	})).to.be.not.ok;

	expect(isHttps({
		secure: true,
	})).to.be.ok;

	expect(isHttps({
		protocol: 'https',
	})).to.be.ok;

	expect(isHttps({
		protocol: 'http',
	})).to.be.not.ok;

	expect(isHttps({
		connection: {
			encrypted: true,
		},
	})).to.be.ok;

});
