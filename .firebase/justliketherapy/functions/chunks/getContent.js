import { c as create_ssr_component, e as escape, i as each, b as add_styles, d as compute_slots, s as subscribe, a as add_attribute, v as validate_component } from "./ssr.js";
import "firebase/firestore";
import "./firebase.js";
import { g as getModalStore } from "./stores2.js";
import "./ProgressBar.svelte_svelte_type_style_lang.js";
import { p as page } from "./stores.js";
import { a as currentTopic, i as iconSize } from "./stores3.js";
const cBase = "flex flex-col items-center space-y-4 w-";
const cCaption = "text-center";
const cLegend = "text-sm w-full";
const cSwatch = "block aspect-square bg-black w-5 rounded-full mr-2";
const ConicGradient = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesCaption;
  let classesLegend;
  let $$slots = compute_slots(slots);
  let { stops = [
    {
      color: ["neutral", 500],
      start: 0,
      end: 100
    }
  ] } = $$props;
  let { legend = false } = $$props;
  let { spin = false } = $$props;
  let { width = "w-24" } = $$props;
  let { hover = "bg-primary-hover-token" } = $$props;
  let { digits = 0 } = $$props;
  let { regionCaption = "" } = $$props;
  let { regionCone = "" } = $$props;
  let { regionLegend = "" } = $$props;
  let generatedLegendList;
  if ($$props.stops === void 0 && $$bindings.stops && stops !== void 0)
    $$bindings.stops(stops);
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.digits === void 0 && $$bindings.digits && digits !== void 0)
    $$bindings.digits(digits);
  if ($$props.regionCaption === void 0 && $$bindings.regionCaption && regionCaption !== void 0)
    $$bindings.regionCaption(regionCaption);
  if ($$props.regionCone === void 0 && $$bindings.regionCone && regionCone !== void 0)
    $$bindings.regionCone(regionCone);
  if ($$props.regionLegend === void 0 && $$bindings.regionLegend && regionLegend !== void 0)
    $$bindings.regionLegend(regionLegend);
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesCaption = `${cCaption} ${regionCaption}`;
  classesLegend = `${cLegend} ${regionLegend}`;
  return `<figure class="${"conic-gradient " + escape(classesBase, true)}" data-testid="conic-gradient"> ${$$slots.default ? `<figcaption class="${"conic-caption " + escape(classesCaption, true)}">${slots.default ? slots.default({}) : ``}</figcaption>` : ``}  ${``}  ${legend && generatedLegendList ? `<ul class="${"conic-list list " + escape(classesLegend, true)}">${each(generatedLegendList, ({ color, label, value }) => {
    return `  <li class="${"conic-item " + escape(hover, true)}"><span class="${"conic-swatch " + escape(cSwatch, true)}"${add_styles({ "background": color })}></span> <span class="conic-label flex-auto">${escape(label)}</span> <strong class="conic-value">${escape(value)}%</strong> </li>`;
  })}</ul>` : ``}</figure>`;
});
const ListContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $currentTopic, $$unsubscribe_currentTopic;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_currentTopic = subscribe(currentTopic, (value) => $currentTopic = value);
  getModalStore();
  let { title = "" } = $$props;
  let { bio = "" } = $$props;
  let { thumbnail = "" } = $$props;
  let { worksheetURL = "" } = $$props;
  let { topics = "" } = $$props;
  let { articleContent = "" } = $$props;
  let { videoURL = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.bio === void 0 && $$bindings.bio && bio !== void 0)
    $$bindings.bio(bio);
  if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0)
    $$bindings.thumbnail(thumbnail);
  if ($$props.worksheetURL === void 0 && $$bindings.worksheetURL && worksheetURL !== void 0)
    $$bindings.worksheetURL(worksheetURL);
  if ($$props.topics === void 0 && $$bindings.topics && topics !== void 0)
    $$bindings.topics(topics);
  if ($$props.articleContent === void 0 && $$bindings.articleContent && articleContent !== void 0)
    $$bindings.articleContent(articleContent);
  if ($$props.videoURL === void 0 && $$bindings.videoURL && videoURL !== void 0)
    $$bindings.videoURL(videoURL);
  $$unsubscribe_page();
  $$unsubscribe_currentTopic();
  return `${$currentTopic === "" ? `<button class="card card-hover overflow-hidden bg-white"><header><img class="h-auto w-full"${add_attribute("src", thumbnail, 0)}${add_attribute("alt", title, 0)}></header> <section class="flex flex-col content-center p-2 pb-52 bg-white h-32"><h3 class="h3 font-medium text-center p-2">${escape(title)}</h3> <hr class="opacity-50 border-1 py-1"> <h4 class="h4 text-center">${escape(bio)}</h4></section></button>` : `${topics.includes($currentTopic) ? `<button class="card card-hover overflow-hidden bg-white"><header><img class="h-auto w-full"${add_attribute("src", thumbnail, 0)}${add_attribute("alt", title, 0)}></header> <section class="flex flex-col content-center p-2 pb-52 bg-white h-48"><h3 class="h3 font-medium text-center p-2">${escape(title)}</h3> <hr class="opacity-50 border-1 py-1"> <h4 class="h4 text-center">${escape(bio)}</h4></section></button>` : ``}`}`;
});
const GetContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $iconSize, $$unsubscribe_iconSize;
  $$unsubscribe_iconSize = subscribe(iconSize, (value) => $iconSize = value);
  let { contentType = "" } = $$props;
  let { listofContent = [] } = $$props;
  const conicStops = [
    { color: "transparent", start: 0, end: 25 },
    {
      color: "rgb(var(--color-tertiary-300))",
      start: 75,
      end: 100
    }
  ];
  if ($$props.contentType === void 0 && $$bindings.contentType && contentType !== void 0)
    $$bindings.contentType(contentType);
  if ($$props.listofContent === void 0 && $$bindings.listofContent && listofContent !== void 0)
    $$bindings.listofContent(listofContent);
  $$unsubscribe_iconSize();
  return `     ${`<div class="p-6 mt-10">${validate_component(ConicGradient, "ConicGradient").$$render($$result, { stops: conicStops, spin: true }, {}, {
    default: () => {
      return `Loading`;
    }
  })}</div>`} ${$iconSize == "Large" ? `<div class="flex flex-col pt-2"><div class="grid grid-cols-1 xl:grid-cols-2 gap-10">${each(listofContent, (content) => {
    return `${validate_component(ListContent, "ListContent").$$render(
      $$result,
      {
        title: content.contentName,
        bio: content.bio,
        thumbnail: content.thumbnailURL,
        worksheetURL: content.worksheetURL,
        videoURL: content.videoURL,
        topics: content.topics,
        articleContent: content.articleContent
      },
      {},
      {}
    )}`;
  })}</div></div>` : `${$iconSize == "Small" ? `<div class="grid grid-col-1 pt-2 xl:grid-cols-4 gap-6">${each(listofContent, (content) => {
    return `${validate_component(ListContent, "ListContent").$$render(
      $$result,
      {
        title: content.contentName,
        bio: content.bio,
        thumbnail: content.thumbnailURL,
        videoURL: content.videoURL,
        topics: content.topics,
        articleContent: content.articleContent
      },
      {},
      {}
    )}`;
  })}</div>` : ``}`}`;
});
export {
  GetContent as G
};
