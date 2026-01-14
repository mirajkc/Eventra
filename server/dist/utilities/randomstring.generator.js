import randomstring from 'randomstring';
export default function generateString({ length = 10, charset = "alphabetic" }) {
    return randomstring.generate({
        length: length,
        charset: charset
    });
}
//# sourceMappingURL=randomstring.generator.js.map