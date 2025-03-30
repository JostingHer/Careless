import pkg, { type CookieConsentConfig } from "vanilla-cookieconsent";
import cookiesEs from "./translations/es.json";
import cookiesEn from "./translations/en.json";
import { LANGUAGE } from "../../../../shared/translations/domain/languages.ts";

const { getCookie } = pkg;

type Consent = Record<string, boolean>;

const onConsentChange = () => {
    const { categories } = getCookie();
    const consent: Consent = {};
    categories.forEach((category) => {
        consent[category] = true;
    });

    if (!gtag) {
        console.error("gtag not found");
        return;
    }

    const consentMode = {
        functionality_storage: consent.necessary ? "granted" : "denied",
        security_storage: consent.necessary ? "granted" : "denied",
        ad_storage:
            consent.analytics || consent.marketing ? "granted" : "denied",
        ad_personalization:
            consent.analytics || consent.marketing ? "granted" : "denied",
        ad_user_data:
            consent.analytics || consent.marketing ? "granted" : "denied",
        analytics_storage: consent.analytics ? "granted" : "denied",
        personalization: consent.preferences ? "granted" : "denied",
    };
    gtag("consent", "update", consentMode);
    if (dataLayer) {
        dataLayer.push({ event: "consentModeChange", consentMode });
    }
    window.location.reload();
};

export const ConfigCookieConsent: CookieConsentConfig = {
    revision: 2,
    guiOptions: {
        consentModal: {
            layout: "box wide",
            position: "bottom right",
            flipButtons: false,
            equalWeightButtons: true,
        },
        preferencesModal: {
            layout: "box",
            flipButtons: false,
            equalWeightButtons: true,
        },
    },
    categories: {
        necessary: {
            enabled: true,
            readOnly: true,
        },
        analytics: {
            services: {},
        },
        marketing: {
            services: {},
        },
    },
    language: {
        default: LANGUAGE.ES,
        autoDetect: "document",
        translations: {
            es: cookiesEs,
            en: cookiesEn,
        },
    },
    onFirstConsent: ({ cookie }) => {
        onConsentChange();
    },
    onChange: ({ cookie, changedCategories, changedServices }) => {
        onConsentChange();
    },
    // onConsent: ({ cookie }) => {
    //   const grantedCategories: Consent = {};
    //   cookie.categories.forEach((category) => {
    //     grantedCategories[category] = true;
    //   });
    //
    //   onConsentChange(grantedCategories);
    // },
};
