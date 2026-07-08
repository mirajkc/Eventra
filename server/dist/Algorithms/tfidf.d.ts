export declare function ensureCorpus(events: Array<{
    id: string;
    title: string;
    description: string;
}>): Promise<void>;
export declare function getDocumentVector(eventId: string): Record<string, number>;
export declare function getUserProfileVector(clickedEventIds: string[]): Record<string, number>;
export declare function cosineSimilarity(vecA: Record<string, number>, vecB: Record<string, number>): number;
//# sourceMappingURL=tfidf.d.ts.map