import { StyleSheet } from "react-native"
import { hp } from "@utils"
import { color, fontSize, spacing } from "@theme"

export default StyleSheet.create({
  button: {
    alignItems: "center",
    height: hp(65),
    justifyContent: "center",
    width: hp(88),
  },
  dividerLine: {
    backgroundColor: color.palette.lighterGrey,
    height: 100,
    marginTop: 14,
    width: 1.2,
  },
  homeIcon: {
    height: hp(25),
    width: hp(24),
  },
  journalIcon: {
    height: hp(25),
    width: hp(22),
  },
  journalListContainer: {
    backgroundColor: color.palette.journalListPink,
    borderRadius: 20,
    flexDirection: "row",
    height: 128,
    marginVertical: spacing[2],
  },

  journalListDate: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  journalListEmotion: {
    alignItems: "center",
    display: "flex",
    flex: 3,
    justifyContent: "center",
  },
  journalListEmotionContainer: {
    alignContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: color.transparent,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    padding: spacing[0],
  },
  journalListText: {
    color: color.palette.journalListTextColor,
    fontSize: fontSize.h3,
  },
  journalListTextContainer: {
    flex: 2,
    justifyContent: "center",
    padding: spacing[4],
  },
  journalListTime: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  mediaIcon: {
    height: hp(25),
    width: hp(19),
  },
})
