let lang = "est";
show();

function show() {
    if (lang == "est") {
        document.body.innerHTML = `
        <main>
            <section><br/>
                <button type="button" onclick="show()">english</button>
            </section>

            <section>
                <h1>Siret Jorro</h1>

                👧 07.02.1998<br/>
                🏠 Tallinn<br/>
                📞 53038319<br/>
                ✉️ siretjorro@gmail.com<br/><br/>
            </section>
            
            <section>
                <h1>Töökogemus</h1>
                
                Olen töötanud peamiselt klienditeeninduses, nii kassapidajana külapoes kui baristana lennujaamas.
            </section>
            
            <section>
                <h1>Haridus</h1>
                
                2018 - <br/>
                Tallinna Tehnikaülikool<br/>
                Bakalaureusekraad, informaatika<br/><br/>
        
                2017 - 2018<br/>
                Tartu Ülikool<br/>
                Bakalaureusekraad, matemaatika<br/>
                (vahetasin pärast ühte aastat eriala informaatika vastu)
            </section>
            
            <section>
                <h1>Keeled</h1>

                Eesti keel - emakeel<br/>
                Inglise keel - suurepärane<br/>
                Vene keel - rahuldav
            </section>

            <section>
                <h1>Oskused</h1>

                Olen kodus programmeerimiskeeltega Python ja Java, olen arendanud veebirakendusi keeltes Javascript, PHP ja Node.js. Olen teinud rakendusi nii Androidile kui iOSile. Tunnen HTML-i ja CSS-i, oskan ümber käia andmebaasidega. Kasutan regulaarselt versioonihaldust ja Bashi.
            </section>
            
            <section>
                <h1>Autojuhiload</h1>

                B-kategooria, aastast 2016
            </section>

            <section>
                <a href="files/Siret_Jorro_CV_ee.pdf" download>lae CV alla</a>
            </section>
        </main>`;

        lang = "eng";
    } else {
        document.body.innerHTML = `
        <main>
            <section><br/>
            <button type="button" onclick="show()">eesti keeles</button>

            </section>

            <section>
                <h1>Siret Jorro</h1>

                👧 07/02/1998<br/>
                🏠 Tallinn<br/>
                📞 53038319<br/>
                ✉️ siretjorro@gmail.com<br/><br/>
            </section>
            
            <section>
                <h1>Work experience</h1>
                
                I have previous experience in customer service, I have worked as a cashier and a barista.
            </section>
            
            <section>
                <h1>Education</h1>
                
                2018 -<br/>
                Tallinn University of Technology<br/>
                Bachelor's degree, Computer Science<br/><br/>
        
                2017 - 2018<br/>
                University of Tartu<br/>
                Bachelor's degree, Mathematics<br/>
                (changed my major to Computer Science after one year)
            </section>
            
            <section>
                <h1>Language skills</h1>

                Estonian - native language<br/>
                English - proficient<br/>
                Russian - beginner
            </section>

            <section>
                <h1>Technical skills</h1>

                I know Python and Java and have created web applications in Javascript, PHP and Node.js. I have experience with building mobile applications for both Android and iOS. I am familiar with HTML and CSS and know my way around databases. I regularly use Git and Bash.
            </section>
            
            <section>
                <h1>Driver's license</h1>

                B-category, since 2016
            </section>

            <section>
                <a href="files/Siret_Jorro_resume_eng.pdf" download>download CV</a>
            </section>
        </main>`;

        lang = "est";
    }
}