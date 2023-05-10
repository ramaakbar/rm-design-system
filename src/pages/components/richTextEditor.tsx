import React, { useState } from "react";

import { RichTextEditor } from "@/components/ui";

export default function ButtonPage() {
  const [, setText] = useState("");
  const richtext = `
  <h1>Sin aliud quid voles, postea.</h1>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim vitarum nobis erunt instituta capienda. Duo Reges: constructio interrete. Tum Triarius: Posthac quidem, inquit, audacius. <i>Illi enim inter se dissentiunt.</i> <a href="http://loripsum.net/" target="_blank">Facile est hoc cernere in primis puerorum aetatulis.</a> Qua exposita scire cupio quae causa sit, cur Zeno ab hac antiqua constitutione desciverit, quidnam horum ab eo non sit probatum; At habetur! Et ego id scilicet nesciebam! Sed ut sit, etiamne post mortem coletur? Nam de summo mox, ut dixi, videbimus et ad id explicandum disputationem omnem conferemus. </p>
  
  <ol>
    <li>Quid est igitur, cur ita semper deum appellet Epicurus beatum et aeternum?</li>
    <li>Si autem id non concedatur, non continuo vita beata tollitur.</li>
    <li>Quamvis enim depravatae non sint, pravae tamen esse possunt.</li>
    <li>Quae diligentissime contra Aristonem dicuntur a Chryippo.</li>
  </ol>
  
  
  <p>Si qua in iis corrigere voluit, deteriora fecit. Hoc est non modo cor non habere, sed ne palatum quidem. Itaque fecimus. Quorum sine causa fieri nihil putandum est. Aristoteles, Xenocrates, tota illa familia non dabit, quippe qui valitudinem, vires, divitias, gloriam, multa alia bona esse dicant, laudabilia non dicant. <a href="http://loripsum.net/" target="_blank">Erat enim res aperta.</a> De maximma autem re eodem modo, divina mente atque natura mundum universum et eius maxima partis administrari. <b>Negat enim summo bono afferre incrementum diem.</b> Earum etiam rerum, quas terra gignit, educatio quaedam et perfectio est non dissimilis animantium. Naturales divitias dixit parabiles esse, quod parvo esset natura contenta. </p>
  
  <h2>Eaedem res maneant alio modo.</h2>
  
  <p>Quamquam id quidem licebit iis existimare, qui legerint. Est tamen ea secundum naturam multoque nos ad se expetendam magis hortatur quam superiora omnia. Non prorsus, inquit, omnisque, qui sine dolore sint, in voluptate, et ea quidem summa, esse dico. Collige omnia, quae soletis: Praesidium amicorum. Huc et illuc, Torquate, vos versetis licet, nihil in hac praeclara epistula scriptum ab Epicuro congruens et conveniens decretis eius reperietis. Non igitur bene. Sed quoniam et advesperascit et mihi ad villam revertendum est, nunc quidem hactenus; </p>
  
  <ul>
    <li>Isto modo ne improbos quidem, si essent boni viri.</li>
    <li>An me, inquam, nisi te audire vellem, censes haec dicturum fuisse?</li>
  </ul>
  
  `;

  return (
    <>
      <h1 className="mb-5 text-2xl font-bold">Rich Text Editor</h1>
      <div className="space-y-3">
        <RichTextEditor onChange={setText} content={richtext} />
      </div>
    </>
  );
}
