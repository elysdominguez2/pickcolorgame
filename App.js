import React from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  return <GameScreen />;
}

//WORKING WITH FLEXBOX
// import React from "react";
// import { View } from "react-native";

// export default function App() {
//   return (
//     <View
//       style={{
//         height: "90%",
//       }}
//     >
//       <View
//         style={{
//           flex: 1,
//           width: "20%",

//           backgroundColor: "rebeccapurple",
//         }}
//       />
//       <View
//         style={{
//           flex: 2,
//           width: "50%",

//           backgroundColor: "crimson",
//         }}
//       />
//       <View
//         style={{
//           flex: 3,
//           width: "80%",

//           backgroundColor: "gold",
//         }}
//       />
//     </View>
//   );
// }

//1)
{
  /* <View style={{ flexDirection: "row", height: "100%" }}>
  <View style={{ flex: 1, width: "20%", backgroundColor: "rebeccapurple" }} />
  <View style={{ flex: 2, width: "50%", backgroundColor: "crimson" }} />
  <View style={{ flex: 3, width: "80%", backgroundColor: "gold" }} />
</View>; */
}

//2)
{
  /* <View style={{ flexDirection: "row", alignItems: "center", height: "100%" }}>
  <View
    style={{
      flex: 1,
      width: "20%",
      height: "20%",
      backgroundColor: "rebeccapurple",
    }}
  />
  <View
    style={{
      flex: 2,
      width: "50%",
      height: "50%",
      backgroundColor: "crimson",
    }}
  />
  <View
    style={{
      flex: 3,
      width: "80%",
      height: "80%",
      backgroundColor: "gold",
    }}
  />
</View>; */
}
//3)
{
  /* <View style={{ flexDirection: "row", alignItems: "center", height: "100%" }}>
  <View
    style={{
      alignSelf: "flex-end",
      flex: 1,
      width: "20%",
      height: "20%",
      backgroundColor: "rebeccapurple",
    }}
  />
  <View
    style={{
      flex: 2,
      width: "50%",
      height: "50%",
      backgroundColor: "crimson",
    }}
  />
  <View
    style={{
      flex: 3,
      width: "80%",
      height: "80%",
      backgroundColor: "gold",
    }}
  />
</View>; */
}

//4)
//  <View style={{ alignItems: "flex-end", height: "100%" }}>
//    <View
//      style={{
//        flex: 1,
//        width: "20%",
//        height: "20%",
//        backgroundColor: "rebeccapurple",
//      }}
//    />
//    <View
//      style={{
//        flex: 2,
//        width: "50%",
//        height: "50%",
//        backgroundColor: "crimson",
//      }}
//    />
//    <View
//      style={{
//        flex: 3,
//        width: "80%",
//        height: "80%",
//        backgroundColor: "gold",
//      }}
//    />
//  </View>;
