function getTextScore(title, description) {
    const maxTitleLimit = 100;
    const maxDescriptionLimit = 2000;
    const titleWords = title.trim().split(/\s+/).length;
    const descriptionWords = description.trim().split(/\s+/).length;
    const titleScore = Math.min(titleWords / maxTitleLimit, 1);
    const descriptionScore = Math.min(descriptionWords / maxDescriptionLimit, 1);
    return (0.3 * titleScore + 0.7 * descriptionScore);
}
function getCategoryScore(category) {
    switch (category) {
        case "HACKATHON": return 1;
        case "COMPETITION": return 0.9;
        case "CONFERENCE": return 0.7;
        case "WORKSHOP": return 0.5;
        case "MEETUP": return 0.3;
        case "WEBINAR": return 0.2;
        case "OTHER": return 0.0;
        default: return 0;
    }
}
function getTagsScore(tags) {
    const maxTags = 5;
    const tagCount = tags.length;
    const tagScore = Math.min(tagCount / maxTags, 1);
    return tagScore;
}
function getPremiumScore(premium) {
    if (premium) {
        return 1;
    }
    else {
        return 0;
    }
}
function getThumbnailScore(url) {
    if (url && url.length > 1) {
        return 1;
    }
    else {
        return 0;
    }
}
export default function getEventScore(event) {
    const textScore = getTextScore(event.title, event.description);
    const categoryScore = getCategoryScore(event.category);
    const tagsScore = getTagsScore(event.tags);
    const premiumScore = getPremiumScore(event.premium);
    const thumbnailScore = getThumbnailScore(event?.image);
    const eventScore = (textScore + categoryScore + tagsScore + premiumScore + thumbnailScore) / 5;
    console.log(eventScore);
    return eventScore;
}
//# sourceMappingURL=getEventScore.js.map