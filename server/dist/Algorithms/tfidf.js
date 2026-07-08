import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { TfIdf } = require('natural');
let tfidf = null;
let eventIndexMap = null;
let isBuilt = false;
export async function ensureCorpus(events) {
    if (isBuilt)
        return;
    tfidf = new TfIdf();
    eventIndexMap = new Map();
    events.forEach((event, index) => {
        const text = `${event.title} ${event.description}`.toLowerCase();
        tfidf.addDocument(text);
        eventIndexMap.set(event.id, index);
    });
    isBuilt = true;
}
export function getDocumentVector(eventId) {
    const idx = eventIndexMap.get(eventId);
    if (idx === undefined)
        return {};
    const terms = tfidf.listTerms(idx);
    const vector = {};
    terms.forEach(t => { vector[t.term] = t.tfidf; });
    return vector;
}
export function getUserProfileVector(clickedEventIds) {
    if (clickedEventIds.length === 0)
        return {};
    const profile = {};
    clickedEventIds.forEach(eventId => {
        const idx = eventIndexMap.get(eventId);
        if (idx === undefined)
            return;
        const terms = tfidf.listTerms(idx);
        terms.forEach(t => {
            profile[t.term] = (profile[t.term] || 0) + t.tfidf;
        });
    });
    const termCount = Object.keys(profile).length;
    if (termCount === 0)
        return {};
    for (const term of Object.keys(profile)) {
        profile[term] = profile[term] / clickedEventIds.length;
    }
    return profile;
}
export function cosineSimilarity(vecA, vecB) {
    let dotProduct = 0;
    let magA = 0;
    let magB = 0;
    const allTerms = new Set([...Object.keys(vecA), ...Object.keys(vecB)]);
    for (const term of allTerms) {
        const a = vecA[term] || 0;
        const b = vecB[term] || 0;
        dotProduct += a * b;
        magA += a * a;
        magB += b * b;
    }
    magA = Math.sqrt(magA);
    magB = Math.sqrt(magB);
    if (magA === 0 || magB === 0)
        return 0;
    return Math.max(0, dotProduct / (magA * magB));
}
//# sourceMappingURL=tfidf.js.map