let lang = "et";
show();

function changeLang() {
    lang = lang == "en" ? "et" : "en";
    show();
}

function show() {
    document.body.innerHTML = `
        <main>
            <section>
                <aside>
                <a class="social-media" onclick="changeLang()">${lang == "et" ? "🇬🇧" : "🇪🇪"}</a>
                <a class="social-media github" href='https://github.com/siretjorro'><i class="fa fa-github"></i></a>
                <a class="social-media linkedin" href='https://linkedin.com/in/siretjorro'><i class="fa fa-linkedin"></i></a>
                </aside>
                
                <h1>Siret Jorro</h1>
                
                <p>👧 ${lang == "et" ? "07.02.1998" : "7 Feb 1998"}</p>
                <p>🏠 Tallinn</p>
                <p>📞 53038319</p>
                <p>✉️ siretjorro@gmail.com</p>
            </section>
                
                
            <section>
                <h1>${lang == "et" ? "Töökogemus" : "Work experience"}</h1>

                <section>
                    <h5>${lang == "et" ? "01.12.2020 -" : "1 Dec 2020 -"}</h5>
                    <p>Ridango AS</p>
                    <p>QA Engineer</p>
                </section>

                <section>
                    <h5>${lang == "et" ? "01.07.2019 - 31.08.2020" : "1 Jul 2019 - 31 Aug 2020"}</h5>
                    <p>B&M Group OÜ</p>
                    <p>${lang == "et" ? "Klienditeenindaja" : "Salesperson"}</p>
                </section>

                <section>
                    <h5>${lang == "et" ? "01.07.2018 - 31.01.2019" : "1 Jul 2018 - 31 Jan 2019"}</h5>
                    <p>Köök, Kunst ja Kohvikud OÜ</p>
                    <p>Barista</p>
                </section>
            </section>

            <section>
                <h1>${lang == "et" ? "Haridus" : "Education"}</h1>
                
                <section>
                    <h5>2018 - </h5>
                    <p>${lang == "et" ? "Tallinna Tehnikaülikool" : "Tallinn University of Technology"}</p>
                    <p>${lang == "et" ? "Bakalaureusekraad, informaatika" : "Bachelor's degree, Computer Science"}</p>
                </section>

                <section>
                    <h5>2017 - 2018</h5>
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
                <h1>${lang == "et" ? "Oskused" : "Technical skills"}</h1>

                <p>${lang == "et" ? "Olen kodus programmeerimiskeeltega Python ja Java, olen arendanud veebirakendusi keeltes Javascript, PHP ja Node.js. Oman kogemust ka veebiraamistikega Angular ning Vue, samuti olen kasutanud Spring Booti. Olen teinud native rakendusi nii Androidile kui iOSile ning pole võõras ka hübriidmobiilirakendustega (React Native, Flutter). Tunnen HTML-i ja CSS-i, oskan ümber käia andmebaasidega. Kasutan regulaarselt versioonihaldust ja Bashi." : "I know Python and Java and have created web applications in Javascript, PHP and Node.js. I have worked with Angular, Vue and Spring Boot. I have experience with building native mobile applications for both Android and iOS. On top of that, I have used React Native and Flutter to create hybrid mobile applications. I am familiar with HTML and CSS and know my way around databases. I regularly use Git and Bash."}</p>
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