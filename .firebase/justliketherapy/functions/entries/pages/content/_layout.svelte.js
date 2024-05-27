import { c as create_ssr_component, f as setContext, e as escape, a as add_attribute, g as getContext, d as compute_slots, s as subscribe, v as validate_component, i as each } from "../../../chunks/ssr.js";
import { i as iconSize, a as currentTopic } from "../../../chunks/stores3.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as AppShell } from "../../../chunks/AppShell.js";
const cBase$1 = "";
const ListBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { multiple = false } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { regionLead = "" } = $$props;
  let { regionDefault = "" } = $$props;
  let { regionTrail = "" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("multiple", multiple);
  setContext("rounded", rounded);
  setContext("active", active);
  setContext("hover", hover);
  setContext("padding", padding);
  setContext("regionLead", regionLead);
  setContext("regionDefault", regionDefault);
  setContext("regionTrail", regionTrail);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionDefault === void 0 && $$bindings.regionDefault && regionDefault !== void 0)
    $$bindings.regionDefault(regionDefault);
  if ($$props.regionTrail === void 0 && $$bindings.regionTrail && regionTrail !== void 0)
    $$bindings.regionTrail(regionTrail);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$1} ${spacing} ${rounded} ${$$props.class ?? ""}`;
  return `<div class="${"listbox " + escape(classesBase, true)}" role="listbox"${add_attribute("aria-labelledby", labelledby, 0)} data-testid="listbox">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "cursor-pointer -outline-offset-[3px]";
const cLabel = "flex items-center space-x-4";
const cRegionLead = "";
const cRegionDefault = "flex-1";
const cRegionTrail = "";
function areDeeplyEqual(param1, param2) {
  if (param1 === param2)
    return true;
  if (!(param1 instanceof Object) || !(param2 instanceof Object))
    return false;
  const keys1 = Object.keys(param1);
  const keys2 = Object.keys(param2);
  if (keys1.length !== keys2.length)
    return false;
  for (const key of keys1) {
    const value1 = param1[key];
    const value2 = param2[key];
    if (!areDeeplyEqual(value1, value2))
      return false;
  }
  return true;
}
const ListBoxItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesLabel;
  let classesRegionLead;
  let classesRegionDefault;
  let classesRegionTrail;
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { multiple = getContext("multiple") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { regionLead = getContext("regionLead") } = $$props;
  let { regionDefault = getContext("regionDefault") } = $$props;
  let { regionTrail = getContext("regionTrail") } = $$props;
  let checked;
  let elemInput;
  function updateCheckbox(group2) {
    checked = group2.indexOf(value) >= 0;
  }
  function updateGroup(checked2) {
    const index = group.indexOf(value);
    if (checked2) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionDefault === void 0 && $$bindings.regionDefault && regionDefault !== void 0)
    $$bindings.regionDefault(regionDefault);
  if ($$props.regionTrail === void 0 && $$bindings.regionTrail && regionTrail !== void 0)
    $$bindings.regionTrail(regionTrail);
  {
    if (multiple)
      updateCheckbox(group);
  }
  {
    if (multiple)
      updateGroup(checked);
  }
  selected = multiple ? group.some((groupVal) => areDeeplyEqual(value, groupVal)) : areDeeplyEqual(group, value);
  classesActive = selected ? active : hover;
  classesBase = `${cBase} ${rounded} ${padding} ${classesActive} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  classesRegionLead = `${cRegionLead} ${regionLead}`;
  classesRegionDefault = `${cRegionDefault} ${regionDefault}`;
  classesRegionTrail = `${cRegionTrail} ${regionTrail}`;
  return `<label> <div class="${"listbox-item " + escape(classesBase, true)}" data-testid="listbox-item" role="option"${add_attribute("aria-selected", selected, 0)} tabindex="0"> <div class="h-0 w-0 overflow-hidden">${multiple ? `<input type="checkbox"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${add_attribute("checked", checked, 1)}>` : `<input type="radio"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}>`}</div>  <div class="${"listbox-label " + escape(classesLabel, true)}"> ${$$slots.lead ? `<div class="${"listbox-label-lead " + escape(classesRegionLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"listbox-label-content " + escape(classesRegionDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.trail ? `<div class="${"listbox-label-trail " + escape(classesRegionTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div></div></label>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $iconSize, $$unsubscribe_iconSize;
  let $currentTopic, $$unsubscribe_currentTopic;
  $$unsubscribe_iconSize = subscribe(iconSize, (value) => $iconSize = value);
  $$unsubscribe_currentTopic = subscribe(currentTopic, (value) => $currentTopic = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
      sidebarLeft: () => {
        return `<div class="hidden xl:flex flex-col mt-10 mx-10 mb-20 pt-10 pl-32 gap-5"><div class="hidden lg:block card bg-white shadow-2xl p-2"><header class="flex flex-col content-center p-2" data-svelte-h="svelte-45xvot"><h1 class="h3 text-center">Format</h1></header> <hr class="opacity-50 border-1 p-1"> <section>${validate_component(ListBox, "ListBox").$$render(
          $$result,
          {
            padding: "px-10 py-2",
            hover: "hover:variant-ghost-primary",
            active: "variant-filled-primary"
          },
          {},
          {
            default: () => {
              return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
                $$result,
                {
                  name: "Large",
                  value: "Large",
                  group: $iconSize
                },
                {
                  group: ($$value) => {
                    $iconSize = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Large Icon`;
                  }
                }
              )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
                $$result,
                {
                  name: "Small",
                  value: "Small",
                  group: $iconSize
                },
                {
                  group: ($$value) => {
                    $iconSize = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Small Icon`;
                  }
                }
              )}`;
            }
          }
        )}</section></div> <div class="hidden lg:block card bg-white shadow-2xl p-2"><header class="flex flex-col content-center p-2" data-svelte-h="svelte-1pdyvus"><h1 class="h3 text-center">Topics</h1></header> <hr class="opacity-50 border-1 p-1"> <section>${validate_component(ListBox, "ListBox").$$render(
          $$result,
          {
            padding: "px-10 py-2",
            hover: "hover:variant-ghost-primary",
            active: "variant-filled-primary"
          },
          {},
          {
            default: () => {
              return `${each(
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
                (topics) => {
                  return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
                    $$result,
                    {
                      name: topics,
                      value: topics,
                      group: $currentTopic
                    },
                    {
                      group: ($$value) => {
                        $currentTopic = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `${escape(topics)}`;
                      }
                    }
                  )}`;
                }
              )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
                $$result,
                {
                  name: "",
                  value: "",
                  group: $currentTopic
                },
                {
                  group: ($$value) => {
                    $currentTopic = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `No Topic`;
                  }
                }
              )}`;
            }
          }
        )}</section></div></div> `;
      },
      default: () => {
        return `<div class="px-10 pt-10 lg:pr-60 lg:pl-20 content-center">${slots.default ? slots.default({}) : ``}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_iconSize();
  $$unsubscribe_currentTopic();
  return $$rendered;
});
export {
  Layout as default
};
