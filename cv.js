estonian()

function estonian() {
    document.body.innerHTML = document.body.innerHTML = `
    <main>
        <section><br>
            <button id="est" type="button" onclick="estonian()">eesti keel</button>
            <button id="eng" type="button" onclick="english()">english</button>
        </section>

        <section>
            <h1>Siret Jorro</h1>

            07.02.1998<br>
            Akadeemia tee 7/1-512B, Tallinn<br>
            53038319<br>
            siretjorro@gmail.com<br><br>
            
            Soovin leida eelistatavalt IT-alast tööd suveks, võib-olla ka edaspidiseks.
        </section>
        
        <section>
            <h1>Töökogemus</h1>
            
            Olen töötanud peamiselt klienditeeninduses, nii kassapidajana külapoes kui baristana lennujaamas.
        </section>
        
        <section>
            <h1>Haridus</h1>
            
            2018 - <br>
            Tallinna Tehnikaülikool<br>
            Bakalaureusekraad, informaatika<br><br>
    
            2017 - 2018<br>
            Tartu Ülikool<br>
            Bakalaureusekraad, matemaatika<br>
            (vahetasin pärast ühte aastat eriala informaatika vastu)
        </section>
        
        <section>
            <h1>Keeled</h1>

            Eesti keel - emakeel<br>
            Inglise keel - suurepärane<br>
            Vene keel - rahuldav
        </section>
        
        <section>
            <h1>Autojuhiload</h1>

            B-kategooria, aastast 2016
        </section>

        <section>
            <a href="files/estonian.pdf" download>lae CV alla</a>
        </section>
    </main>`;
}

function english() {
    document.body.innerHTML = `
    <main>
        <section><br>
            <button id="est" type="button" onclick="estonian()">eesti keel</button>
            <button id="eng" type="button" onclick="english()">english</button>
        </section>

        <section>
            <h1>Siret Jorro</h1>

            07/02/1998<br>
            Akadeemia tee 7/1-512B, Tallinn<br>
            53038319<br>
            siretjorro@gmail.com<br><br>
            
            I am looking for a job (preferrably in IT) for the summer.
        </section>
        
        <section>
            <h1>Work experience</h1>
            
            I have previous experience in customer service, I have worked as a cashier and a barista.
        </section>
        
        <section>
            <h1>Education</h1>
            
            2018 - <br>
            Tallinn University of Technology<br>
            Bachelor's degree, Computer Science<br><br>
    
            2017 - 2018<br>
            University of Tartu<br>
            Bachelor's degree, Mathematics<br>
            (changed my major to Computer Science after one year)
        </section>
        
        <section>
            <h1>Language skills</h1>

            Estonian - native language<br>
            English - proficient<br>
            Russian - beginner
        </section>
        
        <section>
            <h1>Driver's license</h1>

            B-category, since 2016
        </section>

        <section>
            <a href="files/english.pdf" download>download CV</a>
        </section>
    </main>`;
}