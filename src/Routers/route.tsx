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
import Ommetr from '../pages/Panler-bazasi/7-klass/Ámeliy-shınıǵıwlar/tekst/Ommetr'
import Reostat from '../pages/Panler-bazasi/7-klass/Ámeliy-shınıǵıwlar/tekst/Reostat'
import { TokKushi } from '../pages/Panler-bazasi/10-klass/Prezentaciyalar/tekst/TokKushi'
import { OmNizami } from '../pages/Panler-bazasi/10-klass/Prezentaciyalar/tekst/OmNizami'
import { ElektrTogininQuwatliligi } from '../pages/Panler-bazasi/8-klass/Prezentaciyalar/tekst/ElektrTogininQuwatliligi'

const Routers: React.FC = () => {
    return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/annotaciya' element={<Annotaciya />} />
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


            <Route path='/panler-bazasi/7-klass/ameliy/tekst/Ampermetr-jardeminde-tutınıwshıdan-ótip-atırǵan-tok-kúshin-ólshew.pdf' element={< Ampermetr />} />
            <Route path='/panler-bazasi/7-klass/ameliy/tekst/Ommetr-járdeminde-rezistordıń-qarsılıǵın-ólshew.pdf' element={< Ommetr />} />
            <Route path='/panler-bazasi/7-klass/ameliy/tekst/Reostat-járdeminde-tok-kúshin-tártiplestiriw.pdf' element={< Reostat />} />

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

            <Route path='/panler-bazasi/8-klass/Prezentaciyalar/tekst/elektr-toginin-quwatliligi' element={< ElektrTogininQuwatliligi />} />
            <Route path='/panler-bazasi/8-klass/Prezentaciyalar/tekst/elektr-toginin-jumisi' element={< TokKushi />} />
            <Route path='/panler-bazasi/8-klass/Prezentaciyalar/tekst/kondensatorlardi-parallel-ham-izbe-iz-jalgaw' element={< TokKushi />} />
            <Route path='/panler-bazasi/8-klass/Prezentaciyalar/tekst/elektr-siyimliligi-kondensatorlar' element={< TokKushi />} />
            <Route path='/panler-bazasi/8-klass/Prezentaciyalar/tekst/tutiniwshilardi-parallel-tutastiriw' element={< TokKushi />} />
            <Route path='/panler-bazasi/8-klass/Prezentaciyalar/tekst/tutiniwshilardi-izbe-iz-tutastiriw' element={< OmNizami />} />

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

            <Route path='/panler-bazasi/10-klass/Prezentaciyalar/tekst/tok-kushi-ham-toktin-tigizligi' element={< TokKushi />} />
            <Route path='/panler-bazasi/10-klass/Prezentaciyalar/tekst/toliq-shinjir-ushin-om-nizami' element={< OmNizami />} />

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


        </Routes>
    )
}

export default Routers