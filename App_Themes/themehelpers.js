export function generateElement(props) {
    const { type, color1, color2, color3, border, transparency, shadowType } =
      props;
    // if(gradient1===LIGHT_0){
    //   console.log(type,gradient1,gradient2,border,transparency,shadowType)
    //  }
    switch (type) {
      case "selectable":
        const selectable = css`
          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0); /* Initial state */
          transform: translateY(0); /* Initial state */
          transition: box-shadow 0.2s ease-in, transform 0.5s ease-out 0.1s !important; /* Transition properties with different durations */
  
          &:hover {
            cursor: pointer;
            z-index: 999;
            box-shadow: -3px 8px 25px ${color1} !important; /* Adjust the shadow values for hover */
            transform: translateY(-3px) !important; /* Target state on hover */
          }
        `;
        return selectable;
  
      case "scrollable":
        const scrollable = css`
          overflow: auto !important;
          scrollbar-width: thin;
  
          &:hover {
            &::-webkit-scrollbar {
              display: block;
              width: 9px;
              height: 9px;
            }
  
            &::-webkit-scrollbar-thumb:hover {
              background-color: darkgrey;
              cursor: pointer;
            }
            &::-webkit-scrollbar-thumb {
              background-color: grey;
              border-radius: 20px;
            }
          }
  
          /* Style the scrollbar buttons */
          &::-webkit-scrollbar-button {
            display: none;
          }
        `;
        return scrollable;
      case "dangerpanel":
      case "panel":
        const panel = css`
          border: 1px solid ${border};
          border-radius: ${Constants.DEFAULT_UI_BORDERRADIUS};
          padding: ${Constants.DEFAULT_UI_PADDING};
          box-shadow: ${getShadows(color1, shadowType)};
  
          @media (max-width: 600px) {
            border-radius: ${Constants.MOBILE_UI_BORDERRADIUS};
            padding: ${Constants.MOBILE_UI_PADDING};
          }
          /* fallback for old browsers */
          background: ${color1};
          /* gradients */
          background: -moz-linear-gradient(45deg, ${color1} 0%, ${color2} 100%);
  
          background: linear-gradient(45deg, ${color1} 0%, ${color2} 100%);
          background: -webkit-linear-gradient(
            45deg,
            ${color1} 0%,
            ${color2} 100%
          );
        `;
        function arrayToString(arr) {
          return arr.join("");
        }
        return panel;
  
      case "pane":
        const pane = css`
          border: 1px solid ${border};
          border-radius: ${Constants.DEFAULT_UI_BORDERRADIUS};
          padding: ${Constants.DEFAULT_UI_PADDING};
          //TODO: implement neo-panes ??
          box-shadow: 0px 0px 0.1px rgba(0, 0, 0, 0.03),
            0px 0px 1px rgba(0, 0, 0, 0.015);
  
          @media (max-width: 600px) {
            border-radius: ${Constants.MOBILE_UI_BORDERRADIUS};
            padding: ${Constants.MOBILE_UI_PADDING};
          }
          background: ${color1};
          @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
            background-color: ${hexToRgbA(color1, transparency)};
            -webkit-backdrop-filter: blur(30px);
            backdrop-filter: blur(2em);
            -ms-filter: blur(3px);
          }
        `;
        return pane;
      case "material":
        // const material = css`
        //   border-radius:${DEFAULT_UI_BORDERRADIUS};
  
        //   @media (max-width: 600px) {
        //     border-radius:${MOBILE_UI_BORDERRADIUS};
        //      padding:${MOBILE_UI_PADDING};
        //   }
        //   background: ${color1};
  
        //   `
        return color1;
      default:
        return null;
    }
  }
  