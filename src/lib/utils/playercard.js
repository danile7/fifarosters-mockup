// import { workrateID } from "@/src/data/futcard";
// import { getCardColors, getUseLightClub, getPlayerName } from "@/src/utility/fifa_lib";
// import { TEAM_CREST_URLS, LEAGUE_LOGO_URL } from "@/src/config/urls";

// export const initializePlayer = (player, options) => {
//   const keys = [
//     'overallrating', 'prefpos1', 'color', 'commonname', 'firstname', 'lastname', 'skillmoves', 'playerid', 'id', 'composure', 'nationality', 'height', 'weight', 'attackingworkrate', 'defensiveworkrate'
//   ];

//   keys.forEach(key => {
//     if (!player.hasOwnProperty(key)) {
//       player[key] = null;
//     }
//   });

//   const {
//     cardMiniSmall = false,
//     isFutCard = false,
//     cardType = null,
//     futYear = 24,
//     card3D = false,
//     forceClubImg = null,
//     t = {},
//   } = options;

//   let { futSize = "small", cardBottom = "" } = options;

//   let useLightClub = false;
//   let futLevel = null;
//   let futGroup = null;
//   let extraClasses = "";

//   if (isFutCard) {
//     Object.assign(player, {
//       fut_id: player.id,
//       id: player.baseid,
//       playerid: player.baseid,
//       player_name: player.name,
//       overallrating: player.rating,
//       prefpos1: player.position,
//       nationality: player.nationid,
//       team_id: player.clubid,
//       attackingworkrate: workrateID[player.atkworkrate] || workrateID["medium"],
//       defensiveworkrate: workrateID[player.defworkrate] || workrateID["medium"],
//       weakfootabilitytypecode: player.weakfoot
//     });
//   } else {
//     if (player.position && player.position !== "SUB" && player.position !== "RES") {
//       player.prefpos1 = player.position;
//     } else if (player.prefposition1) {
//       player.prefpos1 = player.prefposition1;
//     }
//     player.skillmoves = (player.skillmoves) ? player.skillmoves + 1 : "1";
//   }

//   if (!player.spe && player.spd) {
//     player.spe = player.spd;
//   }

//   if (!player.weakfootabilitytypecode) {
//     player.weakfootabilitytypecode = 1;
//   }

//   if (cardType !== 1) {
//     if (player.color) {
//       const cardColors = getCardColors(player.color, futYear);
//       futLevel = cardColors.futlevel || null;
//       futGroup = cardColors.futgroup || null;
//     } else if (player.overallrating) {
//       futLevel = player.overallrating > 74 ? "gold" :
//         player.overallrating > 64 ? "silver" : "bronze";
//       player.color = futLevel;
//     } else {
//       player.color = "bronze";
//     }
//     player.chemistrytype = player.chemistrytype || "basic";

//     if (futYear > 17) {
//       if (futSize === "xl" || (futSize === "mini" && !cardMiniSmall)) {
//         extraClasses += " xl-to-large";
//       }
//       if (card3D) {
//         extraClasses += ` card-3d ${futLevel} ${futGroup}`;
//       }
//     } else if (futSize === "xl") {
//       futSize = "large";
//     }
//   }

//   player.team_id = player.team_id || t.team_id || null;
//   player.teamname = player.teamname || t.teamname || null;
//   player.nationname = player.nationname || null;

//   useLightClub = getUseLightClub({ 'futyear': futYear, 'r': player });

//   if (forceClubImg) {
//     player.club_img_url = forceClubImg;
//   } else if (player.team_id) {
//     if (futYear < 19) {
//       player.club_img_url = `${TEAM_CREST_URLS[futYear]}${useLightClub ? "light/" : ""}${player.team_id}.png`;
//     } else {
//       player.club_img_url = `${TEAM_CREST_URLS[futYear]}${useLightClub ? "dark/" : ""}${player.team_id}.png`;
//     }
//   }

//   if (player.leagueid) {
//     player.league_img_url = `${LEAGUE_LOGO_URL}/fifa${futYear}/${useLightClub ? "dark/" : ""}${player.leagueid}.png`;
//   }

//   if (player.color && player.color.startsWith("world_cup") && futYear === 18) {
//     if (player.team_id !== 112658) {
//       player.confederation = nations_array[player.nationid].confederation;
//       player.club_img_url = `assets/confederations/fifa18/${player.confederation}.png`;
//     }
//     cardBottom = "chemistry";
//   }

//   if (player.team_id === 111205) {
//     player.player_img_url = `${CLASSIC_XI_AVATAR_URL}${player.playerid}.png`;
//     player.club_img_url = `${LOCAL_TEAM_CREST_URL}${player.teamid}.png`;
//   } else if (player.league_id === 2136) {
//     player.player_img_url = `${FEMALE_AVATAR_URL}${player.playerid}.png`;
//   } else {
//     if (player.fut_id) {
//       player.player_img_url = player.specialimgurl || player.headshotimgurl ||
//         `${PLAYER_AVATAR_URLS.futYear}${player.playerid}.png`;
//     } else {
//       player.img_onerror = player.playerid !== "0" ?
//         `${PLAYER_AVATAR_URLS.futYear}${player.playerid}.png` :
//         "images/silhouette_15.png";
//       player.player_img_url = player.specialimgurl || player.img_onerror;
//     }
//   }

//   player.commonname = player.commonname || player.player_name || '';
//   player.firstname = player.firstname || '';
//   player.lastname = player.lastname || '';
//   player.player_name = getPlayerName(player.commonname, player.firstname, player.lastname, "last");

//   const positionRatings = ["gk", "cb", "fb", "wb", "dm", "cm", "wm", "am", "w", "f", "st"]
//     .reduce((acc, pos) => {
//       acc[`rating${pos.charAt(0).toUpperCase() + pos.slice(1)}`] = player[pos] || 0;
//       return acc;
//     }, {});

//   return { player, positionRatings, extraClasses, cardBottom };
// };