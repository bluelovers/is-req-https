"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* global before, beforeEach, after, afterEach, it, describe */
const chai_1 = require("chai");
const __1 = __importDefault(require(".."));
it('is-req-https', () => {
    const httpsReq = {
        secure: true,
    };
    const httpReq = {
        server: {
            info: {
                protocol: 'http',
            },
        },
    };
    const httpForwarded = {
        headers: {
            'x-forwarded-proto': 'https',
        },
    };
    chai_1.expect(__1.default(httpsReq)).to.be.ok;
    chai_1.expect(__1.default(httpReq)).to.be.not.ok;
    chai_1.expect(__1.default(httpForwarded)).to.be.not.ok;
    chai_1.expect(__1.default(httpForwarded, {
        xForwardedProto: true,
    })).to.be.ok;
    chai_1.expect(__1.default({
        secure: true,
    })).to.be.ok;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrREFBK0Q7QUFDL0QsK0JBQThCO0FBQzlCLDJDQUF5QjtBQUd6QixFQUFFLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtJQUd2QixNQUFNLFFBQVEsR0FBa0I7UUFDL0IsTUFBTSxFQUFFLElBQUk7S0FDWixDQUFDO0lBRUYsTUFBTSxPQUFPLEdBQWtCO1FBQzlCLE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRTtnQkFDTCxRQUFRLEVBQUUsTUFBTTthQUNoQjtTQUNEO0tBQ0QsQ0FBQztJQUVGLE1BQU0sYUFBYSxHQUFrQjtRQUNwQyxPQUFPLEVBQUU7WUFDUixtQkFBbUIsRUFBRSxPQUFPO1NBQzVCO0tBQ0QsQ0FBQztJQUVGLGFBQU0sQ0FBQyxXQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNuQyxhQUFNLENBQUMsV0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBRXRDLGFBQU0sQ0FBQyxXQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDNUMsYUFBTSxDQUFDLFdBQU8sQ0FBQyxhQUFhLEVBQUU7UUFDN0IsZUFBZSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFFYixhQUFNLENBQUMsV0FBTyxDQUFDO1FBQ2QsTUFBTSxFQUFFLElBQUk7S0FDWixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUVkLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIGJlZm9yZSwgYmVmb3JlRWFjaCwgYWZ0ZXIsIGFmdGVyRWFjaCwgaXQsIGRlc2NyaWJlICovXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcbmltcG9ydCBpc0h0dHBzIGZyb20gJy4uJztcbmltcG9ydCB7IElSZXNwb25zZUxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbml0KCdpcy1yZXEtaHR0cHMnLCAoKSA9Plxue1xuXG5cdGNvbnN0IGh0dHBzUmVxOiBJUmVzcG9uc2VMaWtlID0ge1xuXHRcdHNlY3VyZTogdHJ1ZSxcblx0fTtcblxuXHRjb25zdCBodHRwUmVxOiBJUmVzcG9uc2VMaWtlID0ge1xuXHRcdHNlcnZlcjoge1xuXHRcdFx0aW5mbzoge1xuXHRcdFx0XHRwcm90b2NvbDogJ2h0dHAnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnN0IGh0dHBGb3J3YXJkZWQ6IElSZXNwb25zZUxpa2UgPSB7XG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J3gtZm9yd2FyZGVkLXByb3RvJzogJ2h0dHBzJyxcblx0XHR9LFxuXHR9O1xuXG5cdGV4cGVjdChpc0h0dHBzKGh0dHBzUmVxKSkudG8uYmUub2s7XG5cdGV4cGVjdChpc0h0dHBzKGh0dHBSZXEpKS50by5iZS5ub3Qub2s7XG5cblx0ZXhwZWN0KGlzSHR0cHMoaHR0cEZvcndhcmRlZCkpLnRvLmJlLm5vdC5vaztcblx0ZXhwZWN0KGlzSHR0cHMoaHR0cEZvcndhcmRlZCwge1xuXHRcdHhGb3J3YXJkZWRQcm90bzogdHJ1ZSxcblx0fSkpLnRvLmJlLm9rO1xuXG5cdGV4cGVjdChpc0h0dHBzKHtcblx0XHRzZWN1cmU6IHRydWUsXG5cdH0pKS50by5iZS5vaztcblxufSk7XG4iXX0=