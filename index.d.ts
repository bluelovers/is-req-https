import { IResponseLike } from './types';
declare function checkResHttp(req: IResponseLike, options?: {
    /**
     * only do this if you trust the proxy
     */
    xForwardedProto?: boolean;
}): boolean;
export = checkResHttp;
