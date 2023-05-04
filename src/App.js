import React, { useState } from "react";
import "./App.css";

function App() {
  const [cssInput, setCssInput] = useState("");
  const [convertedCss, setConvertedCss] = useState("");
  const handleConvertClick = (cssInput) => {
    cssInput = cssInput.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "");
    const cssRules = cssInput.split(";");
    const rnStyles = {};

    cssRules.forEach((rule) => {
      const [property, value] = rule.trim().split(":");

      switch (property) {
        // Background Properties

        case "background":
          rnStyles.backgroundColor = value.trim();
          break;
        case "background-color":
          rnStyles.backgroundColor = value.trim();
          break;
        // Text Properties
        case "font-family":
          rnStyles.fontFamily = value.trim().replace(/['"]+/g, "");
          break;
        case "font-style":
          rnStyles.fontStyle = value.trim();
          break;
        case "font-size":
          rnStyles.fontSize = parseInt(value.trim(), 10);
          break;
        case "font-weight":
          rnStyles.fontWeight = value.trim();
          break;
        case "letter-spacing":
          rnStyles.letterSpacing = parseFloat(value.trim());
          break;
        case "line-height":
          rnStyles.lineHeight = parseInt(value.trim(), 10);
          break;
        case "text-align":
          rnStyles.textAlign = value.trim();
          break;
        // Margin Properties
        case "margin":
          const marginValues = value.split(" ");
          switch (marginValues.length) {
            case 1:
              rnStyles.margin = parseInt(value.trim(), 10);
              break;
            case 2:
              rnStyles.marginVertical = parseInt(marginValues[0].trim(), 10);
              rnStyles.marginHorizontal = parseInt(marginValues[1].trim(), 10);
              break;
            case 3:
              rnStyles.marginTop = parseInt(marginValues[0].trim(), 10);
              rnStyles.marginHorizontal = parseInt(marginValues[1].trim(), 10);
              rnStyles.marginBottom = parseInt(marginValues[2].trim(), 10);
              break;
            case 4:
              rnStyles.marginTop = parseInt(marginValues[0].trim(), 10);
              rnStyles.marginRight = parseInt(marginValues[1].trim(), 10);
              rnStyles.marginBottom = parseInt(marginValues[2].trim(), 10);
              rnStyles.marginLeft = parseInt(marginValues[3].trim(), 10);
              break;
            default:
              break;
          }
          break;
        // margin
        case "margin-top":
          rnStyles.marginTop = parseInt(value.trim(), 10);
          break;
        case "margin-left":
          rnStyles.marginLeft = parseInt(value.trim(), 10);
          break;
        case "margin-right":
          rnStyles.marginRight = parseInt(value.trim(), 10);
          break;
        case "margin-bottom":
          rnStyles.marginBottom = parseInt(value.trim(), 10);
          break;
        // padding
        case "padding-top":
          rnStyles.paddingTop = parseInt(value.trim(), 10);
          break;
        case "padding-left":
          rnStyles.paddingLeft = parseInt(value.trim(), 10);
          break;
        case "padding-right":
          rnStyles.paddingRight = parseInt(value.trim(), 10);
          break;
        case "padding-bottom":
          rnStyles.paddingBottom = parseInt(value.trim(), 10);
          break;
        // Padding Properties
        case "padding":
          const paddingValues = value.split(" ");
          switch (paddingValues.length) {
            case 1:
              rnStyles.padding = parseInt(value, 10);
              break;
            case 2:
              rnStyles.paddingVertical = parseInt(paddingValues[0], 10);
              rnStyles.paddingHorizontal = parseInt(paddingValues[1], 10);
              break;
            case 3:
              rnStyles.paddingTop = parseInt(paddingValues[0], 10);
              rnStyles.paddingHorizontal = parseInt(paddingValues[1], 10);
              rnStyles.paddingBottom = parseInt(paddingValues[2], 10);
              break;
            case 4:
              rnStyles.paddingTop = parseInt(paddingValues[0], 10);
              rnStyles.paddingRight = parseInt(paddingValues[1], 10);
              rnStyles.paddingBottom = parseInt(paddingValues[2], 10);
              rnStyles.paddingLeft = parseInt(paddingValues[3], 10);
              break;
            default:
              break;
          }
          break;
        // Border Properties
        case "border":
          const [borderWidth, borderStyle, borderColor] = value.split(" ");
          rnStyles.borderWidth = parseInt(borderWidth, 10);
          rnStyles.borderStyle = borderStyle;
          rnStyles.borderColor = borderColor;
          break;
        case "border-width":
          rnStyles.borderWidth = parseInt(value, 10);
          break;
        case "border-radius":
          rnStyles.borderRadius = parseInt(value, 10);
          break;
        case "border-color":
          rnStyles.borderColor = parseInt(value, 10);
          break;
        // color Properties
        case "color":
          rnStyles.color = value.trim();
          break;
        // width
        case "width":
          rnStyles.width = parseInt(value, 10);
          break;
        // height
        case "height":
          rnStyles.height = parseInt(value, 10);
          break;
        default:
      }
    });

    setConvertedCss(JSON.stringify(rnStyles, null, 2));
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(convertedCss);
    alert("Copied");
  };

  return (
    <>
    <div className="container">
      <header>
        <h1>Css to React Native Css Converter</h1>
      </header>
      <div className="textarea-container">
        <textarea
          id="textArea"
          name="cssInput"
          cols="30"
          rows="10"
          placeholder="Enter CSS here"
          value={cssInput}
          onChange={(e) => setCssInput(e.target.value)}
        ></textarea>
        <button id="convertBtn" onClick={() => handleConvertClick(cssInput)}>
          Convert
        </button>
      </div>
      <div className="result-container">
        <textarea
          readOnly
          id="result"
          name="convertedCss"
          cols="30"
          rows="10"
          placeholder="Converted React Native CSS"
          value={convertedCss}
        ></textarea>
        <div>
          <button id="copyBtn" onClick={handleCopyClick}>
            Copy
          </button>
        </div>
      </div>
     
    </div>
 
    </>
  );
}

export default App;
