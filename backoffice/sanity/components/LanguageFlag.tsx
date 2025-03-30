import React from 'react'

import {LANGUAGE} from '../../company/settings/translations'

export const LanguageFlag = (language: LANGUAGE): React.JSX.Element => {
    if (!language) {
        return <span>🚫</span>
    }
    return <span>{getEmojiFlag(language)}</span>
}

export function getEmojiFlag(language: LANGUAGE): string {
    switch (language) {
        case LANGUAGE.EN:
            return '🇬🇧'
        case LANGUAGE.ES:
            return '🇪🇸'
        default:
            return '❌'
    }
}
