import { post } from "../post";
import { test } from "vitest";
const saleGroupData = {
    status: true,
    name: {
        en: "Web Individual english",
        es: "Web Individual es",
        ca: "Web Individual ca"
    },
    displayName: {
        en: "Web Individual english",
        es: "Web Individual es",
        ca: "Web Individual ca"
    },
    slug: {
        en: "web-individual-english",
        es: "web-individual-es-test",
        ca: "web-individual-ca"
    },
    type: "WEB_INDIVIDUAL",
    calendarStatus: 1,
    calendarType: "periodic",
    openingDate: "20/3/2023",
    periodType: "day",
    numPeriods: 5,
    minTickets: 1,
    maxTickets: 5,
    ticketGroupingType: "Individual",
    sendEmailReminder: false,
    sendEmailCancellation: false,
    showPassbookEmail: false,
    showGoogleWalletEmail: false,
    createApiSellerSalesGroup: true,
    reservedEmail: false,
    checkBenefits: false,
    loyaltyProgramId: 2,
    minNumDays: 2,
    purchaseAfterMinutes: 0,
    editAfterMinutes: 0,
    icon: "https://loremflickr.com/640/480",
    hidden_online: true,
    orderSpecialEvents: "event",
    infoMessage: {
        en: "<p>CA The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheelte</p>",
        es: "<p>CA The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel</p>",
        ca: "<p>CA The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel casd</p>"
    },
    buyerTypesIdArr: [3],
    paymentMethodsSet: [
        {
            displayOrder: 1,
            paymentMethodId: 2
        },
        {
            displayOrder: 2,
            paymentMethodId: 1
        }
    ],
    verifiersSet: [
        {
            verifierId: 4,
            name: "Externos"
        },
        {
            verifierId: 2,
            name: "Verifier web"
        },
        {
            verifierId: 3,
            name: "Tornos"
        }
    ]
};
test("Should post data", async () => {
    await post(`${import.meta.env.VITE_API_BASE_URL}/salesGroups`, saleGroupData);
});
