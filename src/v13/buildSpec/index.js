import jsonRenderBuild from "json-renderers-build";
import jsonToTag from "@keshavsoft/json-to-tag";

const buildSidebarSpec = ({ inData = [] } = {}) => {
  const defaultIcons = {
    Dashboard: "house-door-fill",
    Orders: "file-earmark",
    Products: "cart"
  };
  const items = Array.isArray(inData) ? inData : [];
  return {
    tagName: "ul",
    attributes: { class: "nav flex-column px-3" },
    children: items.map((item, idx) => {
      const name = typeof item === "string" ? item : (item.name || item.text || item.title || "");
      const iconName = (typeof item === "object" && item.icon) ? item.icon : (defaultIcons[name] || "file-earmark");
      const isActive = (typeof item === "object" && item.active !== undefined) ? item.active : (idx === 0);
      return {
        tagName: "li",
        attributes: { class: "nav-item" },
        children: [
          {
            tagName: "a",
            attributes: {
              class: `nav-link ${isActive ? "active text-primary fw-semibold" : "text-body"}`,
              href: `#${name.toLowerCase()}`,
              ...(isActive ? { "aria-current": "page" } : {})
            },
            children: [
              {
                tagName: "i",
                attributes: { class: `bi bi-${iconName} ${isActive ? "text-primary" : ""}` }
              },
              ` ${name}`
            ]
          }
        ]
      };
    })
  };
};

// --- Story of Component Render ---
const startFunc = ({
    inTargetHtmlId,
    inColumns, type,
    inData, showLog
} = {}) => {
    const localTargetHtmlId = inTargetHtmlId;
    const localData = inData ?? [];
    const localColumns = inColumns;

    console.log("buildSpec 1 :", localTargetHtmlId, localData.localColumns);

    let specAsJsonToDom;
    if (type === "sidebar") {
        specAsJsonToDom = buildSidebarSpec({ inData: localData });
    } else {
        specAsJsonToDom = jsonRenderBuild({
            type,
            targetHtmlId: localTargetHtmlId,
            data: localData,
            columns: localColumns
        });
    }

    let jsonToSend = specAsJsonToDom;

    if (!("tagName" in specAsJsonToDom) && "children" in specAsJsonToDom) {
        jsonToSend = specAsJsonToDom.children;
    };

    const content = jsonToTag(jsonToSend);

    console.log("buildSpec 3 :", content);

    return content;
};

export default startFunc;
