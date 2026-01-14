import slugify from 'slugify';
export default function getSlug(name) {
    return slugify.default(name, { lower: true });
}
//# sourceMappingURL=createSlug.js.map