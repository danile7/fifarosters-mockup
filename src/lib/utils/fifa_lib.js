// const DEFAULT_CARD_YEAR = 24;

// const physicalArray = [ "acceleration", "sprintspeed", "agility", "balance", "jumping", "stamina", "strength", "reactions" ];
// const mentalArray = [ "aggression", "interceptions", "positioning", "vision" ];
// const skillsArray = [ "ballcontrol", "crossing", "dribbling", "finishing", "freekickaccuracy", "headingaccuracy", "longpassing", "shortpassing", "marking", "shotpower", "longshots", "standingtackle", "slidingtackle", "volleys", "curve", "penalties" ];
// const gkSkillsArray = [ "gkdiving", "gkhandling", "gkkicking", "gkreflexes", "gkpositioning" ];

// const allSkillsArray = [
//     ...physicalArray,
//     ...mentalArray,
//     ...skillsArray,
//     ...gkSkillsArray
// ];

// export const getCardColors = (color = null, year = DEFAULT_CARD_YEAR) => {
//   const baseColors = {
//       bronze: {
//           label: "Non Rare Bronze",
//           futgroup: "nonrare",
//           futlevel: "bronze",
//           css_class: "nonrare bronze"
//       },
//       silver: {
//           label: "Non Rare Silver",
//           futgroup: "nonrare",
//           futlevel: "silver",
//           css_class: "nonrare silver"
//       },
//       gold: {
//           label: "Non Rare Gold",
//           futgroup: "nonrare",
//           futlevel: "gold",
//           css_class: "nonrare gold"
//       },
//       rare_bronze: {
//           label: "Rare Bronze",
//           futgroup: "rare",
//           futlevel: "bronze",
//           css_class: "rare bronze"
//       },
//       rare_silver: {
//           label: "Rare Silver",
//           futgroup: "rare",
//           futlevel: "silver",
//           css_class: "rare silver"
//       },
//       rare_gold: {
//           label: "Rare Gold",
//           futgroup: "rare",
//           futlevel: "gold",
//           css_class: "rare gold"
//       },
//       totw_bronze: {
//           label: "Team of the Week Bronze",
//           futgroup: "if",
//           futlevel: "bronze",
//           css_class: "if bronze"
//       },
//       totw_silver: {
//           label: "Team of the Week Silver",
//           futgroup: "if",
//           futlevel: "silver",
//           css_class: "if silver"
//       },
//       totw_gold: {
//           label: "Team of the Week Gold",
//           futgroup: "if",
//           futlevel: "gold",
//           css_class: "if gold"
//       },
//       tots_bronze: {
//           label: "Team of the Season Bronze",
//           futgroup: "tots",
//           futlevel: "bronze",
//           css_class: "tots bronze"
//       },
//       tots_silver: {
//           label: "Team of the Season Silver",
//           futgroup: "tots",
//           futlevel: "silver",
//           css_class: "tots silver"
//       },
//       tots_gold: {
//           label: "Team of the Season Gold",
//           futgroup: "tots",
//           futlevel: "gold",
//           css_class: "tots gold"
//       },
//       st_patricks: {
//           label: "Green Team",
//           futgroup: "",
//           futlevel: "st_patricks",
//           css_class: "green"
//       },
//       legend: {
//           label: "Icon / Legend",
//           futgroup: "",
//           futlevel: "legend",
//           css_class: "legend"
//       },
//       motm: {
//           label: "Man of the Match",
//           futgroup: "",
//           futlevel: "motm",
//           css_class: "motm"
//       },
//       purple: {
//           label: "Hero",
//           futgroup: "",
//           futlevel: "hero",
//           css_class: "hero"
//       },
//       toty: {
//           label: "Team of the Year",
//           futgroup: "",
//           futlevel: "toty",
//           css_class: "toty"
//       },
//       record_breaker: {
//           label: "Record Breaker",
//           futgroup: "",
//           futlevel: "bluered",
//           css_class: "bluered"
//       },
//       imotm: {
//           label: "Int'l Man of the Match",
//           futgroup: "",
//           futlevel: "imotm",
//           css_class: "imotm"
//       },
//       concept: {
//           label: "Concept Card",
//           futgroup: "",
//           futlevel: "concept",
//           css_class: "concept"
//       },
//       pink: {
//           label: "Futties",
//           futgroup: "",
//           futlevel: "pink",
//           css_class: "pink"
//       },
//       futties_winner: {
//           label: "Futties Winner",
//           futgroup: "",
//           futlevel: "futties_winner",
//           css_class: "futties_winner"
//       },
//       teal: {
//           label: "Pro Player",
//           futgroup: "",
//           futlevel: "pro-player",
//           css_class: "pro-player"
//       }
//   };
  
//   let cardColors16 = {
//       ...baseColors,
//       euro: {
//           label: "EURO 2016",
//           futgroup: "",
//           futlevel: "euro",
//           css_class: "euro"
//       }
//   };

//   let cardColors17 = {
//       ...baseColors,
//       fut_champions_bronze: {
//           label: "FUT Champions Bronze",
//           futgroup: "futchamp",
//           futlevel: "bronze",
//           css_class: "futchamp bronze"
//       },
//       fut_champions_silver: {
//           label: "FUT Champions Silver",
//           futgroup: "futchamp",
//           futlevel: "silver",
//           css_class: "futchamp silver"
//       },
//       fut_champions_gold: {
//           label: "FUT Champions Gold",
//           futgroup: "futchamp",
//           futlevel: "gold",
//           css_class: "futchamp gold"
//       },
//       confederation_champions_motm: {
//           label: "Confederation MOTM",
//           futgroup: "",
//           futlevel: "confederation-champions-motm",
//           css_class: "confederation-champions-motm"
//       },
//       sbc_base: {
//           label: "Squad Builder Reward",
//           futgroup: "",
//           futlevel: "squad-builder",
//           css_class: "squad-builder"
//       },
//       sbc_premium: {
//           label: "Squad Builder Premium",
//           futgroup: "",
//           futlevel: "squad-builder-premium",
//           css_class: "squad-builder-premium"
//       },
//       black_gold: {
//           label: "'The Journey' Reward",
//           futgroup: "",
//           futlevel: "black-gold",
//           css_class: "black-gold"
//       },
//       ones_to_watch: {
//           label: "Ones to Watch",
//           futgroup: "",
//           futlevel: "ones_to_watch",
//           css_class: "ones_to_watch"
//       },
//       movember: {
//           label: "Movember",
//           futgroup: "",
//           futlevel: "movember",
//           css_class: "movember"
//       },
//       halloween: {
//           label: "Ultimate Scream",
//           futgroup: "",
//           futlevel: "halloween",
//           css_class: "halloween"
//       },
//       gotm: {
//           label: "Team of the Tournaments",
//           futgroup: "",
//           futlevel: "gotm",
//           css_class: "gotm"
//       },
//       award_winner: {
//           label: "Award Winner",
//           futgroup: "",
//           futlevel: "award-winner",
//           css_class: "award-winner"
//       },
//       fut_birthday: {
//           label: "FUT Birthday",
//           futgroup: "",
//           futlevel: "fut_birthday",
//           css_class: "fut_birthday"
//       }
//   };

//   let cardColors18 = {
//       ...cardColors17,
//       refresh_bronze: {
//           label: "Rating Refresh Bronze",
//           futgroup: "rating_refresh nonrare",
//           futlevel: "bronze",
//           css_class: "rating_refresh nonrare bronze"
//       },
//       refresh_silver: {
//           label: "Rating Refresh Silver",
//           futgroup: "rating_refresh nonrare",
//           futlevel: "silver",
//           css_class: "rating_refresh nonrare silver"
//       },
//       refresh_gold: {
//           label: "Rating Refresh Gold",
//           futgroup: "rating_refresh nonrare",
//           futlevel: "gold",
//           css_class: "rating_refresh nonrare gold"
//       },
//       refresh_rare_bronze: {
//           label: "Rating Refresh Rare Bronze",
//           futgroup: "rating_refresh rare",
//           futlevel: "bronze",
//           css_class: "rating_refresh rare bronze"
//       },
//       refresh_rare_silver: {
//           label: "Rating Refresh Rare Silver",
//           futgroup: "rating_refresh rare",
//           futlevel: "silver",
//           css_class: "rating_refresh rare silver"
//       },
//       refresh_rare_gold: {
//           label: "Rating Refresh Rare Gold",
//           futgroup: "rating_refresh rare",
//           futlevel: "gold",
//           css_class: "rating_refresh rare gold"
//       },
//       marquee: {
//           label: "Path to Glory",
//           futgroup: "",
//           futlevel: "marquee",
//           css_class: "marquee"
//       },
//       rtr_selected: {
//           label: "Path to Glory Selected",
//           futgroup: "",
//           futlevel: "ptgs",
//           css_class: "ptgs"
//       },
//       rtrc: {
//           label: "Road to Russia - Contender",
//           futgroup: "",
//           futlevel: "rtrc",
//           css_class: "rtrc"
//       },
//       rtrs: {
//           label: "Road to Russia - Selected",
//           futgroup: "",
//           futlevel: "rtrs",
//           css_class: "rtrs"
//       },
//       rtrw_gold: {
//           label: "Road to Russia - Gold",
//           futgroup: "rtrw",
//           futlevel: "gold",
//           css_class: "rtrw gold"
//       },
//       rtrw_silver: {
//           label: "Road to Russia - Silver",
//           futgroup: "rtrw",
//           futlevel: "silver",
//           css_class: "rtrw silver"
//       },
//       fut_united: {
//           label: "FUT United",
//   futgroup: "",
//   futlevel: "fut_united",
//   css_class: "fut_united"
//       },
//       fut_championship: {
//   label: "FUT Championship",
//   futgroup: "",
//   futlevel: "fut_championship",
//   css_class: "fut_championship"
//       },
// fut_mas: {
//   label: "FUTmas",
//   futgroup: "",
//   futlevel: "fut_mas",
//   css_class: "fut_mas"
//       },
// championship: {
//   label: "FIFA eWorld Cup",
//   futgroup: "",
//   futlevel: "championship",
//   css_class: "championship"
//       },
// fof: {
//   label: "Festival of Futball",
//   futgroup: "fof",
//   futlevel: "fof",
//   css_class: "fof"
//       },
// world_cup: {
//   label: "World Cup Promo",
//   futgroup: "",
//   futlevel: "world_cup",
//   css_class: "world_cup"
//       },
// world_cup_icon: {
//   label: "World Cup Promo Icon",
//   futgroup: "",
//   futlevel: "world_cup_icon",
//   css_class: "world_cup_icon"
//       },
//       confederation_champions_motm: {
//           label: "Confederation MOTM",
//           futgroup: "",
//           futlevel: "confederation-champions-motm",
//           css_class: "confederation-champions-motm"
//       },
//   };

//   cardColors18['confederation_champions_motm']['label'] = "Europe MOTM";
//   const darkCards18 = ['rtrc', 'ones_to_watch', 'halloween', 'toty', 'fut_united', 'fut_championship', 'fut_mas', 'championship', 'world_cup_icon'];
//   const invalidFifa18 = ["euro", "imotm", "black_gold", "movember"];

//   for (const [key, value] of Object.entries(cardColors18)) {
//       if (darkCards18.includes(key)) {
//           value['css_class'] += " dark-card";
//           value['dark_card'] = true;
//       } else {
//           value['dark_card'] = false;
//       }
//       if (invalidFifa18.includes(key)) {
//           delete cardColors18[key];
//       }
//   }
        
//   let cardColors19 = {
//     ...cardColors18,
//     sbc_flashback: {
//       label: "Flashback SBC",
//       futgroup: "sbc_flashback",
//       futlevel: "sbc_flashback",
//       css_class: "sbc_flashback"
//     },
//       ucl_rare: {
//       label: "Champions League Rare",
//       futgroup: "ucl",
//       futlevel: "ucl_rare",
//       css_class: "ucl rare"
//     },
//     ucl_nonrare: {
//       label: "Champions League",
//       futgroup: "ucl",
//       futlevel: "ucl_nonrare",
//       css_class: "ucl nonrare"
//     },
//     ucl_motm: {
//       label: "Champions League MOTM",
//       futgroup: "ucl",
//       futlevel: "ucl_motm",
//       css_class: "ucl ucl_motm"
//     },
//     ucl_live: {
//       label: "Champions League Live",
//       futgroup: "ucl",
//       futlevel: "ucl_live",
//       css_class: "ucl ucl_live"
//     },
//     ucl_sbc: {
//       label: "Champions League SBC",
//       futgroup: "ucl",
//       futlevel: "ucl_sbc",
//       css_class: "ucl ucl_sbc"
//     },
//     ucl_tott: {
//       label: "Champions League TOTT",
//       futgroup: "ucl",
//       futlevel: "ucl_tott",
//       css_class: "ucl ucl_tott"
//     },
//     europa_league: {
//       label: "Europa League",
//       futgroup: "europa_league",
//       futlevel: "europa_league",
//       css_class: "europa_league"
//     },
//     europa_motm: {
//       label: "Europa League MOTM",
//       futgroup: "europa_league",
//       futlevel: "europa_motm",
//       css_class: "europa_league europa_motm"
//     },
//     europa_sbc: {
//       label: "Europa League SBC",
//       futgroup: "europa_league",
//       futlevel: "europa_sbc",
//       css_class: "europa_league europa_sbc"
//     },
//     europa_live: {
//       label: "Europa League Live",
//       futgroup: "europa_league",
//       futlevel: "europa_live",
//       css_class: "europa_league europa_live"
//     },
//     europa_tott: {
//       label: "Europa League TOTT",
//       futgroup: "europa_league",
//       futlevel: "europa_tott",
//       css_class: "europa_league europa_tott"
//     },
//         potm_bundesliga: {
//       label: "Bundesliga POTM",
//       futgroup: "potm_bundesliga",
//       futlevel: "potm_bundesliga",
//       css_class: "potm_bundesliga"
//     },
//     potm_pl: {
//       label: "Premier League POTM",
//       futgroup: "potm_pl",
//       futlevel: "potm_pl",
//       css_class: "potm_pl"
//     },
//     mls_potm: {
//       label: "MLS POTM",
//       futgroup: "mls_potm",
//       futlevel: "mls_potm",
//       css_class: "mls_potm"
//     },
//     fut_swap_1: {
//       label: "FUT Swap I",
//       futgroup: "fut_swap",
//       futlevel: "fut_swap_1",
//       css_class: "fut_swap fut_swap_1"
//     },
//     fut_swap_2: {
//       label: "FUT Swap II",
//       futgroup: "fut_swap",
//       futlevel: "fut_swap_2",
//       css_class: "fut_swap fut_swap_2"
//     },
//     fut_swap_3: {
//       label: "FUT Swap III",
//       futgroup: "fut_swap",
//       futlevel: "fut_swap_3",
//       css_class: "fut_swap fut_swap_3"
//     },
//     fut_swap_4: {
//       label: "FUT Swap IV",
//       futgroup: "fut_swap",
//       futlevel: "fut_swap_4",
//       css_class: "fut_swap fut_swap_4"
//     },
//     fut_swap_5: {
//       label: "FUT Swap V",
//       futgroup: "fut_swap",
//       futlevel: "fut_swap_5",
//       css_class: "fut_swap fut_swap_5"
//     },
//     fut_swap_6: {
//       label: "FUT Swap VI",
//       futgroup: "fut_swap",
//       futlevel: "fut_swap_6",
//       css_class: "fut_swap fut_swap_6"
//     },
//     fut_swap_7: {
//       label: "FUT Swap VII",
//       futgroup: "fut_swap",
//       futlevel: "fut_swap_7",
//       css_class: "fut_swap fut_swap_7"
//     },
//     fut_swap_8: {
//       label: "FUT Swap VIII",
//       futgroup: "fut_swap",
//       futlevel: "fut_swap_8",
//       css_class: "fut_swap fut_swap_8"
//     },
//     fut_swap_9: {
//       label: "FUT Swap IX",
//       futgroup: "fut_swap",
//       futlevel: "fut_swap_9",
//       css_class: "fut_swap fut_swap_9"
//     },
//     fut_swap_10: {
//       label: "FUT Swap X",
//       futgroup: "fut_swap",
//       futlevel: "fut_swap_10",
//       css_class: "fut_swap fut_swap_10"
//     },
//     fut_swap_11: {
//       label: "FUT Swap XI",
//       futgroup: "fut_swap",
//       futlevel: "fut_swap_11",
//       css_class: "fut_swap fut_swap_11"
//     },
//     fut_swap_rewards: {
//       label: "FUT Swap Reward",
//       futgroup: "fut_swap",
//       futlevel: "fut_swap_rewards",
//       css_class: "fut_swap fut_swap_rewards"
//     },
//     toty_nominees: {
//       label: "TOTY Nominees",
//       futgroup: "toty_nominees",
//       futlevel: "toty_nominees",
//       css_class: "toty_nominees"
//     },
//     fut_future_stars: {
//       label: "Future Stars",
//       futgroup: "fut_future_stars",
//       futlevel: "fut_future_stars",
//       css_class: "fut_future_stars"
//     },
//     fut_future_stars_nominees: {
//       label: "Future Stars Nominees",
//       futgroup: "fut_future_stars_nominees",
//       futlevel: "fut_future_stars_nominees",
//       css_class: "fut_future_stars_nominees"
//     },
//     headliners: {
//       label: "Headliners",
//       futgroup: "headliners",
//       futlevel: "headliners",
//       css_class: "headliners"
//     },
//     prime_icon_moments: {
//       label: "Prime Icon Moments",
//       futgroup: "prime_icon_moments",
//       futlevel: "prime_icon_moments",
//       css_class: "prime_icon_moments"
//     },
//     carniball: {
//       label: "Carniball",
//       futgroup: "carniball",
//       futlevel: "carniball",
//       css_class: "carniball"
//     },
//     tots_moments: {
//       label: "Team of the Season Moments",
//       futgroup: "tots_moments",
//       futlevel: "tots_moments",
//       css_class: "tots_moments"
//     },
//   };

//   const darkCards19 = [
//     "totw_bronze", "totw_silver", "totw_gold", "purple", "ones_to_watch", "halloween", "fut_champions_bronze", 
//     "fut_champions_silver", "fut_champions_gold", "ucl_rare", "ucl_nonrare", "ucl_motm", "ucl_live", "ucl_sbc", 
//     "ucl_tott", "europa_league", "europa_motm", "europa_live", "europa_tott", "potm_pl", "mls_potm", "fut_swap_1", 
//     "fut_swap_2", "fut_swap_3", "fut_swap_4", "fut_swap_5", "fut_swap_6", "fut_swap_7", "fut_swap_8", "fut_swap_9", 
//     "fut_swap_10", "fut_swap_11", "fut_swap_rewards", "toty", "toty_nominees", "fut_future_stars", 
//     "fut_future_stars_nominees", "tots_gold", "tots_moments"
//   ];

//   const invalidFifa19 = [
//     "tots_bronze", "tots_silver", "imotm", "euro", "confederation_champions_motm", "black_gold", "movember", 
//     "gotm", "refresh_bronze", "refresh_silver", "refresh_gold", "refresh_rare_bronze", "refresh_rare_silver", 
//     "refresh_rare_gold", "marquee", "rtr_selected", "rtrc", "rtrs", "rtrw_gold", "rtrw_silver", "fut_united", 
//     "fut_championship", "championship", "fof", "world_cup", "world_cup_icon"
//   ];

//   for (const [key, value] of Object.entries(cardColors19)) {
//       if (darkCards19.includes(key)) {
//           value['css_class'] += " dark-card";
//           value['dark_card'] = true;
//       } else {
//           value['dark_card'] = false;
//       }
//       if (invalidFifa19.includes(key)) {
//           delete cardColors19[key];
//       }
//   }

//   let cardColors20 = {
//     ...cardColors19,
//     fut_future_stars_upgrade: {
//       label: "Future Stars Upgrade",
//       futgroup: "fut_future_stars_upgrade",
//       futlevel: "fut_future_stars_upgrade",
//       css_class: "fut_future_stars_upgrade"
//     },
//     ucl_showdown: {
//       label: "UCL Showdown",
//       futgroup: "ucl_showdown",
//       futlevel: "ucl_showdown",
//       css_class: "ucl_showdown"
//     },
//     ligue_1_potm: {
//       label: "Ligue 1 POTM",
//       futgroup: "ligue_1_potm",
//       futlevel: "ligue_1_potm",
//       css_class: "ligue_1_potm"
//     },
//     winter_upgrade: {
//       label: "Winter Refresh",
//       futgroup: "winter_upgrade",
//       futlevel: "winter_upgrade",
//       css_class: "winter_upgrade"
//     },
//     league_objective: {
//       label: "League Objective",
//       futgroup: "league_objective",
//       futlevel: "league_objective",
//       css_class: "league_objective"
//     },
//     la_liga_potm: {
//       label: "La Liga POTM",
//       futgroup: "la_liga_potm",
//       futlevel: "la_liga_potm",
//       css_class: "la_liga_potm"
//     },
//     player_moments: {
//       label: "Player Moments",
//       futgroup: "player_moments",
//       futlevel: "player_moments",
//       css_class: "player_moments"
//     },
//     objectives_reward: {
//       label: "Objectives Reward",
//       futgroup: "objectives_reward",
//       futlevel: "objectives_reward",
//       css_class: "objectives_reward"
//     },
//     icon_swaps_1: {
//       label: "Icon Swaps I",
//       futgroup: "icon_swaps_1",
//       futlevel: "icon_swaps_1",
//       css_class: "icon_swaps_1"
//     },
//     icon_swaps_2: {
//       label: "Icon Swaps II",
//       futgroup: "icon_swaps_2",
//       futlevel: "icon_swaps_2",
//       css_class: "icon_swaps_2"
//     },
//     icon_swaps_3: {
//       label: "Icon Swaps III",
//       futgroup: "icon_swaps_3",
//       futlevel: "icon_swaps_3",
//       css_class: "icon_swaps_3"
//     },
//     headliners_upgrade: {
//       label: "Headliners Streak",
//       futgroup: "headliners_upgrade",
//       futlevel: "headliners_upgrade",
//       css_class: "headliners_upgrade"
//     },
//     shapeshifters: {
//       label: "Shapeshifters",
//       futgroup: "shapeshifters",
//       futlevel: "shapeshifters",
//       css_class: "shapeshifters"
//         },
//     libertadores: {
//       label: "Libertadores",
//       futgroup: "libertadores",
//       futlevel: "libertadores",
//       css_class: "libertadores"
//     },
//     libertadores_gold: {
//       label: "Libertadores Kickoff",
//       futgroup: "libertadores_gold",
//       futlevel: "libertadores_gold",
//       css_class: "libertadores_gold"
//     },
//     libertadores_motm: {
//       label: "Libertadores MOTM",
//       futgroup: "libertadores_motm",
//       futlevel: "libertadores_motm",
//       css_class: "libertadores_motm"
//     },
//     sudamericana: {
//       label: "Sudamericana",
//       futgroup: "sudamericana",
//       futlevel: "sudamericana",
//       css_class: "sudamericana"
//     },
//     totw_moments: {
//       label: "TOTW Moments",
//       futgroup: "totw_moments",
//       futlevel: "totw_moments",
//       css_class: "totw_moments"
//     },
//     totw_moments_silver: {
//       label: "TOTW Moments Silver",
//       futgroup: "totw_moments_silver",
//       futlevel: "totw_moments_silver",
//       css_class: "totw_moments_silver"
//     },
//     summer_heat_nominees: {
//       label: "Summer Heat Nominees",
//       futgroup: "summer_heat_nominees",
//       futlevel: "summer_heat_nominees",
//       css_class: "summer_heat_nominees"
//     },
//     summer_heat: {
//       label: "Summer Heat",
//       futgroup: "summer_heat",
//       futlevel: "summer_heat",
//       css_class: "summer_heat"
//     },
//     summer_showdown: {
//       label: "Summer Showdown",
//       futgroup: "summer_showdown",
//       futlevel: "summer_showdown",
//       css_class: "summer_showdown"
//     },
//     summer_showdown_boost: {
//       label: "Summer Showdown Boost",
//       futgroup: "summer_showdown_boost",
//       futlevel: "summer_showdown_boost",
//       css_class: "summer_showdown_boost"
//     },
//   };

//   const darkCards20 = darkCards19.concat([
//     "fut_mas", "ligue_1_potm", "winter_upgrade", "league_objective", "la_liga_potm", "objectives_reward", 
//     "toty", "toty_nominees", "shapeshifters", "ucl_motm", "europa_motm", "libertadores", "libertadores_gold", 
//     "libertadores_motm", "sudamericana", "totw_moments", "totw_moments_silver", "tots_gold", "tots_moments"
//   ]);

//   const validFifa20 = [
//     "bronze", "silver", "gold", "rare_bronze", "rare_silver", "rare_gold", "totw_bronze", "totw_silver", 
//     "totw_gold", "fut_champions_bronze", "fut_champions_silver", "fut_champions_gold", "ones_to_watch", 
//     "halloween", "legend", "purple", "teal", "motm", "record_breaker", "sbc_base", "sbc_premium", "sbc_flashback", 
//     "ucl_rare", "ucl_nonrare", "ucl_motm", "ucl_sbc", "ucl_live", "ucl_tott", "europa_motm", "europa_sbc", 
//     "europa_tott", "potm_bundesliga", "potm_pl", "mls_potm", "award_winner", "fut_mas", "toty", "toty_nominees", 
//     "fut_future_stars", "fut_future_stars_upgrade", "ucl_showdown", "ligue_1_potm", "winter_upgrade", 
//     "prime_icon_moments", "league_objective", "la_liga_potm", "player_moments", "objectives_reward", 
//     "icon_swaps_1", "icon_swaps_2", "icon_swaps_3", "concept", "headliners", "headliners_upgrade", 
//     "shapeshifters", "libertadores", "libertadores_gold", "libertadores_motm", "sudamericana", "totw_moments", 
//     "totw_moments_silver", "fut_birthday", "tots_gold", "tots_moments", "summer_heat_nominees", "summer_heat", 
//     "summer_showdown", "summer_showdown_boost"
//   ];

//   for (const [key, value] of Object.entries(cardColors20)) {
//     if (darkCards20.includes(key)) {
//       value['css_class'] += " dark-card";
//       value['dark_card'] = true;
//     } else {
//       value['dark_card'] = false;
//     }
//     if (!validFifa20.includes(key)) {
//       delete cardColors20[key];
//     }
//   }

//   let cardColors21 = {
//     ...cardColors20,
//     europa_live: {
//       label: "Europa League RTTF",
//       futgroup: "europa_league",
//       futlevel: "europa_live",
//       css_class: "europa_league europa_live"
//     },
//     dual_entitlement: {
//       label: "Next Gen",
//       futgroup: "dual_entitlement",
//       futlevel: "dual_entitlement",
//       css_class: "dual_entitlement"
//     },
//     fgs_swaps_1: {
//       label: "FGS Swaps 1",
//       futgroup: "fgs_swaps_1",
//       futlevel: "fgs_swaps_1",
//       css_class: "fgs_swaps_1"
//     },
//     fgs_swaps_2: {
//       label: "FGS Swaps 2",
//       futgroup: "fgs_swaps_2",
//       futlevel: "fgs_swaps_2",
//       css_class: "fgs_swaps_2"
//     },
//     objectives_reward_2: {
//       label: "Squad Foundations",
//       futgroup: "objectives_reward_2",
//       futlevel: "objectives_reward_2",
//       css_class: "objectives_reward_2"
//     },
//     sudamericana_motm: {
//       label: "Sudamericana MOTM",
//       futgroup: "sudamericana_motm",
//       futlevel: "sudamericana_motm",
//       css_class: "sudamericana_motm"
//     },
//     beckham: {
//       label: "Beckham Special",
//       futgroup: "beckham",
//       futlevel: "beckham",
//       css_class: "beckham"
//     },
//     kit_promo: {
//       label: "Kit Promo",
//       futgroup: "kit_promo",
//       futlevel: "kit_promo",
//       css_class: "kit_promo"
//     },
//     stadium_assets: {
//       label: "Stadium Assets",
//       futgroup: "stadium_assets",
//       futlevel: "stadium_assets",
//       css_class: "stadium_assets"
//     },
//     fut_showdown_boost: {
//       label: "FUT Showdown Boost",
//       futgroup: "fut_showdown_boost",
//       futlevel: "fut_showdown_boost",
//       css_class: "fut_showdown_boost"
//     },
//     fut_showdown: {
//       label: "FUT Showdown",
//       futgroup: "fut_showdown",
//       futlevel: "fut_showdown",
//       css_class: "fut_showdown"
//     },
//     whatif: {
//       label: "What If",
//       futgroup: "whatif",
//       futlevel: "whatif",
//       css_class: "whatif"
//     },
//     whatif_2: {
//       label: "What If Plus",
//       futgroup: "whatif_2",
//       futlevel: "whatif_2",
//       css_class: "whatif_2"
//     },
//     libertadores_tott: {
//       label: "Libertadores Team of the Tournament",
//       futgroup: "libertadores_tott",
//       futlevel: "libertadores_tott",
//       css_class: "libertadores_tott"
//     },
//     sudamericana_tott: {
//       label: "Sudamericana Team of the Tournament",
//       futgroup: "sudamericana_tott",
//       futlevel: "sudamericana_tott",
//       css_class: "sudamericana_tott"
//     },
//     libertadores_flashback: {
//       label: "Libertadores Flashback",
//       futgroup: "libertadores_flashback",
//       futlevel: "libertadores_flashback",
//       css_class: "libertadores_flashback"
//     },
//     fof: cardColors18["fof"],
//     fof_2: {
//       label: "FOF Nations Player",
//       futgroup: "fof_2",
//       futlevel: "fof_2",
//       css_class: "fof_2"
//     },
//     pink: baseColors["pink"],
//     futties_winner: baseColors["futties_winner"],
//   }
//   const darkCards21 = [
//     "totw_bronze", "totw_silver", "totw_gold", "purple", "record_breaker", "sbc_base",
//     "sbc_premium", "sbc_flashback", "fut_champions_bronze", "fut_champions_silver", "fut_champions_gold",
//     "ones_to_watch", "halloween", "award_winner", "ucl_rare", "ucl_nonrare", "ucl_motm", "ucl_sbc",
//     "ucl_live", "fut_birthday", "fut_mas", "potm_pl", "potm_bundesliga", "ligue_1_potm", "winter_upgrade",
//     "league_objective", "la_liga_potm", "objectives_reward", "toty", "toty_nominees", "shapeshifters",
//     "europa_motm", "europa_tott", "libertadores", "libertadores_gold", "libertadores_motm", "sudamericana", "sudamericana_motm",
//     "totw_moments", "totw_moments_silver", "tots_gold", "tots_moments", "fgs_swaps_1", "objectives_reward_2",
//     "beckham", "kit_promo", "stadium_assets", "fut_showdown_boost", "fut_showdown", "whatif",
//     "whatif_2", "libertadores_tott", "sudamericana_tott", "libertadores_flashback"
//   ];

//   for (const [key, value] of Object.entries(cardColors21)) {
//     if (darkCards21.includes(key)) {
//       value['css_class'] += " dark-card";
//       value['dark_card'] = true;
//     } else {
//       value['dark_card'] = false;
//     }
//   }

//   const validFifa21 = [
//     "bronze", "silver", "gold", "rare_bronze", "rare_silver", "rare_gold", "concept", "totw_bronze", "totw_silver", "totw_gold", "fut_champions_bronze", "fut_champions_silver", "fut_champions_gold", "ones_to_watch", "halloween", "legend", "prime_icon_moments", "purple", "teal", "motm", "pink", "futties_winner", "record_breaker", "sbc_flashback", "sbc_base", "sbc_premium", "ucl_rare", "ucl_nonrare", "ucl_motm", "ucl_sbc", "ucl_live", "ucl_tott", "player_moments", "europa_motm", "europa_tott", "europa_live", "award_winner", "fut_mas", "toty", "toty_nominees", "fut_future_stars", "potm_bundesliga", "potm_pl", "ligue_1_potm", "la_liga_potm", "league_objective", "objectives_reward", "objectives_reward_2", "icon_swaps_1", "icon_swaps_2", "icon_swaps_3", "headliners", "headliners_upgrade", "libertadores", "libertadores_motm", "libertadores_tott", "libertadores_flashback", "sudamericana", "sudamericana_motm", "sudamericana_tott", "fut_birthday", "tots_gold", "tots_moments", "dual_entitlement", "fgs_swaps_1", "fgs_swaps_2", "beckham", "kit_promo", "stadium_assets", "fut_showdown_boost", "fut_showdown", "whatif", "whatif_2", "fof", "fof_2", "summer_heat"
//   ];

//   let newOrder = {};
//   for (const cardId of validFifa21) {
//     if (cardColors21.hasOwnProperty(cardId)) {
//       newOrder[cardId] = cardColors21[cardId];
//     }
//   }
//   cardColors21 = newOrder;

//   let cardColors22 = {
//     ...cardColors21,
//     fut_heroes: {
//       label: "FUT Heroes",
//       futgroup: "fut_heroes",
//       futlevel: "fut_heroes",
//       css_class: "fut_heroes"
//     },
//     aged_stone: {
//       label: "Vintage",
//       futgroup: "aged_stone",
//       futlevel: "aged_stone",
//       css_class: "aged_stone"
//     },
//     infinite_mirror_1: {
//       label: "Limited Edition Epic",
//       futgroup: "infinite_mirror_1",
//       futlevel: "infinite_mirror_1",
//       css_class: "infinite_mirror_1"
//     },
//     infinite_mirror_2: {
//       label: "Limited Edition Legendary",
//       futgroup: "infinite_mirror_2",
//       futlevel: "infinite_mirror_2",
//       css_class: "infinite_mirror_2"
//     },
//     powered_by_football: {
//       label: "VIP",
//       futgroup: "powered_by_football",
//       futlevel: "powered_by_football",
//       css_class: "powered_by_football"
//     },
//     adidas: {
//       label: "Adidas NumbersUp",
//       futgroup: "adidas",
//       futlevel: "adidas",
//       css_class: "adidas"
//     },
//     signature_signings: {
//       label: "Signature Signings",
//       futgroup: "signature_signings",
//       futlevel: "signature_signings",
//       css_class: "signature_signings"
//     },
//     potm_serie_a: {
//       label: "POTM Serie A",
//       futgroup: "potm_serie_a",
//       futlevel: "potm_serie_a",
//       css_class: "potm_serie_a"
//     },
//     potm_eredivisie: {
//       label: "POTM Eredivisie",
//       futgroup: "potm_eredivisie",
//       futlevel: "potm_eredivisie",
//       css_class: "potm_eredivisie"
//     },
//     libertadores_gold: cardColors20["libertadores_gold"],
//     concept_special: {
//       label: "Concept Special",
//       futgroup: "concept_special",
//       futlevel: "concept_special",
//       css_class: "concept_special"
//     },
//     europa_conference_league: {
//       label: "Europa Conference League",
//       futgroup: "europa_conference_league",
//       futlevel: "europa_conference_league",
//       css_class: "europa_conference_league"
//     },
//     europa_conference_league_2: {
//       label: "Europa Conference League TOTGS",
//       futgroup: "europa_conference_league",
//       futlevel: "europa_conference_league_2",
//       css_class: "europa_conference_league_2"
//     },
//     europa_conference_league_3: {
//       label: "Europa Conference League RTTF",
//       futgroup: "europa_conference_league",
//       futlevel: "europa_conference_league_3",
//       css_class: "europa_conference_league_3"
//     },
//     europa_conference_league_motm: {
//       label: "Europa Conference League MOTM",
//       futgroup: "europa_conference_league",
//       futlevel: "europa_conference_league_motm",
//       css_class: "europa_conference_league_motm"
//     },
//     fut_versus_ice: {
//       label: "FUT Versus Ice",
//       futgroup: "fut_versus_ice",
//       futlevel: "fut_versus_ice",
//       css_class: "fut_versus_ice"
//     },
//     fut_versus_fire: {
//       label: "FUT Versus Fire",
//       futgroup: "fut_versus_fire",
//       futlevel: "fut_versus_fire",
//       css_class: "fut_versus_fire"
//     },
//     next_generation: {
//       label: "Next Generation",
//       futgroup: "next_generation",
//       futlevel: "next_generation",
//       css_class: "next_generation"
//     },
//     winter_wildcard: {
//       label: "Winter Wildcard",
//       futgroup: "winter_wildcard",
//       futlevel: "winter_wildcard",
//       css_class: "winter_wildcard"
//     },
//     winter_wildcard_token: {
//       label: "Winter Wildcard Token",
//       futgroup: "winter_wildcard_token",
//       futlevel: "winter_wildcard_token",
//       css_class: "winter_wildcard_token"
//     },
//     fut_future_stars_token: {
//       label: "Future Stars Token",
//       futgroup: "fut_future_stars_token",
//       futlevel: "fut_future_stars_token",
//       css_class: "fut_future_stars_token"
//     },
//     ucl_rttf: {
//       label: "Champions League RTTF",
//       futgroup: "ucl",
//       futlevel: "ucl_rttf",
//       css_class: "ucl ucl_rttf"
//     },
//     europa_rttf: {
//       label: "Europa League RTTF",
//       futgroup: "europa_league",
//       futlevel: "europa_rttf",
//       css_class: "europa_league europa_rttf"
//     },
//     silver_special: {
//       label: "Silver Star",
//       futgroup: "silver_special",
//       futlevel: "silver_special",
//       css_class: "silver_special"
//     },
//     fut_birthday_token: {
//       label: "FUT Birthday Token",
//       futgroup: "fut_birthday_token",
//       futlevel: "fut_birthday_token",
//       css_class: "fut_birthday_token"
//     },
//     fut_fantasy_blue: {
//       label: "FUT Fantasy Blue",
//       futgroup: "fut_fantasy_blue",
//       futlevel: "fut_fantasy_blue",
//       css_class: "fut_fantasy_blue"
//     },
//     fut_fantasy_red: {
//       label: "FUT Fantasy Red",
//       futgroup: "fut_fantasy_red",
//       futlevel: "fut_fantasy_red",
//       css_class: "fut_fantasy_red"
//     },  
//     fut_captains: {
//       label: "FUT Captain",
//       futgroup: "fut_captains",
//       futlevel: "fut_captains",
//       css_class: "fut_captains"
//     },
//     fut_captains_upgrade: {
//       label: "FUT Hero Captain",
//       futgroup: "fut_captains_upgrade",
//       futlevel: "fut_captains_upgrade",
//       css_class: "fut_captains_upgrade"
//     },
//     tots_token: {
//       label: "TOTS Token",
//       futgroup: "tots_token",
//       futlevel: "tots_token",
//       css_class: "tots_token"
//     },
//     tots_token_2: {
//       label: "TOTS Token 2",
//       futgroup: "tots_token_2",
//       futlevel: "tots_token_2",
//       css_class: "tots_token_2"
//     },
//     libertadores_totgs: {
//       label: "Libertadores TOTGS",
//       futgroup: "libertadores_totgs",
//       futlevel: "libertadores_totgs",
//       css_class: "libertadores_totgs"
//     },
//     shapeshifters: cardColors20["shapeshifters"],
//     summer_swaps_token_1: {
//       label: "Summer Swaps I",
//       futgroup: "summer_swaps_token_1",
//       futlevel: "summer_swaps_token_1",
//       css_class: "summer_swaps_token_1"
//     },
//     summer_swaps_token_2: {
//       label: "Summer Swaps II",
//       futgroup: "summer_swaps_token_2",
//       futlevel: "summer_swaps_token_2",
//       css_class: "summer_swaps_token_2"
//     },
//     shapeshifters_heroes: {
//       label: "Shapeshifter Hero",
//       futgroup: "shapeshifters_heroes",
//       futlevel: "shapeshifters_heroes",
//       css_class: "shapeshifters_heroes"
//     },
//     futties_premium: {
//       label: "Futties Premium",
//       futgroup: "futties_premium",
//       futlevel: "futties_premium",
//       css_class: "futties_premium"
//     },
//   }
//   cardColors22["libertadores_gold"].label = "Libertadores Kick-Off";
//   cardColors22["toty_nominees"].label = "TOTY Honorable Mentions";
//   cardColors22["europa_tott"].label = "Europa League TOTGS";
//   cardColors22["europa_live"].label = "Europa League RTTK";
//   cardColors22["ucl_tott"].label = "Champions League TOTGS";
//   cardColors22["ucl_live"].label = "Champions League RTTK";

//   let darkCards22 = [
//     "totw_bronze", "totw_silver", "totw_gold", "purple", "record_breaker", "sbc_base", "sbc_premium", "sbc_flashback", "fut_champions_bronze", "fut_champions_silver", "fut_champions_gold", "ones_to_watch", "halloween", "award_winner", "ucl_rare", "ucl_nonrare", "ucl_motm", "ucl_sbc", "ucl_live", "ucl_rttf", "fut_birthday", "fut_mas", "potm_pl", "potm_bundesliga", "ligue_1_potm", "winter_upgrade", "league_objective", "la_liga_potm", "headliners", "headliners_upgrade", "objectives_reward", "toty", "toty_nominees", "shapeshifters", "europa_motm", "europa_tott", "europa_rttf", "libertadores", "libertadores_gold", "libertadores_motm", "sudamericana", "sudamericana_motm", "totw_moments", "totw_moments_silver", "tots_gold", "tots_moments", "tots_token", "tots_token_2", "fgs_swaps_1", "objectives_reward_2", "beckham", "kit_promo", "stadium_assets", "fut_showdown_boost", "fut_showdown", "whatif", "whatif_2", "libertadores_tott", "sudamericana_tott", "libertadores_flashback", "fut_heroes", "infinite_mirror_1", "potm_serie_a", "potm_eredivisie", "europa_conference_league", "europa_conference_league_2", "europa_conference_league_3", "europa_conference_league_motm", "signature_signings", "fut_versus_ice", "fut_versus_fire", "winter_wildcard", "winter_wildcard_token", "fut_future_stars_token", "fut_fantasy_blue", "fut_fantasy_red", "fut_captains", "fut_captains_upgrade", "libertadores_totgs", "shapeshifters_heroes"
//   ];
  
//   for (let key in cardColors22) {
//     if (darkCards22.includes(key)) {
//       cardColors22[key].css_class += " dark-card";
//       cardColors22[key].dark_card = true;
//     } else {
//       cardColors22[key].dark_card = false;
//     }
//   }

//   let validFifa22 = [
//     "bronze", "silver", "gold", "rare_bronze", "rare_silver", "rare_gold", "concept", "concept_special", "totw_bronze", "totw_silver", "totw_gold", "fut_champions_bronze", "fut_champions_silver", "fut_champions_gold", "ones_to_watch", "halloween", "legend", "prime_icon_moments", "purple", "teal", "motm", "pink", "futties_winner", "futties_premium", "record_breaker", "sbc_flashback", "sbc_base", "sbc_premium", "ucl_rare", "ucl_nonrare", "ucl_motm", "ucl_live", "ucl_tott", "ucl_rttf", "player_moments", "europa_motm", "europa_sbc", "europa_tott", "europa_live", "europa_rttf", "europa_conference_league", "europa_conference_league_2", "europa_conference_league_3", "europa_conference_league_motm", "mls_potm", "toty", "toty_nominees", "fut_future_stars", "fut_future_stars_token", "potm_bundesliga", "potm_pl", "ligue_1_potm", "la_liga_potm", "league_objective", "objectives_reward", "objectives_reward_2", "icon_swaps_1", "icon_swaps_2", "icon_swaps_3", "headliners", "headliners_upgrade", "shapeshifters", "shapeshifters_heroes", "libertadores", "libertadores_gold", "libertadores_motm", "libertadores_totgs", "sudamericana", "sudamericana_motm", "fut_birthday", "fut_birthday_token", "tots_gold", "tots_moments", "tots_token", "tots_token_2", "fgs_swaps_1", "stadium_assets", "fut_showdown_boost", "fut_showdown", "fut_heroes", "aged_stone", "infinite_mirror_1", "infinite_mirror_2", "powered_by_football", "adidas", "signature_signings", "potm_serie_a", "potm_eredivisie", "fut_versus_ice", "fut_versus_fire", "next_generation", "winter_wildcard", "winter_wildcard_token", "silver_special", "fut_fantasy_blue", "fut_fantasy_red", "fut_captains", "fut_captains_upgrade", "summer_swaps_token_1", "summer_swaps_token_2"
//   ];

//   newOrder = {};
//   validFifa22.forEach(cardId => {
//     if (cardColors22.hasOwnProperty(cardId)) {
//       newOrder[cardId] = cardColors22[cardId];
//     }
//   });
//   cardColors22 = newOrder;

//   let cardColors23 = {
//     ...cardColors22,
//     concept_rare: {
//       label: "Concept Rare",
//       futgroup: "concept_rare",
//       futlevel: "concept_rare",
//       css_class: "concept_rare"
//     },
//     icon_swaps_4: {
//       label: "Icon Swaps IV",
//       futgroup: "icon_swaps_4",
//       futlevel: "icon_swaps_4",
//       css_class: "icon_swaps_4"
//     },
//     teal_assets: {
//       label: "Noble",
//       futgroup: "teal_assets",
//       futlevel: "teal_assets",
//       css_class: "teal_assets"
//     },
//     orange_assets: {
//       label: "Legendary",
//       futgroup: "orange_assets",
//       futlevel: "orange_assets",
//       css_class: "orange_assets"
//     },
//     dynamic_duo: {
//       label: "Dynamic Duo",
//       futgroup: "dynamic_duo",
//       futlevel: "dynamic_duo",
//       css_class: "dynamic_duo"
//     },
//     wc_player: {
//       label: "World Cup Player",
//       futgroup: "wc_player",
//       futlevel: "wc_player",
//       css_class: "wc_player"
//     },
//     wc_icon: {
//       label: "World Cup Icon",
//       futgroup: "wc_icon",
//       futlevel: "wc_icon",
//       css_class: "wc_icon"
//     },
//     wc_path_to_glory: {
//       label: "World Cup Path to Glory",
//       futgroup: "wc_path_to_glory",
//       futlevel: "wc_path_to_glory",
//       css_class: "wc_path_to_glory"
//     },
//     wc_star: {
//       label: "World Cup Star",
//       futgroup: "wc_star",
//       futlevel: "wc_star",
//       css_class: "wc_star"
//     },
//     wc_swap_token: {
//       label: "World Cup Swap Token",
//       futgroup: "wc_swap_token",
//       futlevel: "wc_swap_token",
//       css_class: "wc_swap_token"
//     },
//     wc_fut_heroes: {
//       label: "World Cup FUT Heroes",
//       futgroup: "wc_fut_heroes",
//       futlevel: "wc_fut_heroes",
//       css_class: "wc_fut_heroes"
//     },
//     wc_tott: {
//       label: "World Cup Team of the Tournament",
//       futgroup: "wc_tott",
//       futlevel: "wc_tott",
//       css_class: "wc_tott"
//     },
//     wc_road_to_wc: {
//       label: "Road to the World Cup",
//       futgroup: "wc_road_to_wc",
//       futlevel: "wc_road_to_wc",
//       css_class: "wc_road_to_wc"
//     },
//     wc_stories: {
//       label: "World Cup Stories",
//       futgroup: "wc_stories",
//       futlevel: "wc_stories",
//       css_class: "wc_stories"
//     },
//     wc_phenoms: {
//       label: "World Cup Phenoms",
//       futgroup: "wc_phenoms",
//       futlevel: "wc_phenoms",
//       css_class: "wc_phenoms"
//     },
//     wc_showdown: {
//       label: "World Cup Showdown",
//       futgroup: "wc_showdown",
//       futlevel: "wc_showdown",
//       css_class: "wc_showdown"
//     },
//     wc_showdown_boost: {
//       label: "World Cup Showdown Boost",
//       futgroup: "wc_showdown_boost",
//       futlevel: "wc_showdown_boost",
//       css_class: "wc_showdown_boost"
//     },
//     fut_centurions: {
//       label: "FUT Centurions",
//       futgroup: "fut_centurions",
//       futlevel: "fut_centurions",
//       css_class: "fut_centurions"
//     },
//     history_makers: {
//       label: "History Makers",
//       futgroup: "history_makers",
//       futlevel: "history_makers",
//       css_class: "history_makers"
//     },
//     toty_icons: {
//       label: "TOTY Icons",
//       futgroup: "toty_icons",
//       futlevel: "toty_icons",
//       css_class: "toty_icons"
//     },
//     fut_fantasy_heroes: {
//       label: "FUT Fantasy Heroes",
//       futgroup: "fut_fantasy_heroes",
//       futlevel: "fut_fantasy_heroes",
//       css_class: "fut_fantasy_heroes"
//     },
//     fut_birthday_token: {
//       label: "FUT Birthday Token",
//       futgroup: "fut_birthday_token",
//       futlevel: "fut_birthday_token",
//       css_class: "fut_birthday_token"
//     },
//     fut_ballers: {
//       label: "FUT Ballers",
//       futgroup: "fut_ballers",
//       futlevel: "fut_ballers",
//       css_class: "fut_ballers"
//     },
//     fut_birthday_icons: {
//       label: "FUT Birthday Icons",
//       futgroup: "fut_birthday_icons",
//       futlevel: "fut_birthday_icons",
//       css_class: "fut_birthday_icons"
//     },
//     libertadores_squad_foundations: {
//       label: "Liberatores Squad Foundations",
//       futgroup: "libertadores_squad_foundations",
//       futlevel: "libertadores_squad_foundations",
//       css_class: "libertadores_squad_foundations"
//     },
//     trophy_titans: {
//       label: "Trophy Titans",
//       futgroup: "trophy_titans",
//       futlevel: "trophy_titans",
//       css_class: "trophy_titans"
//     },
//     trophy_titan_icons: {
//       label: "Trophy Titans Icons",
//       futgroup: "trophy_titan_icons",
//       futlevel: "trophy_titan_icons",
//       css_class: "trophy_titan_icons"
//     },
//     tots_nominees: {
//       label: "TOTS Nominees",
//       futgroup: "tots_nominees",
//       futlevel: "tots_nominees",
//       css_class: "tots_nominees"
//     },
//     tots_champions: {
//       label: "TOTS Champions",
//       futgroup: "tots_champions",
//       futlevel: "tots_champions",
//       css_class: "tots_champions"
//     },
//     out_of_position: {
//       label: "Out of Position",
//       futgroup: "out_of_position",
//       futlevel: "out_of_position",
//       css_class: "out_of_position"
//     },
//     award_winner: {
//       label: "Award Winners",
//       futgroup: "",
//       futlevel: "award-winner",
//       css_class: "award-winner"
//     },
//     sbc_icon: {
//       label: "SBC Icons",
//       futgroup: "sbc_icon",
//       futlevel: "sbc_icon",
//       css_class: "sbc_icon"
//     },
//     shapeshifters_icons: {
//       label: "Shapeshifter Icons",
//       futgroup: "shapeshifters_icons",
//       futlevel: "shapeshifters_icons",
//       css_class: "shapeshifters_icons"
//     },
//     premium_shapeshifters: {
//       label: "Premium Shapeshifters",
//       futgroup: "premium_shapeshifters",
//       futlevel: "premium_shapeshifters",
//       css_class: "premium_shapeshifters"
//     },
//     level_up: {
//       label: "Level Up",
//       futgroup: "level_up",
//       futlevel: "level_up",
//       css_class: "level_up"
//     },
//     premium_level_up: {
//       label: "Premium Level Up",
//       futgroup: "premium_level_up",
//       futlevel: "premium_level_up",
//       css_class: "premium_level_up"
//     },
//     futties_heroes: {
//       label: "Futties Heroes",
//       futgroup: "futties_heroes",
//       futlevel: "futties_heroes",
//       css_class: "futties_heroes"
//     },
//     cover_star_icons: {
//       label: "Cover Star Icons",
//       futgroup: "cover_star_icons",
//       futlevel: "cover_star_icons",
//       css_class: "cover_star_icons"
//     }
//   };

//   cardColors23["concept"].label = "Concept Common";
//   cardColors23["toty_nominees"].label = "TOTY Honorable Mention";
//   cardColors23["fut_fantasy_blue"].label = "FUT Fantasy";
//   cardColors23["sbc_premium"].label = "End of an Era";

//   let darkCards23 = [
//     "totw_bronze", "totw_silver", "totw_gold", "purple", "record_breaker", "sbc_base", "sbc_premium", "sbc_flashback", "fut_champions_bronze", "fut_champions_silver", "fut_champions_gold", "ones_to_watch", "halloween", "award_winner", "ucl_rare", "ucl_nonrare", "ucl_motm", "ucl_sbc", "ucl_live", "ucl_rttf", "fut_birthday", "fut_mas", "potm_pl", "potm_bundesliga", "ligue_1_potm", "winter_upgrade", "league_objective", "la_liga_potm", "headliners", "headliners_upgrade", "objectives_reward", "toty", "toty_nominees", "shapeshifters", "europa_motm", "europa_tott", "europa_rttf", "libertadores", "libertadores_gold", "libertadores_motm", "libertadores_squad_foundations", "sudamericana", "sudamericana_motm", "totw_moments", "totw_moments_silver", "tots_gold", "tots_nominees", "tots_champions", "tots_token", "tots_token_2", "fgs_swaps_1", "objectives_reward_2", "beckham", "kit_promo", "stadium_assets", "fut_showdown_boost", "fut_showdown", "whatif", "whatif_2", "libertadores_tott", "sudamericana_tott", "libertadores_flashback", "infinite_mirror_1", "potm_serie_a", "potm_eredivisie", "europa_conference_league", "europa_conference_league_2", "europa_conference_league_3", "europa_conference_league_motm", "signature_signings", "fut_versus_ice", "fut_versus_fire", "winter_wildcard", "winter_wildcard_token", "fut_future_stars_token", "fut_fantasy_blue", "fut_fantasy_heroes", "fut_fantasy_red", "fut_captains", "fut_captains_upgrade", "libertadores_totgs", "shapeshifter", "shapeshifters_heroes", "premium_shapeshifters", "out_of_position", "dynamic_duo", "wc_player", "wc_path_to_glory", "wc_star", "wc_tott", "wc_road_to_wc", "wc_showdown", "wc_showdown_boost", "fut_centurions", "fut_ballers", "trophy_titans", "level_up", "premium_level_up"
//   ];

//   for (let key in cardColors23) {
//     if (darkCards23.includes(key)) {
//       cardColors23[key].css_class = cardColors23[key].css_class + " dark-card";
//       cardColors23[key].dark_card = true;
//     } else {
//       cardColors23[key].dark_card = false;
//     }
//   }

//   let validFifa23 = [
//     "concept", "concept_rare", "concept_special", "bronze", "silver", "gold", "rare_bronze", "rare_silver", "rare_gold", "totw_bronze", "totw_silver", "totw_gold", "fut_champions_bronze", "fut_champions_silver", "fut_champions_gold", "ones_to_watch", "halloween", "legend", "cover_star_icons", "teal", "motm", "pink", "futties_premium", "futties_heroes", "sbc_flashback", "sbc_base", "sbc_premium", "sbc_icon", "ucl_rare", "ucl_nonrare", "ucl_motm", "ucl_live", "ucl_rttf", "player_moments", "europa_motm", "europa_live", "europa_rttf", "europa_conference_league", "europa_conference_league_2", "europa_conference_league_3", "europa_conference_league_motm", "award_winner", "toty", "toty_nominees", "toty_icons", "fut_future_stars", "fut_future_stars_token", "potm_bundesliga", "potm_pl", "ligue_1_potm", "la_liga_potm", "potm_serie_a", "potm_eredivisie", "mls_potm", "objectives_reward", "objectives_reward_2", "dynamic_duo", "icon_swaps_1", "icon_swaps_2", "icon_swaps_3", "icon_swaps_4", "out_of_position", "shapeshifters", "shapeshifters_icons", "premium_shapeshifters", "libertadores", "libertadores_motm", "libertadores_squad_foundations", "sudamericana", "sudamericana_motm", "fut_birthday", "fut_birthday_token", "fut_birthday_icons", "tots_gold", "tots_nominees", "tots_champions", "fgs_swaps_1", "stadium_assets", "teal_assets", "orange_assets", "fut_showdown_boost", "fut_showdown", "fut_heroes", "aged_stone", "infinite_mirror_1", "infinite_mirror_2", "winter_wildcard", "winter_wildcard_token", "fut_fantasy_blue", "fut_fantasy_heroes", "wc_player", "wc_icon", "wc_path_to_glory", "wc_star", "wc_swap_token", "wc_fut_heroes", "wc_tott", "wc_road_to_wc", "wc_stories", "wc_phenoms", "wc_showdown", "wc_showdown_boost", "fut_centurions", "history_makers", "fut_ballers", "trophy_titans", "trophy_titan_icons", "level_up", "premium_level_up"
//   ];

//   newOrder = {};
//   validFifa23.forEach(cardId => {
//     if (cardColors23.hasOwnProperty(cardId)) {
//       newOrder[cardId] = cardColors23[cardId];
//     }
//   });
//   cardColors23 = newOrder;

//   let cardColors24 = {
//     ...cardColors23,
//     evolutions_1: {
//       label: "Evolutions I",
//       futgroup: "evolutions_1",
//       futlevel: "evolutions_1",
//       css_class: "evolutions_1"
//     },
//     evolutions_2: {
//       label: "Evolutions II",
//       futgroup: "evolutions_2",
//       futlevel: "evolutions_2",
//       css_class: "evolutions_2"
//     },
//     evolutions_3: {
//       label: "Evolutions III",
//       futgroup: "evolutions_3",
//       futlevel: "evolutions_3",
//       css_class: "evolutions_3"
//     },
//     evolutions_premium: {
//       label: "Evolutions IV",
//       futgroup: "evolutions_premium",
//       futlevel: "evolutions_premium",
//       css_class: "evolutions_premium"
//     },
//     founders_evolutions_1: {
//       label: "Founders Evolutions I",
//       futgroup: "founders_evolutions_1",
//       futlevel: "founders_evolutions_1",
//       css_class: "founders_evolutions_1"
//     },
//     founders_evolutions_premium: {
//       label: "Founders Evolutions II",
//       futgroup: "founders_evolutions_premium",
//       futlevel: "founders_evolutions_premium",
//       css_class: "founders_evolutions_premium"
//     },
//     ucl_heroes: {
//       label: "UCL Heroes",
//       futgroup: "ucl",
//       futlevel: "ucl_heroes",
//       css_class: "ucl ucl_heroes"
//     },
//     uwcl_heroes: {
//       label: "UCL Womens Heroes",
//       futgroup: "ucl",
//       futlevel: "uwcl_heroes",
//       css_class: "ucl uwcl_heroes"
//     },
//     nike_mad_ready: {
//       label: "Nike Mad Ready",
//       futgroup: "nike_mad_ready",
//       futlevel: "nike_mad_ready",
//       css_class: "nike_mad_ready"
//     },
//     uwcl_motm: {
//       label: "UCL WOTM",
//       futgroup: "ucl",
//       futlevel: "uwcl_motm",
//       css_class: "uwcl_motm"
//     },
//     fut_centurions_2: {
//       label: "FUT Centurions II",
//       futgroup: "fut_centurions_2",
//       futlevel: "fut_centurions_2",
//       css_class: "fut_centurions_2"
//     },
//     fut_centurions_3: {
//       label: "FUT Centurions III",
//       futgroup: "fut_centurions_3",
//       futlevel: "fut_centurions_3",
//       css_class: "fut_centurions_3"
//     },
//     fut_centurions_icons: {
//       label: "Centurion Icons",
//       futgroup: "fut_centurions_icons",
//       futlevel: "fut_centurions_icons",
//       css_class: "fut_centurions_icons"
//     },
//     record_breaker: baseColors['record_breaker'],
//     pundit_picks: {
//       label: "Pundit Picks",
//       futgroup: "pundit_picks",
//       futlevel: "pundit_picks",
//       css_class: "pundit_picks"
//     },
//     triple_threat: {
//       label: "Triple Threat",
//       futgroup: "triple_threat",
//       futlevel: "triple_threat",
//       css_class: "triple_threat"
//     },
//     triple_threat_heroes: {
//         label: "Triple Threat Heroes",
//         futgroup: "triple_threat_heroes",
//         futlevel: "triple_threat_heroes",
//         css_class: "triple_threat_heroes"
//     },
//     fc_pro: {
//       label: "FC Pro",
//       futgroup: "fc_pro",
//       futlevel: "fc_pro",
//       css_class: "fc_pro"
//     },
//     fc_pro_boost: {
//       label: "FC Pro Boost",
//       futgroup: "fc_pro_boost",
//       futlevel: "fc_pro_boost",
//       css_class: "fc_pro_boost"
//     },
//     fc_pro_champions: {
//       label: "FC Pro Champions",
//       futgroup: "fc_pro_champions",
//       futlevel: "fc_pro_champions",
//       css_class: "fc_pro_champions"
//     },
//     thunderstruck: {
//       label: "Thunderstruck",
//       futgroup: "thunderstruck",
//       futlevel: "thunderstruck",
//       css_class: "thunderstruck"
//     },
//     thunderstruck_icon: {
//       label: "Thunderstruck Icons",
//       futgroup: "thunderstruck_icon",
//       futlevel: "thunderstruck_icon",
//       css_class: "thunderstruck_icon"
//     },
//     radioactive: {
//       label: "Radioactive",
//       futgroup: "radioactive",
//       futlevel: "radioactive",
//       css_class: "radioactive"
//     },
//     radioactive_evolutions: {
//       label: "Radioactive Evolutions",
//       futgroup: "radioactive_evolutions",
//       futlevel: "radioactive_evolutions",
//       css_class: "radioactive_evolutions"
//     },
//     euros: {
//       label: "Euros",
//       futgroup: "euros",
//       futlevel: "euros",
//       css_class: "euros"
//     },
//     euros_special: {
//       label: "Euros Special",
//       futgroup: "euros_special",
//       futlevel: "euros_special",
//       css_class: "euros_special"
//     },
//     ultimate_dynasties: {
//       label: "Ultimate Dynasties",
//       futgroup: "ultimate_dynasties",
//       futlevel: "ultimate_dynasties",
//       css_class: "ultimate_dynasties"
//     },
//     ultimate_dynasties_icons: {
//       label: "Ultimate Dynasties Icons",
//       futgroup: "ultimate_dynasties_icons",
//       futlevel: "ultimate_dynasties_icons",
//       css_class: "ultimate_dynasties_icons"
//     },
//     uwcl_rttk: {
//       label: "UWCL RTTK",
//       futgroup: "uwcl_rttk",
//       futlevel: "uwcl_rttk",
//       css_class: "uwcl_rttk"
//     },
//     special_edition: {
//       label: "Special Edition",
//       futgroup: "special_edition",
//       futlevel: "special_edition",
//       css_class: "special_edition"
//     },
//     winter_icons: {
//       label: "Winter Icons",
//       futgroup: "winter_icons",
//       futlevel: "winter_icons",
//       css_class: "winter_icons"
//     },
//     winter_evolutions: {
//       label: "Winter Evolutions",
//       futgroup: "winter_evolutions",
//       futlevel: "winter_evolutions",
//       css_class: "winter_evolutions"
//     },
//     fut_versus_ice: cardColors22["fut_versus_ice"],
//     fut_versus_fire: cardColors22["fut_versus_fire"],
//     ucl_totgs: {
//         label: "UCL TOTGS",
//         futgroup: "ucl_totgs",
//         futlevel: "ucl_totgs",
//         css_class: "ucl_totgs"
//     },
//     europa_totgs: {
//       label: "Europa TOTGS",
//       futgroup: "europa_totgs",
//       futlevel: "europa_totgs",
//       css_class: "europa_totgs"
//     },
//     europa_conference_league_totgs: {
//       label: "Europa Conference League TOTGS",
//       futgroup: "europa_conference_league_totgs",
//       futlevel: "europa_conference_league_totgs",
//       css_class: "europa_conference_league_totgs"
//     },
//     virtual_bundesliga: {
//       label: "Virtual Bundesliga",
//       futgroup: "virtual_bundesliga",
//       futlevel: "virtual_bundesliga",
//       css_class: "virtual_bundesliga"
//     },
//     uwcl_rttf: {
//       label: "UWCL RTTF",
//       futgroup: "ucl",
//       futlevel: "uwcl_rttf",
//       css_class: "ucl uwcl_rttf"
//     },
//     fut_future_stars_evolutions: {
//       label: "Future Stars Evolutions",
//       futgroup: "fut_future_stars_evolutions",
//       futlevel: "fut_future_stars_evolutions",
//       css_class: "fut_future_stars_evolutions"
//     },
//     fut_future_stars_evolutions_premium: {
//       label: "Future Stars Evolutions Premium",
//       futgroup: "fut_future_stars_evolutions_premium",
//       futlevel: "fut_future_stars_evolutions_premium",
//       css_class: "fut_future_stars_evolutions_premium"
//     },
//     fut_future_stars_evolutions_icons: {
//       label: "Future Stars Icons",
//       futgroup: "fut_future_stars_evolutions_icons",
//       futlevel: "fut_future_stars_evolutions_icons",
//       css_class: "fut_future_stars_evolutions_icons"
//     },
//     fut_birthday_evolutions: {
//       label: "FUT Birthday Evolutions",
//       futgroup: "fut_birthday",
//       futlevel: "fut_birthday_evolutions",
//       css_class: "fut_birthday_evolutions"
//     },
//     fut_birthday_evolutions_premium: {
//       label: "FUT Birthday Evolutions Premium",
//       futgroup: "fut_birthday",
//       futlevel: "fut_birthday_evolutions_premium",
//       css_class: "fut_birthday_evolutions_premium"
//     },
//     golazo_heroes: {
//       label: "Golazo Heroes",
//       futgroup: "golazo_heroes",
//       futlevel: "golazo_heroes",
//       css_class: "golazo_heroes"
//     },
//     golazo_icons: {
//       label: "Golazo Icons",
//       futgroup: "golazo_icons",
//       futlevel: "golazo_icons",
//       css_class: "golazo_icons"
//     },
//     tots_moments: cardColors22['tots_moments'],
//     tots_gold_plus: {
//       label: "TOTS Plus",
//       futgroup: "tots_gold_plus",
//       futlevel: "tots_gold_plus",
//       css_class: "tots_gold_plus"
//     },
//     tots_gold_live: {
//       label: "TOTS Live",
//       futgroup: "tots_gold_live",
//       futlevel: "tots_gold_live",
//       css_class: "tots_gold_live"
//     },
//     tots_moments_evolutions: {
//       label: "TOTS Moments Evolutions",
//       futgroup: "tots_moments_evolutions",
//       futlevel: "tots_moments_evolutions",
//       css_class: "tots_moments_evolutions"
//     },
//     tots_champions_plus: {
//       label: "TOTS Champions Plus",
//       futgroup: "tots_champions_plus",
//       futlevel: "tots_champions_plus",
//       css_class: "tots_champions_plus"
//     },
//     greats_of_the_game_hero: {
//       label: "Greats of the Game Hero",
//       futgroup: "greats_of_the_game_hero",
//       futlevel: "greats_of_the_game_hero",
//       css_class: "greats_of_the_game_hero"
//     },
//     greats_of_the_game_icon: {
//       label: "Greats of the Game Icon",
//       futgroup: "greats_of_the_game_icon",
//       futlevel: "greats_of_the_game_icon",
//       css_class: "greats_of_the_game_icon"
//     },
//     euro_path_to_glory: {
//       label: "Euro Path to Glory",
//       futgroup: "euro_path_to_glory",
//       futlevel: "euro_path_to_glory",
//       css_class: "euro_path_to_glory"
//     },
//     copa_america_path_to_glory: {
//       label: "Copa America Path to Glory",
//       futgroup: "copa_america_path_to_glory",
//       futlevel: "copa_america_path_to_glory",
//       css_class: "copa_america_path_to_glory"
//     },
//     euro_make_your_mark: {
//       label: "Euro Make Your Mark",
//       futgroup: "euro_make_your_mark",
//       futlevel: "euro_make_your_mark",
//       css_class: "euro_make_your_mark"
//     },
//     euro_make_your_mark_plus: {
//       label: "Euro Make Your Mark Plus",
//       futgroup: "euro_make_your_mark_plus",
//       futlevel: "euro_make_your_mark_plus",
//       css_class: "euro_make_your_mark_plus"
//     },
//     copa_america_make_your_mark: {
//       label: "Copa America Make Your Mark",
//       futgroup: "copa_america_make_your_mark",
//       futlevel: "copa_america_make_your_mark",
//       css_class: "copa_america_make_your_mark"
//     },
//     copa_america_make_your_mark_plus: {
//       label: "Copa America Make Your Mark Plus",
//       futgroup: "copa_america_make_your_mark_plus",
//       futlevel: "copa_america_make_your_mark_plus",
//       css_class: "copa_america_make_your_mark_plus"
//     },
//     fut_vip: {
//       label: "FUT VIP",
//       futgroup: "fut_vip",
//       futlevel: "fut_vip",
//       css_class: "fut_vip"
//     },
//     euro_tott: {
//       label: "Euro Team of the Tournament",
//       futgroup: "euro_tott",
//       futlevel: "euro_tott",
//       css_class: "euro_tott"
//     },
//     copa_america_tott: {
//       label: "Copa America Team of the Tournament",
//       futgroup: "copa_america_tott",
//       futlevel: "copa_america_tott",
//       css_class: "copa_america_tott"
//     },
//     euro_fof: {
//       label: "Euro Festival of Football",
//       futgroup: "euro_fof",
//       futlevel: "euro_fof",
//       css_class: "euro_fof"
//     },
//     copa_america_fof: {
//       label: "Copa America Festival of Football",
//       futgroup: "copa_america_fof",
//       futlevel: "copa_america_fof",
//       css_class: "copa_america_fof"
//     },
//     fc_pro_champions_icon: {
//       label: "FC Pro Champions Icon",
//       futgroup: "fc_pro_champions_icon",
//       futlevel: "fc_pro_champions_icon",
//       css_class: "fc_pro_champions_icon"
//     }
//   };

//   cardColors24['player_moments']['label'] = "Player Moments";
//   cardColors24['halloween']['label'] = "Trailblazers";
//   cardColors24['europa_motm']['label'] = "Europa League POTM";
//   cardColors24['ucl_motm']['label'] = "Champions League POTM";

//   let darkCards24 = [
//     "totw_bronze", "totw_silver", "totw_gold", "purple", "record_breaker", "sbc_base", "sbc_premium", "sbc_flashback", "fut_champions_bronze", "fut_champions_silver", "fut_champions_gold", "ones_to_watch", "halloween", "triple_threat", "triple_threat_heroes", "ucl_rare", "ucl_nonrare", "ucl_motm", "ucl_sbc", "ucl_live", "ucl_rttf", "uwcl_rttf", "fut_birthday", "fut_mas", "potm_pl", "potm_bundesliga", "ligue_1_potm", "winter_upgrade", "league_objective", "la_liga_potm", "headliners", "headliners_upgrade", "objectives_reward", "toty", "toty_nominees", "shapeshifters", "europa_motm", "europa_tott", "europa_rttf", "europa_potm", "libertadores", "libertadores_gold", "libertadores_motm", "libertadores_squad_foundations", "sudamericana", "sudamericana_motm", "totw_moments", "totw_moments_silver", "tots_gold", "tots_gold_plus", "tots_gold_live", "tots_moments", "tots_moments_evolutions", "tots_champions", "tots_champions_plus", "tots_token", "tots_token_2", "fgs_swaps_1", "objectives_reward_2", "beckham", "kit_promo", "stadium_assets", "fut_showdown_boost", "fut_showdown", "whatif", "whatif_2", "libertadores_tott", "sudamericana_tott", "libertadores_flashback", "fut_heroes", "infinite_mirror_1", "potm_serie_a", "potm_eredivisie", "europa_conference_league", "europa_conference_league_2", "europa_conference_league_3", "europa_conference_league_motm", "signature_signings", "fut_versus_ice", "fut_versus_fire", "winter_wildcard", "winter_evolutions", "winter_wildcard_token", "fut_future_stars_token", "fut_fantasy_blue", "fut_fantasy_heroes", "fut_fantasy_red", "fut_captains", "fut_captains_upgrade", "libertadores_totgs", "shapeshifter", "shapeshifters_heroes", "premium_shapeshifters", "out_of_position", "dynamic_duo", "wc_player", "wc_path_to_glory", "wc_star", "wc_tott", "wc_road_to_wc", "wc_showdown", "wc_showdown_boost", "fut_centurions", "fut_centurions_2", "fut_centurions_3", "fut_ballers", "trophy_titans", "level_up", "premium_level_up", "evolutions_1", "evolutions_2", "evolutions_3", "evolutions_premium", "founders_evolutions_1", "founders_evolutions_premium", "ucl_heroes", "uwcl_heroes", "uwcl_rttk", "nike_mad_ready", "pundit_picks", "fc_pro", "fc_pro_boost", "fc_pro_champions", "thunderstruck", "euros", "euros_special", "ultimate_dynasties", "ucl_totgs", "europa_totgs", "europa_conference_league_totgs", "virtual_bundesliga", "golazo_heroes", "greats_of_the_game_hero", "euro_path_to_glory", "copa_america_path_to_glory", "euro_make_your_mark", "euro_make_your_mark_plus", "copa_america_make_your_mark", "copa_america_make_your_mark_plus", "fut_vip", "euro_tott", "euro_fof", "copa_america_fof"
//   ];

//   for (let k in cardColors24) {
//     if (cardColors24.hasOwnProperty(k)) {
//       if (darkCards24.includes(k)) {
//         cardColors24[k]['css_class'] = cardColors24[k]['css_class'] + " dark-card";
//         cardColors24[k]['dark_card'] = true;
//       } else {
//         cardColors24[k]['dark_card'] = false;
//       }
//     }
//   }

//   let validFifa24 = [
//       "bronze", "silver", "gold", "rare_bronze", "rare_silver", "rare_gold", "totw_bronze", "totw_silver", "totw_gold", "fut_champions_bronze", "fut_champions_silver", "fut_champions_gold", "ones_to_watch", "halloween", "legend", "teal", "motm", "record_breaker", "sbc_flashback", "sbc_premium", "ucl_motm", "ucl_live", "ucl_totgs", "ucl_rttf", "ucl_heroes", "uwcl_heroes", "uwcl_motm", "uwcl_rttk", "uwcl_rttf", "player_moments", "europa_motm", "europa_live", "europa_rttf", "europa_totgs", "europa_conference_league", "europa_conference_league_3", "europa_conference_league_totgs", "triple_threat", "triple_threat_heroes", "toty", "toty_nominees", "toty_icons", "fut_future_stars", "fut_future_stars_evolutions", "fut_future_stars_evolutions_premium", "fut_future_stars_evolutions_icons", "potm_bundesliga", "potm_pl", "ligue_1_potm", "la_liga_potm", "potm_serie_a", "potm_eredivisie", "mls_potm", "objectives_reward", "objectives_reward_2", "dynamic_duo", "libertadores", "libertadores_motm", "sudamericana","sudamericana_motm", "fut_birthday", "fut_birthday_icons", "fut_birthday_evolutions", "fut_birthday_evolutions_premium", "tots_gold", "tots_gold_plus", "tots_gold_live", "tots_moments", "tots_moments_evolutions","tots_champions", "tots_champions_plus", "fut_showdown_boost", "fut_showdown", "fut_heroes", "aged_stone", "fut_versus_ice", "fut_versus_fire", "winter_wildcard", "winter_evolutions", "winter_icons", "fut_fantasy_blue", "fut_fantasy_heroes", "fut_centurions", "fut_centurions_2", "fut_centurions_3", "fut_centurions_icons", "evolutions_1", "evolutions_2", "evolutions_3", "evolutions_premium", "founders_evolutions_1", "founders_evolutions_premium", "nike_mad_ready", "pundit_picks", "fc_pro", "fc_pro_boost", "fc_pro_champions", "fc_pro_champions_icon", "thunderstruck", "thunderstruck_icon", "radioactive", "radioactive_evolutions", "euros", "euros_special", "ultimate_dynasties", "ultimate_dynasties_icons", "special_edition", "virtual_bundesliga", "golazo_heroes", "golazo_icons", "greats_of_the_game_icon", "greats_of_the_game_hero", "greats_of_the_game_icon", "euro_path_to_glory", "copa_america_path_to_glory", "euro_make_your_mark", "euro_make_your_mark_plus", "copa_america_make_your_mark", "copa_america_make_your_mark_plus", "fut_vip", "euro_tott", "copa_america_tott", "euro_fof", "copa_america_fof"
//   ];

//   newOrder = {};
//   validFifa24.forEach(cardId => {
//     if (cardId in cardColors24) {
//       newOrder[cardId] = cardColors24[cardId];
//     }
//   });
//   cardColors24 = newOrder;
  
//   let futCardColors;
//   if (year === 16) {
//     futCardColors = cardColors16;
//   } else if (year === 17) {
//     futCardColors = cardColors17;
//   } else if (year === 18) {
//     futCardColors = cardColors18;
//   } else if (year === 19) {
//     futCardColors = cardColors19;
//   } else if (year === 20) {
//     futCardColors = cardColors20;
//   } else if (year === 21) {
//     futCardColors = cardColors21;
//   } else if (year === 22) {
//     futCardColors = cardColors22;
//   } else if (year === 23) {
//     futCardColors = cardColors23;
//   } else if (year === 24) {
//     futCardColors = cardColors24;
//   } else if (year === "separate") {
//     futCardColors = {
//       16: cardColors16,
//       17: cardColors17,
//       18: cardColors18,
//       19: cardColors19,
//       20: cardColors20,
//       21: cardColors21,
//       22: cardColors22,
//       23: cardColors23,
//       24: cardColors24
//     };
//   } else {
//     futCardColors = {
//       ...cardColors16,
//       ...cardColors17,
//       ...cardColors18,
//       ...cardColors19,
//       ...cardColors20,
//       ...cardColors21,
//       ...cardColors22,
//       ...cardColors23,
//       ...cardColors24
//     };
//   }

//   let content;
//   if (color !== null && futCardColors.hasOwnProperty(color)) {
//     content = {
//       label: futCardColors[color].label,
//       futlevel: futCardColors[color].futlevel,
//       futgroup: futCardColors[color].futgroup,
//       css_class: futCardColors[color].css_class
//     };
//     if (futCardColors[color].hasOwnProperty("dark_card")) {
//       content.dark_card = futCardColors[color].dark_card;
//     } else {
//       content.dark_card = 0;
//     }
//   } else {
//     content = futCardColors;
//   }

//   return content;
// }

// export const getPlayerName = (commonname, firstname, lastname, format = null) => {
//   let playerName;

//   if (!format || format === "fullcommon") {
//     if (commonname !== "") {
//       playerName = commonname;
//     } else {
//       playerName = firstname + " " + lastname;
//     }
//   } else if (format === "initial-last") {
//     if (commonname !== "") {
//       playerName = commonname;
//     } else {
//       playerName = firstname.charAt(0) + ". " + lastname;
//     }
//   } else if (format === "last") {
//     if (commonname !== "") {
//       playerName = commonname;
//     } else {
//       playerName = lastname;
//     }
//   } else if (format === "fullname") {
//     if (lastname !== "") {
//       playerName = (firstname !== "" ? firstname + " " : "") + lastname;
//     } else {
//       playerName = commonname;
//     }
//   }

//   return playerName;
// }

// export const getFutRatings = (player, year = 15) => {
//   let futRating = {};
//   allSkillsArray.forEach(val => {
//     if(isNaN(player[val] || player[val] === '')) {
//       player[val] = 0;
//     }
//   });

//   if(year === 14 ) {
//     futRating['pac'] = Math.round(((2 * player['acceleration']) + (3 * player['sprintspeed'])) / 5);
//     futRating['sho'] = Math.round(((5 * player['curve']) + (30 * player['finishing']) + (8 * player['freekickaccuracy']) + (20 * player['longshots']) + (2 * player['penalties']) + (20 * player['shotpower']) + (15 * player['volleys'])) / 100);
//     futRating['pas'] = Math.round(((25 * player['crossing']) + (30 * player['longpassing']) + (45 * player['shortpassing'])) / 100);
//     futRating['dri'] = Math.round(((60 * player['dribbling']) + (30 * player['ballcontrol']) + (8 * player['agility']) + (2 * player['balance'])) / 100);
//     futRating['def'] = Math.round(((20 * player['marking']) + (20 * player['standingtackle']) + (20 * player['reactions']) + (15 * player['strength']) + (5 * player['aggression']) + (20 * player['interceptions'])) / 100);
//     futRating['hea'] = Math.round(((2 * player['headingaccuracy']) + player['jumping'] + player['strength']) / 4);
//     futRating['phy'] = Math.round((0.5 * player['strength']) + (0.25 * player['stamina']) + (0.2 * player['aggression']) + (0.05 * player['jumping']));
//   } else {
//     futRating['pac'] = Math.round(((player['acceleration'] * 0.45) + (player['sprintspeed'] * 0.55)));
//     futRating['sho'] = Math.round(((player['finishing'] * 0.45) + (player['longshots'] * 0.2) + (player['penalties'] * 0.05) + (player['shotpower'] * 0.2) + (player['volleys'] * 0.05) + (player['positioning'] * 0.05)));
//     futRating['pas'] = Math.round(((player['crossing'] * 0.2) + (player['longpassing'] * 0.15) + (player['shortpassing'] * 0.35) + (player['vision'] * 0.2) + (player['curve'] * 0.05) + (player['freekickaccuracy'] * 0.05)));
//     futRating['dri'] = Math.round(((player['dribbling'] * 0.5) + (player['ballcontrol'] * 0.3) + (player['agility'] * 0.1) + (player['balance'] * 0.05) + (player['reactions'] * 0.05)));
//     futRating['def'] = Math.round(((player['marking'] * 0.3) + (player['standingtackle'] * 0.3) + (player['interceptions'] * 0.2) + (player['headingaccuracy'] * 0.1) + (player['slidingtackle'] * 0.1)));
//     futRating['phy'] = Math.round(((player['strength'] * 0.5) + (player['stamina'] * 0.25) + (player['aggression'] * 0.2) + (player['jumping'] * 0.05)));
//   }

//   futRating['div'] = player['gkdiving'];
//   futRating['han'] = player['gkhandling'];
//   futRating['kic'] = player['gkkicking'];
//   futRating['ref'] = player['gkreflexes'];
//   futRating['spd'] = player['acceleration'];
//   futRating['pos'] = player['gkpositioning'];

//   return futRating;
// }

// export const getUseLightClub = (futYear, player) => {
//   let useLightClub = false;

//   if (player && player.color) {
//     if (futYear == 18 && ['ones_to_watch', 'toty', 'fut_championship'].includes(player.color)) {
//       if (['18', '45'].includes(player.clubid)) {
//           useLightClub = true;
//       }
//     }
//     if (futYear > 18) {
//       const cardColors = getCardColors(player.color, futYear);
//       if (cardColors.dark_card) {
//           useLightClub = true;
//       }
//     }
//   }
//   return useLightClub;
// }