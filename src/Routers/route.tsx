import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
    Annotaciya, Home, AmeliyTekst7, AmeliyTekst8, AmeliyTekst9, AmeliyTekst10, AmeliyTekst11,
    AmeliyVideo7, AmeliyVideo8, AmeliyVideo10, AmeliyVideo9, AmeliyVideo11, JoyborTekst10, JoyborTekst11,
    JoyborTekst7, JoyborTekst8, JoyborTekst9, JoyborVideo10, JoyborVideo11, JoyborVideo7, JoyborVideo8,
    JoyborVideo9, LabaratoriyaTekst10, LabaratoriyaTekst11, LabaratoriyaTekst7, LabaratoriyaTekst8,
    LabaratoriyaTekst9, LabaratoriyaVertual10, LabaratoriyaVertual11, LabaratoriyaVertual7, LabaratoriyaVertual8,
    LabaratoriyaVertual9, LabaratoriyaVideo10, LabaratoriyaVideo11, LabaratoriyaVideo7, LabaratoriyaVideo8,
    LabaratoriyaVideo9, MaseleTekst10, MaseleTekst11, MaseleTekst7, MaseleTekst8, MaseleTekst9, MaseleVideo10,
    MaseleVideo7, MaseleVideo8, MaseleVideo9, OzBetinsheTekst10, OzBetinsheTekst11, OzBetinsheTekst7, OzBetinsheTekst8,
    OzBetinsheTekst9, OzBetinsheVideo10, OzBetinsheVideo11, OzBetinsheVideo7, OzBetinsheVideo8, OzBetinsheVideo9,
    PrezentatsiyaTekst10, PrezentatsiyaTekst11, PrezentatsiyaTekst7, PrezentatsiyaTekst8, PrezentatsiyaTekst9,
    PrezentatsiyaVideo10, PrezentatsiyaVideo11, PrezentatsiyaVideo7, PrezentatsiyaVideo8, PrezentatsiyaVideo9
} from '../pages'
import { Ampermetr } from '../pages/Panler-bazasi/7-klass/Ámeliy-shınıǵıwlar/tekst/Ampermetr'
import { Ommetr } from '../pages/Panler-bazasi/7-klass/Ámeliy-shınıǵıwlar/tekst/Ommetr'
import { Reostat } from '../pages/Panler-bazasi/7-klass/Ámeliy-shınıǵıwlar/tekst/Reostat'
import { TokKushi } from '../pages/Panler-bazasi/10-klass/Prezentaciyalar/tekst/TokKushi'
import { OmNizami } from '../pages/Panler-bazasi/10-klass/Prezentaciyalar/tekst/OmNizami'
import { ElektrTogininQuwatliligi } from '../pages/Panler-bazasi/8-klass/Prezentaciyalar/tekst/ElektrTogininQuwatliligi'
import { RezistorlarReostatlar } from '../pages/Panler-bazasi/7-klass/Prezentaciyalar/tekst/RezistorlarReostatlar'
import { ElektrQarsiligi } from '../pages/Panler-bazasi/7-klass/Prezentaciyalar/tekst/ElektrQarsiligi'
import { ElektrKernewiHamOniOlshew } from '../pages/Panler-bazasi/7-klass/Prezentaciyalar/tekst/ElektrKernewiHamOniOlshew'
import { TokKushi7 } from '../pages/Panler-bazasi/7-klass/Prezentaciyalar/tekst/TokKushi7'
import { ShinjirdinBirBolegiUshinOmNizami } from '../pages/Panler-bazasi/7-klass/Prezentaciyalar/tekst/ShinjirdinBirBolegiUshinOmNizami'
import { Tema50 } from '../pages/Panler-bazasi/7-klass/Máseleler/tekst/Tema50'
import { Shinigiw33 } from '../pages/Panler-bazasi/7-klass/Máseleler/tekst/Shinigiw33'
import { TokDereklerinTutastiriw } from '../pages/Panler-bazasi/8-klass/Ámeliy-shınıǵıwlar/tekst/TokDereklerinTutastiriw'
import { Shinigiw7 } from '../pages/Panler-bazasi/8-klass/Máseleler/tekst/Shinigiw7'
import { Shinigiw9 } from '../pages/Panler-bazasi/8-klass/Máseleler/tekst/Shinigiw9'
import { Shinigiw10 } from '../pages/Panler-bazasi/8-klass/Máseleler/tekst/Shinigiw10'
import { Shinigiw13 } from '../pages/Panler-bazasi/8-klass/Máseleler/tekst/Shinigiw13'
import { Shinigiw18 } from '../pages/Panler-bazasi/8-klass/Máseleler/tekst/Shinigiw18'
import { Shinigiw29 } from '../pages/Panler-bazasi/8-klass/Máseleler/tekst/Shinigiw29'
import { TutiniwshilardiAralasTutastiriw } from '../pages/Panler-bazasi/8-klass/Óz-betinshe/tekst/TutiniwshilardiAralasTutastiriw'
import { ElektrTogininJumisi } from '../pages/Panler-bazasi/8-klass/Prezentaciyalar/tekst/ElektrTogininJumisi'
import { KondensatorlardiParallelHamIzbeIzJalgaw } from '../pages/Panler-bazasi/8-klass/Prezentaciyalar/tekst/KondensatorlardiParallelHamIzbeIzJalgaw'
import { ElektrSiyimliligiKondensatorlar } from '../pages/Panler-bazasi/8-klass/Prezentaciyalar/tekst/ElektrSiyimliligiKondensatorlar'
import { TutiniwshilardiParallelTutastiriw } from '../pages/Panler-bazasi/8-klass/Prezentaciyalar/tekst/TutiniwshilardiParallelTutastiriw'
import { TutiniwshilardiIzbeIzTutastiriw } from '../pages/Panler-bazasi/8-klass/Prezentaciyalar/tekst/TutiniwshilardiIzbeIzTutastiriw'
import { Shinigiw28 } from '../pages/Panler-bazasi/10-klass/Máseleler/tekst/Shinigiw28'
import { GlossariyTekst } from '../pages/Glossariy/tekst'
import { CifrliElektronGlossariy } from '../pages/Glossariy/cifrli-elektron-glossariy'
import { Test7 } from '../pages/Panler-bazasi/7-klass/test'
import { Test8 } from '../pages/Panler-bazasi/8-klass/test'
import ProtectedRoutes from '../utils/ProtectedRoutes'
import Login from '../pages/Login'
import { Kalendar_tematikaliqa_joba } from '../pages/Qosimshalar/kalendar-tematikaliq-reje'
import { Test_8_klass } from '../pages/Qosimshalar/test-sorawlari/sorawlar-teksti/Test_8_klass'
import { Sorawlar_Teksti } from '../pages/Qosimshalar/test-sorawlari/sorawlar-teksti'
import { Test_7_klass } from '../pages/Qosimshalar/test-sorawlari/sorawlar-teksti/Test_7_klass'
import { Tema51 } from '../pages/Panler-bazasi/7-klass/Laboratoriya-shınıǵıwları/tekst/Tema51'
import { Tema57 } from '../pages/Panler-bazasi/7-klass/Laboratoriya-shınıǵıwları/tekst/Tema57'
import { Guwaliq1 } from '../pages/guwaliqlar/Guwaliq1'
import { Guwaliq2 } from '../pages/guwaliqlar/Guwaliq2'
import { Guwaliqlar } from '../pages/guwaliqlar'
import { AvtorHaqqindaMagliwmat } from '../pages/avtor-haqqinda-magliwmat'
import { MobilQosimshalar } from '../pages/Qosimshalar/mobil-qosimshalar'


const Routers: React.FC = () => {
    
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='/annotaciya' element={<Annotaciya />} />
                <Route path='/Glossariy/tekst' element={<GlossariyTekst />} />
                <Route path='/Glossariy/cifrlı-elektron-glossariy' element={<CifrliElektronGlossariy />} />
                {/* 7-Klass */}
                <Route path='/panler-bazasi/7-klass/joybar-jumislari/tekst' element={< JoyborTekst7 />} />
                <Route path='/panler-bazasi/7-klass/joybar-jumislari/video' element={< JoyborVideo7 />} />
                <Route path='/panler-bazasi/7-klass/laboratoriya/tekst' element={< LabaratoriyaTekst7 />} />
                <Route path='/panler-bazasi/7-klass/laboratoriya/video' element={< LabaratoriyaVideo7 />} />
                <Route path='/panler-bazasi/7-klass/laboratoriya/vertual' element={< LabaratoriyaVertual7 />} />
                <Route path='/panler-bazasi/7-klass/máseleler/tekst' element={< MaseleTekst7 />} />
                <Route path='/panler-bazasi/7-klass/máseleler/video' element={< MaseleVideo7 />} />
                <Route path='/panler-bazasi/7-klass/prezentaciya/tekst' element={< PrezentatsiyaTekst7 />} />
                <Route path='/panler-bazasi/7-klass/prezentaciya/video' element={< PrezentatsiyaVideo7 />} />
                <Route path='/panler-bazasi/7-klass/ameliy/tekst' element={< AmeliyTekst7 />} />
                <Route path='/panler-bazasi/7-klass/ameliy/video' element={< AmeliyVideo7 />} />
                <Route path='/panler-bazasi/7-klass/oz-betinshe/tekst' element={< OzBetinsheTekst7 />} />
                <Route path='/panler-bazasi/7-klass/oz-betinshe/video' element={< OzBetinsheVideo7 />} />
                
                {/* Test */}
                <Route path='/elektron-testler/7-klass' element={<Test7 />} />

                {/* Ameliy */}
                <Route path='/panler-bazasi/7-klass/ameliy/tekst/Ampermetr-jardeminde-tutınıwshıdan-ótip-atırǵan-tok-kúshin-ólshew.pdf' element={< Ampermetr />} />
                <Route path='/panler-bazasi/7-klass/ameliy/tekst/Ommetr-járdeminde-rezistordıń-qarsılıǵın-ólshew.pdf' element={< Ommetr />} />
                <Route path='/panler-bazasi/7-klass/ameliy/tekst/Reostat-járdeminde-tok-kúshin-tártiplestiriw.pdf' element={< Reostat />} />

                {/* Prezentaciya */}
                <Route path='/panler-bazasi/7-klass/Prezentaciyalar/tekst/shinjirdin-bir-bolegi-ushin-om-nizami' element={< ShinjirdinBirBolegiUshinOmNizami />} />
                <Route path='/panler-bazasi/7-klass/Prezentaciyalar/tekst/tok-kushi' element={< TokKushi7 />} />
                <Route path='/panler-bazasi/7-klass/Prezentaciyalar/tekst/elektr-kernewi-ham-oni-olshew' element={< ElektrKernewiHamOniOlshew />} />
                <Route path='/panler-bazasi/7-klass/Prezentaciyalar/tekst/elektr-qarsiligi' element={< ElektrQarsiligi />} />
                <Route path='/panler-bazasi/7-klass/Prezentaciyalar/tekst/rezistorlar-reostatlar' element={< RezistorlarReostatlar />} />

                {/* Masele */}
                <Route path='/panler-bazasi/7-klass/Masele/tekst/33-shinigiw' element={<Shinigiw33 />} />
                <Route path='/panler-bazasi/7-klass/Masele/tekst/50-tema' element={<Tema50 />} />

                {/* Laboratoriya shinigiwlari */}
                <Route path='/panler-bazasi/7-klass/laboratoriya-shinigiwlari/tekst/51-tema' element={<Tema51 />} />
                <Route path='/panler-bazasi/7-klass/laboratoriya-shinigiwlari/tekst/57-tema' element={<Tema57 />} />

                {/* 8-Klass */}
                <Route path='/panler-bazasi/8-klass/joybar-jumislari/tekst' element={< JoyborTekst8 />} />
                <Route path='/panler-bazasi/8-klass/joybar-jumislari/video' element={< JoyborVideo8 />} />
                <Route path='/panler-bazasi/8-klass/laboratoriya/tekst' element={< LabaratoriyaTekst8 />} />
                <Route path='/panler-bazasi/8-klass/laboratoriya/video' element={< LabaratoriyaVideo8 />} />
                <Route path='/panler-bazasi/8-klass/laboratoriya/vertual' element={< LabaratoriyaVertual8 />} />
                <Route path='/panler-bazasi/8-klass/máseleler/tekst' element={< MaseleTekst8 />} />
                <Route path='/panler-bazasi/8-klass/máseleler/video' element={< MaseleVideo8 />} />
                <Route path='/panler-bazasi/8-klass/prezentaciya/tekst' element={< PrezentatsiyaTekst8 />} />
                <Route path='/panler-bazasi/8-klass/prezentaciya/video' element={< PrezentatsiyaVideo8 />} />
                <Route path='/panler-bazasi/8-klass/ameliy/tekst' element={< AmeliyTekst8 />} />
                <Route path='/panler-bazasi/8-klass/ameliy/video' element={< AmeliyVideo8 />} />
                <Route path='/panler-bazasi/8-klass/oz-betinshe/tekst' element={< OzBetinsheTekst8 />} />
                <Route path='/panler-bazasi/8-klass/oz-betinshe/video' element={< OzBetinsheVideo8 />} />

                {/* Test */}
                <Route path='/elektron-testler/8-klass' element={<Test8 />} />

                {/* Prezentaciya */}
                <Route path='/panler-bazasi/8-klass/Prezentaciyalar/tekst/elektr-toginin-quwatliligi' element={< ElektrTogininQuwatliligi />} />
                <Route path='/panler-bazasi/8-klass/Prezentaciyalar/tekst/elektr-toginin-jumisi' element={< ElektrTogininJumisi />} />
                <Route path='/panler-bazasi/8-klass/Prezentaciyalar/tekst/kondensatorlardi-parallel-ham-izbe-iz-jalgaw' element={< KondensatorlardiParallelHamIzbeIzJalgaw />} />
                <Route path='/panler-bazasi/8-klass/Prezentaciyalar/tekst/elektr-siyimliligi-kondensatorlar' element={< ElektrSiyimliligiKondensatorlar />} />
                <Route path='/panler-bazasi/8-klass/Prezentaciyalar/tekst/tutiniwshilardi-parallel-tutastiriw' element={< TutiniwshilardiParallelTutastiriw />} />
                <Route path='/panler-bazasi/8-klass/Prezentaciyalar/tekst/tutiniwshilardi-izbe-iz-tutastiriw' element={< TutiniwshilardiIzbeIzTutastiriw />} />

                {/* Ameliy */}
                <Route path='/panler-bazasi/8-klass/ameliy/tekst/tok-dereklerin-tutastiriw' element={< TokDereklerinTutastiriw />} />

                {/* Masele */}
                <Route path='/panler-bazasi/8-klass/masele/tekst/7-shinigiw' element={< Shinigiw7 />} />
                <Route path='/panler-bazasi/8-klass/masele/tekst/9-shinigiw' element={< Shinigiw9 />} />
                <Route path='/panler-bazasi/8-klass/masele/tekst/10-shinigiw' element={< Shinigiw10 />} />
                <Route path='/panler-bazasi/8-klass/masele/tekst/13-shinigiw' element={< Shinigiw13 />} />
                <Route path='/panler-bazasi/8-klass/masele/tekst/18-shinigiw' element={< Shinigiw18 />} />
                <Route path='/panler-bazasi/8-klass/masele/tekst/29-shinigiw' element={< Shinigiw29 />} />

                {/* Oz-betinshe */}
                <Route path='/panler-bazasi/8-klass/oz-betinshe/tekst/tutiniwshilardi-aralas-tutastiriw' element={< TutiniwshilardiAralasTutastiriw />} />

                {/* 9-Klass */}
                <Route path='/panler-bazasi/9-klass/joybar-jumislari/tekst' element={< JoyborTekst9 />} />
                <Route path='/panler-bazasi/9-klass/joybar-jumislari/video' element={< JoyborVideo9 />} />
                <Route path='/panler-bazasi/9-klass/laboratoriya/tekst' element={< LabaratoriyaTekst9 />} />
                <Route path='/panler-bazasi/9-klass/laboratoriya/video' element={< LabaratoriyaVideo9 />} />
                <Route path='/panler-bazasi/9-klass/laboratoriya/vertual' element={< LabaratoriyaVertual9 />} />
                <Route path='/panler-bazasi/9-klass/máseleler/tekst' element={< MaseleTekst9 />} />
                <Route path='/panler-bazasi/9-klass/máseleler/video' element={< MaseleVideo9 />} />
                <Route path='/panler-bazasi/9-klass/prezentaciya/tekst' element={< PrezentatsiyaTekst9 />} />
                <Route path='/panler-bazasi/9-klass/prezentaciya/video' element={< PrezentatsiyaVideo9 />} />
                <Route path='/panler-bazasi/9-klass/ameliy/tekst' element={< AmeliyTekst9 />} />
                <Route path='/panler-bazasi/9-klass/ameliy/video' element={< AmeliyVideo9 />} />
                <Route path='/panler-bazasi/9-klass/oz-betinshe/tekst' element={< OzBetinsheTekst9 />} />
                <Route path='/panler-bazasi/9-klass/oz-betinshe/video' element={< OzBetinsheVideo9 />} />

                {/* 10-Klass */}
                <Route path='/panler-bazasi/10-klass/joybar-jumislari/tekst' element={< JoyborTekst10 />} />
                <Route path='/panler-bazasi/10-klass/joybar-jumislari/video' element={< JoyborVideo10 />} />
                <Route path='/panler-bazasi/10-klass/laboratoriya/tekst' element={< LabaratoriyaTekst10 />} />
                <Route path='/panler-bazasi/10-klass/laboratoriya/video' element={< LabaratoriyaVideo10 />} />
                <Route path='/panler-bazasi/10-klass/laboratoriya/vertual' element={< LabaratoriyaVertual10 />} />
                <Route path='/panler-bazasi/10-klass/máseleler/tekst' element={< MaseleTekst10 />} />
                <Route path='/panler-bazasi/10-klass/máseleler/video' element={< MaseleVideo10 />} />
                <Route path='/panler-bazasi/10-klass/prezentaciya/tekst' element={< PrezentatsiyaTekst10 />} />
                <Route path='/panler-bazasi/10-klass/prezentaciya/video' element={< PrezentatsiyaVideo10 />} />
                <Route path='/panler-bazasi/10-klass/ameliy/tekst' element={< AmeliyTekst10 />} />
                <Route path='/panler-bazasi/10-klass/ameliy/video' element={< AmeliyVideo10 />} />
                <Route path='/panler-bazasi/10-klass/oz-betinshe/tekst' element={< OzBetinsheTekst10 />} />
                <Route path='/panler-bazasi/10-klass/oz-betinshe/video' element={< OzBetinsheVideo10 />} />

                {/* Prezentaciya */}
                <Route path='/panler-bazasi/10-klass/Prezentaciyalar/tekst/tok-kushi-ham-toktin-tigizligi' element={< TokKushi />} />
                <Route path='/panler-bazasi/10-klass/Prezentaciyalar/tekst/toliq-shinjir-ushin-om-nizami' element={< OmNizami />} />

                {/* Masele */}
                <Route path='/panler-bazasi/10-klass/masele/tekst/28-shinigiw' element={< Shinigiw28 />} />

                {/* 11-Klass */}
                <Route path='/panler-bazasi/11-klass/joybar-jumislari/tekst' element={< JoyborTekst11 />} />
                <Route path='/panler-bazasi/11-klass/joybar-jumislari/video' element={< JoyborVideo11 />} />
                <Route path='/panler-bazasi/11-klass/laboratoriya/tekst' element={< LabaratoriyaTekst11 />} />
                <Route path='/panler-bazasi/11-klass/laboratoriya/video' element={< LabaratoriyaVideo11 />} />
                <Route path='/panler-bazasi/11-klass/laboratoriya/vertual' element={< LabaratoriyaVertual11 />} />
                <Route path='/panler-bazasi/11-klass/máseleler/tekst' element={< MaseleTekst11 />} />
                <Route path='/panler-bazasi/11-klass/máseleler/video' element={< MaseleVideo7 />} />
                <Route path='/panler-bazasi/11-klass/prezentaciya/tekst' element={< PrezentatsiyaTekst11 />} />
                <Route path='/panler-bazasi/11-klass/prezentaciya/video' element={< PrezentatsiyaVideo11 />} />
                <Route path='/panler-bazasi/11-klass/ameliy/tekst' element={< AmeliyTekst11 />} />
                <Route path='/panler-bazasi/11-klass/ameliy/video' element={< AmeliyVideo11 />} />
                <Route path='/panler-bazasi/11-klass/oz-betinshe/tekst' element={< OzBetinsheTekst11 />} />
                <Route path='/panler-bazasi/11-klass/oz-betinshe/video' element={< OzBetinsheVideo11 />} />

                {/* Qosimshalar => Kalendar tematikaliq reje */}
                <Route path='/kalendar-tematikalıq-reje' element={<Kalendar_tematikaliqa_joba />} />
                
                {/* Qosimshalar => Test sorawlari */}
                <Route path='/sorawları-teksti' element={<Sorawlar_Teksti />} />
                <Route path='/sorawları-teksti/8-klass' element={<Test_8_klass />} />
                <Route path='/sorawları-teksti/7-klass' element={<Test_7_klass />} />

                {/* Qosimshalar => Mobil qosimshalar */}
                <Route path='/mobil-qosimshalar' element={<MobilQosimshalar />} />

                {/* Guwaliqlar */}
                <Route path='/guwaliqlar' element={<Guwaliqlar />} />
                <Route path='/guwaliqlar/1' element={<Guwaliq1 />} />
                <Route path='/guwaliqlar/2' element={<Guwaliq2 />} />

                {/* Avtor haqqinda magliwmat */}
                <Route path='/avtor-haqqinda-magliwmat' element={<AvtorHaqqindaMagliwmat />} />
            </Route>
        </Routes>
    )
}

export default Routers