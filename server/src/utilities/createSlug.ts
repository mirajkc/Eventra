import slugify from 'slugify';

export default function getSlug(name: string) {
  return slugify.default(name, { lower: true });
}
