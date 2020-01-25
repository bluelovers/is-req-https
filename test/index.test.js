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
    chai_1.expect(__1.default({
        protocol: 'https',
    })).to.be.ok;
    chai_1.expect(__1.default({
        protocol: 'http',
    })).to.be.not.ok;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrREFBK0Q7QUFDL0QsK0JBQThCO0FBQzlCLDJDQUF5QjtBQUd6QixFQUFFLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtJQUd2QixNQUFNLFFBQVEsR0FBa0I7UUFDL0IsTUFBTSxFQUFFLElBQUk7S0FDWixDQUFDO0lBRUYsTUFBTSxPQUFPLEdBQWtCO1FBQzlCLE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRTtnQkFDTCxRQUFRLEVBQUUsTUFBTTthQUNoQjtTQUNEO0tBQ0QsQ0FBQztJQUVGLE1BQU0sYUFBYSxHQUFrQjtRQUNwQyxPQUFPLEVBQUU7WUFDUixtQkFBbUIsRUFBRSxPQUFPO1NBQzVCO0tBQ0QsQ0FBQztJQUVGLGFBQU0sQ0FBQyxXQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNuQyxhQUFNLENBQUMsV0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBRXRDLGFBQU0sQ0FBQyxXQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDNUMsYUFBTSxDQUFDLFdBQU8sQ0FBQyxhQUFhLEVBQUU7UUFDN0IsZUFBZSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFFYixhQUFNLENBQUMsV0FBTyxDQUFDO1FBQ2QsTUFBTSxFQUFFLElBQUk7S0FDWixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUViLGFBQU0sQ0FBQyxXQUFPLENBQUM7UUFDZCxRQUFRLEVBQUUsT0FBTztLQUNqQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUViLGFBQU0sQ0FBQyxXQUFPLENBQUM7UUFDZCxRQUFRLEVBQUUsTUFBTTtLQUNoQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFFbEIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgYmVmb3JlLCBiZWZvcmVFYWNoLCBhZnRlciwgYWZ0ZXJFYWNoLCBpdCwgZGVzY3JpYmUgKi9cbmltcG9ydCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknO1xuaW1wb3J0IGlzSHR0cHMgZnJvbSAnLi4nO1xuaW1wb3J0IHsgSVJlc3BvbnNlTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuaXQoJ2lzLXJlcS1odHRwcycsICgpID0+XG57XG5cblx0Y29uc3QgaHR0cHNSZXE6IElSZXNwb25zZUxpa2UgPSB7XG5cdFx0c2VjdXJlOiB0cnVlLFxuXHR9O1xuXG5cdGNvbnN0IGh0dHBSZXE6IElSZXNwb25zZUxpa2UgPSB7XG5cdFx0c2VydmVyOiB7XG5cdFx0XHRpbmZvOiB7XG5cdFx0XHRcdHByb3RvY29sOiAnaHR0cCcsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0Y29uc3QgaHR0cEZvcndhcmRlZDogSVJlc3BvbnNlTGlrZSA9IHtcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQneC1mb3J3YXJkZWQtcHJvdG8nOiAnaHR0cHMnLFxuXHRcdH0sXG5cdH07XG5cblx0ZXhwZWN0KGlzSHR0cHMoaHR0cHNSZXEpKS50by5iZS5vaztcblx0ZXhwZWN0KGlzSHR0cHMoaHR0cFJlcSkpLnRvLmJlLm5vdC5vaztcblxuXHRleHBlY3QoaXNIdHRwcyhodHRwRm9yd2FyZGVkKSkudG8uYmUubm90Lm9rO1xuXHRleHBlY3QoaXNIdHRwcyhodHRwRm9yd2FyZGVkLCB7XG5cdFx0eEZvcndhcmRlZFByb3RvOiB0cnVlLFxuXHR9KSkudG8uYmUub2s7XG5cblx0ZXhwZWN0KGlzSHR0cHMoe1xuXHRcdHNlY3VyZTogdHJ1ZSxcblx0fSkpLnRvLmJlLm9rO1xuXG5cdGV4cGVjdChpc0h0dHBzKHtcblx0XHRwcm90b2NvbDogJ2h0dHBzJyxcblx0fSkpLnRvLmJlLm9rO1xuXG5cdGV4cGVjdChpc0h0dHBzKHtcblx0XHRwcm90b2NvbDogJ2h0dHAnLFxuXHR9KSkudG8uYmUubm90Lm9rO1xuXG59KTtcbiJdfQ==