/* empty css                                 */
import { a as createComponent, r as renderTemplate, f as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_BuK2djVd.mjs';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_Bm8oAiUa.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_Be-VgPYc.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`WHO ARE WE?` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`About “aQua” 🌊` })}` })} ${maybeRenderHead()}<div class="mx-auto max-w-4xl mt-8"> <div> <p class="text-lg leading-relaxed text-slate-500 mt-3">
“aQuatonomous,” a blend of the words “aqua,” “Queen’s,” and “autonomous,” is Smith Engineering’s newest student-led interdisciplinary design team.
</p> <p class="text-lg leading-relaxed text-slate-500 mt-3">
Founded in 2023, our team has rapidly grown to over 35 passionate members, with a focus on continual expansion and innovation. Our mission centers on constructing and programming a state-of-the-art solar-powered autonomous surface vessel (ASV), providing students with a unique, hands-on opportunity to engage with cutting edge autonomous vehicle technology. We aim to be at the forefront of AI-driven autonomy and sustainable design, integrating the expertise of our diverse sub-teams: mechanical, electrical, perception, ecological & water research, business, and core-autonomy.
</p> <p class="text-lg leading-relaxed text-slate-500 mt-3">
Our ASV project not only advances autonomous maritime technology but also catalyzes sustainability and ecological restoration efforts. Our team offers the boat to water and environmental researchers as a research vessel and measurement station.
</p> <p class="text-lg leading-relaxed text-slate-500 mt-3">
We encourage students from all disciplines to join us, bringing their unique perspectives and skills to advance autonomous maritime technology. Through collaboration and innovation, we aim to make significant strides interdisciplinary water research and autonomous vehicle design. </p> </div> </div> ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`WHAT WE DO?` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Our Mission` })}` })} <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8"> <div> <h3 class="text-xl font-semibold text-slate-900">Innovation in Autonomous Marine Technology</h3> <p class="text-lg leading-relaxed text-slate-500 mt-3">
We strive to be at the forefront of <strong>AI-driven autonomy</strong> and design, developing cutting-edge autonomous ASVs. Our goal is to push the boundaries of technology to create more efficient and effective ASVs.
</p> </div> <div> <h3 class="text-xl font-semibold text-slate-900">Ecological Sciences and Water Research</h3> <p class="text-lg leading-relaxed text-slate-500 mt-3">
We aim to advance <strong>ecological and water research</strong> by collaborating with research labs and conducting independent studies on Lake Ontario. Our ASV technology supports environmental monitoring and sustainability efforts, contributing to the understanding and preservation of aquatic ecosystems.
</p> </div> <div> <h3 class="text-xl font-semibold text-slate-900">Hands-On Learning and Professional Development</h3> <p class="text-lg leading-relaxed text-slate-500 mt-3">
We provide students with valuable hands-on experience in building and programming autonomous vehicles. This includes offering <strong>fieldwork opportunities</strong> to disciplines that traditionally lack such exposure, such as mechanical, computer, and electrical engineering.
</p> <p class="text-lg leading-relaxed text-slate-500 mt-3">
Through teamwork and practical application, we foster an environment where students from all disciplines can learn and grow professionally. Additionally, we are committed to recruiting first-year students, ensuring they gain early exposure to real-world projects and become integral parts of our team from the start.
</p> </div> <div> <h3 class="text-xl font-semibold text-slate-900">Commitment to EDII and Outreach</h3> <p class="text-lg leading-relaxed text-slate-500 mt-3">
We are dedicated to upholding <strong>Equity, Diversity, Inclusion, and Indigeneity (EDII)</strong> principles, ensuring a diverse and inclusive team. This commitment enriches our project and community, promoting a culture of respect and collaboration.
</p> <p class="text-lg leading-relaxed text-slate-500 mt-3">
Additionally, we are committed to outreach, actively engaging in initiatives that give back to our community. By fostering an inclusive environment and prioritizing outreach efforts, we aim to make a <strong>positive impact both within and beyond our university</strong>.
</p> </div> </div> ` })} ` })}`;
}, "C:/Users/joshu/Desktop/Aquatonomous/development/a1/src/pages/about.astro", void 0);

const $$file = "C:/Users/joshu/Desktop/Aquatonomous/development/a1/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
