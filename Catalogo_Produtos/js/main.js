(function () {
    "use strict";

    /* ---------- utilidades ---------- */
    function esc(texto) {
        var d = document.createElement("div");
        d.textContent = texto;
        return d.innerHTML;
    }

    function linkWhatsApp(mensagem) {
        return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(mensagem);
    }

    function preco(valor) {
        return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }

    // Função que redireciona para o checkout
    function finalizarCompra(carrinho, valorTotal) {
        localStorage.setItem('carrinhoCompras', JSON.stringify(carrinho));
        localStorage.setItem('valorTotalCompra', valorTotal);
        window.location.href = 'checkout.html';
    }

    /* ---------- ícones das categorias (usados quando o produto não tem foto) ---------- */
    var ICONES = {
        "Ração": '<path d="M20 14h24l4 10v28a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V24z"/><path d="M20 14c4 4 20 4 24 0"/><circle cx="32" cy="38" r="7"/>',
        "Alimentos": '<path d="M10 30h44c0 12-9 20-22 20S10 42 10 30z"/><ellipse cx="24" cy="22" rx="3" ry="5" transform="rotate(-20 24 22)"/><ellipse cx="32" cy="19" rx="3" ry="5"/><ellipse cx="40" cy="22" rx="3" ry="5" transform="rotate(20 40 22)"/>',
        "Casinhas": '<path d="M10 30L32 12l22 18"/><path d="M16 26v26h32V26"/><circle cx="32" cy="39" r="6"/>',
        "Ninhos": '<path d="M32 6v14"/><path d="M12 30h40c0 14-9 22-20 22S12 44 12 30z"/><path d="M12 30c4-8 36-8 40 0"/>'
    };

    function iconeCategoria(cat) {
        return '<svg class="product-icon" viewBox="0 0 64 64" width="72" height="72" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONES[cat] || "") + "</svg>";
    }

    function classeCategoria(cat) {
        return "cat-" + cat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    /* ---------- calopsitas ---------- */
    function renderCalopsitas() {
        var alvo = document.getElementById("lista-calopsitas");
        alvo.innerHTML = CALOPSITAS.map(function (c) {
            var status = c.disponivel
                ? '<span class="badge-status">Disponível para adoção</span>'
                : '<span class="badge-status off">Já adotada</span>';
            var msg = "Olá! Vi a calopsita " + c.nome + " (" + c.variedade + ") no site do Cantinho do Topete e tenho interesse em adotar.";
            var botao = c.disponivel
                ? '<a class="btn btn-topete btn-sm" href="' + linkWhatsApp(msg) + '" target="_blank" rel="noopener">Quero adotar</a>'
                : '<button class="btn btn-secondary btn-sm" disabled>Já adotada</button>';
            return '' +
                '<div class="col"><article class="bird-card h-100">' +
                '<div class="bird-photo">' +
                '<img src="' + c.imagem + '" alt="' + esc(c.alt) + '" loading="lazy">' + status +
                '</div>' +
                '<div class="bird-body">' +
                '<h3>' + esc(c.nome) + '</h3>' +
                '<p class="bird-variety">' + esc(c.variedade) + '</p>' +
                '<p class="bird-resumo">' + esc(c.resumo) + '</p>' +
                '<div class="d-flex flex-wrap gap-2 mt-auto pt-2">' +
                '<button type="button" class="btn btn-topete-outline btn-sm" data-ver="' + c.id + '">Conhecer ' + esc(c.nome) + '</button>' +
                botao +
                '</div></div></article></div>';
        }).join("");
    }

    function abrirModal(id) {
        var c = CALOPSITAS.filter(function (x) { return x.id === id; })[0];
        if (!c) { return; }
        document.getElementById("modalTitulo").textContent = c.nome;
        document.getElementById("modalVariedade").textContent = "Calopsita " + c.variedade.toLowerCase();
        var img = document.getElementById("modalImg");
        img.src = c.imagem;
        img.alt = c.alt;
        document.getElementById("modalTexto").innerHTML = c.descricao.map(function (p) {
            return "<p>" + esc(p) + "</p>";
        }).join("");
        var adotar = document.getElementById("modalAdotar");
        if (c.disponivel) {
            adotar.hidden = false;
            adotar.textContent = "Quero adotar a " + c.nome;
            adotar.href = linkWhatsApp("Olá! Vi a calopsita " + c.nome + " (" + c.variedade + ") no site do Cantinho do Topete e tenho interesse em adotar.");
        } else {
            adotar.hidden = true;
        }
        bootstrap.Modal.getOrCreateInstance(document.getElementById("modalCalopsita")).show();
    }

    /* ---------- loja ---------- */
    var filtroAtual = "Todos";

    function renderFiltros() {
        var alvo = document.getElementById("filtros");
        alvo.innerHTML = CATEGORIAS.map(function (cat) {
            return '<button type="button" class="btn btn-chip" data-cat="' + esc(cat) + '" aria-pressed="' + (cat === filtroAtual) + '">' + esc(cat) + "</button>";
        }).join("");
    }

    function renderProdutos() {
        var lista = PRODUTOS.filter(function (p) {
            return filtroAtual === "Todos" || p.categoria === filtroAtual;
        });
        var alvo = document.getElementById("lista-produtos");
        alvo.innerHTML = lista.map(function (p) {
            var midia = p.imagem
                ? '<img src="' + p.imagem + '" alt="' + esc(p.nome) + '" loading="lazy">'
                : iconeCategoria(p.categoria);
            
            // O botão deixou de ser um link <a> para o WhatsApp e passou a ser um <button> com o atributo data-comprar-nome
            return '' +
                '<div class="col"><article class="product-card h-100">' +
                '<div class="product-thumb ' + classeCategoria(p.categoria) + '">' + midia + '</div>' +
                '<div class="product-body">' +
                '<p class="product-cat">' + esc(p.categoria) + '</p>' +
                '<h3>' + esc(p.nome) + '</h3>' +
                '<p class="product-desc">' + esc(p.descricao) + '</p>' +
                '<div class="product-foot">' +
                '<span class="price">' + preco(p.preco) + '</span>' +
                '<button type="button" class="btn btn-topete btn-sm" data-comprar-nome="' + esc(p.nome) + '">Comprar</button>' +
                '</div></div></article></div>';
        }).join("");
        document.getElementById("contagem").textContent =
            lista.length + (lista.length === 1 ? " produto" : " produtos") + (filtroAtual === "Todos" ? "" : " em " + filtroAtual);
    }

    function definirFiltro(cat) {
        if (CATEGORIAS.indexOf(cat) === -1) { cat = "Todos"; }
        filtroAtual = cat;
        document.querySelectorAll("#filtros [data-cat]").forEach(function (b) {
            b.setAttribute("aria-pressed", String(b.dataset.cat === cat));
        });
        renderProdutos();
    }

    /* ---------- eventos ---------- */
    document.addEventListener("click", function (e) {
        var ver = e.target.closest("[data-ver]");
        if (ver) { abrirModal(ver.dataset.ver); return; }

        var chip = e.target.closest("#filtros [data-cat]");
        if (chip) { definirFiltro(chip.dataset.cat); return; }

        var atalho = e.target.closest("[data-filtro]");
        if (atalho) { definirFiltro(atalho.dataset.filtro); return; }

        // Nova ação: Se o utilizador clicar no botão de comprar da loja
        var btnComprar = e.target.closest("[data-comprar-nome]");
        if (btnComprar) {
            var nomeProduto = btnComprar.dataset.comprarNome;
            // Procura o produto clicado na lista original
            var produtoClicado = PRODUTOS.filter(function(p) { return p.nome === nomeProduto; })[0];
            
            if (produtoClicado) {
                // Monta um carrinho com 1 unidade do produto escolhido
                var carrinhoAtual = [{
                    nome: produtoClicado.nome,
                    preco: produtoClicado.preco.toFixed(2), // Garante formato numérico correto para o checkout
                    quantidade: 1
                }];
                // Chama a função que salva no navegador e redireciona para o formulário
                finalizarCompra(carrinhoAtual, produtoClicado.preco.toFixed(2));
            }
        }
    });

    /* ---------- início ---------- */
    renderCalopsitas();
    renderFiltros();
    renderProdutos();

    var contato = document.getElementById("btn-contato");
    if (contato) { contato.href = linkWhatsApp("Olá! Vim pelo site do Cantinho do Topete."); }

    var ano = document.getElementById("ano");
    if (ano) { ano.textContent = new Date().getFullYear(); }

    /* respeita quem pediu menos movimento: carrossel não avança sozinho */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        var hero = document.getElementById("hero");
        if (hero) { hero.removeAttribute("data-bs-ride"); }
    }
})();