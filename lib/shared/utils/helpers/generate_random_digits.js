"use strict";
//@ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomDigits = generateRandomDigits;
async function generateRandomDigits(max_digits) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < max_digits; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        otp += digits[randomIndex];
    }
    return otp;
}
//# sourceMappingURL=generate_random_digits.js.map