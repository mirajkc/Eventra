import json
import os

def update_json(filepath, lang):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if 'landing' not in data:
        data['landing'] = {}
        
    data['landing']['puzzleHero'] = {
        "topText": "Discover the joy of" if lang == 'en' else "खुसी पत्ता लगाउनुहोस्",
        "highlight1": "effortless" if lang == 'en' else "सहज",
        "midText": "event management sourcing" if lang == 'en' else "कार्यक्रम व्यवस्थापन सोर्सिङ",
        "highlight2": "with Eventra." if lang == 'en' else "Eventra सँग।",
        "subtitle": "Eventra's event management platform is now available and ready to revolutionize the way you think about organizing and attending events." if lang == 'en' else "Eventra को कार्यक्रम व्यवस्थापन प्लेटफर्म अब उपलब्ध छ र कार्यक्रमहरू व्यवस्थित गर्ने र उपस्थित हुने तरिकालाई क्रान्ति गर्न तयार छ।"
    }
    
    # We also need to fix navbar labels if they are missing in ne.json, but they are probably there under navbar.home etc.
    # The user mentioned: "there is as the ui shift in the bavbar as the button gets smaller when switched from nepali to eng language so need to fix that as well"
    # That is an issue in Navbar.tsx styling.

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

update_json('/mnt/6C0A587E0A5846EC/Projects/Important projects/MERN stack Projects/Eventra/client/locales/en.json', 'en')
update_json('/mnt/6C0A587E0A5846EC/Projects/Important projects/MERN stack Projects/Eventra/client/locales/ne.json', 'ne')
