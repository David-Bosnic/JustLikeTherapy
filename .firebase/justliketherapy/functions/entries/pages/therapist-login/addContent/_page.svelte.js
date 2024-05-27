import { c as create_ssr_component, f as setContext, e as escape, a as add_attribute, j as compute_rest_props, g as getContext, k as spread, l as escape_attribute_value, m as escape_object, v as validate_component, i as each } from "../../../../chunks/ssr.js";
import "firebase/firestore";
import "firebase/storage";
import "../../../../chunks/firebase.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const cBase$1 = "p-1";
const RadioGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { display = "inline-flex" } = $$props;
  let { background = "bg-surface-200-700-token" } = $$props;
  let { border = "border-token border-surface-400-500-token" } = $$props;
  let { spacing = "" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { padding = "px-4 py-1" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { color = "" } = $$props;
  let { fill = "" } = $$props;
  let { regionLabel = "" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("rounded", rounded);
  setContext("padding", padding);
  setContext("active", active);
  setContext("hover", hover);
  setContext("color", color);
  setContext("fill", fill);
  setContext("regionLabel", regionLabel);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  spacing = `${display.includes("flex-col") ? "" : "space-x-1"}`;
  classesBase = `${cBase$1} ${display} ${background} ${border} ${spacing} ${rounded} ${$$props.class ?? ""}`;
  return `<div class="${"radio-group " + escape(classesBase, true)}" data-testid="radio-group" role="radiogroup"${add_attribute("aria-labelledby", labelledby, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "flex-auto";
const cWrapper = "text-base text-center cursor-pointer";
const cDisabled = "opacity-50 cursor-not-allowed";
const RadioItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checked;
  let classesActive;
  let classesDisabled;
  let classsBase;
  let classesWrapper;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "title",
    "label",
    "rounded",
    "padding",
    "active",
    "hover",
    "color",
    "fill",
    "regionLabel"
  ]);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { title = "" } = $$props;
  let { label = "" } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { color = getContext("color") } = $$props;
  let { fill = getContext("fill") } = $$props;
  let { regionLabel = getContext("regionLabel") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  checked = value === group;
  classesActive = checked ? `${active} ${color} ${fill}` : hover;
  classesDisabled = $$props.disabled ? cDisabled : "";
  classsBase = `${cBase}`;
  classesWrapper = `${cWrapper} ${padding} ${rounded} ${classesActive} ${classesDisabled} ${$$props.class ?? ""}`;
  return `<label class="${"radio-label " + escape(classsBase, true) + " " + escape(regionLabel, true)}"> <div class="${"radio-item " + escape(classesWrapper, true)}" data-testid="radio-item" role="radio"${add_attribute("aria-checked", checked, 0)}${add_attribute("aria-label", label, 0)} tabindex="0"${add_attribute("title", title, 0)}> <div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div> ${slots.default ? slots.default({}) : ``}</div></label>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contentName;
  let contentType = "WorkSheet";
  let topics;
  let videoURL;
  let numParagraph = 1;
  let articleContent = [];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<h2 class="h2 p-2 text-center mt-8 font-semibold" data-svelte-h="svelte-zy6dlg">Add Content</h2> <div class="card p-4 w-full text-token space-y-4 variant-soft-surface"><div class="pb-2">${validate_component(RadioGroup, "RadioGroup").$$render($$result, { class: "text-token " }, {}, {
      default: () => {
        return `${validate_component(RadioItem, "RadioItem").$$render(
          $$result,
          {
            name: "Worksheet",
            value: "Worksheet",
            group: contentType
          },
          {
            group: ($$value) => {
              contentType = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<p data-svelte-h="svelte-1j7hi14">Worksheet</p>`;
            }
          }
        )} ${validate_component(RadioItem, "RadioItem").$$render(
          $$result,
          {
            name: "Videos",
            value: "Videos",
            group: contentType
          },
          {
            group: ($$value) => {
              contentType = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<p data-svelte-h="svelte-ddcq5w">Videos</p>`;
            }
          }
        )} ${validate_component(RadioItem, "RadioItem").$$render(
          $$result,
          {
            name: "Articles",
            value: "Articles",
            group: contentType
          },
          {
            group: ($$value) => {
              contentType = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<p data-svelte-h="svelte-10dqv25">Articles</p>`;
            }
          }
        )}`;
      }
    })}</div> ${contentType === "Worksheet" ? `<label class="label"><span data-svelte-h="svelte-7ccxmo">Title</span> <input class="input" type="text" placeholder="What is the worksheet called"${add_attribute("value", contentName, 0)}></label> <label class="label"><span data-svelte-h="svelte-1r9rrnk">Bio</span> <textarea class="textarea" rows="4" placeholder="What is the worksheet about">${escape("")}</textarea></label> <div><div class="space-y-2"><h4 class="h4 p-2" data-svelte-h="svelte-sucbug">Topics</h4> ${each(
      [
        "ADHD",
        "Anger",
        "Depression",
        "Couple",
        "Anxiety",
        "Emotions",
        "Relationships",
        "Self esteem",
        "Stress",
        "Trauma",
        "Substance abuse",
        "Grief"
      ],
      (topic) => {
        return `<label class="flex items-center space-x-2"><input class="checkbox" type="checkbox"${add_attribute("value", topic, 0)}${~topics.indexOf(topic) ? add_attribute("checked", true, 1) : ""}> <h4 class="h4">${escape(topic)}</h4> </label>`;
      }
    )}</div></div> <p class="bg-warning-50" data-svelte-h="svelte-1oq9t4r">A 2:1 aspect ratio is the best size 900x450 for example</p> <h4 class="h4 p-2" data-svelte-h="svelte-ux8o9v">Upload Worksheet Thumbnail</h4> <input type="file" class="w-full" accept="image/png, image/jpeg, image/gif, image/webp"> <div><h4 class="h4 p-2" data-svelte-h="svelte-11yovsn">Upload Worksheet</h4> <input type="file" class="w-full" accept="application/pdf"></div> <button class="btn btn-lg variant-filled-warning" data-svelte-h="svelte-14jjhda">Submit</button>` : `${contentType === "Videos" ? `<label class="label"><span data-svelte-h="svelte-7ccxmo">Title</span> <input class="input" type="text" placeholder="What is the video called"${add_attribute("value", contentName, 0)}></label> <label class="label"><span data-svelte-h="svelte-1r9rrnk">Bio</span> <textarea class="textarea" rows="4" placeholder="What is the video about">${escape("")}</textarea></label> <div><div class="space-y-2"><h4 class="h4 p-2" data-svelte-h="svelte-sucbug">Topics</h4> ${each(
      [
        "ADHD",
        "Anger",
        "Depression",
        "Couple",
        "Anxiety",
        "Emotions",
        "Relationships",
        "Self esteem",
        "Stress",
        "Trauma",
        "Substance abuse",
        "Grief"
      ],
      (topic) => {
        return `<label class="flex items-center space-x-2"><input class="checkbox" type="checkbox"${add_attribute("value", topic, 0)}${~topics.indexOf(topic) ? add_attribute("checked", true, 1) : ""}> <h4 class="h4">${escape(topic)}</h4> </label>`;
      }
    )}</div></div> <div><p class="bg-warning-50" data-svelte-h="svelte-17vf8vv">A 2:1 aspect ratio is the best size 900x450 for example</p> <h4 class="h4" data-svelte-h="svelte-1s5t3ka">Video Thumbnail</h4> <input type="file" class="w-full" accept="image/png, image/jpeg, image/gif, image/webp"></div> <div><h4 class="h4 p-2 bg-warning-50" data-svelte-h="svelte-8uyima">Only get the end of the Youtube url</h4> <h4 class="h4 p-2 bg-warning-50" data-svelte-h="svelte-9dsojc">https://www.youtube.com/watch?v=dQw4w9WgXcQ</h4> <h4 class="h4 p-2 mb-10 bg-success-300" data-svelte-h="svelte-95rkl2">Example: dQw4w9WgXcQ</h4> <h4 class="h4 p-2" data-svelte-h="svelte-169orio">Youtube URL</h4> <input class="input" type="text" placeholder="Ex:dQw4w9WgXcQ"${add_attribute("value", videoURL, 0)}></div> <button class="btn btn-lg variant-filled-warning" data-svelte-h="svelte-124dnh5">Submit</button>` : `${contentType === "Articles" ? `<label class="label"><span data-svelte-h="svelte-7ccxmo">Title</span> <input class="input" type="text" placeholder="What is the article called"${add_attribute("value", contentName, 0)}></label> <label class="label"><span data-svelte-h="svelte-1r9rrnk">Bio</span> <textarea class="textarea" rows="4" placeholder="What is the article about">${escape("")}</textarea></label>          ${each(Array(numParagraph), (_, index) => {
      return `<label class="label"><span>Paragraph ${escape(index + 1)}:</span> <textarea class="textarea" rows="2">${escape(articleContent[index] || "")}</textarea> </label>`;
    })} <div class="grid grid-cols-2 gap-3"><button class="btn variant-filled-primary" data-svelte-h="svelte-1his1gd">More Paragraphs</button> <button class="btn variant-filled-primary" data-svelte-h="svelte-11nm1w4">Less Paragraphs</button></div> <div class="space-y-2"><h4 class="h4 p-2" data-svelte-h="svelte-sucbug">Topics</h4> ${each(
      [
        "ADHD",
        "Anger",
        "Depression",
        "Couple",
        "Anxiety",
        "Emotions",
        "Relationships",
        "Self esteem",
        "Stress",
        "Trauma",
        "Substance abuse",
        "Grief"
      ],
      (topic) => {
        return `<label class="flex items-center space-x-2"><input class="checkbox" type="checkbox"${add_attribute("value", topic, 0)}${~topics.indexOf(topic) ? add_attribute("checked", true, 1) : ""}> <h4 class="h4">${escape(topic)}</h4> </label>`;
      }
    )}</div> <p class="bg-warning-50" data-svelte-h="svelte-1oq9t4r">A 2:1 aspect ratio is the best size 900x450 for example</p> <h4 class="h4 p-2" data-svelte-h="svelte-phz04t">Upload Article Thumbnail</h4> <input type="file" class="w-full" accept="image/png, image/jpeg, image/gif, image/webp"> <button class="btn btn-lg variant-filled-warning" data-svelte-h="svelte-19wym9p">Submit</button>                                           ` : ``}`}`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
