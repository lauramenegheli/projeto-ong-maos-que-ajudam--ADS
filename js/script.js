const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");


// MÁSCARA DO CPF
if (cpf) {

    cpf.addEventListener("input", function () {

        let valor = cpf.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        cpf.value = valor;

    });

}


// MÁSCARA DO TELEFONE
if (telefone) {

    telefone.addEventListener("input", function () {

        let valor = telefone.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
        valor = valor.replace(/(\d{5})(\d{1,4})$/, "$1-$2");

        telefone.value = valor;

    });

}


// MÁSCARA DO CEP
if (cep) {

    cep.addEventListener("input", function () {

        let valor = cep.value.replace(/\D/g, "");

        valor = valor.substring(0, 8);

        valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");

        cep.value = valor;

    });

}


// MENU HAMBÚRGUER
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", function () {

        menu.classList.toggle("ativo");

    });

}
// SUBMENU DE PROJETOS
const dropdown = document.querySelector(".dropdown");

if (dropdown) {
    const linkProjetos = dropdown.querySelector(":scope > a");

    linkProjetos.addEventListener("click", function (event) {
        event.preventDefault();
        dropdown.classList.toggle("aberto");
    });
}

// NAVEGAÇÃO SPA
const linksSPA = document.querySelectorAll("[data-route]");
const app = document.getElementById("app");

linksSPA.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const rota = link.getAttribute("data-route");

        if (rota === "inicio") {
    app.innerHTML = `
        <section>
            <h1>Mãos que Ajudam</h1>

            <p>
                Somos uma organização não governamental dedicada
                a promover ações sociais e ajudar pessoas em situação
                de vulnerabilidade.
            </p>
        </section>

        <section>
            <h2>Sobre a nossa ONG</h2>

            <p>
                A ONG Mãos que Ajudam desenvolve iniciativas solidárias
                por meio de campanhas de doação, voluntariado e ações
                comunitárias.
            </p>

            <img src="img/ong.png"
                 alt="Pessoas realizando uma ação solidária">
        </section>

        <section>
            <h2>Entre em contato</h2>

            <p><strong>Telefone:</strong> (16) 99999-9999</p>
            <p><strong>E-mail:</strong> contato@maosqueajudam.org</p>
            <p><strong>Localização:</strong> Franca - SP</p>
        </section>
    `;
    }

        if (rota === "projetos") {
            app.innerHTML = `
                <section>
                    <h1>Projetos e Iniciativas Solidárias</h1>

                    <p>
                        Conheça as principais ações desenvolvidas pela
                        ONG Mãos que Ajudam e descubra como você pode
                        contribuir para transformar vidas.
                    </p>

                    <img src="img/projetos.png"
                         alt="Voluntários organizando doações para uma ação social">
                </section>

                <section>
                    <h2>Campanhas de Doação</h2>

                    <span class="badge">Doação</span>

                    <p>
                        Nossas campanhas arrecadam alimentos, roupas,
                        produtos de higiene e outros itens essenciais
                        para pessoas e famílias em situação de vulnerabilidade.
                    </p>
                </section>

                <section>
                    <h2>Voluntariado</h2>

                    <span class="badge">Voluntariado</span>

                    <p>
                        Os voluntários participam de ações comunitárias,
                        campanhas de arrecadação, organização de doações
                        e atividades de apoio às pessoas atendidas pela ONG.
                    </p>
                </section>

                <section>
                    <h2>Faça a diferença</h2>

                    <p>
                        Toda contribuição é importante. Seja através de uma
                        doação ou do seu tempo como voluntário, você pode
                        ajudar a construir um futuro melhor.
                    </p>
                </section>
            `;
        }
    });

    if (rota === "cadastro") {
    app.innerHTML = `
        <section>
            <h1>Seja um Voluntário</h1>

            <p>
                Preencha o formulário abaixo para demonstrar
                seu interesse em participar das ações da ONG
                Mãos que Ajudam.
            </p>
        </section>

        <form id="formulario-cadastro">

            <fieldset>
                <legend>Dados pessoais</legend>

                <label for="nome">
                    Nome completo:
                </label>

                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    autocomplete="name"
                >

                <label for="email">
                    E-mail:
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autocomplete="email"
                >

                <label for="cpf">
                    CPF:
                </label>

                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="000.000.000-00"
                    pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}"
                    maxlength="14"
                    inputmode="numeric"
                    required
                >

                <label for="data-nascimento">
                    Data de nascimento:
                </label>

                <input
                    type="date"
                    id="data-nascimento"
                    name="data-nascimento"
                    required
                    autocomplete="bday"
                >
            </fieldset>
            <button type="submit">
    Enviar cadastro
</button>

<button type="reset">
    Limpar formulário
</button>

<div class="alerta sucesso" id="alerta-sucesso" style="display: none;">
    Cadastro realizado com sucesso! Obrigado por querer fazer parte da ONG Mãos que Ajudam.
</div>

</form>
`;
}
});

        </form>
    `;
}
});