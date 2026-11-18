"use client";
import {usePathname} from "next/navigation";
import {useLanguage} from "./language";
import {useProjects} from "./project-translations";

export default function WhatsAppContact(){
 const pathname=usePathname();
 const {lang}=useLanguage();
 const projects=useProjects();
 const slug=pathname?.match(/^\/projects\/([^/]+)\/?$/)?.[1];
 const project=projects.find(p=>p.slug===slug);
 const message=project
 ? lang==="fr"
   ? `Bonjour, je vous contacte après avoir consulté la présentation du projet « ${project.title} » sur le site HANNON INTERNATIONAL INVESTMENTS. Je souhaiterais obtenir des informations complémentaires sur ses objectifs, ses modalités de réalisation et les possibilités de partenariat ou d’investissement. Pourriez-vous m’orienter vers la personne compétente ? Je vous remercie par avance pour votre retour.`
   : lang==="ar"
   ? `السلام عليكم، اطلعت على عرض مشروع «${project.title}» عبر موقع شركة حانون للاستثمارات العالمية، وأرغب في الحصول على مزيد من المعلومات حول أهداف المشروع وآليات تنفيذه وفرص الشراكة أو الاستثمار المتاحة. هل يمكنكم توجيهي إلى المسؤول المختص؟ شكراً لكم مقدماً على تعاونكم.`
   : `Hello, I have reviewed the presentation of “${project.title}” on the HANNON INTERNATIONAL INVESTMENTS website. I would appreciate further information about the project's objectives, implementation plans, and potential partnership or investment opportunities. Could you please put me in touch with the appropriate person? Thank you in advance for your assistance.`
 : lang==="fr"
 ? "Bonjour, j’ai découvert les projets présentés par HANNON INTERNATIONAL INVESTMENTS sur votre site. Je souhaiterais obtenir des informations complémentaires sur vos opportunités d’investissement et de partenariat. Pourriez-vous me mettre en relation avec la personne compétente ? Merci d’avance."
 : lang==="ar"
 ? "السلام عليكم، اطلعت على المشاريع المعروضة على موقع شركة حانون للاستثمارات العالمية، وأرغب في معرفة المزيد عن فرص الاستثمار والشراكة المتاحة لديكم. هل يمكنكم توجيهي إلى المسؤول المختص؟ شكراً لكم."
 : "Hello, I have explored the projects presented on the HANNON INTERNATIONAL INVESTMENTS website. I would like to learn more about your investment and partnership opportunities. Could you please direct me to the appropriate contact? Thank you.";
 const url="https://wa.me/21656147900?text="+encodeURIComponent(message);
 return <a className="whatsapp-float" href={url} target="_blank" rel="noopener noreferrer" aria-label={lang==="fr"?"Demander des informations sur WhatsApp":lang==="ar"?"طلب معلومات عبر واتساب":"Request information on WhatsApp"} title={lang==="fr"?"Contacter HANNON sur WhatsApp":lang==="ar"?"التواصل مع حانون عبر واتساب":"Contact HANNON on WhatsApp"}>
 <svg className="whatsapp-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 .8A15.1 15.1 0 0 0 3 23.6L.9 31l7.6-2a15.2 15.2 0 1 0 7.5-28.2Zm0 27.5c-2.5 0-4.8-.7-6.9-2l-.5-.3-4.5 1.2 1.2-4.4-.3-.5A12.4 12.4 0 1 1 16 28.3Zm6.8-9.3c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.4-.2-.2-.2-.4-.3-.8-.1-.4.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2.1-.5 0-.7l-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.8c.2.2 2.5 3.9 6.1 5.4.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z"/></svg>
 </a>
}
