export const APP_NAME = "simple-lottery-entry";
export const APP_TITLE = "Simple Lottery Entry";
export const APP_DESCRIPTION = "One-time lottery registration on Base with elegant ticket-style confirmation.";
export const APP_URL = "https://simple-lottery-entry.vercel.app";
export const APP_OG_IMAGE = `${APP_URL}/og-ticket.png`;
export const APP_ICON = `${APP_URL}/icon-ticket.png`;
export const BASE_APP_ID = "69cb45e4a7654b8774320f2c";
export const TALENT_VERIFICATION = "bdfc81907c33e7fa480ec5415e31fd2cc509382c1b23e4d48db566bb8a9af1e303fa5dd94479b55f15e5cb9e1977a6ef039858639537c4fbb1e91ba3b91e5410";
export const BUILDER_CODE = "bc_58sb3x7v";
export const BUILDER_DATA_SUFFIX = "0x62635f35387362337837760b0080218021802180218021802180218021";
export const ENTRY_CONTRACT_ADDRESS = "0x1fbd24E7aAeF4cc99240012523c463e04Ed39139";

export const miniAppEmbed = {
  version: "1",
  imageUrl: APP_OG_IMAGE,
  button: {
    title: "Enter Lottery",
    action: {
      type: "launch_frame",
      name: APP_TITLE,
      url: APP_URL,
      splashImageUrl: APP_ICON,
      splashBackgroundColor: "#7C1F3A",
    },
  },
};
