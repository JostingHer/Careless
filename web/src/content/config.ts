import { homeInSanity } from "@/landings/home/infrastructure/sanity-home-collection.ts";
import { legalsInSanity } from "@/landings/legal/infrastructure/sanity-legal-collection.ts";
import { settingsInSanity } from "@/common/infrastructure/sanity-settings-collection.ts";
import { sharedInSanity } from "@/common/infrastructure/sanity-shared-collection.ts";
import { popupsInSanity } from "@/features/getting-leads/infrastructure/sanity-popups-collection.ts";
import { contactInSanity } from "@/landings/contact/infrastructure/sanity-contact-collection.ts";

export const collections = {
    home: homeInSanity,
    legal: legalsInSanity,
    settings: settingsInSanity,
    shared: sharedInSanity,
    popups: popupsInSanity,
    contact: contactInSanity,
};
