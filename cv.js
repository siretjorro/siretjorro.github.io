let lang = "et";
show();

function changeLang() {
    lang = lang == "en" ? "et" : "en";
    show();
}

function show() {
    document.body.innerHTML = `
        <main>
            <section><br/>
            <button type="button" class="social-media" onclick="changeLang()">${lang == "et" ? "🇬🇧" : "🇪🇪"}</button>
            <button type="button" class="social-media github" onclick="location.href='https://github.com/siretjorro'">
                <i class="fa fa-github"></i>
            </button>
            <button type="button" class="social-media linkedin" onclick="location.href='https://linkedin.com/in/siretjorro'">
                <i class="fa fa-linkedin"></i>
            </button>
            </section>

            <section>
                <h1>Siret Jorro</h1>

                <p>👧 ${lang == "et" ? "07.02.1998" : "07/02/1998"}</p>
                <p>🏠 Tallinn</p>
                <p>📞 53038319</p>
                <p>✉️ siretjorro@gmail.com</p>
            </section>
            
            <section>
                <h1>${lang == "et" ? "Töökogemus" : "Work experience"}</h1>
                
                <p>${lang == "et" ? "Olen töötanud peamiselt klienditeeninduses, nii kassapidajana külapoes kui baristana lennujaamas." : "I have previous experience in customer service, I have worked as a cashier and a barista."}</p>
            </section>
            
            <section>
                <h1>${lang == "et" ? "Haridus" : "Education"}</h1>
                
                <section>
                    <p>2018 - </p>
                    <p>${lang == "et" ? "Tallinna Tehnikaülikool" : "Tallinn University of Technology"}</p>
                    <p>${lang == "et" ? "Bakalaureusekraad, informaatika" : "Bachelor's degree, Computer Science"}</p>
                </section>

                <section>
                    <p>2017 - 2018</p>
                    <p>${lang == "et" ? "Tartu Ülikool" : "University of Tartu"}</p>
                    <p>${lang == "et" ? "Bakalaureusekraad, matemaatika" : "Bachelor's degree, Mathematics"}</p>
                    <p>${lang == "et" ? "(vahetasin pärast ühte aastat eriala informaatika vastu)" : "(changed my major to Computer Science after one year)"}</p>
                </section>
            </section>
            
            <section>
                <h1>${lang == "et" ? "Keeled" : "Language skills"}</h1>

                <p>${lang == "et" ? "Eesti keel - emakeel" : "Estonian - native language"}</p>
                <p>${lang == "et" ? "Inglise keel - suurepärane" : "English - proficient"}</p>
                <p>${lang == "et" ? "Vene keel - rahuldav" : "Russian - beginner"}</p>
            </section>

            <section>
                <h1>${lang == "et" ? "Oskused": "Technical skills"}</h1>

                <p>${lang == "et" ? "Olen kodus programmeerimiskeeltega Python ja Java, olen arendanud veebirakendusi keeltes Javascript, PHP ja Node.js. Olen teinud rakendusi nii Androidile kui iOSile. Tunnen HTML-i ja CSS-i, oskan ümber käia andmebaasidega. Kasutan regulaarselt versioonihaldust ja Bashi." : "I know Python and Java and have created web applications in Javascript, PHP and Node.js. I have experience with building mobile applications for both Android and iOS. I am familiar with HTML and CSS and know my way around databases. I regularly use Git and Bash."}</p>
            </section>
            
            <section>
                <h1>${lang == "et" ? "Autojuhiload" : "Driver's license"}</h1>

                <p>${lang == "et" ? "B-kategooria, aastast 2016" : "B-category, since 2016"}</p>
            </section>

            <section>
                ${lang == "et" ? "<a href='files/Siret_Jorro_CV_ee.pdf' download>lae CV alla</a>" : "<a href='files/Siret_Jorro_resume_eng.pdf' download>download resume</a>"}
            </section>
        </main>`;
}