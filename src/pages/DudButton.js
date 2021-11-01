
// import useInlineStyle from "./useInlineStyle";

// const theme = {
//   borderColor: {
//     default: "black",
//     hover: "navy",
//     active: "blue",
//     focus: "blue"
//   },
//   color: {
//     default: "black",
//     hover: "white",
//     active: "white",
//     focus: "blue"
//   },
//   backgroundColor: {
//     default: "white",
//     hover: "navy",
//     active: "blue",
//     focus: "white"
//   },
//   getColor(prop, { hover, focus, active }) {
//     const wat = this[prop];
//     if (active) return wat["active"];
//     if (focus && !hover) return wat["focus"];
//     if (hover) return wat["hover"];
//     return wat["default"];
//   }
// };

// function getButtonStyle(state, props) {
//   return {
//     outline: "none",
//     boxSizing: "border-box",
//     userSelect: "none",
//     textAlign: "center",
//     borderRadius: "8px",
//     borderStyle: "solid",
//     borderWidth: "3px",
//     padding: "8px 12px",
//     cursor: "pointer",
//     transition: "0.3s all",
//     borderColor: theme.getColor("borderColor", state),
//     color: theme.getColor("color", state),
//     backgroundColor: theme.getColor("backgroundColor", state),
//     width: props.isMobile ? "90%" : "200px"
//   };
// }

// export default function Button({ name, isMobile, onClick }) {
//   const [buttonRef, dynamicStyle] = useInlineStyle(getButtonStyle, {
//     isMobile
//   });

//   return (
//     <div tabIndex="0" ref={buttonRef} style={dynamicStyle} onClick={onClick}>
//       {name}
//     </div>
//   );
// }
